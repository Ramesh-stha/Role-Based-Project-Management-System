// store.js
import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  accessToken: null,
  isLoggedOut: false, // <-- new flag
  refreshAttempts: 0,
  hydrated:false,
  setUser: (updater:any) =>
    set((state:any) => ({
      user: typeof updater === "function" ? updater(state.user) : updater,
      hydrated: true,
    })),
  setAccessToken: (token:any) => set({ accessToken: token }),
  setLoggedOut: () => set({ user: null, accessToken: null, isLoggedOut: true }),
  incrementRefreshAttempts: () => set((state:any) => ({ refreshAttempts: state.refreshAttempts + 1 })),
  resetRefreshAttempts: () => set({ refreshAttempts: 0 }),
  setLoading: (loading:any) => set({ loading }),
  clear: () => set({ user: null, accessToken: null, loading: false,hydrated:true }),
}));