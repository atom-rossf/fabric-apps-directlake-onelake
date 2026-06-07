import { summaryMetrics } from "@/queries/customer-insights/summary-metrics";
import { useSemanticModelQuery } from "@/hooks/use-semantic-model-query";

type MetricFormat = "currency" | "number" | "percent";

export default function LandingPage() {
  const { connection, query } = summaryMetrics();
  const { data, isLoading, error } = useSemanticModelQuery({ connection, query });

  if (isLoading) return <div style={{ padding: 16 }}>Loading sales summary...</div>;
  if (error) return <div style={{ padding: 16 }}>Error loading sales summary: {error.message}</div>;
  if (data?.status === "error") {
    return <div style={{ padding: 16 }}>Query error: {data.error.message}</div>;
  }
  if (!data || data.status !== "success") {
    return <div style={{ padding: 16 }}>No sales summary data available.</div>;
  }

  const cols = data.table.columns.map((column) => column.name);
  const row = data.table.rows?.[0] ?? [];

  const getMetric = (columnName: string) => {
    const candidates = [columnName, `[${columnName}]`];
    const index = candidates
      .map((candidate) => cols.indexOf(candidate))
      .find((candidateIndex) => candidateIndex >= 0);

    return index === undefined ? undefined : row[index];
  };

  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ color: "var(--color-foreground, #ffffff)" }}>Sales Performance</h2>
      <p style={{ color: "var(--color-muted-foreground, #adadad)", marginTop: 4 }}>
        Fiscal-year-to-date sales view for the Sales_Cube_DEV semantic model.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
          marginTop: 12,
        }}
      >
        <MetricCard
          label="Total Sales (FYTD)"
          value={getMetric("TotalSalesFYTD")}
          format="currency"
        />
        <MetricCard
          label="Gross Profit (FYTD)"
          value={getMetric("GrossProfitFYTD")}
          format="currency"
        />
        <MetricCard
          label="Margin % (FYTD)"
          value={getMetric("MarginPctFYTD")}
          format="percent"
        />
        <MetricCard
          label="Active Customers"
          value={getMetric("ActiveCustomers")}
          format="number"
        />
        <MetricCard
          label="Sales Growth vs PY"
          value={getMetric("SalesGrowthVsPY")}
          format="percent"
        />
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  format,
}: {
  label: string;
  value: unknown;
  format: MetricFormat;
}) {
  const display = formatMetric(value, format);

  return (
    <div
      style={{
        background: "var(--color-card, #292929)",
        color: "var(--color-card-foreground, #ffffff)",
        padding: 16,
        borderRadius: 8,
        minWidth: 0,
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ fontSize: 12, color: "var(--color-muted-foreground, #adadad)" }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 600, marginTop: 6 }}>{display}</div>
    </div>
  );
}

function formatMetric(value: unknown, format: MetricFormat) {
  if (value == null || value === "") return "—";

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return String(value);

  if (format === "currency") {
    return numericValue.toLocaleString("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    });
  }

  if (format === "percent") {
    return numericValue.toLocaleString("en-AU", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  return numericValue.toLocaleString("en-AU", { maximumFractionDigits: 0 });
}
