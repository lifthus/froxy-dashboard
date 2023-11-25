import axios from "axios";

export const forwardProxyApi = {
  getForwardProxiesOverview: async () => {
    const res = await axios.get("/api/proxy/forward");
    if (res.status !== 200)
      throw new Error("failed to get forward proxies overview");
    return res.data;
  },
};
