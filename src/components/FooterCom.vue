<script setup>
import { computed } from "vue";
import { useAuthStore } from "../stores/AuthStore";
const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>
<template>
  <footer class="dark:bg-on-surface bg-light-secondary w-full pt-10">
    <div class="container p-4 mx-auto">
      <ul class="flex items-center flex-wrap">
        <li>
          <img src="../assets/Component 1.png" width="64px" alt="" />
          <p class="text-on-primary md:w-md font-semibold my-5 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            dolorem quod nesciunt sapiente perferendis a nulla minima
            repudiandae, placeat,
          </p>
          <ul class="flex text-2xl">
            <li class="mx-2 cursor-pointer">
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                class="text-[#E1306C]"
              />
            </li>
            <li class="mx-2 cursor-pointer">
              <font-awesome-icon
                icon="fa-brands fa-linkedin"
                class="text-[#0A66C2]"
              />
            </li>
            <li class="mx-2 cursor-pointer">
              <font-awesome-icon
                icon="fa-brands fa-x-twitter"
                class="text-black"
              />
            </li>
            <li class="mx-2 cursor-pointer">
              <font-awesome-icon
                icon="fa-brands fa-telegram"
                class="text-[#229ED9]"
              />
            </li>
          </ul>
        </li>
        <li class="grow">
          <ul class="text-on-primary w-full">
            <li>
              <RouterLink
                v-if="!user"
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/"
                >Home</RouterLink
              >
              <RouterLink
                v-else
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/index"
                >go to dashbord</RouterLink
              >
            </li>
            <li v-if="!user">
              <RouterLink
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/SignView"
                >sign Up</RouterLink
              >
            </li>

            <li>
              <RouterLink
                v-if="!user"
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/#contactUs"
                >contactUs</RouterLink
              >
              <RouterLink
                v-else
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/index/contactUs"
                >contactUs</RouterLink
              >
            </li>
            <li>
              <RouterLink
                v-if="user"
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/aboutUS"
                >about US</RouterLink
              >
              <RouterLink
                v-else
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/#aboutUs"
                >about US</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/faq"
                >FAQ</RouterLink
              >
            </li>
            <li>
              <RouterLink
                v-if="!user"
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/#selectPlan"
                >select Plan</RouterLink
              >
              <RouterLink
                v-else
                class="py-4 block duration-100 font-semibold hover:bg-light-primary px-4"
                to="/index"
                >select Plan</RouterLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="dark:bg-primary bg-on-surface w-full py-2">
      <div class="container mx-auto text-center text-on-primary font-bold">
        <p>
          Made with <font-awesome-icon class="text-red-500" icon="heart" /> by
          <a href="https://github.com/HaitamMahmdi" target="_blank"
            >HaitamMahmdi</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
