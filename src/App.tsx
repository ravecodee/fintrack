import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { DashboardPage, TransactionsPage } from "@/pages";
import { Dashboard as DashboardLayout } from "@/components/layout";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;