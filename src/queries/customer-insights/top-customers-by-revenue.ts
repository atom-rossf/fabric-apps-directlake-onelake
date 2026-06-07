import baseQuery from "./top-customers-by-revenue.dax?raw";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[CustomerCompany]": {
    name: "CustomerCompany",
    displayName: "Customer",
  },
  CustomerCompany: {
    name: "CustomerCompany",
    displayName: "Customer",
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
