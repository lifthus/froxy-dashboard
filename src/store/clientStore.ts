import { create } from "zustand";

type ClientStore = {
  root: boolean;
  setRoot: () => void;
  unsetRoot: () => void;

  ipAddr: string;
  setIpAddr: (ipAddr: string) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  root: false,
  setRoot: () => set(() => ({ root: true })),
  unsetRoot: () => set(() => ({ root: false })),

  ipAddr: "",
  setIpAddr: (ipAddr: string) => set(() => ({ ipAddr: ipAddr })),
}));
