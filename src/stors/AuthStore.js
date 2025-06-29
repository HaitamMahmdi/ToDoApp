import { defineStore } from "pinia";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "../firebase";
const auth = getAuth(app);

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    userProfileImage: null,
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

    async signUp(email, password, userName, userProfileImagePath) {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const db = getFirestore();
        const colname = "users";
        const docRef = doc(db, colname, `user-${userCred.user.uid}`);
        await setDoc(docRef, {
          tasks: [],
          theme: "light",
        });

        this.user = userCred.user;
        updateProfile(this.user, {
          displayName: `${userName}`,
        });
        this.userProfileImage = userProfileImagePath;
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
