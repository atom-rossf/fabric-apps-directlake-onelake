import React from "react";
import { CustomerLtvChart } from "@/components/customer-insights/CustomerLtvChart";
import { ChurnRiskChart } from "@/components/customer-insights/ChurnRiskChart";
import { TopAccountsTable } from "@/components/customer-insights/TopAccountsTable";

export default function CustomerInsightsPage() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Customer Insights</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 16, marginTop: 12 }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "var(--card-bg, #fff)", padding: 12, borderRadius: 8 }}>
              <CustomerLtvChart />
            </div>
            <div style={{ background: "var(--card-bg, #fff)", padding: 12, borderRadius: 8 }}>
              <ChurnRiskChart />
            </div>
          </div>
        </div>

        <aside>
          <div style={{ background: "var(--card-bg, #fff)", padding: 12, borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>Top Accounts</h3>
            <TopAccountsTable />
          </div>
        </aside>
      </div>
    </div>
  );
}
