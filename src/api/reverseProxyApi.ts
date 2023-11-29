import axios from "axios";

export const reverseProxyApi = {
  getReverseProxiesOverview: async (): Promise<ReverseProxyOverview> => {
    const res = await axios.get("/api/proxy/reverse");
    if (res.status !== 200)
      throw new Error("failed to get reverse proxies overview");
    return res.data;
  },
  getReverseProxyInfo: async (name: string): Promise<ReverseProxyInfo> => {
    const res = await axios.get(`/api/proxy/reverse/${name}`);
    if (res.status !== 200) throw new Error("failed to get reverse proxy info");
    return res.data;
  },
  switchReverseProxy: async (name: string): Promise<void> => {
    const res = await axios.post(`/api/proxy/reverse/switch/${name}`);
    if (res.status !== 200) throw new Error("failed to switch reverse proxy");
  },
};

export type ReverseProxyOverview = {
  [key: string]: {
    on: boolean;
    port: string;
  };
};

export type ReverseProxyInfo = {
  on: boolean;
  port: string;
};
