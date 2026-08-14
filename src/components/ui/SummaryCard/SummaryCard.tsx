interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}

const SummaryCard = ({ title, value, change, changeType, icon }: SummaryCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
          {icon}
        </div>
      </div>

      <p
        className={`mt-4 text-sm ${changeType === "positive"
            ? "text-emerald-500"
            : "text-red-500"
          }`}
      >
        {change}
      </p>
    </div>
  );
}

export default SummaryCard;