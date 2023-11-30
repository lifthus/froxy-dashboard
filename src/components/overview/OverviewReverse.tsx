import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { reverseProxyApi } from "../../api/reverseProxyApi";

import { overviewCss } from "../../css/overview";
import { anchorNoStyleCss } from "../../css/anchor";
import { flexCenterCss } from "../../css/flex";
import OnOffButton from "../buttons/OnOffButton";
import { Link } from "react-router-dom";

const OverviewReverse = () => {
  const { data } = useQuery({
    queryKey: ["overview", "reverse"],
    queryFn: () => {
      const data = reverseProxyApi.getReverseProxiesOverview();
      return data;
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (name: string) => reverseProxyApi.switchReverseProxy(name),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["overview", "reverse"] }),
  });

  return (
    <table>
      <tbody>
        {data &&
          Object.keys(data).map((name) => (
            <tr key={name + " overview"}>
              <td>
                <OnOffButton
                  on={data[name].on}
                  onClick={() => {
                    mutate(name);
                  }}
                />
              </td>
              <td css={overviewCss}>
                <Link
                  css={anchorNoStyleCss}
                  to={`reverse/${name}`}
                  key={name + " overview"}
                >
                  <b>{name}</b>:{data[name].port}
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default OverviewReverse;
