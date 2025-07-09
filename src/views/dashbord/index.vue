<script setup>
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../../stores/AuthStore";
import { RouterView, useRouter, useRoute } from "vue-router";
import { useThemeStore } from "../../stores/ThemeStore";
import { useTaskeStore } from "../../stores/TaskStore";
import PlanComponent from "@/components/PlanComponent.vue";
import PercentageCircleCom from "../../components/PercentageCircleCom.vue";
const base = import.meta.env.BASE_URL;
const TaskStore = useTaskeStore();
const tasks = computed(() => TaskStore.tasks);
const todayTasks = computed(() => TaskStore?.getTodayTasks);
const notStatedTasks = computed(() => TaskStore?.getNotStartedTasks);
const finishedTasks = computed(() => TaskStore?.getFinishedTasks);
const inProgressTasks = computed(() => TaskStore?.getInProgressTasks);
const failedTasks = computed(() => TaskStore?.getFailedTasks);

const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.theme);
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const user = computed(() => authStore.user);
const profileImage = computed(() => authStore.user?.photoURL);

const isAsideOpen = ref(true);
const asideToggler = () => {
  isAsideOpen.value = !isAsideOpen.value;
};

const logOutUser = async () => {
  await authStore.logOut();
};

watch(
  () => authStore.user,
  (newUser) => {
    if (!newUser) {
      router.push("/");
    }
  },
  { immediate: true }
);
//grid grid-cols-2
</script>
<template>
  <section class="flex flex-wrap min-h-[100vh] md:pt-0">
    <button
      @click="asideToggler"
      class="z-60 fixed md:hidden top-0 left-0 cursor-pointer p-5 bg-on-primary w-9 h-9 flex items-center justify-center"
    >
      <font-awesome-icon v-if="isAsideOpen" icon="angle-left" />
      <font-awesome-icon v-else icon="angle-right" />
    </button>
    <section
      v-show="isAsideOpen"
      id="aside"
      class="md:w-3xs bg-light-primary w-full flex flex-col md:!flex fixed md:relative left-0 z-50 top-0 dark:bg-section text-on-primary"
    >
      <div class="flex flex-col mb-5 pt-5 items-center">
        <div id="userImageAndName" class="">
          <RouterLink
            class="flex group items-center relative rounded-full"
            :to="{ name: 'index' }"
          >
            <img
              class="w-20 h-20 rounded-full"
              :src="
                user
                  ? `${base}user_default_profile_image/${user.photoURL}.jpg `
                  : `${base}user_default_profile_image/defualt.jpg`
              "
              alt=""
            />
            <p
              class="mx-2 hidden transition duration-300 delay-200 group-hover:block"
            >
              go to dashbord
            </p>
          </RouterLink>
        </div>
        <h2 class="mt-3 text-[1.2rem] font-semibold">
          {{ user ? user.displayName : `haitam` }}
        </h2>
      </div>

      <div class="grow">
        <ul id="links" class="text-tiny gap-4">
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 dark:hover:bg-on-surface hover:bg-light-secondary"
              :to="{ name: 'addTask' }"
              ><font-awesome-icon icon="plus" />
              <p class="ml-2">Add task</p></RouterLink
            >
          </li>
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 dark:hover:bg-on-surface hover:bg-light-secondary"
              :to="{ name: 'tasks' }"
              ><font-awesome-icon icon="list" />
              <p class="ml-2">Tasks</p></RouterLink
            >
          </li>

          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 dark:hover:bg-on-surface hover:bg-light-secondary"
              :to="{ name: 'settings' }"
            >
              <font-awesome-icon icon="gear" />
              <p class="ml-2">Settings</p>
            </RouterLink>
          </li>
          <li class="w-full">
            <RouterLink
              class="flex items-center px-5 py-4 dark:hover:bg-on-surface hover:bg-light-secondary"
              :to="{ name: `faqs` }"
            >
              <font-awesome-icon icon="circle-info" />
              <p class="ml-2">FAQ</p>
            </RouterLink>
          </li>
          <li class="w-full border-y mt-20">
            <button
              @click="themeStore.toggleTheme"
              class="flex w-full cursor-pointer items-center px-5 py-4 dark:hover:bg-on-surface hover:bg-light-secondary"
            >
              <p v-if="currentTheme === 'dark'" class="flex items-center">
                <font-awesome-icon icon="moon" />
                <span class="ml-2">Dark theme</span>
              </p>
              <p v-else="currentTheme === `light`">
                <font-awesome-icon icon="sun" />
                <span class="ml-2">Light theme</span>
              </p>
            </button>
          </li>
        </ul>
      </div>
      <div class="mb-20">
        <button
          @click="authStore.logOut"
          class="flex items-center w-full cursor-pointer px-5 py-4 dark:hover:bg-on-surface hover:bg-light-secondary"
        >
          <font-awesome-icon icon="arrow-right-from-bracket" />
          <p class="ml-2">Logout</p>
        </button>
      </div>
    </section>
    <section
      class="md:w-[calc(100%-256px)] w-full"
      v-if="route.path === '/index'"
    >
      <section
        class="p-10 dark:text-on-primary text-white dark:bg-on-surface bg-light-secondary h-fit w-full"
        v-if="user && tasks"
      >
        <div
          class="sm:flex block sm:items-center justify-between text-center sm:text-left"
        >
          <div class="sm:flex block">
            <div>
              <img
                class="w-16 h-16 mx-auto sm:mx-0 rounded-full"
                :src="
                  profileImage
                    ? ` ${base}user_default_profile_image/${profileImage}.jpg`
                    : `${base}user_default_profile_image/defualt.jpg`
                "
                alt=""
              />
            </div>

            <div class="sm:ml-5">
              <h2 class="text-tiny font-semibold">{{ user.displayName }}</h2>
              <p>{{ user.metadata.creationTime }}</p>
            </div>
          </div>
        </div>

        <p class="text-tiny mt-5 text-center sm:text-left">
          you have
          <span class="text-Clickable font-semibold">{{ tasks.length }}</span>
          task.
          <span class="text-Clickable font-semibold">
            {{ todayTasks.length }}
          </span>
          are for today and
          <span class="text-Clickable font-semibold"
            >{{ tasks.length - todayTasks.length }}
          </span>
          are upcoming tasks
        </p>
      </section>
      <section v-if="user && tasks" class="my-10">
        <h2
          class="text-center text-[clamp(2.5rem,5vw,4rem)] mb-5 dark:text-on-primary font-black"
        >
          your progress
        </h2>
        <div
          id="userProgres"
          class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
        >
          <div
            class="mb-5 text-center flex flex-col items-center justify-center"
          >
            <p class="font-semibold text-2xl dark:text-on-primary">
              finished tasks
            </p>
            <PercentageCircleCom
              progress-color="#22c55e"
              :percentage="
                finishedTasks.length
                  ? (finishedTasks.length / tasks.length) * 100
                  : 0
              "
              class="w-[10rem] h-[10rem] rounded-full"
            >
              <template v-slot:content>
                <p class="font-semibold text-3xl text-center">
                  {{
                    finishedTasks.length
                      ? Math.round((finishedTasks.length / tasks.length) * 100)
                      : 0
                  }}%
                </p>
              </template>
            </PercentageCircleCom>
          </div>
          <div
            class="mb-5 text-center flex flex-col items-center justify-center"
          >
            <p class="font-semibold dark:text-on-primary text-tiny">
              Tasks waiting to be started
            </p>
            <PercentageCircleCom
              :percentage="
                notStatedTasks.length
                  ? (notStatedTasks.length / tasks.length) * 100
                  : 0
              "
              class="w-[10rem] h-[10rem] rounded-full"
            >
              <template v-slot:content>
                <p class="font-semibold text-3xl text-center">
                  {{
                    notStatedTasks.length
                      ? Math.round((notStatedTasks.length / tasks.length) * 100)
                      : 0
                  }}%
                </p>
              </template>
            </PercentageCircleCom>
          </div>
          <div
            class="mb-5 text-center flex flex-col items-center justify-center"
          >
            <p class="font-semibold dark:text-on-primary text-tiny">
              Tasks being worked on
            </p>
            <PercentageCircleCom
              :percentage="
                inProgressTasks.length
                  ? (inProgressTasks.length / tasks.length) * 100
                  : 0
              "
              progress-color="#f97316"
              class="w-[10rem] h-[10rem] rounded-full"
            >
              <template v-slot:content>
                <p class="font-semibold text-3xl text-center">
                  {{
                    inProgressTasks.length
                      ? Math.round(
                          (inProgressTasks.length / tasks.length) * 100
                        )
                      : 0
                  }}%
                </p>
              </template>
            </PercentageCircleCom>
          </div>
          <div
            class="mb-5 text-center flex flex-col items-center justify-center"
          >
            <p class="font-semibold dark:text-on-primary text-tiny">
              failed tasks
            </p>
            <PercentageCircleCom
              :percentage="
                failedTasks.length
                  ? (failedTasks.length / tasks.length) * 100
                  : 0
              "
              progress-color="#ef4444"
              class="w-[10rem] h-[10rem] rounded-full"
            >
              <template v-slot:content>
                <p class="font-semibold text-3xl text-center">
                  {{
                    failedTasks.length
                      ? Math.round((failedTasks.length / tasks.length) * 100)
                      : 0
                  }}%
                </p>
              </template>
            </PercentageCircleCom>
          </div>
        </div>
        <PlanComponent
          @updatePlan="(n) => TaskStore.updatePlane(n)"
          class="plan"
        ></PlanComponent>
      </section>
    </section>
    <RouterView></RouterView>
  </section>
</template>
