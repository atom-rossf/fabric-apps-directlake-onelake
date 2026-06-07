//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import React, { useState } from "react";
import LandingPage from "@/pages/LandingPage";
import CustomerInsightsPage from "./pages/CustomerInsightsPage";

function App() {
  const [page, setPage] = useState<"landing" | "insights">("landing");

  return (
    <div>
      <nav style={{ display: "flex", gap: 8, padding: 12 }}>
        <button onClick={() => setPage("landing")}>Sales Performance</button>
        <button onClick={() => setPage("insights")}>Sales Insights</button>
      </nav>
      <main>{page === "landing" ? <LandingPage /> : <CustomerInsightsPage />}</main>
    </div>
  );
}

export default App;
