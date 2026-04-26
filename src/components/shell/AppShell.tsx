import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f1a2e 100%)' }}>
      <Sidebar />
      <main className="ml-60 min-h-screen">
        {children}
      </main>
    </div>
  );
}
