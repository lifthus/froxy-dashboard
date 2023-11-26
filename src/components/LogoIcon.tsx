import { Link } from "react-router-dom";
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
    <Link to="/">
      <img css={logoIconCss} src={froxyLogo} alt="Froxy logo" />
    </Link>
  );
};

export default LogoIcon;
