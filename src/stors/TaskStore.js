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
    user: null,
    db: getFirestore(),
  }),

  actions: {
    syncUserId() {
      const authStore = useAuthStore();
      this.user = authStore.user;
    },
    async getTasks() {
      if (!this.user) this.syncUserId();

      const db = getFirestore();
      const docRef = doc(db, `users`, `user-${this.user.uid}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      this.tasks = data.tasks;
    },
    async addTasks(taskName, date, Description, priority, steps, image) {
      if (!this.user) this.syncUserId();
      const db = getFirestore();
      const docRef = doc(db, `users`, `user-${this.user.uid}`);
      await updateDoc(docRef, {
        tasks: arrayUnion({
          id: `${taskName}-${this.tasks?.legnth || 1}`,
          taskName: taskName,
          date: date,
          Description: Description,
          priority: priority,
          steps: steps,
          image: image,
        }),
      });
    },
  },
});
