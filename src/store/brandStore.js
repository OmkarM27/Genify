import { create } from 'zustand'

const useBrandStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}))

export default useBrandStore
