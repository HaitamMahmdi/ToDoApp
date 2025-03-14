import { defineStore } from "pinia";

export const useTaskeStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        taskTitle: `my first task of the day`,
        taskDescription: `not much to be said in here`,
        typeOfTask: `sport`,
      },
    ],
  }),
});
