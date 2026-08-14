import type { TransactionTypes } from "@/types";

export const menuItems = [
 {
    label: "Dashboard",
    icon: "▦",
    path: "/dashboard",
  },
  {
    label: "Transactions",
    icon: "↔",
    path: "/transactions",
  },
  {
    label: "Categories",
    icon: "◉",
    path: "/categories",
  },
  {
    label: "Budgets",
    icon: "▤",
    path: "/budgets",
  },
  {
    label: "Goals",
    icon: "◎",
    path: "/goals",
  },
  {
    label: "Reports",
    icon: "◒",
    path: "/reports",
  },
  {
    label: "Settings",
    icon: "⚙",
    path: "/settings",
  },
];

export const summaryCards = [
    {
      title: "Total Balance",
      value: "Rp 24.250.000",
      change: "↑ 12.5% vs last month",
      changeType: "positive" as const,
      icon: "💰",
    },
    {
      title: "Total Income",
      value: "Rp 18.750.000",
      change: "↑ 8.2% vs last month",
      changeType: "positive" as const,
      icon: "📈",
    },
    {
      title: "Total Expenses",
      value: "Rp 8.430.000",
      change: "↑ 3.5% vs last month",
      changeType: "negative" as const,
      icon: "💸",
    },
    {
      title: "Savings Rate",
      value: "45.2%",
      change: "↑ 5.3% vs last month",
      changeType: "positive" as const,
      icon: "🎯",
    },
  ];

  export const transactionsData: TransactionTypes[] = [
    {
      id: "1",
      title: "Salary",
      category: "Income",
      date: "Aug 14, 2026",
      amount: 9000000,
      type: "income",
    },
    {
      id: "2",
      title: "Spotify Premium",
      category: "Entertainment",
      date: "Aug 13, 2026",
      amount: 59999,
      type: "expense",
    },
    {
      id: "3",
      title: "Internet Bill",
      category: "Bills",
      date: "Aug 12, 2026",
      amount: 350000,
      type: "expense",
    },
    {
      id: "4",
      title: "Freelance Project",
      category: "Income",
      date: "Aug 11, 2026",
      amount: 2500000,
      type: "income",
    },
  ];