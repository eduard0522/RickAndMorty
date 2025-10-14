import { AuthStore, User } from "@/Interfaces/AuthStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      logged: false,
      user: {
        username: 'Eduard Villamil',
        password: '12345678',
        role: 'admin',
        email: 'eduard@gmail.com',
      },

      login: () => set(() => ({ logged: true })),

      logout: () => set(() => ({ logged: false })),

      setUser: (newUser: User) => set(() => ({ user: newUser })),
    }),
    {
      name: 'auth-storage', 
    }
  )
);
