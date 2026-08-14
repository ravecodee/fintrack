import { menuItems } from '@/general/Shared';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-950 text-white">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            📊
          </div>

          <div>
            <h1 className="text-lg font-bold">FinTrack</h1>
            <p className="text-xs text-slate-400">
              Personal Finance
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`
                }>
                <span className="text-lg">
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
            T
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium">
              Tio
            </p>

            <p className="text-xs text-slate-400">
              Personal Account
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;