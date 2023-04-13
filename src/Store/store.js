import create from "zustand";

const useStore = create((set) => ({
  timemode: "24",
  setTimemode: (e) => set(() => ({ timemode: e })),
}));

export default useStore;
