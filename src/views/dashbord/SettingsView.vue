<script setup>
/**
 * TODO: Make the page actually update user data and informations and theme
 * !FIX: Users must verifie their  Emails!!! to be able to chang to a new account
 */
import { useAuthStore } from "../../stors/AuthStore";
import { useThemeStore } from "../../stors/ThemeStore";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
} from "firebase/auth";
import InputCom from "../../components/InputCom.vue";
import { computed, ref, watch } from "vue";
const authStore = useAuthStore();
authStore.checkAuth();
const user = computed(() => authStore.user);
const profileImage = computed(() => authStore.user.photoURL);
const themeStore = useThemeStore();
const showlist = ref(false);
const emailReadonly = ref(true);
const displayNameReadonly = ref(true);
const emailNewVal = ref("");
const displayNameNewVal = ref("");
const currentPassword = ref("");
const newPassword = ref("");
const isVaildPassword = ref(null);
const gender = ref("Man");
const yourGender = (e) => {
  const target = e.target;
  gender.value = target.innerText;
};

const imageNames = [
  "defualt",
  "cat",
  "camionnette",
  "camionnette_Night",
  "face",
  "woman_face",
];
const showImagesList = ref(false);
const oldTarget = ref(null);
const newprofileImage = ref("");
const newImageSelected = (e) => {
  const target = e.target;
  const isClicked = target.dataset.clicked === "true";
  if (!isClicked && !oldTarget.value) {
    target.classList.add("border-5", `border-button-color`);
  } else if (!isClicked && oldTarget.value) {
    oldTarget.value.classList.remove("border-5", `border-button-color`);
    target.classList.add("border-5", `border-button-color`);
  }
  oldTarget.value = target;
  newprofileImage.value = target.dataset.imagename;
};
const submitNewImage = async () => {
  await authStore.updateUserImage(user.value, newprofileImage.value);
  showImagesList.value = false;
};
const isValidName = ref(null);
const isVaildEmail = ref(null);
const isValid = (type) => {
  const nameRegx = /^[A-Za-z]+$/;
  const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=\S{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;

  if (type === "email") {
    if (
      emailRegx.test(emailNewVal.value) &&
      emailNewVal.value !== user.value.email
    ) {
      isVaildEmail.value = true;
    } else {
      isVaildEmail.value = false;
    }
  }
  if (type === "text") {
    if (
      nameRegx.test(displayNameNewVal.value) &&
      displayNameNewVal.value !== user.value.displayName
    ) {
      isValidName.value = true;
    } else {
      isValidName.value = false;
    }
  }
  if (type === "password") {
    console.log(
      passwordRegex.test(newPassword.value),
      currentPassword.value === newPassword.value
    );
    console.log(currentPassword.value);
    console.log(newPassword.value);
    if (!currentPassword.value || !newPassword.value) {
      return (isVaildPassword.value = false);
    }

    if (
      !passwordRegex.test(newPassword.value) ||
      currentPassword.value === newPassword.value
    ) {
      return (isVaildPassword.value = false);
    }

    isVaildPassword.value = true;
  }
};

const submitNewEmailAndNameAndPassword = async () => {
  if (isVaildEmail.value) {
    await authStore.updateDisplayName(user.value, displayNameNewVal.value);
    const credential = EmailAuthProvider.credential(
      user.value.email,
      currentPassword.value
    );
    await reauthenticateWithCredential(user.value, credential);
    await updateEmail(user.value, emailNewVal.value);
  }
  if (isValidName.value) {
    await authStore.updateDisplayName(user.value, displayNameNewVal.value);
  }
};
</script>
<template>
  <section class="py-10 grow container px-4 mx-auto">
    <ul class="mx-auto">
      <li class="flex flex-col items-center mt-10">
        <ul>
          <li
            class="flex relative items-center border-b pb-3 border-on-surface md:w-xl"
          >
            <div>
              <img
                class="rounded-full w-16 h-16"
                :src="
                  profileImage
                    ? `/public/user_default_profile_image/${profileImage}.jpg `
                    : '/public/user_default_profile_image/defualt.jpg'
                "
                alt=""
              />
            </div>
            <ul
              v-if="showImagesList"
              class="flex top-full w-full absolute dark:bg-on-surface flex-wrap justify-center p-4 items-center mt-5"
            >
              <li v-for="imageName in imageNames">
                <img
                  @click="newImageSelected"
                  v-if="imageName !== profileImage"
                  :data-imagename="imageName"
                  data-clicked="false"
                  class="w-16 h-16 rounded-full cursor-pointer m-3"
                  :src="
                    imageName
                      ? `/public/user_default_profile_image/${imageName}.jpg `
                      : '/public/user_default_profile_image/defualt.jpg'
                  "
                  alt=""
                />
              </li>
              <li class="w-full flex justify-center mt-10">
                <button
                  @click="submitNewImage"
                  class="cursor-pointer hover:bg-[#4a5df99c] bg-button-color text-on-primary w-28 p-2 rounded-2xl"
                >
                  Done
                </button>
              </li>
            </ul>
            <p class="dark:text-on-primary ml-5">
              {{ user ? user.displayName : "none" }}
            </p>
            <input
              @click="showImagesList = true"
              type="button"
              class="cursor-pointer ml-auto bg-button-color text-on-primary px-2 py-3 rounded-2xl"
              value="Change image"
            />
          </li>
          <li class="mt-20 text-tinys">
            <button
              class="dark:text-on-primary w-full cursor-pointer items-center flex justify-between"
            >
              <p class="text-2xl font-semibold">Gender</p>
            </button>
            <ul class="w-full text-on-surface mt-4">
              <li
                @click="yourGender"
                @click.self="showlist = !showlist"
                class="px-2 py-4 hover:bg-[#DDD] cursor-pointer bg-on-primary"
              >
                {{ gender }}
              </li>
              <li
                v-if="showlist && gender !== 'Woman'"
                @click="yourGender"
                class="px-2 py-4 hover:bg-[#DDD] cursor-pointer bg-on-primary border-y"
              >
                Woman
              </li>
              <li
                v-if="showlist && gender !== 'Man'"
                @click="yourGender"
                class="px-2 py-4 hover:bg-[#DDD] cursor-pointer bg-on-primary border-y"
              >
                Man
              </li>
              <li
                v-if="showlist && gender !== 'croissant'"
                @click="yourGender"
                class="px-2 py-4 hover:bg-[#DDD] cursor-pointer bg-on-primary"
              >
                croissant
              </li>
            </ul>
          </li>
          <li class="mt-10 relative dark:text-white">
            <h3 class="text-2xl font-semibold">
              <font-awesome-icon class="text-3xl" icon="user" />
              <span class="ml-5">Account settings</span>
            </h3>
            <ul>
              <li class="flex flex-wrap justify-between mb-8 mt-2 items-center">
                <h5 class="mr-5">Display Name</h5>
                <div class="relative flex justify-between w-full">
                  <input
                    @input="isValid('text')"
                    :readonly="displayNameReadonly"
                    v-model="displayNameNewVal"
                    :placeholder="user.displayName"
                    class="p-5 w-4/5 h-14 dark:focus:bg-on-primary font-semibold dark:focus:text-on-surface placeholder:text-[rgba(255,255,255,0.7)]"
                    :class="[
                      displayNameReadonly ? 'bg-surface' : 'bg-on-surface',
                      isValidName === null
                        ? 'text-on-primary'
                        : isValidName
                        ? '!text-success border border-success'
                        : ' !text-error  border border-error',
                    ]"
                    type="text"
                    required
                  />
                  <button
                    @click="displayNameReadonly = !displayNameReadonly"
                    class="cursor-pointer"
                  >
                    <font-awesome-icon icon="pen-to-square" />
                  </button>

                  <p
                    v-if="!displayNameReadonly"
                    class="absolute w-full z-10 -bottom-6 text-[12px] text-[rgba(255, 255, 255, 0.5)]"
                  >
                    <font-awesome-icon icon="exclamation" />
                    Use Only Letters
                  </p>
                </div>
              </li>
              <li class="flex flex-wrap justify-between items-center">
                <h5 class="mr-5">Email</h5>
                <div class="relative flex justify-between w-full">
                  <input
                    @input="isValid('email')"
                    :readonly="emailReadonly"
                    class="p-5 w-4/5 h-14 dark:focus:bg-on-primary font-semibold dark:focus:text-on-surface placeholder:text-[rgba(255,255,255,0.7)]"
                    v-model="emailNewVal"
                    :placeholder="user.email"
                    :class="[
                      emailReadonly ? 'bg-surface' : 'bg-on-surface',
                      isVaildEmail === null
                        ? ''
                        : isVaildEmail
                        ? '!text-success border border-success '
                        : '!text-error border border-error',
                    ]"
                    type="email"
                    required
                  />
                  <button
                    @click="emailReadonly = !emailReadonly"
                    class="cursor-pointer"
                  >
                    <font-awesome-icon icon="pen-to-square" />
                  </button>
                  <p
                    v-if="!emailReadonly"
                    class="absolute w-full -bottom-6 text-[12px] text-[rgba(255, 255, 255, 0.5)]"
                  >
                    <font-awesome-icon icon="exclamation" />
                    Enter a Valid Email Like example@gmail.com
                  </p>
                </div>
              </li>
              <li
                v-if="!emailReadonly"
                class="flex flex-wrap mt-10 justify-between items-center"
              >
                <h5 class="mr-5 mb-2">Password</h5>
                <div class="relative flex justify-between w-full">
                  <input
                    class="p-5 w-4/5 h-14 dark:focus:bg-on-primary font-semibold dark:focus:text-on-surface bg-on-surface placeholder:text-[rgba(255,255,255,0.7)]"
                    type="password"
                    v-model="currentPassword"
                    placeholder="Curren Password"
                    required
                    :class="[
                      isVaildPassword === null
                        ? ''
                        : isVaildPassword
                        ? 'border border-success text-success'
                        : ' border border-error text-error',
                    ]"
                  />
                </div>
              </li>
              <li
                v-if="!emailReadonly"
                class="flex flex-wrap justify-between mt-5 items-center"
              >
                <h5 class="mr-5 mb-2">New Password</h5>
                <div class="relative flex justify-between w-full">
                  <input
                    @input="isValid('password')"
                    class="p-5 dark:focus:bg-on-primary font-semibold dark:focus:text-on-surface w-4/5 h-14 bg-on-surface placeholder:text-[rgba(255,255,255,0.7)]"
                    placeholder="New Password"
                    type="password"
                    v-model="newPassword"
                    required
                    :class="[
                      isVaildPassword === null
                        ? ''
                        : isVaildPassword
                        ? 'border border-success text-success'
                        : ' border border-error text-error',
                    ]"
                  />
                  <p
                    v-if="!emailReadonly"
                    class="absolute w-full left-1.5 -bottom-6 text-[12px] text-[rgba(255, 255, 255, 0.5)]"
                  >
                    <font-awesome-icon icon="exclamation" /> Use 8–16
                    characters: uppercase, lowercase, number, and symbol!
                  </p>
                </div>
              </li>
              <li class="flex mt-5 justify-between items-center">
                <p class="p-5">Add a Phone Number</p>
                <input
                  class="bg-secondary py-2 px-3 md:w-[60%]"
                  type="number"
                />
              </li>
              <li>
                <button
                  @click="submitNewEmailAndNameAndPassword"
                  class="bg-primary mt-5 px-4 py-3 rounded-2xl"
                >
                  Submit changes
                </button>
              </li>
              <li class="relative border h-32 p-4 mt-20 border-error">
                <h3
                  class="text-3xl top-[-20%] dark:bg-surface px-4 absolute font-semibold text-error"
                >
                  Danger zone
                </h3>

                <p class="flex justify-between items-center">
                  <span class="text-tiny">Delete my account</span>
                  <button class="bg-error px-3 w-28 py-1 rounded-2xl">
                    Delete
                  </button>
                </p>
                <p class="flex mt-5 justify-between items-center">
                  <span class="text-tiny">Delete all tasks</span>
                  <button class="bg-error px-3 w-28 py-1 rounded-2xl">
                    Delete
                  </button>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
