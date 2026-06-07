import baseQuery from "./sales-by-branch.dax?raw";
import spec from "./sales-by-branch.json";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[BranchName]": { name: "BranchName", displayName: "Branch" },
  BranchName: { name: "BranchName", displayName: "Branch" },
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

export function salesByBranch() {
  const query = baseQuery;
  const vegaLiteSpec = spec;
  return { connection, query, columnMetadata, vegaLiteSpec };
}
