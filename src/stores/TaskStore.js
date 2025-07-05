/**
 * TODO: Add remove task action and update task action
 */

import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";
import { getUserData } from "../utilities/getUserData";
import {
  getFirestore,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
export const useTaskeStore = defineStore("taskStore", {
  state: () => ({
    tasks: null,
  }),
  getters: {
    getTodayTasks() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      const todyTasks = [];
      if (this.tasks) {
        for (let task of this.tasks) {
          if (task?.inProgressAt === formattedDate) {
            todyTasks.push(task);
          }
        }
        return todyTasks;
      }
    },
  },
  actions: {
    async startRealtimeSync() {
      console.log("SNAPSHOT FIRED 🔥");
      const authStore = useAuthStore();
      const user = authStore.user;

      if (user) {
        const db = getFirestore();
        const docRef = doc(db, `users`, `user-${user.uid}`);

        onSnapshot(docRef, (docSnap) => {
          const data = docSnap.data();
          if (data && data.tasks) {
            this.tasks = data.tasks.map((task) => ({ ...task })); // deep clone
          } else {
            this.tasks = [];
          }
        });
      }
    },
    async addTasks(
      taskName = null,
      inProgressAt = null,
      deadline = null,
      Description = null,
      priority = null,
      steps = null,
      category = `none`,
      image = null,
      categoryColor = "#ef4444"
    ) {
      const { docRef, data } = await getUserData();

      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      await updateDoc(docRef, {
        tasks: arrayUnion({
          taskName,
          addAt: `${year}-${month}-${day}`,
          inProgressAt,
          deadline,
          description: Description,
          priority,
          status: "not started",
          completionRate: 0,
          steps,
          originalStepsCount: steps.length,
          category: `${category}`,
          categoryColor: categoryColor,
          image,
          id: crypto.randomUUID(),
        }),
      });
      console.log(`task add`);
    },
    async updateTask(ID, key, newVal) {
      console.log(ID);
      try {
        const { docRef, data } = await getUserData();
        const arr = data.tasks || [];

        const index = arr.findIndex((task) => task.id === ID);
        if (index === -1) {
          throw new Error(`Task with ID ${ID} not found`);
        }

        const updatedTask = {
          ...arr[index],
          [key]: newVal,
          updatedAt: new Date().toISOString(), // لضمان التحديث في Firestore
        };

        const updatedTasks = [...arr];
        updatedTasks[index] = updatedTask;

        await updateDoc(docRef, {
          tasks: updatedTasks,
        });

        console.log(`✅ Task with ID ${ID} updated: [${key}] =`, newVal);
      } catch (err) {
        console.error(`❌ Failed to update task:`, err.message, err);
      }
    },
    async removeTask(id) {
      const { docRef, data } = await getUserData();
      const arr = data?.tasks || this.tasks || [];
      const updatedTasks = arr.filter((task) => task.id !== id);
      await updateDoc(docRef, {
        tasks: updatedTasks,
      });
    },
    resetTasksStore() {
      this.tasks = null;
    },
  },
});
