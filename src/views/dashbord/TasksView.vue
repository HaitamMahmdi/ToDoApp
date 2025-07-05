<script setup>
import { computed, onMounted, ref, toRaw } from "vue";
import TaskCom from "/src/components/tasks/TaskCom.vue";
import TaskDetailsCom from "../../components/tasks/TaskDetailsCom.vue";
import { useTaskeStore } from "../../stores/TaskStore";
import { useAuthStore } from "../../stores/AuthStore";

const authStore = useAuthStore();
authStore.checkAuth();

const taskStore = useTaskeStore();
const tasks = computed(() => taskStore.tasks);
const todayTasks = computed(() => taskStore.getTodayTasks);
const showInfoOf = ref(null);

const startTask = async ({ id, status }) => {
  if (status === "not started" || status === "pause") {
    await taskStore.updateTask(id, "status", "In Progress");
  }
};
const removeTask = async ({ id }) => {
  await taskStore.removeTask(id);
};
const stopTask = async ({ id, status }) => {
  if (status !== "not started" || status !== "pause") {
    await taskStore.updateTask(id, "status", "pause");
  }
};
const markAsDone = async ({ id }) => {
  await taskStore.updateTask(id, "status", "done");
};
const stepDone = async (stepId, id) => {
  const task = tasks.value.find((task) => task.id === id);
  const newRate = task.completionRate + 100 / task.originalStepsCount;
  const newsteps = task.steps.filter((step) => step.objID !== stepId);
  console.log(task.completionRate);
  await taskStore.updateTask(id, "steps", newsteps);

  await taskStore.updateTask(id, "completionRate", newRate);
  if (newRate >= 100) {
    await taskStore.updateTask(id, "status", "done");
  }
  await taskStore.updateTask(id, "updatedAt", new Date().toISOString());
};
let position = ``;
</script>
<template>
  <div
    class="container md:w-[calc(100%-256px)] min-h-[100vh] flex flex-wrap gap-1.5 justify-center md:p-4 relative mx-auto"
  >
    <div class="w-full flex flex-wrap">
      <h2
        class="text-[clamp(2.5rem,5vw,3rem)] mb-5 ml-5 font-bold w-full dark:text-on-primary"
      >
        tody tasks
      </h2>
      <TaskCom
        @show-info="
          (n, y) => {
            showInfoOf = n;
            position = y;
          }
        "
        class="lg:w-lg"
        v-for="task in todayTasks"
        :key="task.id"
        :taskobj="task"
        @startTask="startTask"
        @removeTask="removeTask"
        @stopTask="stopTask"
        @markAsDone="markAsDone"
      />
      <TaskDetailsCom
        v-if="showInfoOf"
        @taskInfoHide="showInfoOf = null"
        @stepIsDone="stepDone"
        :task="showInfoOf"
        :style="{ top: `${position}px` }"
      />
    </div>

    <div class="w-full flex flex-wrap">
      <h2
        class="text-[clamp(2.5rem,5vw,3rem)] mb-5 ml-5 font-bold w-full dark:text-on-primary"
      >
        tasks for the week
      </h2>
      <TaskCom
        @show-info="
          (n, y) => {
            showInfoOf = n;
            position = y;
          }
        "
        class="lg:w-lg"
        v-show="task.inProgressAt !== new Date().toISOString().split('T')[0]"
        v-for="task in tasks"
        :key="task.id"
        :taskobj="task"
        @startTask="startTask"
        @removeTask="removeTask"
        @stopTask="stopTask"
        @markAsDone="markAsDone"
      />
      <TaskDetailsCom
        v-if="showInfoOf"
        @taskInfoHide="showInfoOf = null"
        @stepIsDone="stepDone"
        :task="showInfoOf"
        :style="{ top: `${position}px` }"
      />
    </div>
  </div>
</template>
