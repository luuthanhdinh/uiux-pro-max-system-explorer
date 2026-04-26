import type { SystemDesign } from '../../../data/systemDesigns';

type Props = { design: SystemDesign; page: string };

function Nav({ design }: { design: SystemDesign }) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: design.colors.border, background: design.colors.background }}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.cta})` }} />
        <span className="font-bold text-sm" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>NovaMind AI</span>
      </div>
      <div className="flex gap-6 text-sm" style={{ color: `${design.colors.text}60` }}>
        {['Features', 'Pricing', 'Docs', 'Blog'].map((l) => <a key={l} className="cursor-pointer hover:opacity-80">{l}</a>)}
      </div>
      <div className="flex gap-2">
        <button className="text-sm px-4 py-1.5 rounded-lg cursor-pointer" style={{ color: `${design.colors.text}70` }}>Log in</button>
        <button className="text-sm px-4 py-1.5 rounded-lg font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Start free</button>
      </div>
    </nav>
  );
}

function Landing({ design }: { design: SystemDesign }) {
  const features = [
    { icon: '◈', title: 'Smart Summarization', desc: 'Distill any document into clear, actionable insights in seconds.' },
    { icon: '◇', title: 'Multi-model Routing', desc: 'Automatically routes to the best model for your task and budget.' },
    { icon: '▷', title: 'Prompt Library', desc: 'Save, organize, and share prompt templates across your team.' },
    { icon: '◉', title: 'Analytics Dashboard', desc: 'Track usage, cost, and output quality across all your AI workflows.' },
    { icon: '⬡', title: 'API & Webhooks', desc: 'Integrate with any stack in minutes. Full REST API with SDKs.' },
    { icon: '◆', title: 'SOC 2 Secure', desc: 'Enterprise-grade security. Your data never trains any model.' },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} />
      {/* Hero */}
      <div className="px-8 py-16 text-center" style={{ background: `linear-gradient(180deg, ${design.colors.primary}08 0%, transparent 100%)` }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: `${design.colors.cta}15`, color: design.colors.cta, border: `1px solid ${design.colors.cta}30` }}>
          ✦ New: GPT-4o + Claude 3.5 now available
        </div>
        <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
          The AI workspace for<br />
          <span style={{ color: design.colors.primary }}>high-performance teams</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: `${design.colors.text}60` }}>
          NovaMind connects your tools with the world's best AI models. Write, analyze, and automate — 10× faster.
        </p>
        <div className="flex justify-center gap-3">
          <button className="px-8 py-3 rounded-xl font-semibold text-sm cursor-pointer shadow-lg" style={{ background: design.colors.primary, color: '#fff' }}>Try free for 14 days</button>
          <button className="px-8 py-3 rounded-xl font-semibold text-sm cursor-pointer border" style={{ borderColor: design.colors.border, color: design.colors.text }}>Watch demo ▶</button>
        </div>
        <p className="text-xs mt-4" style={{ color: `${design.colors.text}35` }}>No credit card · Free forever on Starter plan</p>
        {/* Mock UI */}
        <div className="mt-10 mx-auto max-w-lg rounded-2xl border overflow-hidden shadow-2xl" style={{ borderColor: design.colors.border }}>
          <div className="px-4 py-3 border-b flex items-center gap-2" style={{ borderColor: design.colors.border, background: `${design.colors.text}05` }}>
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div className="w-2.5 h-2.5 rounded-full bg-green-400"></div></div>
            <div className="flex-1 h-4 rounded bg-gray-200/40 max-w-32 mx-auto"></div>
          </div>
          <div className="p-4 space-y-2" style={{ background: design.colors.background }}>
            <div className="h-3 rounded-full bg-gray-200/30 w-3/4"></div>
            <div className="h-3 rounded-full bg-gray-200/20 w-full"></div>
            <div className="h-3 rounded-full bg-gray-200/30 w-5/6"></div>
            <div className="h-8 rounded-xl mt-2" style={{ background: `${design.colors.primary}15` }}></div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="px-8 py-10">
        <div className="grid grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.text}03` }}>
              <span className="text-xl mb-2 block" style={{ color: design.colors.primary }}>{f.icon}</span>
              <h3 className="font-semibold text-sm mb-1" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: `${design.colors.text}50` }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pricing({ design }: { design: SystemDesign }) {
  const plans = [
    { name: 'Starter', price: '$0', features: ['50k tokens/mo', '3 projects', '5 models', 'Community support'], featured: false },
    { name: 'Pro', price: '$29', features: ['2M tokens/mo', 'Unlimited projects', 'All 20+ models', 'Priority support', 'API access', 'Analytics'], featured: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited tokens', 'Custom models', 'SSO/SAML', 'SLA 99.9%', 'Dedicated CSM'], featured: false },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} />
      <div className="px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Simple, transparent pricing</h2>
          <p className="text-sm" style={{ color: `${design.colors.text}50` }}>Start free. Scale as you grow. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl p-5 border relative" style={{
              borderColor: plan.featured ? design.colors.primary : design.colors.border,
              background: plan.featured ? `${design.colors.primary}08` : `${design.colors.text}03`,
            }}>
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full text-white" style={{ background: design.colors.cta }}>Most popular</span>
                </div>
              )}
              <h3 className="font-bold text-sm mb-1" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{plan.name}</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-2xl font-bold" style={{ color: design.colors.text }}>{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-xs pb-0.5" style={{ color: `${design.colors.text}40` }}>/mo</span>}
              </div>
              <ul className="space-y-2 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: `${design.colors.text}70` }}>
                    <span style={{ color: design.colors.cta }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold cursor-pointer" style={{
                background: plan.featured ? design.colors.primary : 'transparent',
                color: plan.featured ? '#fff' : design.colors.text,
                border: plan.featured ? 'none' : `1px solid ${design.colors.border}`,
              }}>
                {plan.price === 'Custom' ? 'Contact sales' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dashboard({ design }: { design: SystemDesign }) {
  const history = [
    { prompt: 'Summarize Q1 sales report', model: 'Claude 3.5', tokens: '2,841', time: '2m ago' },
    { prompt: 'Write email campaign for product launch', model: 'GPT-4o', tokens: '1,204', time: '15m ago' },
    { prompt: 'Analyze competitor pricing strategy', model: 'Claude 3', tokens: '3,102', time: '1h ago' },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} />
      <div className="flex" style={{ minHeight: 'calc(100% - 56px)' }}>
        {/* Sidebar */}
        <div className="w-48 flex-shrink-0 p-3 border-r" style={{ borderColor: design.colors.border }}>
          {['New Chat', 'Summarize', 'Code Review', 'Translate', 'Analyze Data'].map((item, i) => (
            <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-pointer mb-0.5 ${i === 0 ? 'font-semibold' : ''}`}
              style={{ background: i === 0 ? `${design.colors.primary}15` : 'transparent', color: i === 0 ? design.colors.primary : `${design.colors.text}50` }}>
              {item}
            </div>
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col">
          {/* Chat area */}
          <div className="flex-1 p-5 space-y-4 overflow-auto">
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs" style={{ background: `${design.colors.text}15`, color: `${design.colors.text}60` }}>U</div>
              <div className="flex-1 rounded-xl p-3 text-xs leading-relaxed" style={{ background: `${design.colors.text}06`, color: `${design.colors.text}70` }}>
                Can you analyze the key trends in our Q1 marketing data and suggest improvements for Q2?
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>AI</div>
              <div className="flex-1 rounded-xl p-3 text-xs leading-relaxed space-y-2" style={{ background: `${design.colors.primary}08`, color: design.colors.text, border: `1px solid ${design.colors.primary}20` }}>
                <p><strong>Q1 Analysis Summary:</strong></p>
                <p>Based on your data, I've identified 3 key trends: <strong>Email conversion rate</strong> increased 18% YoY, <strong>Social media ROI</strong> declined in paid channels, and <strong>SEO organic traffic</strong> grew 34%.</p>
                <p style={{ color: `${design.colors.text}60` }}>For Q2, I'd recommend shifting 20% of paid social budget to content marketing...</p>
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="p-4 border-t" style={{ borderColor: design.colors.border }}>
            <div className="flex items-center gap-3 border rounded-xl px-4 py-2.5" style={{ borderColor: design.colors.border }}>
              <input className="flex-1 text-xs outline-none bg-transparent" placeholder="Ask NovaMind anything…" style={{ color: design.colors.text }} />
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Send</button>
            </div>
            <p className="text-[10px] text-center mt-2" style={{ color: `${design.colors.text}25` }}>Model: Claude 3.5 · 1.2M tokens remaining</p>
          </div>
        </div>
        {/* History panel */}
        <div className="w-44 flex-shrink-0 p-3 border-l" style={{ borderColor: design.colors.border }}>
          <p className="text-[10px] font-semibold mb-2" style={{ color: `${design.colors.text}40` }}>RECENT</p>
          {history.map((h) => (
            <div key={h.prompt} className="mb-3 cursor-pointer">
              <p className="text-[10px] leading-snug mb-0.5 line-clamp-2" style={{ color: `${design.colors.text}60` }}>{h.prompt}</p>
              <div className="flex gap-1.5">
                <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: `${design.colors.primary}15`, color: design.colors.primary }}>{h.model}</span>
                <span className="text-[9px]" style={{ color: `${design.colors.text}30` }}>{h.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AISaaSPages({ design, page }: Props) {
  if (page === 'landing') return <Landing design={design} />;
  if (page === 'pricing') return <Pricing design={design} />;
  if (page === 'dashboard') return <Dashboard design={design} />;
  return <Landing design={design} />;
}
