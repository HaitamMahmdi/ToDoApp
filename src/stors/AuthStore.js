import { defineStore } from "pinia";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  deleteUser,
  updateEmail,
  updatePassword,
} from "@firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import app from "../firebase";
const auth = getAuth(app);

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
  }),
  actions: {
    checkAuth() {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            this.user = user;
            this.isAuthReady = true;
            unsubscribe(); // stop listening after first call
            resolve(user); // ✅ now it's awaitable
          },
          reject
        );
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
          photoURL: userProfileImagePath,
        });
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
    async deleteAccount(user) {
      try {
        if (user) {
          await deleteUser(user);
        }
      } catch (err) {
        console.error("delete error:", err.code, err.message);
      }
    },
    async updateUserImage(user, newPath) {
      try {
        if (user) {
          await updateProfile(user, {
            photoURL: newPath,
          });
        }
      } catch (err) {
        console.error("update User Image error:", err.code, err.message);
      }
    },
    async updateDisplayName(user, newDisplayName) {
      try {
        if (user) {
          await updateProfile(user, {
            displayName: newDisplayName,
          });
        }
      } catch (err) {
        console.error("update Display Name error:", err.code, err.message);
      }
    },
    async updateUserEmail(user, newEmail) {
      try {
        if (user) {
          await updateEmail(user, newEmail);
        }
      } catch (err) {
        console.error("update Email  error:", err.code, err.message);
      }
    },

    async updateUserPassword(user, newPassword) {
      try {
        if (user) {
          await updatePassword(user, newPassword);
        }
      } catch (err) {
        console.error("update Password  error:", err.code, err.message);
      }
    },
  },
});
