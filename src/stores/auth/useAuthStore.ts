import { AuthStore, User } from "@/Interfaces/AuthStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      logged: false,
      user: {
        username: "Eduard Villamil",
        password: "12345678",
        role: "admin",
        email: "eduard@gmail.com",
      },

      login: () => {
        document.cookie = `auth=true; path=/; max-age=${60 * 60};`;
        set({ logged: true });

      },

      logout: () => {
        document.cookie = "auth=; path=/; max-age=0;";
        localStorage.clear()
        set({ logged: false });
        
      },

      setUser: (newUser: User) => set({ user: newUser }),
    }),
    {
      name: "auth-storage",
    }
  )
);
