import { create } from 'zustand';

interface useLoginModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModel = create<useLoginModelStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModel;
