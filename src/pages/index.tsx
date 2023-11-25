import { useQuery } from "@tanstack/react-query";

import { sessionApi } from "../api/sessionApi";

import MainLogo from "../components/MainLogo";
import { bigFontCss } from "../css/fontSize";
import { SlightTBMarginDiv } from "../components/MarginDiv";
import { useClientStore } from "../store/clientStore";

function App() {
  const { setRoot, setIPAddr, setConnectedAt, root, ipAddr, connectedAt } =
    useClientStore();
  useQuery({
    queryKey: ["client", "ipAddr"],
    queryFn: async () => {
      const data = await sessionApi.getClientInfo();
      setRoot(data?.root || false);
      setIPAddr(data?.ipAddr || "?");
      setConnectedAt(data?.iat || "");
      return data;
    },
  });

  if (!root)
    return (
      <>
        <div>
          <MainLogo href="https://github.com/lifthus/froxy" />
        </div>
        <h1>Froxy</h1>
        <form action="/api/session/root" method="post">
          <SlightTBMarginDiv>
            <label css={bigFontCss}>Root username</label>
            <br />
            <input css={bigFontCss} type="text" name="username" />
          </SlightTBMarginDiv>
          <SlightTBMarginDiv>
            <label css={bigFontCss}>Root password</label>
            <br />
            <input css={bigFontCss} type="password" name="password" />
          </SlightTBMarginDiv>
          <SlightTBMarginDiv>
            <button css={bigFontCss} type="submit">
              Sign in
            </button>
          </SlightTBMarginDiv>
        </form>
        <br />
        <SlightTBMarginDiv>
          <b>IP address</b>
          <br />
          {ipAddr}
          <br />
          <b>Connected at</b>
          <br />
          {connectedAt.toString()}
        </SlightTBMarginDiv>
      </>
    );
  return (
    <>
      ROOT
      <form action="/api/session/out" method="post">
        <button css={bigFontCss} type="submit">
          Sign out
        </button>
      </form>
    </>
  );
}

export default App;
