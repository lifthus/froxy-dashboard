import { useParams } from "react-router-dom";
import TopStatusBar from "../../components/TopStatusBar";
import { forwardProxyApi } from "../../api/forwardProxyApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { flexCenterCss } from "../../css/flex";
import { BigOnOffButton } from "../../components/buttons/OnOffButton";

const ForwardProxy = () => {
  const name = useParams().name;
  const { data, isError } = useQuery({
    queryKey: ["forward", name],
    queryFn: () => {
      const data = forwardProxyApi.getForwardProxyInfo(name || "");
      return data;
    },
  });
  if (isError) {
    window.location.href = "/error";
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (target: string) => {
      if (!name) return;
      return forwardProxyApi.removeFromWhitelist(name, target);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forward", name] });
    },
  });

  const { mutate: switchProxy } = useMutation({
    mutationFn: async () => {
      if (!name) return;
      return forwardProxyApi.switchForwardProxy(name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forward", name] });
    },
  });

  return (
    <>
      <TopStatusBar />
      Forward proxy server on port:<b>{data?.port}</b>
      <h1>{name}</h1>
      <div></div>
      <div>
        <BigOnOffButton on={data?.on || false} onClick={() => switchProxy()} />
        <h2>📄 Whitelist</h2>
        <div css={flexCenterCss}>
          <table>
            <tbody>
              {data?.whitelist.map((allowed) => (
                <tr key={"whitelist" + allowed}>
                  <td>{allowed} </td>
                  <td>
                    <button
                      onClick={() => {
                        mutate(allowed);
                      }}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <form action="/api/proxy/forward/whitelist" method="POST">
          <input readOnly type="text" name="name" value={name} hidden />
          <input type="text" name="target" placeholder="IP address" />
          <button type="submit">Add to whitelist</button>
        </form>
      </div>
    </>
  );
};

export default ForwardProxy;
