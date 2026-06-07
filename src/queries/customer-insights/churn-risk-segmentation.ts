import baseQuery from "./churn-risk-segmentation.dax?raw";
import spec from "./churn-risk-segmentation.json";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[CustomerID]": { name: "CustomerID", displayName: "Customer ID" },
  "[CustomerName]": { name: "CustomerName", displayName: "Customer Name" },
  "[LTV]": { name: "LTV", displayName: "Lifetime Value", format: "$#,0.00" },
  "[AccountStatus]": { name: "AccountStatus", displayName: "Account Status" },
  "[ChurnScore]": { name: "ChurnScore", displayName: "Churn Score" },
  "[RiskSegment]": { name: "RiskSegment", displayName: "Risk Segment" },
};

export function churnRiskSegmentation() {
  const query = baseQuery;
  const vegaLiteSpec = spec;
  return { connection, query, columnMetadata, vegaLiteSpec };
}
