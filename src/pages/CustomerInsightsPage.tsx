import { MonthlySalesTrendChart } from "@/components/customer-insights/MonthlySalesTrendChart";
import { SalesByBranchChart } from "@/components/customer-insights/SalesByBranchChart";
import { TopCustomersTable } from "@/components/customer-insights/TopCustomersTable";

export default function CustomerInsightsPage() {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ color: "var(--color-foreground, #ffffff)" }}>Sales Insights</h2>
      <p style={{ color: "var(--color-muted-foreground, #adadad)", marginTop: 4 }}>
        Current fiscal-year sales distribution, top revenue customers, and monthly trend.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(360px, 0.8fr)",
          gap: 16,
          marginTop: 12,
        }}
      >
        <section>
          <div
            style={{
              background: "var(--color-card, #292929)",
              color: "var(--color-card-foreground, #ffffff)",
              padding: 12,
              borderRadius: 8,
            }}
          >
            <h3 style={{ color: "var(--color-foreground, #ffffff)", marginTop: 0 }}>Sales by Branch</h3>
            <SalesByBranchChart />
          </div>

          <div
            style={{
              background: "var(--color-card, #292929)",
              color: "var(--color-card-foreground, #ffffff)",
              padding: 12,
              borderRadius: 8,
              marginTop: 16,
            }}
          >
            <h3 style={{ color: "var(--color-foreground, #ffffff)", marginTop: 0 }}>Monthly Sales Trend</h3>
            <MonthlySalesTrendChart />
          </div>
        </section>

        <aside>
          <div
            style={{
              background: "var(--color-card, #292929)",
              color: "var(--color-card-foreground, #ffffff)",
              padding: 12,
              borderRadius: 8,
            }}
          >
            <h3 style={{ color: "var(--color-foreground, #ffffff)", marginTop: 0 }}>Top 10 Customers by Revenue</h3>
            <TopCustomersTable />
          </div>
        </aside>
      </div>
    </div>
  );
}
