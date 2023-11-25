import { css } from "@emotion/react";

export const anchorNoStyleCss = css`
  text-decoration: inherit;
  color: inherit;
  cursor: auto;

  $:visited {
    text-decoration: inherit;
    color: inherit;
  }

  &:hover {
    background-color: #545454;
    cursor: pointer;
  }
`;
