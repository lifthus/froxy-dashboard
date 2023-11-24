import { useQuery } from "@tanstack/react-query";

import { clientApi } from "../api/clientApi";

import { useClientStore } from "../store/clientStore";

import MainLogo from "../components/MainLogo";

function App() {
  const root = useClientStore((state) => state.root);

  const { data } = useQuery({
    queryKey: ["client", "ipAddr"],
    queryFn: clientApi.getClientIPAddr,
  });

  const ipAddr = useClientStore((state) => state.ipAddr);

  return (
    <>
      <div>
        <MainLogo href="https://github.com/lifthus/froxy" />
      </div>
      <h1>Froxy</h1>
      <h3>{data}</h3>
      <p>{ipAddr}</p>
      <form action="" method="post">
        <div>
          <label>Root username:</label>
          <input type="text" name="root-username" />
        </div>
        <div>
          <label>Root password:</label>
          <input type="password" name="root-password" />
        </div>
      </form>
    </>
  );
}

export default App;
