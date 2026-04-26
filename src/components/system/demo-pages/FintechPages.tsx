import type { SystemDesign } from '../../../data/systemDesigns';
// removed unused: import { getContrastColor } from '../../../lib/utils';

type Props = { design: SystemDesign; page: string };

function FintechNav({ design }: { design: SystemDesign }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border, background: `${design.colors.background}ee`, backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: design.colors.primary }}>
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <span className="font-bold text-sm" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>CryptoDesk</span>
      </div>
      <div className="flex gap-4 text-xs font-medium" style={{ color: `${design.colors.text}80` }}>
        <span className="cursor-pointer hover:opacity-100">Markets</span>
        <span className="cursor-pointer hover:opacity-100">Portfolio</span>
        <span className="cursor-pointer hover:opacity-100">Trade</span>
      </div>
      <button className="text-xs px-4 py-1.5 rounded-lg font-semibold cursor-pointer" style={{ background: design.colors.cta, color: '#000' }}>Connect Wallet</button>
    </nav>
  );
}

function FintechLanding({ design }: { design: SystemDesign }) {
  const coins = [
    { sym: 'BTC', name: 'Bitcoin', price: '$67,420', change: '+2.4%', up: true },
    { sym: 'ETH', name: 'Ethereum', price: '$3,840', change: '+1.8%', up: true },
    { sym: 'SOL', name: 'Solana', price: '$184', change: '-0.6%', up: false },
    { sym: 'ADA', name: 'Cardano', price: '$0.62', change: '+3.1%', up: true },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <FintechNav design={design} />
      {/* Hero */}
      <div className="px-10 py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${design.colors.primary}25, transparent)` }} />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ background: `${design.colors.cta}20`, color: design.colors.cta, border: `1px solid ${design.colors.cta}40` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: design.colors.cta }}></span>
            Live market data • 200+ assets
          </span>
          <h1 className="text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
            Trade smarter with<br />
            <span style={{ color: design.colors.primary }}>AI-powered insights</span>
          </h1>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: `${design.colors.text}70` }}>Professional-grade crypto trading with real-time analytics, portfolio management, and automated strategies.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Start Trading Free</button>
            <button className="px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer border" style={{ borderColor: design.colors.border, color: design.colors.text }}>View Markets →</button>
          </div>
          <p className="text-xs mt-4" style={{ color: `${design.colors.text}40` }}>No credit card required · 14-day free trial</p>
        </div>
      </div>
      {/* Live ticker */}
      <div className="px-6 pb-8">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}08` }}>
          <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: design.colors.border }}>
            <p className="text-xs font-semibold" style={{ color: `${design.colors.text}60` }}>LIVE PRICES</p>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: design.colors.accent }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: design.colors.accent }}></span>
              Live
            </span>
          </div>
          {coins.map((coin) => (
            <div key={coin.sym} className="flex items-center justify-between px-5 py-3 border-b last:border-0" style={{ borderColor: `${design.colors.border}60` }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${design.colors.primary}25`, color: design.colors.primary }}>{coin.sym[0]}</div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: design.colors.text }}>{coin.name}</p>
                  <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{coin.sym}/USD</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm" style={{ color: design.colors.text }}>{coin.price}</p>
                <p className="text-xs font-medium" style={{ color: coin.up ? design.colors.accent : '#ef4444' }}>{coin.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FintechDashboard({ design }: { design: SystemDesign }) {
  const bars = [45, 70, 55, 85, 60, 95, 75, 88, 65, 92, 78, 100];
  const assets = [
    { sym: 'BTC', pct: 42, val: '$28,420', color: '#F7931A' },
    { sym: 'ETH', pct: 28, val: '$12,840', color: '#627EEA' },
    { sym: 'SOL', pct: 18, val: '$7,380', color: '#9945FF' },
    { sym: 'Other', pct: 12, val: '$4,920', color: design.colors.secondary },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <FintechNav design={design} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Market Overview</h2>
            <p className="text-xs mt-0.5" style={{ color: `${design.colors.text}50` }}>Mon, Apr 27 · Last updated 2s ago</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-lg cursor-pointer" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>+ Add Widget</button>
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Total Portfolio', val: '$53,560', sub: '+$1,248 today', up: true },
            { label: 'Market Cap', val: '$2.8T', sub: '+3.2% (24h)', up: true },
            { label: 'BTC Dominance', val: '52.4%', sub: '-0.3% (24h)', up: false },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 border" style={{ border: `1px solid ${design.colors.border}`, background: `${design.colors.primary}08` }}>
              <p className="text-xs mb-1" style={{ color: `${design.colors.text}50` }}>{s.label}</p>
              <p className="text-lg font-bold" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{s.val}</p>
              <p className="text-xs mt-0.5" style={{ color: s.up ? design.colors.accent : '#ef4444' }}>{s.sub}</p>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="rounded-xl p-4 mb-4 border" style={{ border: `1px solid ${design.colors.border}`, background: `${design.colors.primary}05` }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold" style={{ color: design.colors.text }}>Portfolio Performance</p>
            <div className="flex gap-1">
              {['1D', '1W', '1M', '1Y'].map((t, i) => (
                <button key={t} className="text-xs px-2.5 py-1 rounded-lg cursor-pointer" style={{ background: i === 1 ? design.colors.primary : 'transparent', color: i === 1 ? '#fff' : `${design.colors.text}50` }}>{t}</button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-1 h-28">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm transition-all" style={{ height: `${h}%`, background: i === bars.length - 1 ? design.colors.primary : `${design.colors.primary}40` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px]" style={{ color: `${design.colors.text}30` }}>
            {['Apr 16', 'Apr 19', 'Apr 22', 'Apr 25', 'Apr 27'].map((d) => <span key={d}>{d}</span>)}
          </div>
        </div>
        {/* Assets */}
        <div className="rounded-xl p-4 border" style={{ border: `1px solid ${design.colors.border}` }}>
          <p className="text-sm font-semibold mb-3" style={{ color: design.colors.text }}>Top Holdings</p>
          {assets.map((a) => (
            <div key={a.sym} className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-full flex-shrink-0" style={{ background: a.color + '30', border: `2px solid ${a.color}` }} />
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium" style={{ color: design.colors.text }}>{a.sym}</span>
                  <span style={{ color: `${design.colors.text}60` }}>{a.pct}% · {a.val}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${design.colors.border}` }}>
                  <div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FintechPortfolio({ design }: { design: SystemDesign }) {
  const txns = [
    { type: 'Buy', asset: 'BTC', amount: '0.012 BTC', value: '$808', date: 'Apr 27', color: '#10B981' },
    { type: 'Sell', asset: 'ETH', amount: '0.8 ETH', value: '$3,072', date: 'Apr 26', color: '#ef4444' },
    { type: 'Buy', asset: 'SOL', amount: '15 SOL', value: '$2,760', date: 'Apr 25', color: '#10B981' },
    { type: 'Buy', asset: 'ADA', amount: '1000 ADA', value: '$620', date: 'Apr 24', color: '#10B981' },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <FintechNav design={design} />
      <div className="p-6">
        {/* Summary card */}
        <div className="rounded-2xl p-6 mb-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})` }}>
          <p className="text-white/60 text-xs mb-1">Total Portfolio Value</p>
          <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif` }}>$53,560.42</p>
          <p className="text-sm font-medium" style={{ color: design.colors.cta }}>↑ +$2,841 (+5.6%) this month</p>
          <div className="flex gap-4 mt-4">
            <div>
              <p className="text-white/50 text-xs">Invested</p>
              <p className="text-white font-semibold text-sm">$47,200</p>
            </div>
            <div>
              <p className="text-white/50 text-xs">Profit/Loss</p>
              <p className="font-semibold text-sm" style={{ color: design.colors.cta }}>+$6,360</p>
            </div>
            <div>
              <p className="text-white/50 text-xs">ROI</p>
              <p className="text-white font-semibold text-sm">+13.5%</p>
            </div>
          </div>
        </div>
        {/* Allocation */}
        <div className="rounded-xl p-4 mb-4 border" style={{ border: `1px solid ${design.colors.border}` }}>
          <p className="text-sm font-semibold mb-3" style={{ color: design.colors.text }}>Allocation</p>
          <div className="flex h-3 rounded-full overflow-hidden gap-0.5 mb-3">
            {[{ pct: 42, c: '#F7931A' }, { pct: 28, c: '#627EEA' }, { pct: 18, c: '#9945FF' }, { pct: 12, c: design.colors.secondary }].map((s, i) => (
              <div key={i} style={{ width: `${s.pct}%`, background: s.c }} className="first:rounded-l-full last:rounded-r-full" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {[{ sym: 'BTC', pct: 42, c: '#F7931A' }, { sym: 'ETH', pct: 28, c: '#627EEA' }, { sym: 'SOL', pct: 18, c: '#9945FF' }, { sym: 'Other', pct: 12, c: design.colors.secondary }].map((a) => (
              <div key={a.sym} className="flex items-center gap-1.5 text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: a.c }}></span>
                <span style={{ color: `${design.colors.text}70` }}>{a.sym} {a.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        {/* Transactions */}
        <div className="rounded-xl border" style={{ border: `1px solid ${design.colors.border}` }}>
          <div className="px-4 py-3 border-b flex justify-between" style={{ borderColor: design.colors.border }}>
            <p className="text-sm font-semibold" style={{ color: design.colors.text }}>Recent Transactions</p>
            <span className="text-xs cursor-pointer" style={{ color: design.colors.primary }}>View all →</span>
          </div>
          {txns.map((t) => (
            <div key={`${t.asset}-${t.date}`} className="flex items-center gap-3 px-4 py-3 border-b last:border-0" style={{ borderColor: `${design.colors.border}60` }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${t.color}20`, color: t.color }}>{t.type[0]}</div>
              <div className="flex-1">
                <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{t.type} {t.asset}</p>
                <p className="text-[10px]" style={{ color: `${design.colors.text}50` }}>{t.amount} · {t.date}</p>
              </div>
              <p className="text-sm font-semibold" style={{ color: t.color === '#10B981' ? t.color : '#ef4444' }}>{t.type === 'Sell' ? '+' : '-'}{t.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FintechOnboarding({ design }: { design: SystemDesign }) {
  const steps = ['Account Setup', 'Verify Identity', 'Fund Account'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <FintechNav design={design} />
      <div className="p-8 max-w-sm mx-auto">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-1.5">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i === 0 ? '' : i < 1 ? '' : ''}`}
                  style={{ background: i <= 0 ? design.colors.primary : `${design.colors.border}`, color: i <= 0 ? '#fff' : `${design.colors.text}50` }}>
                  {i < 0 ? '✓' : i + 1}
                </div>
                <span className="text-[10px] font-medium hidden sm:block" style={{ color: i <= 0 ? design.colors.text : `${design.colors.text}40` }}>{s}</span>
              </div>
              {i < steps.length - 1 && <div className="flex-1 h-0.5 rounded-full" style={{ background: `${design.colors.border}` }} />}
            </div>
          ))}
        </div>
        {/* Form */}
        <div className="rounded-2xl p-6 border" style={{ border: `1px solid ${design.colors.border}`, background: `${design.colors.primary}06` }}>
          <h2 className="text-lg font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Create your account</h2>
          <p className="text-xs mb-6" style={{ color: `${design.colors.text}50` }}>Get started with CryptoDesk in 3 easy steps</p>
          <div className="space-y-4">
            {['Full Name', 'Email Address', 'Password'].map((label) => (
              <div key={label}>
                <label className="block text-xs font-medium mb-1.5" style={{ color: `${design.colors.text}70` }}>{label}</label>
                <div className="h-10 rounded-xl border px-3 flex items-center text-xs" style={{ border: `1px solid ${design.colors.border}`, color: `${design.colors.text}30`, background: `${design.colors.background}80` }}>
                  {label === 'Email Address' ? 'you@example.com' : label === 'Password' ? '••••••••••' : 'John Doe'}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>
            Continue →
          </button>
          <p className="text-center text-[10px] mt-4" style={{ color: `${design.colors.text}30` }}>By continuing you agree to our Terms & Privacy Policy</p>
        </div>
        {/* Social proof */}
        <p className="text-center text-xs mt-6" style={{ color: `${design.colors.text}30` }}>Trusted by 50,000+ traders worldwide</p>
      </div>
    </div>
  );
}

function FintechTrade({ design }: { design: Props['design'] }) {
  const pairs: [string, string, string, boolean][] = [['BTC/USDT', '67,420.00', '+2.4%', true], ['ETH/USDT', '3,521.80', '+1.8%', true], ['SOL/USDT', '142.30', '-0.9%', false], ['ADA/USDT', '0.4812', '-1.2%', false]];
  const asks = [['67,430', '0.2841', '19,091'], ['67,435', '0.5120', '34,527'], ['67,440', '1.0340', '69,508'], ['67,445', '0.3210', '21,598'], ['67,450', '0.8920', '60,002']];
  const bids = [['67,415', '1.2340', '83,018'], ['67,410', '0.6780', '45,598'], ['67,405', '0.9120', '61,380'], ['67,400', '2.1100', '141,994'], ['67,395', '0.4400', '29,614']];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <FintechNav design={design} />
      <div className="flex gap-4 p-4" style={{ fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
        {/* Pair selector */}
        <div className="w-44 flex-shrink-0 space-y-1">
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: `${design.colors.text}40` }}>Markets</p>
          {pairs.map(([pair, price, change, up]) => (
            <div key={pair} className="flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer" style={{ background: pair === 'BTC/USDT' ? `${design.colors.primary}20` : `${design.colors.border}20`, border: pair === 'BTC/USDT' ? `1px solid ${design.colors.primary}40` : '1px solid transparent' }}>
              <div>
                <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{pair}</p>
                <p className="text-[10px]" style={{ color: `${design.colors.text}50` }}>${price}</p>
              </div>
              <span className="text-[10px] font-semibold" style={{ color: up ? design.colors.accent : '#EF4444' }}>{change}</span>
            </div>
          ))}
        </div>

        {/* Order book */}
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: `${design.colors.text}40` }}>Order Book — BTC/USDT</p>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
            <div className="grid grid-cols-3 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider" style={{ background: `${design.colors.border}40`, color: `${design.colors.text}40` }}>
              <span>Price (USDT)</span><span className="text-center">Amount (BTC)</span><span className="text-right">Total</span>
            </div>
            {asks.map(([p, a, t]) => (
              <div key={p} className="grid grid-cols-3 px-3 py-1 text-xs relative" style={{ background: `#EF444408` }}>
                <span style={{ color: '#EF4444' }}>{p}</span>
                <span className="text-center" style={{ color: `${design.colors.text}80` }}>{a}</span>
                <span className="text-right" style={{ color: `${design.colors.text}50` }}>{t}</span>
              </div>
            ))}
            <div className="px-3 py-1.5 text-center text-sm font-bold" style={{ background: `${design.colors.border}30`, color: design.colors.cta }}>67,420.00 ↑</div>
            {bids.map(([p, a, t]) => (
              <div key={p} className="grid grid-cols-3 px-3 py-1 text-xs" style={{ background: `${design.colors.accent}08` }}>
                <span style={{ color: design.colors.accent }}>{p}</span>
                <span className="text-center" style={{ color: `${design.colors.text}80` }}>{a}</span>
                <span className="text-right" style={{ color: `${design.colors.text}50` }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order entry */}
        <div className="w-56 flex-shrink-0">
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: `${design.colors.text}40` }}>Place Order</p>
          <div className="rounded-xl border p-4 space-y-3" style={{ borderColor: design.colors.border, background: `${design.colors.border}15` }}>
            <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: design.colors.border }}>
              {['Buy', 'Sell'].map((side) => (
                <button key={side} className="flex-1 py-1.5 text-xs font-semibold cursor-pointer" style={{ background: side === 'Buy' ? `${design.colors.accent}` : 'transparent', color: side === 'Buy' ? '#fff' : `${design.colors.text}50` }}>{side}</button>
              ))}
            </div>
            {[['Order Type', 'Limit'], ['Price (USDT)', '67,420.00'], ['Amount (BTC)', '0.0100'], ['Total (USDT)', '674.20']].map(([label, val]) => (
              <div key={label}>
                <p className="text-[10px] mb-1" style={{ color: `${design.colors.text}40` }}>{label}</p>
                <div className="h-8 rounded-lg border px-2.5 flex items-center text-xs font-mono" style={{ borderColor: design.colors.border, color: design.colors.text, background: `${design.colors.background}80` }}>{val}</div>
              </div>
            ))}
            <button className="w-full py-2.5 rounded-xl font-semibold text-sm cursor-pointer mt-1" style={{ background: design.colors.accent, color: '#fff' }}>Buy BTC</button>
            <p className="text-[10px] text-center" style={{ color: `${design.colors.text}30` }}>Available: 1,240.00 USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FintechPages({ design, page }: Props) {
  if (page === 'landing') return <FintechLanding design={design} />;
  if (page === 'dashboard') return <FintechDashboard design={design} />;
  if (page === 'portfolio') return <FintechPortfolio design={design} />;
  if (page === 'onboarding') return <FintechOnboarding design={design} />;
  if (page === 'trade') return <FintechTrade design={design} />;
  return <FintechLanding design={design} />;
}
