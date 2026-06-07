import React from "react";
import { DataGrid } from "@microsoft/fabric-datagrid";
import { useCssTheme } from "@microsoft/fabric-visuals";
import { branchPerformance } from "@/queries/customer-insights/branch-performance";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";
import { toDataTable } from "@/lib/to-data-table";

export function BranchPerformanceTable() {
  const theme = useCssTheme();
  const { connection, query, columnMetadata } = branchPerformance();
  const { data, isLoading, error } = useSemanticModelQuery({
    connection,
    query,
  });

  if (isLoading) return <div>Loading branch performance...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data?.status === "error") {
    return <div>Query error: {data.error.message}</div>;
  }
  if (data?.status !== "success") return null;

  const dataTable = toDataTable(data.table, columnMetadata);

  return (
    <div className="chart-container chart-grid">
      <div className="chart-inner">
        <DataGrid data={dataTable} theme={theme} />
      </div>
    </div>
  );
}
