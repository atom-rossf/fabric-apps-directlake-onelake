// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import React, { useState } from "react";
import LandingPage from "@/pages/LandingPage";
import BranchPerformancePage from "@/pages/BranchPerformancePage";
import CustomerInsightsPage from "./pages/CustomerInsightsPage";

type PageKey = "sales-performance" | "sales-insights" | "branch-performance";

const pages: Array<{ key: PageKey; label: string }> = [
  { key: "sales-performance", label: "Sales Performance" },
  { key: "sales-insights", label: "Sales Insights" },
  { key: "branch-performance", label: "Branch Performance" },
];

function App() {
  const [page, setPage] = useState<PageKey>("sales-performance");

  const renderPage = () => {
    switch (page) {
      case "sales-insights":
        return <CustomerInsightsPage />;
      case "branch-performance":
        return <BranchPerformancePage />;
      case "sales-performance":
      default:
        return <LandingPage />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100%",
        background: "var(--color-background, #292929)",
        color: "var(--color-foreground, #ffffff)",
      }}
    >
      <nav
        aria-label="Dashboard pages"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          padding: 12,
          borderBottom: "1px solid var(--color-border, #525252)",
          background: "var(--color-background, #292929)",
          position: "relative",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        {pages.map((item) => {
          const isActive = page === item.key;
          return (
            <button
              key={item.key}
              type="button"
              aria-current={isActive ? "page" : undefined}
              aria-pressed={isActive}
              onClick={(event) => {
                event.preventDefault();
                setPage(item.key);
              }}
              style={{
                border: `1px solid ${isActive ? "var(--color-primary, #115ea3)" : "var(--color-border, #525252)"}`,
                borderRadius: 6,
                background: isActive ? "var(--color-primary, #115ea3)" : "var(--color-card, #292929)",
                color: isActive ? "var(--color-primary-foreground, #ffffff)" : "var(--color-card-foreground, #ffffff)",
                cursor: "pointer",
                font: "inherit",
                fontWeight: isActive ? 600 : 500,
                padding: "8px 12px",
                pointerEvents: "auto",
                position: "relative",
                zIndex: 11,
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
