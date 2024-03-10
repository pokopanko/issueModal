import { useState } from "react";
import { TablePartsComponent } from "../components/TablePartsComponent";
import { sampleData } from "../common/data/tableData";
import { TableData } from "../common/type/tabletype";

type PageComponentState = {
  clickedName: string | null;
};

export const TablePage: React.FC = () => {
  const [clickedName, setClickedName] =
    useState<PageComponentState["clickedName"]>(null);

  const handleRowClick = (item: TableData) => {
    if (!item.isHeader) {
      setClickedName(item.name);
    }
  };

  return (
    <div>
      <h1>Clicked Name: {clickedName}</h1>
      <TablePartsComponent data={sampleData} onRowClick={handleRowClick} />
    </div>
  );
};
