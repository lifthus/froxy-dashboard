import froxyLogo from "/froxy.jpg";

import { css } from "@emotion/react";

const logoIconCss = css`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  margin: 0.2rem;
`;

const LogoIcon = () => {
  return (
    <a href="/" target="_self">
      <img css={logoIconCss} src={froxyLogo} alt="Froxy logo" />
    </a>
  );
};

export default LogoIcon;
