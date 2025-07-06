<script setup>
/**
 * TODO: Make the page actually update user data and informations and theme
 * !FIX: Users must verifie their  Emails!!! to be able to chang to a new account
 */
import { useAuthStore } from "../../stores/AuthStore";
import { computed, ref, watch } from "vue";
import InputComponent from "../../components/InputComponent.vue";
const authStore = useAuthStore();
authStore.checkAuth();
const user = computed(() => authStore.user);
const profileImage = computed(() => authStore.user?.photoURL);
const showlist = ref(false);
const gender = ref("Man");
const isvalidPassword = ref(null);
const oldPassword = ref("");
const newPassword = ref("");
const passwordIsupdated = ref(null);
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
let resulte;
const submitNewPassword = async () => {
  if (isvalidPassword.value) {
    resulte = await authStore.updateUserPassword(
      oldPassword.value,
      newPassword.value
    );

    if (resulte.startsWith("✅")) {
      passwordIsupdated.value = true;
    } else {
      passwordIsupdated.value = false;
    }
  }
};
</script>
<template>
  <section class="py-10 grow md:w-[calc(100%-256px)] container px-4 mx-auto">
    <ul class="mx-auto">
      <li class="flex flex-col items-center mt-10">
        <ul class="lg:w-4/6">
          <li
            class="flex relative items-center border-b pb-3 border-on-surface"
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
              class="flex top-full w-full absolute bg-light-surface dark:bg-on-surface flex-wrap justify-center p-4 items-center mt-5"
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
            <p class="dark:text-on-primary font-semibold text-3xl ml-5">
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

            <ul class="mt-5">
              <li
                class="flex p-5 flex-wrap justify-between mb-8 mt-2 items-center"
              >
                <!--@isvalidVal-->
                <InputComponent
                  label="enter old password"
                  inputType="password"
                  v-model="oldPassword"
                  id="newInput"
                  name="input"
                  :isRequired="true"
                  lableStyle="text-tiny"
                  cusclass="px-5 w-full py-3"
                  class="w-full"
                  :helperText="true"
                  :addValidateToText="true"
                />
                <InputComponent
                  label="enter new password"
                  inputType="password"
                  id="newInput"
                  v-model="newPassword"
                  @isvalidVal="(n) => (isvalidPassword = n)"
                  name="input"
                  :isRequired="true"
                  lableStyle="text-tiny"
                  cusclass="px-5 w-full py-3"
                  class="w-full mt-8"
                  :helperText="true"
                  :addValidateToText="true"
                />
              </li>
              <p
                v-if="resulte"
                :class="[passwordIsupdated ? 'text-success' : 'text-error']"
                class="font-bold text-3xl text-center"
              >
                ------{{ resulte }}------
              </p>
              <li class="flex mt-5 justify-between items-center">
                <p class="p-5">Add a Phone Number</p>
                <input
                  class="dark:bg-secondary bg-on-primary py-2 px-3 md:w-[60%]"
                  type="number"
                />
              </li>
              <li>
                <button
                  @click="submitNewPassword"
                  class="bg-primary font-semibold cursor-pointer mt-5 px-4 py-3 rounded-2xl"
                >
                  Submit changes
                </button>
              </li>

              <li class="relative border p-4 mt-20 border-error">
                <h3
                  class="text-3xl top-[-20%] dark:bg-surface bg-light-surface px-4 absolute font-semibold text-error"
                >
                  Danger zone
                </h3>

                <p class="flex mt-5 justify-between items-center">
                  <span class="text-tiny">Delete my account</span>
                  <button
                    @click="authStore.deleteAccount"
                    class="bg-error cursor-pointer px-3 w-28 py-1 rounded-2xl"
                  >
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
