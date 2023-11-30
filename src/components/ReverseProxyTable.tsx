import { ProxyMap } from "../api/reverseProxyApi";

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
          <td>Targets</td>
        </tr>
      </thead>
      <tbody>
        {table.map((row, i) => (
          <tr key={`proxy table row ${i}`}>
            {row.map((cell: any, j: number) => {
              if (cell === null) return null;
              if (j === 2) {
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
  const result: any[] = [];
  scanRowSpan(proxyMap, result, 0);
  return result.reduce(
    (acc, cur) => cur.map((_: any, i: number) => [...(acc[i] || []), cur[i]]),
    []
  );
};

const scanRowSpan = (children: any, result: any[], depth: number): number => {
  if (result.length < depth + 1) result.push([]);
  if (depth === 2) {
    result[depth] = result[depth].concat(children);
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
