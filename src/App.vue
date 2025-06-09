<script setup>
import { ref } from "vue";
import TasksVue from "./components/TasksVue.vue";
import { useTaskeStore } from "./stors/TaskStore";
import { useAuthStore } from "./stors/AuthStore";

const taskStore = useTaskeStore();
const authStore = useAuthStore();
const addTask = ref(false);
const user = authStore.user;
console.log(user);
</script>

<template>
  <header v-if="user" class="flex items-center flex-col p-4">
    <h1 class="text-[clamp(2rem,10vw,4rem)] font-bold mb-10 text-textColor">
      ToDo App
    </h1>
    <button
      @click="addTask = !addTask"
      title="Add New Task"
      aria-label="add a new task"
      class="font-bold flex justify-center items-center cursor-pointer h-[3rem] w-[3rem] border rounded-full border-textColor text-textColor text-2xl"
    >
      <font-awesome-icon icon="plus" />
    </button>
    <form
      @submit.prevent
      v-show="addTask"
      class="text-textColor mt-10 flex flex-col min-w-[25rem]"
      action=""
    >
      <div class="flex items-center justify-between">
        <label class="text-2xl mr-2" for="Title">Title :</label>
        <input
          required
          class="bg-white rounded p-2 text-black"
          type="text"
          name="Title"
          id="Title"
        />
      </div>
      <div class="flex items-center justify-between my-4">
        <label class="text-2xl mr-2" for="description">description :</label>
        <input
          required
          class="bg-white rounded p-2 text-black"
          type="text"
          name="description"
          id="description"
        />
      </div>

      <div class="flex items-center justify-between">
        <label class="text-2xl" for="type">Choose a type :</label>
        <select id="type" name="type">
          <option value="Sport">Sport</option>
          <option value="Mental">Mental</option>
          <option value="Creative">Creative</option>
          <option value="Social">Social</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <input
        class="bg-accent w-[50%] p-4 rounded-2xl mx-auto mt-10"
        type="submit"
        value="Add Task"
      />
    </form>
  </header>
  <form
    class="text-black rounded-lg p-5 bg-secondary-background font-bold flex items-center flex-col w-[50vw] mx-auto my-[30vh]"
    v-else
    @submit.prevent
  >
    <h1 class="text-accent text-6xl mb-5">Sing-in</h1>
    <input
      class="bg-light py-3 px-4 rounded-lg text-background mb-10 w-[18.75rem]"
      type="text"
      placeholder="Your Name"
    />
    <input
      class="bg-light py-3 px-4 rounded-lg text-background mb-10 w-[18.75rem]"
      type="email"
      placeholder="Email"
    />
    <input
      class="bg-light py-3 px-4 rounded-lg text-background mb-10 w-[18.75rem]"
      type="password"
      placeholder="Password"
    />
    <input
      type="submit"
      class="bg-[#6495ed82] w-[10rem] p-4 text-white"
      value="Submit"
    />
    <p class="mt-5 self-start">
      don't have am account ?
      <a class="underline decoration-2 text-accent" href="">SingUp</a>
    </p>
  </form>
</template>

<style scoped></style>
