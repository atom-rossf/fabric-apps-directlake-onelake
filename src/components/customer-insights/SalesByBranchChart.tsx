import React from "react";
import { VegaVisual, useCssTheme } from "@microsoft/fabric-visuals";
import { salesByBranch } from "@/queries/customer-insights/sales-by-branch";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";
import { toDataTable } from "@/lib/to-data-table";

export function SalesByBranchChart() {
  const theme = useCssTheme();
  const { connection, query, columnMetadata, vegaLiteSpec } = salesByBranch();
  const { data, isLoading, error } = useSemanticModelQuery({
    connection,
    query,
  });

  if (isLoading) return <div>Loading sales by branch...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data?.status === "error") {
    return <div>Query error: {data.error.message}</div>;
  }
  if (data?.status !== "success") return null;

  const dataTable = toDataTable(data.table, columnMetadata);

  return (
    <div className="chart-container">
      <div className="chart-inner">
        <VegaVisual spec={vegaLiteSpec} data={dataTable} theme={theme} />
      </div>
    </div>
  );
}
