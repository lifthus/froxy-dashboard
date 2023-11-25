import axios from "axios";

export const sessionApi = {
  getClientInfo: async (): Promise<ClientInfo> => {
    const res = await axios.get("/api/session");
    if (res.status !== 200) throw new Error("failed to get client info");
    return res.data;
  },
};

export type ClientInfo = {
  ipAddr: string;
  root: boolean;
  iat: string;
};
