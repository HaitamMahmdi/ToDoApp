<script setup>
/**
 * TODO => Add router guard
 * TODO => Add light theme UI
 * ? Add animation
 * TODO => Add nested routers (Upcoming,Categories,Settings....)
 */
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../../stores/AuthStore";
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();
const user = computed(() => authStore.user);
authStore.checkAuth();
const isAsideOpen = ref(true);
const asideToggler = () => {
  isAsideOpen.value = !isAsideOpen.value;
};
const logOutUser = async () => {
  await authStore.logOut();
};
if (!user.value) {
  router.push("/");
}
watch(user.value, () => {
  if (!user.value) {
    router.push("/");
  }
});
</script>
<template>
  <section class="flex flex-wrap min-h-[100vh] pt-20 md:pt-0">
    <button
      @click="asideToggler"
      class="z-60 fixed md:hidden top-0 left-0 cursor-pointer p-5 bg-on-primary w-9 h-9 flex items-center justify-center"
    >
      <font-awesome-icon v-if="isAsideOpen" icon="angle-left" />
      <font-awesome-icon v-else icon="angle-right" />
    </button>
    <section
      v-show="isAsideOpen"
      id="aside"
      class="md:w-3xs w-full flex flex-col md:!flex fixed md:relative left-0 z-50 top-0 dark:bg-section text-on-primary"
    >
      <div class="flex flex-col mb-5 pt-5 items-center">
        <div id="userImageAndName" class="">
          <img
            class="w-20 h-20 rounded-full"
            :src="
              user
                ? `/public/user_default_profile_image/${user.photoURL}.jpg `
                : '/public/user_default_profile_image/defualt.jpg'
            "
            alt=""
          />
        </div>
        <h2 class="mt-3 text-[1.2rem] font-semibold">
          {{ user ? user.displayName : `hello` }}
        </h2>
      </div>

      <div class="grow">
        <ul id="links" class="text-tiny gap-4">
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 hover:bg-on-surface"
              to="/AddTask"
              ><font-awesome-icon icon="plus" />
              <p class="ml-2">Add task</p></RouterLink
            >
          </li>
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 hover:bg-on-surface"
              to="/Tasks"
              ><font-awesome-icon icon="list" />
              <p class="ml-2">Tasks</p></RouterLink
            >
          </li>

          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 hover:bg-on-surface"
              to=""
            >
              <font-awesome-icon icon="folder-open" />
              <p class="ml-2">Categories</p>
            </RouterLink>
          </li>
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 hover:bg-on-surface"
              to="/settings"
            >
              <font-awesome-icon icon="gear" />
              <p class="ml-2">Settings</p>
            </RouterLink>
          </li>
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 hover:bg-on-surface"
              to=""
            >
              <font-awesome-icon icon="circle-info" />
              <p class="ml-2">help</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="mb-20">
        <button
          @click="authStore.logOut"
          class="flex items-center w-full cursor-pointer px-5 py-4 hover:bg-on-surface"
        >
          <font-awesome-icon icon="arrow-right-from-bracket" />
          <p class="ml-2">Logout</p>
        </button>
      </div>
    </section>

    <RouterView></RouterView>
  </section>
</template>
