import baseQuery from "./summary-metrics.dax?raw";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  TotalSalesFYTD: {
    name: "TotalSalesFYTD",
    displayName: "Total Sales (FYTD)",
    format: "$#,0.00",
  },
  GrossProfitFYTD: {
    name: "GrossProfitFYTD",
    displayName: "Gross Profit (FYTD)",
    format: "$#,0.00",
  },
  MarginPctFYTD: {
    name: "MarginPctFYTD",
    displayName: "Margin % (FYTD)",
    format: "0.00%",
  },
  ActiveCustomers: {
    name: "ActiveCustomers",
    displayName: "Active Customers",
    format: "#,0",
  },
  SalesGrowthVsPY: {
    name: "SalesGrowthVsPY",
    displayName: "Sales Growth vs PY",
    format: "0.00%",
  },
};

export function summaryMetrics() {
  return { connection, query: baseQuery, columnMetadata };
}
