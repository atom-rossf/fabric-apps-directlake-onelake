import baseQuery from "./customer-ltv-distribution.dax?raw";
import spec from "./customer-ltv-distribution.json";
import type { ColumnMetadataMap } from "@/lib/to-data-table";

const connection = "customerInsights";

export const columnMetadata: ColumnMetadataMap = {
  "[CustomerID]": { name: "CustomerID", displayName: "Customer ID" },
  "[CustomerName]": { name: "CustomerName", displayName: "Customer Name" },
  "[LTV]": { name: "LTV", displayName: "Lifetime Value", format: "$#,0.00" },
  "[LTVBucket]": { name: "LTVBucket", displayName: "LTV Bucket" },
};

export function customerLtvDistribution() {
  const query = baseQuery;
  const vegaLiteSpec = spec;
  return { connection, query, columnMetadata, vegaLiteSpec };
}
