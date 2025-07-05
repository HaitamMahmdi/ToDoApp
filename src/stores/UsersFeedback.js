import { defineStore } from "pinia";
import { getFirestore, getDoc, collection } from "firebase/firestore";
export const useUersFB = defineStore(`usersFB`, {
  state: () => {
    usersFeedBack: null;
  },
  actions: {
    async getUserFeedBack() {},
  },
});
