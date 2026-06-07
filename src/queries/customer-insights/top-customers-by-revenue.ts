import baseQuery from "./top-customers-by-revenue.dax?raw";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[CustomerName]": {
    name: "CustomerName",
    displayName: "Customer Name",
  },
  CustomerName: {
    name: "CustomerName",
    displayName: "Customer Name",
  },
  "[TotalSales]": {
    name: "TotalSales",
    displayName: "Total Sales (FYTD)",
    format: "$#,0.00",
  },
  TotalSales: {
    name: "TotalSales",
    displayName: "Total Sales (FYTD)",
    format: "$#,0.00",
  },
};

export function topCustomersByRevenue() {
  const query = baseQuery;
  return { connection, query, columnMetadata };
}
