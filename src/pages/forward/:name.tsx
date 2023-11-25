import { useParams } from "react-router-dom";

const ForwardProxy = () => {
  const name = useParams().name;
  return <div>:name {name}</div>;
};

export default ForwardProxy;
