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
