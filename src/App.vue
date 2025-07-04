<script setup>
import { computed, watch } from "vue";
import { useAuthStore } from "./stors/AuthStore";
import { useTaskeStore } from "./stors/TaskStore";
import { useThemeStore } from "./stors/ThemeStore";
import { RouterLink, useRoute } from "vue-router";
import FooterCom from "./components/FooterCom.vue";

const authStore = useAuthStore();
const taskStore = useTaskeStore();
const themeStore = useThemeStore();
const route = useRoute();

const user = computed(() => authStore.user);

watch(
  () => authStore.user,
  (user) => {
    if (user) {
      taskStore.startRealtimeSync();
    }
  },
  { immediate: true }
);
</script>

<template>
  <header
    v-if="!user"
    :class="[themeStore.theme === 'light' ? 'bg-secondary' : 'bg-on-surface']"
    class="w-full p-4"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo">
        <RouterLink to="/"
          ><img src="./assets/Component 1.png" width="35px" alt=""
        /></RouterLink>
      </div>
      <div class="flex items-center">
        <ul v-if="route.name !== 'SignIn'" class="flex font-semibold">
          <li class="mr-5 text-on-primary">
            <RouterLink to="/SignView">Log in</RouterLink>
          </li>
          <li class="text-primary">
            <RouterLink to="/SignView">SignUp</RouterLink>
          </li>
        </ul>
        <div>
          <button
            @click="themeStore.toggleTheme"
            class="text-on-primary ml-5 text-2xl"
          >
            <font-awesome-icon
              v-if="themeStore.theme === 'light'"
              icon="moon"
            />
            <font-awesome-icon v-else icon="sun" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <main class="overflow-x-hidden relative">
    <router-view />
  </main>
  <FooterCom />
</template>
