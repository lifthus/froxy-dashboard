import { useParams } from "react-router-dom";
import MainLogo from "../../components/MainLogo";

const ReverseProxy = () => {
  const name = useParams().name;
  return (
    <div>
      <MainLogo />
      <div>🚧 working 9 to 5 🚧</div>
    </div>
  );
};

export default ReverseProxy;
