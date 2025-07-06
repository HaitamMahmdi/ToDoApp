import { defineStore } from "pinia";
import { getUserData } from "../utilities/getUserData";
import { updateDoc } from "firebase/firestore";
const htmlRoot = document.getElementById(`html`);

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: null,
  }),
  actions: {
    async getTheme() {
      const { user, data } = await getUserData();
      if (user) {
        this.theme = data.theme;
        const currentTheme = [...htmlRoot.classList][0];
        htmlRoot.classList.replace(currentTheme, this.theme);
      }
    },
    async toggleTheme() {
      const { user, docRef } = await getUserData();
      const currentTheme = [...htmlRoot.classList][0];

      if (user && docRef) {
        this.theme = currentTheme === "light" ? "dark" : `light`;
        htmlRoot.classList.replace(currentTheme, this.theme);
        await updateDoc(docRef, {
          theme: this.theme,
        });
      } else {
        this.theme = this.theme === "light" ? "dark" : "light";
        htmlRoot.classList.replace(currentTheme, this.theme);
      }
    },
  },
});
