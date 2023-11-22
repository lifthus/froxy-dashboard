import { mainLogoCss } from "../css/mainLogo";
import froxyLogo from "/froxy.jpg";

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
