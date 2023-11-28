import { css } from "@emotion/react";

const OnOffCss = (on: boolean) =>
  css`
    background-color: ${on ? "lightgreen" : "red"};
    border: ${on ? "inset" : "outset"} gray 0.1rem;
    border-radius: 100%;
    &:hover {
      cursor: pointer;
    }
  `;

type OnOffButtonProps = {
  on: boolean;
  onClick: () => void;
};

const OnOffButton = ({ on, onClick }: OnOffButtonProps) => {
  return (
    <button css={OnOffCss(on)} onClick={onClick}>
      &nbsp;
    </button>
  );
};

export default OnOffButton;

const BigOnOffCss = (on: boolean) =>
  css`
    width: 4rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${on ? "green" : "white"};
    background-color: ${on ? "lightgreen" : "red"};
    border: ${on ? "inset" : "outset"} gray 0.1rem;
    border-radius: 15%;
    &:hover {
      cursor: pointer;
    }
  `;

export const BigOnOffButton = ({ on, onClick }: OnOffButtonProps) => {
  return (
    <button css={BigOnOffCss(on)} onClick={onClick}>
      {on ? "ON" : "OFF"}
    </button>
  );
};
