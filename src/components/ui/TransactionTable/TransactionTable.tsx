import type { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="font-semibold text-slate-900">
          Recent Transactions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your latest financial activity
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
              <th className="px-6 py-4 font-medium">
                Transaction
              </th>

              <th className="px-6 py-4 font-medium">
                Category
              </th>

              <th className="px-6 py-4 font-medium">
                Date
              </th>

              <th className="px-6 py-4 text-right font-medium">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-slate-100 last:border-0">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">
                    {transaction.title}
                  </p>
                </td>

                <td className="px-6 py-4 text-sm text-slate-500">
                  {transaction.category}
                </td>

                <td className="px-6 py-4 text-sm text-slate-500">
                  {transaction.date}
                </td>

                <td
                  className={`px-6 py-4 text-right font-semibold ${transaction.type === "income"
                    ? "text-emerald-500"
                    : "text-red-500"
                    }`}
                >
                  {transaction.type === "income"
                    ? "+"
                    : "-"}
                  Rp{" "}
                  {transaction.amount.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;