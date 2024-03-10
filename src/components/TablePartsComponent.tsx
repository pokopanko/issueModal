import { TableData } from '../common/type/tabletype';

type TablePartsProps = {
  data: TableData[];
  onRowClick: (target: TableData) => void; // 行がクリックされたときに呼び出す関数の型を指定
};

export const TablePartsComponent: React.FC<TablePartsProps> = ({ data, onRowClick }) => {
  return (
    <table >
      <tbody >
        {data.map((item, index) => (
          <tr  key={index} onClick={() => onRowClick(item)}>
            {item.data.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
