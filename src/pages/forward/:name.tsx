import { useParams } from "react-router-dom";
import TopStatusBar from "../../components/TopStatusBar";
import { forwardProxyApi } from "../../api/forwardProxyApi";
import { useQuery } from "@tanstack/react-query";
import { css } from "@emotion/react";

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

  return (
    <>
      <TopStatusBar />
      Forward proxy server on port:<b>{data?.port}</b>
      <h1>{name}</h1>
      <div></div>
      <div>
        <h2>📄 Whitelist</h2>
        {data?.allowed.map((allowed) => (
          <>a</>
        ))}
        <form action="/api/proxy/forward/whitelist" method="POST">
          <input readOnly type="text" name="name" value={name} hidden />
          <input type="text" name="target" placeholder="123.123.123.123" />
          <button type="submit">Add to whitelist</button>
        </form>
      </div>
    </>
  );
};

export default ForwardProxy;
