import baseQuery from "./branch-performance.dax?raw";

const connection = "customerInsights";

export const columnMetadata = {
  "[BranchName]": { name: "BranchName", displayName: "Branch" },
  BranchName: { name: "BranchName", displayName: "Branch" },
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
  "[MarginPct]": {
    name: "MarginPct",
    displayName: "Margin %",
    format: "0.0%",
  },
  MarginPct: {
    name: "MarginPct",
    displayName: "Margin %",
    format: "0.0%",
  },
};

export function branchPerformance() {
  const query = baseQuery;
  return { connection, query, columnMetadata };
}
