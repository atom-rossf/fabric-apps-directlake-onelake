import baseQuery from "./summary-metrics.dax?raw";

const connection = "customerInsights"; // connection alias generated earlier

export const columnMetadata = {
  "TotalCustomers": { name: "TotalCustomers", displayName: "Total Customers" },
  "AvgLTV": { name: "AvgLTV", displayName: "Average LTV", format: "#,0.00" },
  "HighRisk": { name: "HighRisk", displayName: "High Risk Customers" },
  "MediumRisk": { name: "MediumRisk", displayName: "Medium Risk Customers" },
  "LowRisk": { name: "LowRisk", displayName: "Low Risk Customers" }
};

export function summaryMetrics() {
  return { connection, query: baseQuery, columnMetadata };
}
