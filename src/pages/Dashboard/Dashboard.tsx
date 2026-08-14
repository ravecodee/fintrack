import { summaryCards, transactionsData } from "@/general/Shared";
import { SummaryCard, TransactionTable } from "@/components/ui";

const DashboardPage = () => {
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
        <TransactionTable transactions={transactionsData} />
      </section>
    </div>
  );
}

export default DashboardPage;