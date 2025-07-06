import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { useAuthStore } from "../stores/AuthStore";
export async function getUserData() {
  const authStore = useAuthStore();
  await authStore.checkAuth(); // 🔁 wait for Firebase to finish

  const user = authStore.user;
  if (user) {
    const db = getFirestore();
    const docRef = doc(db, "users", `user-${user.uid}`);
    const snapshot = await getDoc(docRef);
    const data = snapshot.data();
    return { db, user, docRef, data };
  }
  return { user };
}
