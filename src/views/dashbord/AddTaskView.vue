<script setup>
/**
 * TODO:add validation and ruls to the input fields.
 *
 */
import { useTaskeStore } from "../../stors/TaskStore";
import InputCom from "../../components/InputCom.vue";
import InputComponent from "../../components/InputComponent.vue";
import { ref, computed } from "vue";
const taskStore = useTaskeStore();
const date = new Date();
const dateToday = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
  2,
  "0"
)}-${String(date.getDate()).padStart(2, "0")}`;

const teskName = ref("");
const taskDescription = ref("");
const inProgressAt = ref("");
const deadline = ref("");
const priority = ref("");
const steps = ref([]);
const category = ref("");
const step = ref("");

const handleDateChange = (event) => {
  const value = event.target.value;
  inProgressAt.value = value;
};
const addSteps = () => {
  steps.value.push({ stepText: step.value, id: steps.value.length + 1 });
};
const removeStep = (index) => {
  steps.value.splice(index, 1);
};
const pushNewTask = async () => {
  try {
    await taskStore.addTasks(
      teskName.value,
      inProgressAt.value,
      deadline.value,
      taskDescription.value,
      priority.value,
      steps.value,
      category.value
    );
  } catch (error) {
    console.error("Failed to add task:", error);
  }
};
const minDate = computed(() => {
  const validFormat = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const dateTodays = date.toISOString().split("T")[0];

  if (!validFormat.test(inProgressAt.value)) return dateTodays;

  const [, year, month, day] = inProgressAt.value.match(
    /^(\d{4})-(\d{2})-(\d{2})$/
  );
  const nextDay = String(Number(day) + 1).padStart(2, "0");

  return `${year}-${month}-${nextDay}`;
});
</script>
<template>
  <section
    class="py-10 text-center lg:text-left grow dark:text-on-primary container px-4 mx-auto"
  >
    <h2 class="text-[clamp(2.5rem,5vw,4rem)] mb-5 font-bold">Add New Task</h2>
    <form
      class="flex flex-wrap flex-col lg:flex-row items-center lg:items-start justify-center"
      @submit.prevent
      @keydown.enter.prevent
    >
      <div class="max-w-4/5">
        <InputComponent
          v-model="teskName"
          label="Task Titel"
          inputType="text"
          id="newInput"
          name="input"
          :isRequired="true"
          cusclass="px-5 py-3"
          :helperText="true"
          :addValidateToText="true"
        />
        <div class="mt-5">
          <label class="font-semibold text-3xl" for="date"
            >Start Task At:
          </label>
          <input
            v-model="inProgressAt"
            class="pl-2 dark:focus:bg-on-primary mt-2 bg-on-surface text-tiny px-5 py-3 w-full dark:focus:text-on-surface"
            type="date"
            :min="dateToday"
            max="2026-12-12"
            name=""
            id=""
            required
          />
        </div>
        <div class="mt-5">
          <label class="font-semibold text-3xl" for="date"
            >to be finished at:</label
          >
          <input
            class="pl-2 dark:focus:bg-on-primary mt-2 bg-on-surface text-tiny px-5 py-3 w-full dark:focus:text-on-surface"
            type="date"
            v-model="deadline"
            :min="minDate"
            max="2026-12-12"
            name=""
            id=""
            required
          />
        </div>

        <div class="mt-5">
          <label class="text-3xl font-semibold" for="Description"
            >Description</label
          >
          <textarea
            v-model="taskDescription"
            class="bg-on-surface mt-4 font-semibold text-tiny dark:focus:bg-on-primary rounded-3xl h-96 dark:focus:text-on-surface p-5 lg:p-10 w-full"
            name="Description"
            id="Description"
          ></textarea>
        </div>
      </div>
      <div class="grow lg:px-10">
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
        <InputComponent
          v-model="category"
          label="Category"
          inputType="text"
          id="category"
          name="category"
          :isRequired="true"
          class="mb-5 mt-4"
          placeholder="# category"
          cusclass="px-5 py-3"
          :helperText="true"
          :addValidateToText="true"
        />
        <div>
          <InputComponent
            v-model="step"
            label="Add steps"
            inputType="text"
            id="step"
            name="step"
            @keydown.enter="addSteps"
            :addValidateToText="false"
            class="mb-5 mt-4 w-full"
            cusclass="px-5 py-3"
          />

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
          @click="pushNewTask"
          type="submit"
          class="bg-button-color cursor-pointer text-on-primary text-tiny p-2 px-4 rounded-2xl"
          value="Add Task"
        />
        <input
          type="reset"
          class="bg-error cursor-pointer ml-10 text-on-primary text-tiny p-2 px-4 rounded-2xl"
          value="Reset"
        />
      </div>
    </form>
  </section>
</template>
