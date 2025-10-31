import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme); // setItem(key,value) you can store any custom key and value pair like this:
    set({ theme });
  },
}));
