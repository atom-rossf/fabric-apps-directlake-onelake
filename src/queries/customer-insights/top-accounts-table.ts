import baseQuery from "./top-accounts-table.dax?raw";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[CustomerID]": { name: "CustomerID", displayName: "Customer ID" },
  "[CustomerName]": { name: "CustomerName", displayName: "Customer Name" },
  "[Revenue]": { name: "Revenue", displayName: "Revenue", format: "$#,0.00" },
  "[LTV]": { name: "LTV", displayName: "Lifetime Value", format: "$#,0.00" },
};

export function topAccountsTable() {
  const query = baseQuery;
  return { connection, query, columnMetadata };
}
