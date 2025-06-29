<script setup>
/**
 * TODO: Make the page actually update user data and informations and theme
 * TODO: Make the page responsive to bigger screens
 * TODO: add danger zone for delete user
 * TODO: add update password
 */
import { useAuthStore } from "../../stors/AuthStore";
import { useThemeStore } from "../../stors/ThemeStore";
import InputCom from "../../components/InputCom.vue";
import { computed, ref } from "vue";
const authStore = useAuthStore();
authStore.checkAuth();
const user = computed(() => authStore.user);
const themeStore = useThemeStore();
const profileImage = useAuthStore().userProfileImage;
const showlist = ref(false);
const emailReadonly = ref(true);
const displayNameReadonly = ref(true);

const emailNewVal = ref("");
const displayNameNewVal = ref("");
const gender = ref("Man");
const yourGender = (e) => {
  const target = e.target;
  gender.value = target.innerText;
};
//v-if="displayNameNewVal && emailNewVal"
</script>
<template>
  <section class="py-10 grow container px-4 mx-auto">
    <ul class="mx-auto">
      <li class="flex flex-col items-center mt-10">
        <ul>
          <li class="flex items-center border-b pb-3 border-on-surface md:w-xl">
            <div>
              <img
                class="rounded-full"
                width="64px"
                :src="
                  profileImage ||
                  '/public/user_default_profile_image/defualt.jpg'
                "
                alt=""
              />
            </div>
            <p class="dark:text-on-primary ml-5">
              {{ user ? user.displayName : "none" }}
            </p>
            <input
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
          <li class="mt-10 dark:text-white">
            <p class="text-2xl font-semibold">
              <font-awesome-icon class="text-3xl" icon="user" />
              <span class="ml-5">Account settings</span>
            </p>
            <ul v-if="user">
              <li class="flex justify-between mb-2 mt-2 items-center">
                <input
                  :readonly="!displayNameReadonly"
                  v-model="displayNameNewVal"
                  class="p-5 w-4/5 h-14"
                  :class="[
                    displayNameReadonly ? 'bg-on-surface' : 'bg-surface',
                  ]"
                  type="text"
                  :value="user.displayName"
                />

                <button
                  @click="displayNameReadonly = !displayNameReadonly"
                  class="cursor-pointer"
                >
                  <font-awesome-icon icon="pen-to-square" />
                </button>
              </li>
              <li class="flex justify-between items-center">
                <input
                  :readonly="!emailReadonly"
                  class="p-5 w-4/5 h-14"
                  v-model="emailNewVal"
                  :class="[emailReadonly ? 'bg-on-surface' : 'bg-surface']"
                  type="text w-[80%]"
                  :value="user.email"
                />
                <button
                  @click="emailReadonly = !emailReadonly"
                  class="cursor-pointer"
                >
                  <font-awesome-icon icon="pen-to-square" />
                </button>
              </li>
              <li class="flex mt-5 justify-between items-center">
                <p class="p-5">Add a Phone Number</p>
                <input
                  class="bg-secondary py-2 px-3 md:w-[60%]"
                  type="number"
                />
              </li>
              <li>
                <button class="bg-primary mt-5 px-4 py-3 rounded-2xl">
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
