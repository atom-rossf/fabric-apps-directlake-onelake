import React from "react";

export default function CustomerInsightsPage() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Customer Insights (Temporarily Disabled)</h1>
      <p style={{ marginTop: 12 }}>
        The charts and tables have been temporarily removed to investigate layout performance issues. Data ingestion and queries remain active.
      </p>
      <p style={{ marginTop: 12 }}>
        To re-enable the visuals, restore the components in src/pages/CustomerInsightsPage.tsx or run the "Restore charts" task.
      </p>
    </div>
  );
}
