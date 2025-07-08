<script setup>
import { computed } from "vue";
import { useAuthStore } from "../stores/AuthStore";
import { useTaskeStore } from "../stores/TaskStore";
const taskStore = useTaskeStore();
const currentPlan = computed(() => taskStore.plan);
const authStore = useAuthStore();
const user = computed(() => authStore.user);
const payPlans = [
  {
    title: "Basic Plan",
    price: "$0/month",
    features: [
      "Up to 10 tasks",
      "1 project",
      "No file uploads",
      "Basic support",
      "Access from 1 device",
    ],
  },
  {
    title: "Pro Plan",
    price: "$5/month",
    features: [
      "Unlimited tasks",
      "Up to 10 projects",
      "File uploads",
      "Priority support",
      "Sync across 3 devices",
    ],
  },
  {
    title: "Team Plan",
    price: "$15/month",
    features: [
      "Team collaboration",
      "Shared projects",
      "Admin dashboard",
      "File sharing",
      "Unlimited devices",
    ],
  },
];
</script>
<template>
  <div
    v-bind="$attrs"
    class="grid mx-5 mt-10 text-white justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] dark:text-on-primary gap-4"
  >
    <div
      v-for="plan in payPlans"
      :key="plan"
      class="dark:bg-on-surface bg-light-secondary"
    >
      <div>
        <div
          class="py-4 px-2 text-center font-semibold text-[clamp(2.5rem,5vw,4rem)]"
        >
          <h1>{{ plan.title }}</h1>
          <p>{{ plan.price }}</p>
        </div>
        <ul>
          <li
            class="border-b hover:bg-Clickable hover:pl-4 transition dark:border-surface p-5"
            v-for="(feat, index) in plan.features"
            :key="feat"
          >
            <p class="">
              <font-awesome-icon icon="angle-right" /><font-awesome-icon
                icon="angle-right"
              />
              <span class="ml-2">{{ feat }}</span>
            </p>
          </li>
        </ul>
        <div
          class="p-10 text-center flex justify-center items-center flex-col text-tiny font-semibold"
        >
          <p class="mb-5">get the first time offer</p>
          <button
            v-if="user"
            @click="$emit('updatePlan', plan.title)"
            class="text-2xl cursor-pointer bg-Clickable py-4 px-8"
          >
            {{
              plan.title === currentPlan
                ? "this your current pay plan"
                : "click me"
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
