const stats = [
  { value: '67', label: 'UI Styles', icon: '✦' },
  { value: '96', label: 'Color Palettes', icon: '◉' },
  { value: '57', label: 'Font Pairings', icon: 'Aa' },
  { value: '25', label: 'Chart Types', icon: '▦' },
  { value: '99', label: 'UX Guidelines', icon: '◎' },
  { value: '13', label: 'Tech Stacks', icon: '⬡' },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10 md:mb-16">
      {stats.map(({ value, label, icon }) => (
        <div key={label} className="glass rounded-2xl p-4 text-center hover:bg-white/15 transition-colors duration-200">
          <div className="text-2xl font-mono text-white/30 mb-1">{icon}</div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-white/50 text-xs mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}
