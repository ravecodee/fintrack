import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Header />

        <main>{children}</main>
      </div>
    </div>
  );
}

export default Dashboard;