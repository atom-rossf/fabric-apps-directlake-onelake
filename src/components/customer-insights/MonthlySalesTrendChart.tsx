import React from "react";
import { VegaVisual, useCssTheme } from "@microsoft/fabric-visuals";
import { monthlySalesTrend } from "@/queries/customer-insights/monthly-sales-trend";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";
import { toDataTable } from "@/lib/to-data-table";

export function MonthlySalesTrendChart() {
  const theme = useCssTheme();
  const { connection, query, columnMetadata, vegaLiteSpec } = monthlySalesTrend();
  const { data, isLoading, error } = useSemanticModelQuery({
    connection,
    query,
  });

  if (isLoading) return <div>Loading monthly sales trend...</div>;
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
