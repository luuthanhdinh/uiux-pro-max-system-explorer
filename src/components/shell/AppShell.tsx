import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from './Sidebar';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f1a2e 100%)' }}>
      <Sidebar />
      <main className="md:ml-60 min-h-screen pb-16 md:pb-0">
        {children}
      </main>

      {/* Mobile bottom nav — hidden on md+ */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-white/10" style={{ background: 'rgba(15,15,26,0.97)', backdropFilter: 'blur(12px)' }}>
        {[
          { to: '/', label: 'Home', end: true, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg> },
          { to: '/explorer', label: 'Explorer', end: false, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
          { to: '/builder', label: 'Builder', end: false, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
          { to: '/systems', label: 'Systems', end: false, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
        ].map(({ to, label, end, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-medium transition-colors duration-150 cursor-pointer ${
                isActive ? 'text-indigo-400' : 'text-white/40'
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
