import { create } from 'zustand'

interface ModalStore {
  isOpen: boolean
  text: string
  path: string
  action: () => void

  setOpen: () => void
  setDataPopUp: (text: string, path: string, action: () => void) => void
}

export const usePopUpStore = create<ModalStore>((set) => ({
  isOpen: false,
  text: '',
  path: '',
  action: () => {},

  setOpen: () => {
    set((state) => ({ isOpen: !state.isOpen }))
  },


  setDataPopUp: (text, path, action) => {
    set(() => ({
      text,
      path,
      action,
    }))
  },
}))
