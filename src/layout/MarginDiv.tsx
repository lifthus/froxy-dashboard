import { css } from "@emotion/react";

const MarginTBCss = css`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

type MarginDivProps = {
  children?: React.ReactNode;
};

export const SlightTBMarginDiv = (props: MarginDivProps) => (
  <div css={MarginTBCss}>{props.children}</div>
);
