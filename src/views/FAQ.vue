<script setup>
import { useThemeStore } from "@/stores/ThemeStore";
import { reactive } from "vue";
const themeStore = useThemeStore();
const faq = reactive([
  {
    question: "How do I create a new task?",
    answer: "in the add tasks page for logged-in users.",
    showAnswer: false,
  },
  {
    question: "Can I edit a task after I create it?",
    answer: "no ",
    showAnswer: false,
  },
  {
    question: "How do I delete a task I don’t need anymore?",
    answer: "Click the 3 dot icon and select delete ",
    showAnswer: false,
  },
  {
    question: "Can I mark a task as done?",
    answer: "Yes, Click the 3 dot icon and mark it as done.",
    showAnswer: false,
  },
  {
    question: "Where did my tasks go?",
    answer:
      "Refresh the app, check your login account, or see the 'Completed' sections.",
    showAnswer: false,
  },
  {
    question: "Can I undo a deleted task?",
    answer: "no",
    showAnswer: false,
  },
  {
    question: "How do I organize tasks by date or priority?",
    answer: "you can't for now",
    showAnswer: false,
  },
  {
    question: "Can I set reminders or due dates?",
    answer: "no",
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
    answer: "Yes and no",
    showAnswer: false,
  },
  {
    question: "Is there a dark mode?",
    answer: "yes",
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
