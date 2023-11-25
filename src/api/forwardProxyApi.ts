import axios from "axios";

export const forwardProxyApi = {
  getForwardProxiesOverview: async (): Promise<ForwardProxyOverview> => {
    const res = await axios.get("/api/proxy/forward");
    if (res.status !== 200)
      throw new Error("failed to get forward proxies overview");
    return res.data;
  },
};

type ForwardProxyOverview = {
  [key: string]: {
    allowed: string[];
    port: string;
  };
};
