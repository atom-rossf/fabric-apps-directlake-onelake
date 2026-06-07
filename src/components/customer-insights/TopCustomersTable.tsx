import React from "react";
import { DataGrid } from "@microsoft/fabric-datagrid";
import { useCssTheme } from "@microsoft/fabric-visuals";
import { topCustomersByRevenue } from "@/queries/customer-insights/top-customers-by-revenue";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";
import { toDataTable } from "@/lib/to-data-table";

export function TopCustomersTable() {
  const theme = useCssTheme();
  const { connection, query, columnMetadata } = topCustomersByRevenue();
  const { data, isLoading, error } = useSemanticModelQuery({
    connection,
    query,
  });

  if (isLoading) return <div>Loading top customers...</div>;
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
