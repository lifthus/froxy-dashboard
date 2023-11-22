import froxyLogo from "/froxy.jpg";

import { css } from "@emotion/react";

export const mainLogoCss = css`
  border-radius: 25%;
  width: 20rem;
  padding: 1.5rem;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2rem #646cffaa);
  }
`;

type MainLogoProp = {
  href?: string;
};

const MainLogo = ({ href = "/" }: MainLogoProp) => {
  return (
    <a href={href} target={href === "/" ? "_self" : "_blank"}>
      <img css={mainLogoCss} src={froxyLogo} alt="Froxy logo" />
    </a>
  );
};

export default MainLogo;
