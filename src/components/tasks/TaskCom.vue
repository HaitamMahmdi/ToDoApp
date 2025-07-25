<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { handleClickOutside } from "../../utilities/handleClickOutside";
const emit = defineEmits([
  "startTask",
  "removeTask",
  "stopTask",
  "markAsDone",
  "show-info",
  "taskIsFailed",
]);
const { taskobj } = defineProps({
  taskobj: Object,
});

const showIfo = (e) => {
  emit("show-info", taskobj);
};
let status = taskobj.status;
const id = taskobj.id;
const startTask = () => {
  emit("startTask", { id, status });
};
const stopTask = () => {
  emit("stopTask", { id, status });
};
const markAsDone = () => {
  emit("markAsDone", { id, status });
};
const removeTask = () => {
  emit("removeTask", { id, status });
};
const showOptions = ref(false);
const buttonShowOptions = ref(null);
let cleanheandler;

if (
  +taskobj.inProgressAt.split("-")[2] < +new Date().getDate() ||
  taskobj?.deadline.split("-")[2] < +new Date().getDate()
) {
  console.log(taskobj);
  taskobj.status = `failed`;
  emit("taskIsFailed", taskobj.id);
}

onMounted(() => {
  cleanheandler = handleClickOutside(buttonShowOptions, () => {
    showOptions.value = false;
  });
});
onBeforeUnmount(() => {
  cleanheandler?.();
});

const showOptionOnClick = (e) => {
  if (e.currentTarget.id === `optionToggle`) return (showOptions.value = true);
};

const isColorCloseToWhite = (hexColor, threshold = 240) => {
  hexColor = hexColor.replace("#", "").trim();

  if (hexColor.length !== 6) return false;

  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  const isClose = r > threshold && g > threshold && b > threshold;
  return isClose;
};

