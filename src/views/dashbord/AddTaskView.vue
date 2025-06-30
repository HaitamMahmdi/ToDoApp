<script setup>
/**
 * TODO:add validation and ruls to the input fields.
 *
 */
import { useTaskeStore } from "../../stors/TaskStore";
import InputCom from "../../components/InputCom.vue";
import { ref } from "vue";
const taskStore = useTaskeStore();
taskStore.getTasks();

const teskName = ref("");
const taskDescription = ref("");
const date = ref("");
const priority = ref("");
const steps = ref([]);
const step = ref("");
const handleDateChange = (event) => {
  const value = event.target.value;
  date.value = value;
};
const addSteps = () => {
  steps.value.push({ stepText: step.value, id: steps.value.length + 1 });
};
const removeStep = (index) => {
  steps.value.splice(index, 1);
};
</script>
<template>
  <section class="py-10 grow dark:text-on-primary container px-4 mx-auto">
    <h2 class="text-[clamp(2.5rem,5vw,4rem)] font-bold">Add New Task</h2>
    <form class="flex flex-wrap justify-between" @submit.prevent action="">
      <div class="max-w-4/5">
        <div class="flex flex-col">
          <label class="font-semibold mb-2 text-3xl" for="taskName"
            >Task Name {{ teskName }}</label
          >
          <input
            v-model="teskName"
            class="pl-2 dark:focus:bg-on-primary bg-on-surface text-tiny px-5 py-3 w-full dark:focus:text-on-surface"
            type="text"
            name=""
            id=""
          />
        </div>
        <div class="mt-5">
          <label class="font-semibold mb-50 text-3xl" for="date">Date</label>
          <input
            @input="handleDateChange"
            class="pl-2 dark:focus:bg-on-primary bg-on-surface text-tiny px-5 py-3 w-full dark:focus:text-on-surface"
            type="date"
            name=""
            id=""
          />
        </div>
        <div class="mt-5">
          <label class="text-3xl font-semibold" for="Description"
            >Description</label
          >
          <textarea
            v-model="taskDescription"
            class="bg-on-surface mt-4 font-semibold text-tiny dark:focus:bg-on-primary rounded-3xl h-96 dark:focus:text-on-surface p-10 w-full"
            name="Description"
            id="Description"
          ></textarea>
        </div>
      </div>
      <div class="grow px-10">
        <div
          class="w-full bg-on-surface p-10 flex flex-col justify-center items-center mx-auto"
        >
          <img class="" src="/src/assets/Add Image.png" alt="" />
          <p>chose file from your stock</p>
          <input class="hidden" type="file " name="" id="" />
        </div>
        <div class="mt-4">
          <h3 class="text-3xl mt-10 mb-2 font-semibold">Priority</h3>
          <ul class="text-tiny flex items-center">
            <li class="flex cursor-pointer items-center mr-4">
              <button
                @click="priority = 'Extreme'"
                class="flex cursor-pointer my-2 items-center mr-4"
              >
                <span
                  :class="[
                    priority === 'Extreme' ? 'bg-error' : 'bg-on-primary',
                  ]"
                  class="block mr-2 border-2 w-3.5 h-3.5 border-error p-1 rounded-full"
                ></span>
                <p>Extreme</p>
              </button>
            </li>
            <li>
              <button
                @click="priority = 'Moderate'"
                class="flex cursor-pointer my-2 items-center mr-4"
              >
                <span
                  :class="[
                    priority === 'Moderate' ? 'bg-success' : 'bg-on-primary',
                  ]"
                  class="block mr-2 border-2 w-3.5 h-3.5 border-success p-1 rounded-full"
                ></span>
                <p>Moderate</p>
              </button>
            </li>
            <li>
              <button
                class="flex cursor-pointer items-center"
                @click="priority = 'low'"
              >
                <span
                  :class="[
                    priority === 'low' ? 'bg-amber-300' : 'bg-on-primary',
                  ]"
                  class="block mr-2 border-2 w-3.5 h-3.5 border-amber-300 p-1 rounded-full"
                ></span>
                <p>low</p>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <form
            @submit.prevent="addSteps"
            class="flex justify-between flex-wrap items-center mt-5"
          >
            <h3 class="text-3xl font-semibold">Add steps</h3>
            <button
              class="p-3 text-2xl dark:bg-on-primary dark:text-on-surface"
            >
              <font-awesome-icon icon="plus" />
            </button>
            <input
              v-model="step"
              type="text"
              class="w-4/6 block px-3 py-10 text-tiny h-8 dark:focus:bg-on-primary bg-on-surface dark:focus:text-on-surface"
            />
          </form>

          <ul class="mt-5">
            <li
              class="dark:bg-on-surface mb-1 text-tiny items-center flex justify-between p-4"
              v-for="(step, index) in steps"
              :key="step.id"
            >
              <p v-if="step">
                <span class="text-primary">{{ step.id }}</span>
                {{ step.stepText }}
              </p>

              <button
                @click="removeStep(index)"
                class="cursor-pointer hover:text-error"
              >
                <font-awesome-icon icon="trash-can" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full mt-5">
        <input
          type="submit"
          class="bg-button-color text-on-primary text-tiny p-2 px-4 rounded-2xl"
          value="Add Task"
        />
        <input
          type="reset"
          class="bg-error ml-10 text-on-primary text-tiny p-2 px-4 rounded-2xl"
          value="Reset"
        />
      </div>
    </form>
  </section>
</template>
