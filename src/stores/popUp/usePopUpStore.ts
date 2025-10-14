import {create} from 'zustand'

interface ModalStore {
  isOpen : boolean
  setOpen : () => void;
  text  : string,
  path : string,
  setDataPopUp : (text : string , path : string) => void;
}

export const usePopUpStore = create<ModalStore>((set) => ({ 
  isOpen : false , 
  text : '',
  path : '',
  setOpen : () => {
    set((state) => ({
      isOpen: !state.isOpen
    }))
  },
  setDataPopUp : (text , path  ) => {
    set(() => ({
      text : text,
      path : path
    }))
  }
}));