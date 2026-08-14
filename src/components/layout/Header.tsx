const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Friday, August 14, 2026
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl
          border border-slate-200 text-slate-600
          hover:bg-slate-50"
        >
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            T
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-900">
              Tio
            </p>

            <p className="text-xs text-slate-500">
              Personal Account
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;