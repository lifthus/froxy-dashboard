import OverviewForward from "./OverviewForward";
import OverviewReverse from "./OverviewReverse";

const ProxyOverview = () => {
  return (
    <div>
      <div>
        <h2>Forward proxies</h2>
        <OverviewForward />
        <h2>Reverse proxies</h2>
        <OverviewReverse />
      </div>
    </div>
  );
};

export default ProxyOverview;
