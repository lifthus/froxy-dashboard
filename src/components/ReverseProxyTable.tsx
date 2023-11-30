import { useEffect, useState } from "react";
import { ProxyMap, ProxyTarget } from "../api/reverseProxyApi";
import { flexCenterCss } from "../css/flex";
import { css } from "@emotion/react";

type ReverseProxyTableProps = {
  proxyMap: ProxyMap;
};

const ReverseProxyTable = ({ proxyMap }: ReverseProxyTableProps) => {
  const table = formTable(proxyMap);
  return (
    <table>
      <thead>
        <tr>
          <td>Host</td>
          <td>Paths</td>
          <td></td>
          <td>Targets</td>
        </tr>
      </thead>
      <tbody>
        {table.map((row, i) => (
          <tr key={`proxy table row ${i}`}>
            {row.map((cell: any, j: number) => {
              if (cell === null) return null;
              if (j === 3) {
                return <td key={`${i} ${j} ${cell.url}`}>{cell.url}</td>;
              }
              return (
                <td key={`${i} ${j} ${cell[0]}`} rowSpan={cell[1]}>
                  {cell[0]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReverseProxyTable;

const formTable = (proxyMap: ProxyMap): any[] => {
  const result: any[] = [[], [], [], []];
  scanRowSpan(proxyMap, result, 0);
  return result.reduce(
    (acc, cur) => cur.map((_: any, i: number) => [...(acc[i] || []), cur[i]]),
    []
  );
};

const scanRowSpan = (children: any, result: any[], depth: number): number => {
  if (depth === 2) {
    children.forEach((child: ProxyTarget) => {
      result[2].push([<TargetOnSign on={child.on} />, 1]);
    });
    result[3] = result[3].concat(children);
    return children.length;
  }
  let rowSpan = 0;
  for (let child in children) {
    let cnt = 0;
    result[depth].push([child]);
    cnt += scanRowSpan(children[child], result, depth + 1);
    result[depth][result[depth].length - 1].push(cnt);
    for (let i = 0; i < cnt - 1; i++) {
      result[depth].push(null);
    }
    rowSpan += cnt;
  }
  return rowSpan;
};

const TargetOnSign = ({ on }: { on: boolean }) => {
  const [green, setGreen] = useState(0);
  const arrows = ["▶️", "▶️", "▶️"];
  useEffect(() => {
    if (!on) return;
    const interval = setInterval(() => {
      setGreen((prev) => (prev + 1) % 3);
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <span>
      {arrows.map((arrow, i) => {
        if (!on) return <span key={`arrow ${i}`}>{arrow}</span>;
        if (green === i)
          return (
            <span css={greenCss} key={`arrow ${i}`}>
              {arrow}
            </span>
          );
        return <span key={`arrow ${i}`}>{arrow}</span>;
      })}
    </span>
  );
};

const greenCss = css`
  color: limegreen;
`;
