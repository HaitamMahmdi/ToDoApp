import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: "light",
  }),
  actions: {
    toggleTheme() {
      const root = document.getElementById(`html`);
      if (root.classList.contains(`${this.theme}`)) {
        const value = this.theme === "light" ? `dark` : "light";
        root.classList.replace(`${this.theme}`, `${value}`);
        this.theme = value;
      } else {
        root.classList.add(`${this.theme}`);
      }
    },
  },
});
