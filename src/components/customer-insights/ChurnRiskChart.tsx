import React from "react";
import { VegaVisual, useCssTheme } from "@microsoft/fabric-visuals";
import { churnRiskSegmentation } from "@/queries/customer-insights/churn-risk-segmentation";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";
import { toDataTable } from "@/lib/to-data-table";

export function ChurnRiskChart() {
  const theme = useCssTheme();
  const { connection, query, columnMetadata, vegaLiteSpec } =
    churnRiskSegmentation();
  const { data, isLoading, error } = useSemanticModelQuery({
    connection,
    query,
  });

  if (isLoading) return <div>Loading churn risk chart...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data?.status === "error")
    return <div>Query error: {data.error.message}</div>;
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
