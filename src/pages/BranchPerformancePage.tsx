import React from "react";
import { BranchPerformanceTable } from "@/components/customer-insights/BranchPerformanceTable";

export default function BranchPerformancePage() {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ color: "var(--color-foreground, #ffffff)" }}>Branch Performance</h2>
      <p style={{ color: "var(--color-muted-foreground, #adadad)", marginTop: 4 }}>
        Branch leaderboard sorted by total sales, using the standard Sales_Cube_DEV sales exclusion rules.
      </p>
      <section
        style={{
          background: "var(--color-card, #292929)",
          color: "var(--color-card-foreground, #ffffff)",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        }}
      >
        <h3 style={{ color: "var(--color-foreground, #ffffff)", marginTop: 0 }}>Branch Leaderboard</h3>
        <BranchPerformanceTable />
      </section>
    </div>
  );
}
