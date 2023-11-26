import axios from "axios";

export const forwardProxyApi = {
  getForwardProxiesOverview: async (): Promise<ForwardProxyOverview> => {
    const res = await axios.get("/api/proxy/forward");
    if (res.status !== 200)
      throw new Error("failed to get forward proxies overview");
    return res.data;
  },
  getForwardProxyInfo: async (name: string): Promise<ForwardProxyInfo> => {
    const res = await axios.get("/api/proxy/forward/" + name);
    if (res.status === 404) throw new Error("forward proxy not found");
    if (res.status !== 200) throw new Error("failed to get forward proxy info");
    return res.data;
  },
  removeFromWhitelist: async (name: string, target: string): Promise<void> => {
    const res = await axios.delete(
      "/api/proxy/forward/whitelist/" + name + "/" + target
    );
    if (res.status !== 200) throw new Error("failed to remove from whitelist");
  },
};

type ForwardProxyOverview = {
  [key: string]: {
    allowed: string[];
    port: string;
  };
};

type ForwardProxyInfo = {
  allowed: string[];
  port: string;
};
