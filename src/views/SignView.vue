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
  <div class="container mx-auto mt-20">
    <div class="max-w-5xl mx-auto flex">
      <form
        action=""
        class="bg-on-primary h-[40rem] flex justify-between p-4 min-w-xl flex-col"
      >
        <h1 class="text-textColor text-center mb-10 text-7xl font-bold">
          {{ isLoginMode ? "signIn" : "signUp" }}
        </h1>
        <div class="relative mb-10 w-fit mx-auto">
          <input
            autocomplete="email"
            class="border border-on-surface w-md pl-10 h-12"
            id="email"
            type="Email"
          />
          <font-awesome-icon
            class="absolute text-2xl left-2 top-3/6 transform -translate-y-2/4"
            icon="envelope"
          />
        </div>
        <div class="relative w-fit mx-auto">
          <input
            autocomplete="new-password"
            class="border border-on-surface w-md pl-10 h-12"
            id="password"
            type="password"
          />
          <font-awesome-icon
            class="absolute text-2xl cursor-pointer left-2 top-3/6 transform -translate-y-2/4"
            icon="eye"
          />
        </div>
        <div class="w-md h-2/5 pt-9 mx-auto flex flex-col justify-between">
          <button
            class="ml-auto flex items-center w-28 justify-center rounded-2xl bg-on-surface p-2 cursor-pointer"
          >
            <p class="text-2xl text-on-primary font-semibold">next</p>
            <font-awesome-icon
              class="text-primary ml-1 text-2xl"
              icon="caret-right"
            />
          </button>
          <div class="flex items-center justify-center">
            <div
              class="flex justify-center items-center w-10 h-10 bg-primary text-on-primary rounded-full font-bold"
            >
              1
            </div>
            <div class="w-5 bg-on-surface h-0.5"></div>
            <div
              class="flex justify-center items-center w-10 h-10 bg-on-surface text-on-primary rounded-full font-bold"
            >
              2
            </div>
            <div class="w-5 bg-on-surface h-0.5"></div>
            <div
              class="flex justify-center items-center w-10 h-10 bg-on-surface text-on-primary rounded-full font-bold"
            >
              3
            </div>
          </div>
        </div>
      </form>
      <div class="w-md h-[40rem] bg-on-surface p-4 pt-10">
        <h2 class="text-on-primary font-bold text-3xl text-center">
          Simple . Powerful . Friendly
        </h2>
      </div>
    </div>
  </div>
</template>
