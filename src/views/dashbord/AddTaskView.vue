<script setup>
import { useTaskeStore } from "../../stors/TaskStore";
import InputComponent from "../../components/InputComponent.vue";
import { ref, computed, reactive } from "vue";
import SelectTaskPriorityCom from "../../components/tasks/SelectTaskPriorityCom.vue";
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
const priority = ref("moderate");
const steps = ref([]);
const category = ref("");
const color = ref("#DDD");
const step = ref("");

const isvalidInput = reactive({
  taskName: null,
  category: null,
  step: null,
});

const addSteps = () => {
  steps.value.push({
    stepText: step.value,
    id: steps.value.length === 0 ? steps.value.length : steps.value.length - 1,
    objID: crypto.randomUUID(),
    originalStepsCount: steps.value.length,
  });
};
const removeStep = (index) => {
  steps.value.splice(index, 1);
};
const pushNewTask = async () => {
  if (!isvalidInput.taskName || !isvalidInput.category || !isvalidInput.step) {
    return;
  } else {
    console.log(color.value);
    try {
      await taskStore.addTasks(
        teskName.value,
        inProgressAt.value,
        deadline.value,
        taskDescription.value,
        priority.value,
        steps.value,
        category.value,
        "",
        color.value
      );
      console.log(`task add`);
    } catch (error) {
      console.error("Failed to add task:", error);
    }
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
    class="py-10 md:w-[calc(100%-256px)] text-center lg:text-left grow dark:text-on-primary container px-4 mx-auto"
  >
    {{ isvalidInput.taskName }}
    {{ isvalidInput.step }}
    {{ isvalidInput.category }}
    <h2 class="text-[clamp(2.5rem,5vw,4rem)] mb-5 font-bold">Add New Task</h2>
    <form
      class="flex flex-wrap flex-col lg:flex-row items-center lg:items-start justify-center"
      @submit.prevent="pushNewTask"
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
          @isvalidVal="(n) => (isvalidInput.taskName = n)"
          lableStyle="text-3xl"
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
          {{ priority }}
          <SelectTaskPriorityCom @selectedPriority="(n) => (priority = n)" />
        </div>
        <div class="flex items-center relative">
          <InputComponent
            v-model="category"
            label="Category"
            lableStyle="text-3xl"
            inputType="text"
            id="category"
            name="category"
            :isRequired="true"
            class="mb-5 mt-4 grow"
            @isvalidVal="(n) => (isvalidInput.category = n)"
            placeholder="# category"
            cusclass="px-5 py-3"
            :helperText="true"
            :addValidateToText="true"
          />

          <input
            type="color"
            name=""
            v-model="color"
            :style="{ 'border-color': `${color}` }"
            class="w-0 h-0 cursor-pointer absolute right-5 top-[45%] transform translate-y-[40%] border-[15px] rounded-full"
            id=""
          />
        </div>
        <div>
          <InputComponent
            v-model="step"
            label="Add steps"
            lableStyle="text-3xl"
            inputType="text"
            id="step"
            name="step"
            @keydown.enter="addSteps"
            :addValidateToText="true"
            @isvalidVal="(n) => (isvalidInput.step = n)"
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
