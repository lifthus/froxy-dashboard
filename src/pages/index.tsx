import MainLogo from "../components/logo/MainLogo";
import { bigFontCss } from "../css/fontSize";
import { SlightTBMarginDiv } from "../layout/MarginDiv";
import { useClientStore } from "../store/clientStore";
import TopStatusBar from "../components/TopStatusBar";
import ProxyOverview from "../components/overview/ProxyOverview";

function App() {
  const { root, ipAddr, connectedAt } = useClientStore((state) => state);
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
      <TopStatusBar />
      <ProxyOverview />
    </>
  );
}

export default App;
