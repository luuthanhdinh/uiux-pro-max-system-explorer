import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'indigo' | 'green' | 'yellow' | 'red' | 'pink' | 'cyan';
  className?: string;
}

const variants = {
  default: 'bg-white/10 text-white/70 border border-white/15',
  indigo: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
  green: 'bg-green-500/20 text-green-300 border border-green-500/30',
  yellow: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
  red: 'bg-red-500/20 text-red-300 border border-red-500/30',
  pink: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}
