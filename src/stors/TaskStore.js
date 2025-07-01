/**
 * TODO: Add remove task action and update task action
 */

import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
export const useTaskeStore = defineStore("taskStore", {
  state: () => ({
    tasks: null,
  }),
  getters: {
    async getTodayTasks() {
      if (!this.tasks) await getTasks();
    },
  },
  actions: {
    async getTasks() {
      const authStore = useAuthStore();
      const user = authStore.user;
      if (user) {
        const db = getFirestore();
        console.log(this.user);
        const docRef = doc(db, `users`, `user-${user.uid}`);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        this.tasks = data.tasks;
      }
    },
    async addTasks(
      taskName = null,
      inProgressAt = null,
      deadline = null,
      Description = null,
      priority = null,
      steps = null,
      category = null,
      image = null
    ) {
      const authStore = useAuthStore();
      const user = authStore.user;
      const db = getFirestore();
      const docRef = doc(db, `users`, `user-${user.uid}`);
      const date = new Date();
      const year =
        date.getFullYear() < 10 ? `0${date.getFullYear()}` : date.getFullYear();
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      await updateDoc(docRef, {
        tasks: arrayUnion({
          id: `${taskName}-${this.tasks?.length || 1}`,
          taskName: taskName,
          addAt: `${year}-${month}-${day}`,
          inProgressAt: inProgressAt,
          deadline: deadline,
          Description: Description,
          priority: priority,
          steps: steps,
          category: `${category}`,
          image: image,
        }),
      });
    },
  },
});
