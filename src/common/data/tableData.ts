import { TableData } from "../type/tabletype";

export const sampleData: TableData[] = [
  {
    isHeader: true,
    data: ["Header 1", "Header 2", "Header 3"],
    name: "Header Row",
  },
  {
    isHeader: false,
    data: ["Data 1-1", "Data 1-2", "Data 1-3"],
    name: "Row 1",
  },
  {
    isHeader: false,
    data: ["Data 2-1", "Data 2-2", "Data 2-3"],
    name: "Row 2",
  },
  {
    isHeader: true,
    data: ["Header 2-1", "Header 2-1", "Header 2-3"],
    name: "Header Row",
  },
  {
    isHeader: false,
    data: ["Data 3-1", "Data 3-2", "Data 3-3"],
    name: "Row 3",
  },
  {
    isHeader: false,
    data: ["Data 4-1", "Data 4-2", "Data 4-3"],
    name: "Row 4",
  },
  // Add more sample data as needed
];
