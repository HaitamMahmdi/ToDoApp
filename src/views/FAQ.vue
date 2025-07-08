<script setup>
import { useThemeStore } from "@/stores/ThemeStore";
import { reactive } from "vue";
const themeStore = useThemeStore();
const faq = reactive([
  {
    question: "How do I create a new task?",
    answer:
      "Click the 'Add' or '+' button, type your task, and press Enter or Save.",
    showAnswer: false,
  },
  {
    question: "Can I edit a task after I create it?",
    answer: "Yes, click the task text or the edit icon to modify it.",
    showAnswer: false,
  },
  {
    question: "How do I delete a task I don’t need anymore?",
    answer:
      "Click the trash icon or swipe left/right (on mobile) to delete the task.",
    showAnswer: false,
  },
  {
    question: "Can I mark a task as done?",
    answer: "Yes, click the checkbox next to the task to mark it as completed.",
    showAnswer: false,
  },
  {
    question: "Where did my tasks go?",
    answer:
      "Refresh the app, check your login account, or see the 'Completed' or 'Archived' sections.",
    showAnswer: false,
  },
  {
    question: "Can I undo a deleted task?",
    answer:
      "Some apps offer undo for a few seconds. Otherwise, deletion is usually permanent unless archived.",
    showAnswer: false,
  },
  {
    question: "How do I organize tasks by date or priority?",
    answer:
      "Use the sort or filter options, or drag and drop to reorder your tasks.",
    showAnswer: false,
  },
  {
    question: "Can I set reminders or due dates?",
    answer:
      "Yes, look for a calendar or clock icon when creating or editing a task.",
    showAnswer: false,
  },
  {
    question: "Does this app sync across my devices?",
    answer:
      "Yes, if you're logged in with the same account, your tasks will sync automatically.",
    showAnswer: false,
  },
  {
    question: "Can I create categories or folders?",
    answer:
      "Yes, most apps allow lists, projects, or tags to organize your tasks.",
    showAnswer: false,
  },
  {
    question: "Is there a dark mode?",
    answer:
      "Check the app settings — dark mode is usually available for better night-time visibility.",
    showAnswer: false,
  },
  {
    question: "Is my data saved if I close the app?",
    answer:
      "Yes, if you're logged in. Otherwise, tasks may only be stored locally on your device.",
    showAnswer: false,
  },
]);
const firstHalf = faq.slice(0, 6);
const secondHalf = faq.slice(6);
</script>
<template>
  <div
    class="container md:w-[calc(100%-256px)] w-full px-5 h-full mx-auto my-20 flex flex-wrap justify-center"
  >
    <h1
      class="text-[clamp(2rem,5vw,4rem)] mb-3 text-center w-full dark:text-on-primary font-bold"
    >
      ---Frequently Asked Questions---
    </h1>
    <ul class="md:w-3/6 w-full">
      <li class="w-full" v-for="question in firstHalf" :key="question">
        <div
          @click="question.showAnswer = !question.showAnswer"
          class="flex justify-between dark:bg-on-surface dark:border-surface w-full text-2xl cursor-pointer border-t border-r bg-light-primary text-white px-3 py-4 items-center"
        >
          <p>{{ question.question }}</p>
          <font-awesome-icon icon="plus" />
        </div>
        <p
          v-if="question.showAnswer"
          class="w-full dark:text-on-primary text-tiny dark:bg-secondary bg-light-hover p-4"
        >
          {{ question.answer }}
        </p>
      </li>
    </ul>
    <ul class="md:w-3/6 w-full">
      <li class="w-full" v-for="question in secondHalf" :key="question">
        <div
          @click="question.showAnswer = !question.showAnswer"
          class="flex dark:bg-on-surface dark:border-surface justify-between w-full text-2xl cursor-pointer border-t border-r bg-light-primary text-white px-3 py-4 items-center"
        >
          <p>
            {{ question.question }}
          </p>
          <font-awesome-icon icon="plus" />
        </div>
        <p
          v-if="question.showAnswer"
          class="w-full dark:text-on-primary dark:bg-secondary text-tiny bg-light-hover p-4"
        >
          {{ question.answer }}
        </p>
      </li>
    </ul>
  </div>
</template>
