import React from "react";
import { summaryMetrics } from "@/queries/customer-insights/summary-metrics";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";

export default function LandingPage() {
  const { connection, query } = summaryMetrics();
  const { data, isLoading, error } = useSemanticModelQuery({ connection, query });

  if (isLoading) return <div>Loading summary...</div>;
  if (error) return <div>Error loading summary: {String(error)}</div>;
  if (!data || data.status !== "success") return <div>No summary data available.</div>;

  // Expect a single-row table with columns containing metric values.
  const cols = data.table.columns.map(c => c.name);
  const row = (data.table.rows && data.table.rows[0]) || [];

  const get = (colName: string) => {
    const idx = cols.indexOf(colName);
    return idx >= 0 ? row[idx] : undefined;
  };

  const total = get("TotalCustomers");
  const avg = get("AvgLTV");
  const high = get("HighRisk");
  const medium = get("MediumRisk");
  const low = get("LowRisk");

  return (
    <div style={{ padding: 16 }}>
      <h2>Customer Insights — Summary</h2>
      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <MetricCard label="Total Customers" value={total} />
        <MetricCard label="Average LTV" value={avg} format="currency" />
        <MetricCard label="High Risk" value={high} />
        <MetricCard label="Medium Risk" value={medium} />
        <MetricCard label="Low Risk" value={low} />
      </div>
    </div>
  );
}

function MetricCard({ label, value, format }: { label: string; value: any; format?: "currency" | "number" }) {
  const display = value == null ? "—" : format === "currency" ? `$${Number(value).toLocaleString()}` : String(value);
  return (
    <div style={{ background: "var(--card-bg, #fff)", padding: 12, borderRadius: 8, minWidth: 140, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
      <div style={{ fontSize: 12, color: "var(--muted, #666)" }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 600 }}>{display}</div>
    </div>
  );
}
