import { defineStore } from "pinia";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import app from "../firebase";
const auth = getAuth(app);

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
  }),
  actions: {
    checkAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          console.log("user is logged-in");
        } else {
          this.user = null;
          console.log("user is not signed in");
        }
      });
    },

    async signUp(email, password) {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCred.user;
      } catch (err) {
        console.error("Sign-up error:", err.code, err.message);
      }
    },

    async signIn(email, password) {
      try {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCred.user;
      } catch (err) {
        console.error("Sign-in error:", err.code, err.message);
      }
    },
  },
});
