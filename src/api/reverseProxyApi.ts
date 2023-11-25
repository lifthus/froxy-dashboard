import axios from "axios";

export const reverseProxyApi = {
  getReverseProxiesOverview: async () => {
    const res = await axios.get("/api/proxy/reverse");
    if (res.status !== 200)
      throw new Error("failed to get reverse proxies overview");
    return res.data;
  },
};
