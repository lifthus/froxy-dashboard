import { css } from "@emotion/react";

const BigTextCss = css`
  font-size: 1.75rem;
`;

type NormalTextProps = {
  children: React.ReactNode;
};

const BigText = ({ children }: NormalTextProps) => {
  return <div css={BigTextCss}>{children}</div>;
};

export default BigText;
