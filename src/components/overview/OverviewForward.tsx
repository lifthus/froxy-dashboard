import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { forwardProxyApi } from "../../api/forwardProxyApi";
import { overviewCss, overviewTdCss } from "../../css/overview";
import { anchorNoStyleCss } from "../../css/anchor";
import { Link } from "react-router-dom";
import OnOffButton from "../buttons/OnOffButton";

const OverviewForward = () => {
  const { data } = useQuery({
    queryKey: ["overview", "forward"],
    queryFn: () => {
      const data = forwardProxyApi.getForwardProxiesOverview();
      return data;
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (name: string) => forwardProxyApi.switchForwardProxy(name),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["overview", "forward"] }),
  });

  return (
    <table>
      <tbody>
        {data &&
          Object.keys(data).map((name) => (
            <tr key={name + " overview"}>
              <td>
                <OnOffButton on={data[name].on} onClick={() => mutate(name)} />
              </td>
              <td css={overviewCss}>
                <Link
                  css={anchorNoStyleCss}
                  to={`forward/${name}`}
                  key={name + " overview"}
                >
                  <b>{name}</b>:{data[name].port}
                </Link>
              </td>
              <td css={overviewTdCss}>👨‍💻:{String(data[name].whitelistLen)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default OverviewForward;
