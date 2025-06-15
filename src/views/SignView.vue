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

<template></template>
