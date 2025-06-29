<script setup>
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
const gender = ref("Man");
const yourGender = (e) => {
  const target = e.target;
  gender.value = target.innerText;
};
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
              <li class="flex justify-between items-center">
                <p class="p-5">{{ user.displayName }}</p>
                <button class="cursor-pointer">
                  <font-awesome-icon icon="pen-to-square" />
                </button>
              </li>
              <li class="flex justify-between items-center">
                <p class="p-5">{{ user.email }}</p>
                <button class="cursor-pointer">
                  <font-awesome-icon icon="pen-to-square" />
                </button>
              </li>
              <li class="flex justify-between items-center">
                <p class="p-5">Add a Phone Number</p>
                <input
                  class="bg-secondary py-2 px-3 md:w-[60%]"
                  type="number"
                />
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
