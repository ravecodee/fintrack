import type { Transaction } from "@/types";
import { SummaryCard, TransactionTable } from "@/components/ui";

const DashboardPage = () => {

  const summaryCards = [
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

  const transactions: Transaction[] = [
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

  return (
    <div className="space-y-8 p-8">
      {/* Welcome */}
      <section>
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, Tio 👋
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening with your finances today.
        </p>
      </section>

      {/* Summary */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <SummaryCard
            key={card.title}
            title={card.title}
            value={card.value}
            change={card.change}
            changeType={card.changeType}
            icon={card.icon}
          />
        ))}
      </section>

      <section>
        <TransactionTable transactions={transactions} />
      </section>
    </div>
  );
}

export default DashboardPage;