import { css } from "@emotion/react";

const NormalTextCss = css`
  font-size: 1.5rem;
`;

type NormalTextProps = {
  children: React.ReactNode;
};

const NormalText = ({ children }: NormalTextProps) => {
  return <div css={NormalTextCss}>{children}</div>;
};

export default NormalText;
