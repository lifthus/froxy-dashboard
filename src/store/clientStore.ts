import { create } from "zustand";

type ClientStore = {
  root: boolean;
  setRoot: (isRoot: boolean) => void;

  ipAddr: string;
  setIPAddr: (ipAddr: string) => void;

  connectedAt: Date;
  setConnectedAt: (connectedAt: string) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  root: false,
  setRoot: (isRoot) => set(() => ({ root: isRoot })),

  ipAddr: "",
  setIPAddr: (ipAddr: string) => set(() => ({ ipAddr: ipAddr })),

  connectedAt: new Date(),
  setConnectedAt: (connectedAt: string) => {
    const date = new Date(connectedAt);
    if (date.toString() === "Invalid Date") return;
    set(() => ({ connectedAt: new Date(connectedAt) }));
  },
}));
