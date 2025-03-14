<script setup>
import { ref } from "vue";
import TasksVue from "./components/TasksVue.vue";
import { useTaskeStore } from "./stors/TaskStore";

const taskStore = useTaskeStore();
const addTask = ref(false);
</script>

<template>
  <header class="flex items-center flex-col p-4">
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
</template>

<style scoped></style>