const color = isColorCloseToWhite(taskobj.categoryColor, 240);
</script>
<template>
  <div
    v-if="taskobj.status !== 'done'"
    :id="`taskCard-${id}`"
    v-bind="$attrs"
    class="dark:bg-on-surface md:min-w-96 text-light-surface bg-light-secondary h-fit max-sm:p-5 flex mx-4 flex-wrap dark:text-on-primary justify-between mb-5"
  >
    <div class="py-1 px-1 flex flex-col justify-center grow">
      <div class="flex items-center flex-wrap">
        <div
          :class="[
            taskobj.status === 'In Progress' || taskobj.status === 'done'
              ? 'bg-Clickable  '
              : taskobj.status === 'failed'
              ? 'bg-error'
              : 'bg-on-primary ',
          ]"
          class="flex justify-center items-center p-1 w-[2rem] h-[2rem] rounded-full dark:text-on-surface"
        >
          <font-awesome-icon
            v-if="taskobj.status === 'In Progress'"
            :class="[
              taskobj.status === 'In Progress'
                ? 'animate-spin text-on-primary'
                : '',
            ]"
            icon="rotate"
          />
          <font-awesome-icon
            v-if="
              taskobj.status != 'In Progress' &&
              taskobj.status != 'done' &&
              taskobj.status != 'failed'
            "
            class="text-light-secondary dark:text-on-surface"
            icon="hourglass-start"
          />
          <font-awesome-icon
            v-if="taskobj.status === 'done'"
            icon="check"
            class="text-on-primary"
          />
          <font-awesome-icon
            class="text-on-primary"
            v-if="taskobj.status === 'failed'"
            icon="xmark"
          />
        </div>
        <h2
          :aria-label="taskobj.taskName"
          @click="showIfo"
          class="flex justify-between hover:text-Clickable cursor-pointer ml-2 grow items-center"
        >
          <span class="text-tiny ml-">{{
            taskobj.taskName.length >= 18
              ? taskobj.taskName.slice(0, 17) + `...`
              : taskobj.taskName
          }}</span>
          <span
            :style="{
              'background-color': taskobj.categoryColor,
            }"
            :class="[color ? ` text-on-surface ` : `text-on-primary`]"
            class="rounded-2xl ml-2 p-1"
            >#{{
              taskobj.category.length > 7
                ? taskobj.category.slice(0, 7) + `..`
                : taskobj.category
            }}</span
          >
        </h2>
        <div class="relative">
          <button
            id="optionToggle"
            @click="showOptionOnClick"
            ref="buttonShowOptions"
            class="group ml-5 relative cursor-pointer text-tiny"
          >
            <font-awesome-icon
              class="group-focus:text-Clickable"
              icon="ellipsis"
            />
          </button>
          <ul
            v-if="showOptions"
            class="absolute w-52 z-10 bg-secondary left-[-10rem] top-full"
          >
            <li
              @click="startTask"
              v-if="
                taskobj.status != 'done' &&
                taskobj.status !== 'In Progress' &&
                taskobj.status != 'failed'
              "
              class="flex items-center cursor-pointer py-2 px-4 hover:bg-primary"
            >
              <font-awesome-icon icon="hourglass-start" />
              <p class="ml-2">start</p>
            </li>
            <li
              @click="stopTask"
              v-if="
                taskobj.status !== 'done' &&
                taskobj.status !== 'pause' &&
                taskobj.status !== 'not started' &&
                taskobj.status != 'failed'
              "
              class="flex items-center cursor-pointer py-2 px-4 hover:bg-primary"
            >
              <font-awesome-icon icon="ban" />
              <p class="ml-2">stop</p>
            </li>
            <li
              @click="removeTask"
              class="flex items-center cursor-pointer py-2 px-4 hover:bg-primary"
            >
              <font-awesome-icon icon="trash-can" />
              <p class="ml-2">remove Task</p>
            </li>
            <li
              @click="markAsDone"
              v-if="taskobj.status !== 'done' && taskobj.status != 'failed'"
              class="flex items-center cursor-pointer py-2 px-4 hover:bg-primary"
            >
              <font-awesome-icon icon="circle-check" />
              <p class="ml-2">Mark as done</p>
            </li>
          </ul>
        </div>
      </div>
      <ul class="mt-5 w-full max-sm:hidden flex text-[12px] justify-between">
        <li>
          priority:
          <span
            :class="[
              taskobj.priority === 'extreme' ? 'text-error' : '',
              taskobj.priority === 'moderate'
                ? 'text-success'
                : 'text-amber-300',
            ]"
            >{{ taskobj.priority }}</span
          >
        </li>
        <li>add at: {{ taskobj.addAt }}</li>
        <li>
          status:

          <span
            :class="[
              taskobj.status === 'In Progress' || taskobj.status === 'done'
                ? ' text-primary'
                : ' text-error',
            ]"
            >{{ taskobj.status }}</span
          >
        </li>
      </ul>
    </div>

    <div class="w-25 ml-2 max-sm:w-full overflow-hidden">
      <img src="@/assets/taskImage.jpg" class="w-full h-full" alt="" />
    </div>
    <ul
      class="mt-5 text-center px-1 max-sm:flex w-full hidden text-[12px] justify-between"
    >
      <li>
        priority:
        <span
          :class="[
            taskobj.priority === 'Extreme'
              ? 'text-error'
              : taskobj.priority === 'Moderate'
              ? 'text-success'
              : 'text-amber-300',
          ]"
          >{{ taskobj.priority }}</span
        >
      </li>
      <li class="px-1">add at: {{ taskobj.addAt }}</li>
      <li>
        status:

        <span
          :class="[
            taskobj.status === 'In Progress' || taskobj.status === 'done'
              ? ' text-primary'
              : ' text-error',
          ]"
          >{{ taskobj.status }}</span
        >
      </li>
    </ul>
    <div
      :style="{ width: `${taskobj.completionRate}%` }"
      class="h-0.5 bg-Clickable"
    ></div>
  </div>
</template>
