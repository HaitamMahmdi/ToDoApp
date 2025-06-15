<script setup>
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../stors/AuthStore";
const authStore = useAuthStore();
const addTask = ref(false);
const user = computed(() => authStore.user);
const email = ref("");
const password = ref("");
authStore.checkAuth();
watch(user, (val) => {
  console.log("User updated:", val);
});
const isLoginMode = ref(false);
const handleSubmit = () => {
  if (isLoginMode.value) {
    authStore.signIn(email.value, password.value);
  } else {
    authStore.signUp(email.value, password.value);
  }
};
</script>

<template>
  <form
    class="text-black rounded-lg p-5 bg-secondary-background font-bold flex items-center flex-col max-w-[30vw] mx-auto my-[20vh]"
    @submit.prevent
  >
    <h1 class="text-accent text-6xl mb-5">Sing-in</h1>
    <input
      class="bg-light py-3 px-4 rounded-lg text-background mb-10 w-[18.75rem]"
      type="text"
      placeholder="Your Name"
    />
    <input
      v-model="email"
      class="bg-light py-3 px-4 rounded-lg text-background mb-10 w-[18.75rem]"
      type="email"
      placeholder="Email"
    />
    <input
      v-model="password"
      class="bg-light py-3 px-4 rounded-lg text-background mb-10 w-[18.75rem]"
      type="password"
      placeholder="Password"
    />
    <input
      @click="handleSubmit"
      type="submit"
      class="bg-[#6495ed82] w-[10rem] p-4 text-white cursor-pointer"
      value="Submit"
    />
    <p class="mt-5 self-start">
      don't have am account ?
      <button
        @click="isLoginMode = !isLoginMode"
        class="underline decoration-2 text-accent cursor-pointer"
      >
        SignUp
      </button>
    </p>
  </form>
</template>
