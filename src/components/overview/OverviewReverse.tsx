import { useQuery } from "@tanstack/react-query";
import { reverseProxyApi } from "../../api/reverseProxyApi";

import { overviewCss } from "../../css/overview";
import { anchorNoStyleCss } from "../../css/anchor";

const OverviewReverse = () => {
  const { data } = useQuery({
    queryKey: ["overview", "reverse"],
    queryFn: () => {
      const data = reverseProxyApi.getReverseProxiesOverview();
      return data;
    },
  });
  return (
    <div>
      {data &&
        Object.keys(data).map((name) => (
          <a
            css={anchorNoStyleCss}
            href={`reverse/${name}`}
            key={name + " overview"}
          >
            <div css={overviewCss} key={name + " overview"}>
              <div>
                <b>{name}</b>:{data[name].port}
              </div>
            </div>
          </a>
        ))}
    </div>
  );
};

export default OverviewReverse;
