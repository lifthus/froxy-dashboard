import { useQuery } from "@tanstack/react-query";
import { forwardProxyApi } from "../../api/forwardProxyApi";
import { overviewCss } from "../../css/overview";
import { anchorNoStyleCss } from "../../css/anchor";
import { Link } from "react-router-dom";

const OverviewForward = () => {
  const { data } = useQuery({
    queryKey: ["overview", "forward"],
    queryFn: () => {
      const data = forwardProxyApi.getForwardProxiesOverview();
      return data;
    },
  });
  return (
    <div>
      {data &&
        Object.keys(data).map((name) => (
          <Link
            css={anchorNoStyleCss}
            to={`forward/${name}`}
            key={name + " overview"}
          >
            <div css={overviewCss}>
              <div>
                <b>{name}</b>:{data[name].port}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default OverviewForward;
