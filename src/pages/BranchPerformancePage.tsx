import React from "react";
import { BranchPerformanceTable } from "@/components/customer-insights/BranchPerformanceTable";

export default function BranchPerformancePage() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Branch Performance</h2>
      <p style={{ color: "var(--muted, #666)", marginTop: 4 }}>
        Branch leaderboard sorted by total sales, using the standard Sales_Cube_DEV sales exclusion rules.
      </p>
      <section
        style={{
          background: "var(--card-bg, #fff)",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        }}
      >
        <h3 style={{ marginTop: 0 }}>Branch Leaderboard</h3>
        <BranchPerformanceTable />
      </section>
    </div>
  );
}
