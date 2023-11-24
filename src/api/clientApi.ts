import axios from "axios";

export const clientApi = {
  getClientIPAddr: async (): Promise<string> => {
    const res = await axios.get("/api/client/ipaddr");
    if (res.status !== 200) throw new Error("failed to get client IP address");
    return res.data;
  },
};
