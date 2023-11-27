import { useQuery } from "@tanstack/react-query";
import { sessionApi } from "../api/sessionApi";
import { useEffect } from "react";
import { useClientStore } from "../store/clientStore";

type ClientInfoProviderProps = {
  children?: React.ReactNode;
};

const ClientInfoProvider = ({ children }: ClientInfoProviderProps) => {
  const { setRoot, setIPAddr, setConnectedAt } = useClientStore(
    (state) => state
  );

  const { data } = useQuery({
    queryKey: ["client", "ipAddr"],
    queryFn: () => sessionApi.getClientInfo(),
  });

  useEffect(() => {
    if (!data) return;
    setRoot(data.root);
    setIPAddr(data.ipAddr);
    setConnectedAt(data.iat);
  }, [data]);

  return <>{children}</>;
};

export default ClientInfoProvider;
