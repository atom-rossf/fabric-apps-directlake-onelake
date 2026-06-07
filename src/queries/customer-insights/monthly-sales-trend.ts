import baseQuery from "./monthly-sales-trend.dax?raw";
import spec from "./monthly-sales-trend.json";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[Year]": { name: "Year", displayName: "Year", format: "0" },
  Year: { name: "Year", displayName: "Year", format: "0" },
  "[MonthNum]": { name: "MonthNum", displayName: "Month Number", format: "0" },
  MonthNum: { name: "MonthNum", displayName: "Month Number", format: "0" },
  "[FiscalMonthIndex]": {
    name: "FiscalMonthIndex",
    displayName: "Fiscal Month Index",
    format: "0",
  },
  FiscalMonthIndex: {
    name: "FiscalMonthIndex",
    displayName: "Fiscal Month Index",
    format: "0",
  },
  "[MonthLabel]": { name: "MonthLabel", displayName: "Month" },
  MonthLabel: { name: "MonthLabel", displayName: "Month" },
  "[TotalSales]": {
    name: "TotalSales",
    displayName: "Total Sales",
    format: "$#,0.00",
  },
  TotalSales: {
    name: "TotalSales",
    displayName: "Total Sales",
    format: "$#,0.00",
  },
};

export function monthlySalesTrend() {
  const query = baseQuery;
  const vegaLiteSpec = spec;
  return { connection, query, columnMetadata, vegaLiteSpec };
}
