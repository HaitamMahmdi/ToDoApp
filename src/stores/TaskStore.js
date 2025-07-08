/**
 * TODO: Add remove task action and update task action
 */

import { defineStore } from "pinia";
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
    tasks: [],
    plan: null,
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
    getFailedTasks() {
      if (this.tasks) {
        const arrayOfFailedTasks = this.tasks.filter(
          (el) => el.status === "failed"
        );
        return arrayOfFailedTasks;
      }
      return [];
    },
    getFinishedTasks() {
      if (this.tasks) {
        const arrayOfFinishedTasks = this.tasks.filter(
          (task) => task.status === "done"
        );
        return arrayOfFinishedTasks;
      }
      return [];
    },

    getNotStartedTasks() {
      if (this.tasks) {
        const arrayOfNotStartedTasks = this.tasks.filter(
          (el) => el.status === "not started"
        );
        return arrayOfNotStartedTasks;
      }
      return [];
    },
    getInProgressTasks() {
      if (this.tasks) {
        const arrayOfInProgressTasks = this.tasks.filter(
          (el) => el.status === "In Progress"
        );
        return arrayOfInProgressTasks;
      }
      return [];
    },
  },
  actions: {
    async startRealtimeSync() {
      const { user } = await getUserData();

      if (user) {
        const db = getFirestore();
        const docRef = doc(db, `users`, `user-${user.uid}`);

        onSnapshot(docRef, (docSnap) => {
          const data = docSnap.data();
          if (data && data.tasks) {
            this.tasks = data.tasks.map((task) => ({ ...task }));
            this.plan = data.plan;
          } else {
            this.tasks = [];
          }
        });
      }
    },
    async updatePlane(planeName) {
      const { docRef } = await getUserData();
      this.plane = planeName;
      await updateDoc(docRef, {
        plan: planeName,
      });
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
    },
    async updateTask(ID, key, newVal) {
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
          updatedAt: new Date().toISOString(),
        };

        const updatedTasks = [...arr];
        updatedTasks[index] = updatedTask;

        await updateDoc(docRef, {
          tasks: updatedTasks,
        });
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
