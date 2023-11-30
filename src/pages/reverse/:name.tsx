import { useParams } from "react-router-dom";
import TopStatusBar from "../../components/TopStatusBar";
import { BigOnOffButton } from "../../components/buttons/OnOffButton";
import BigText from "../../components/text/BigText";
import NormalText from "../../components/text/NormalText";
import { flexCenterCss } from "../../css/flex";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { reverseProxyApi } from "../../api/reverseProxyApi";
import ReverseProxyTable from "../../components/ReverseProxyTable";

const ReverseProxy = () => {
  const name = useParams().name;
  const { data, isError } = useQuery({
    queryKey: ["forward", name],
    queryFn: () => {
      const data = reverseProxyApi.getReverseProxyInfo(name || "");
      return data;
    },
  });
  if (isError) {
    window.location.href = "/error";
  }

  const queryClient = useQueryClient();

  const { mutate: switchProxy } = useMutation({
    mutationFn: async () => {
      if (!name) return;
      return reverseProxyApi.switchReverseProxy(name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forward", name] });
    },
  });
  return (
    <>
      <TopStatusBar />
      <div css={flexCenterCss}>
        <BigText>
          <b>{name}</b>
        </BigText>
        <NormalText>:{data?.port}</NormalText>
      </div>
      <br />
      <BigOnOffButton
        name="Reverse Proxy"
        on={data?.on || false}
        onClick={() => switchProxy()}
      />
      <br />
      <br />
      {!!data && <ReverseProxyTable sec={data.sec} proxyMap={data?.proxyMap} />}
    </>
  );
};

export default ReverseProxy;
