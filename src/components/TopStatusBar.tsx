import LogoIcon from "./logo/LogoIcon";
import { bigFontCss } from "../css/fontSize";
import { css } from "@emotion/react";
import { useClientStore } from "../store/clientStore";

const topStatusBarCss = css`
  display: flex;
  width: 100%;
  background-color: #00b7ff;
  position: absolute;
  top: 0;
  left: 0;
`;

const statAreaCss = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const statCss = css`
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-left: 0.075rem dashed white;
`;

const TopStatusBar = () => {
  const ipAddr = useClientStore((state) => state.ipAddr);
  return (
    <>
      <div css={topStatusBarCss}>
        <LogoIcon />
        <div>
          <div>Froxy</div>
          <div>
            <b>ROOT</b>
          </div>
        </div>
        <div css={statAreaCss}>
          <div css={statCss}>
            <div>
              <b>IP address</b>
            </div>
            <div>{ipAddr}</div>
          </div>
          <form
            action="/api/session/out"
            method="post"
            css={css`
              height: 100%;
            `}
          >
            <button
              css={css`
                ${bigFontCss}
                background-color: orange;
                height: 100%;
                border: none;
                &:hover {
                  cursor: pointer;
                }
              `}
              type="submit"
            >
              🚪➡
            </button>
          </form>
        </div>
      </div>
      <br />
    </>
  );
};

export default TopStatusBar;
