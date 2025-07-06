import { defineStore } from "pinia";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  deleteUser,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
} from "@firebase/auth";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { useTaskeStore } from "./TaskStore";
import app from "../firebase";
import { getUserData } from "../utilities/getUserData";
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
        return err;
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
        return new Error("You entered a wrong email or password.");
      }
    },
    async deleteAccount() {
      try {
        if (this.user) {
          const auth = getAuth();
          const taskStore = useTaskeStore();
          const user = auth.currentUser;
          const { docRef } = await getUserData();
          taskStore.resetTasksStore();
          await deleteDoc(docRef);
          await deleteUser(user);
          this.user = null;
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

    async updateUserPassword(oldPassword, newPassword) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user || !user.email) {
        return "⚠️ No user is signed in.";
      }

      const credential = EmailAuthProvider.credential(user.email, oldPassword);

      try {
        // First: reauthenticate
        await reauthenticateWithCredential(user, credential);

        // Second: update password
        await updatePassword(user, newPassword);
        return "✅ Password updated successfully.";
      } catch (error) {
        switch (error.code) {
          case "auth/wrong-password":
            return "❌ Old password is incorrect.";
          case "auth/invalid-credential":
            return "❌  Please check your old password.";
          case "auth/too-many-requests":
            return "❌ Too many attempts. Try again later.";
          case "auth/weak-password":
            return "❌ New password is too weak.";
          case "auth/requires-recent-login":
            return "❌ Please log in again to update your password.";
          default:
            return `❌ Something went wrong: ${error.message}`;
        }
      }
    },
    async logOut() {
      const auth = getAuth();
      const taskStore = useTaskeStore();
      await signOut(auth);
      taskStore.resetTasksStore();
      this.user = null;
    },
  },
});
