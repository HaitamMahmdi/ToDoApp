<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import InputComponent from "../InputComponent.vue";
import { handleClickOutside } from "../../utilities/handleClickOutside";
import { useTaskeStore } from "../../stores/TaskStore";
const taskStore = useTaskeStore();
const emit = defineEmits(["taskInfoHide", "stepIsDone"]);
const { task } = defineProps({
  task: Object,
});
const {
  taskName,
  inProgressAt,
  deadline,
  description,
  priority,
  steps,
  category,
  status,
  addAt,
  id,
  categoryColor,
} = task ?? {};
const taskDetails = ref(null);

let cleanTaskDetails;
onMounted(async () => {
  cleanTaskDetails = handleClickOutside(taskDetails, () => {
    console.log(`from task details`);
    emit("taskInfoHide");
  });
});
onBeforeUnmount(() => {
  cleanTaskDetails?.();
});
const stepDone = async (e) => {
  const stepId = e.currentTarget.id;
  e.currentTarget.setAttribute("style", "display: none !important;");
  emit("stepIsDone", stepId, id, status);
};
</script>

<template>
  <div
    ref="taskDetails"
    v-bind="$attrs"
    class="w-full md:w-md top-0 text-on-primary bg-light-secondary border-l border-on-surface h-full overflow-y-scroll fixed z-50 p-5 pt-0 right-0 dark:bg-secondary"
  >
    <div class="w-full my-5">
      <h2
        :style="{ color: categoryColor }"
        class="text-3xl flex justify-between items-center font-semibold"
      >
        #{{ category }}
        <span class="text-[1rem] text-on-primary"> {{ addAt }}</span>
      </h2>
    </div>
    <form action="" @submit.prevent>
      <div class="">
        <div>
          <InputComponent
            inputType="text"
            :id="taskName?.trim()"
            name=""
            label="task Name"
            :helperText="true"
            :placeholder="taskName"
            :addValidateToText="true"
            isRequired=""
            lableStyle="text-tiny"
            class="mb-5 w-full"
            cusclass=" w-full   p-4 "
            :inputReadonly="true"
          />

          <InputComponent
            inputType="text"
            v-if="inProgressAt"
            :id="inProgressAt.trim()"
            name="inProgressAt"
            label="inProgress At"
            :helperText="true"
            lableStyle="text-tiny"
            :placeholder="inProgressAt"
            :addValidateToText="false"
            isRequired=""
            class="mb-5"
            cusclass="w-full p-4 "
            :inputReadonly="true"
          />
          <InputComponent
            v-if="deadline"
            inputType="text"
            :id="`${deadline?.trim()}`"
            name="deadline"
            label="deadline"
            :helperText="true"
            lableStyle="text-tiny"
            :placeholder="deadline"
            :addValidateToText="false"
            isRequired=""
            class="mb-5"
            cusclass=" w-full  p-4 "
            :inputReadonly="true"
          />
        </div>
        <div class="h-96 p-5 w-full">
          <img src="../../assets/taskImage.jpg" class="w-full h-full" alt="" />
        </div>
      </div>
      <div v-if="description">
        <h3 class="text-tiny mt-10 mb-2 font-semibold">Description</h3>
        <textarea
          :placeholder="description"
          readonly
          class="dark:bg-on-surface mt-4 font-semibold text-tiny h-fit p-5 lg:p-10 w-full"
          name="description"
          id="description"
        ></textarea>
      </div>
      <div>
        <h3 class="text-tiny mt-10 mb-2 font-semibold">Priority</h3>
        <ul class="ml-5 text-tiny flex flex-wrap mb-10 items-center">
          <li
            v-if="priority === 'extreme'"
            class="flex cursor-pointer items-center mr-4"
          >
            <span
              class="block mr-2 border-2 w-3.5 h-3.5 border-error bg-error p-1 rounded-full"
            ></span>
            <p>Extreme</p>
          </li>
          <li class="flex items-center" v-if="priority === 'moderate'">
            <span
              class="block mr-2 border-2 w-3.5 h-3.5 bg-success border-success p-1 rounded-full"
            ></span>
            <p>Moderate</p>
          </li>
          <li class="flex items-center" v-if="priority === 'low'">
            <span
              class="block mr-2 border-2 w-3.5 h-3.5 bg-amber-300 border-amber-300 p-1 rounded-full"
            ></span>
            <p>low</p>
          </li>
        </ul>
      </div>
      <ul v-if="status !== 'done'">
        <li v-if="steps.length">
          <h3 v-if="steps" class="text-tiny mt-10 mb-2 font-semibold">steps</h3>
          <ul class="ml-5">
            <li
              v-for="(step, index) in steps"
              :key="step.id"
              :id="step.objID"
              :stepid="step.id"
              @click="stepDone"
              :class="[
                index + 1 === steps.length ? 'dark:border-y' : 'dark:border-t',
              ]"
              class="flex py-5 px-3 transition cursor-pointer items-center dark:border-section duration-100 dark:hover:bg-on-surface hover:border-y w-full"
            >
              <span class="w-3.5 h-3.5 block border rounded-full"></span>

              <p class="ml-2">
                {{ step.stepText }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </form>
  </div>
</template>
