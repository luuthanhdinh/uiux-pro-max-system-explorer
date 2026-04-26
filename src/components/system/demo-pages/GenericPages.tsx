/**
 * Generic demo page components used by Healthcare, LMS, Luxury E-Commerce,
 * Gaming, Sustainability ESG, and Developer Docs system designs.
 * Each system passes its design tokens; components adapt visually.
 */
import type { SystemDesign } from '../../../data/systemDesigns';

type Props = { design: SystemDesign; page: string };

function Nav({ design, brand }: { design: SystemDesign; brand: string }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border, background: design.colors.background }}>
      <span className="font-bold text-sm" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{brand}</span>
      <div className="flex gap-2">
        <button className="text-xs px-3 py-1.5 rounded-lg cursor-pointer border" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>Log in</button>
        <button className="text-xs px-3 py-1.5 rounded-lg cursor-pointer font-semibold" style={{ background: design.colors.cta, color: '#fff' }}>Get started</button>
      </div>
    </nav>
  );
}

/* ─── HEALTHCARE ─── */
function HealthcareLanding({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="MediCare Portal" />
      <div className="px-8 py-12">
        <div className="max-w-lg">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: `${design.colors.cta}15`, color: design.colors.cta }}>HIPAA Compliant</span>
          <h1 className="text-3xl font-bold leading-tight mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
            Your health,<br /><span style={{ color: design.colors.primary }}>your control.</span>
          </h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: `${design.colors.text}60` }}>Manage appointments, access records, and connect with your care team — all in one secure place.</p>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Book Appointment</button>
            <button className="px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border" style={{ borderColor: design.colors.border, color: design.colors.text }}>Patient Portal</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {[['200+', 'Doctors'], ['50K+', 'Patients'], ['4.9★', 'Rating']].map(([v, l]) => (
            <div key={l} className="text-center p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}06` }}>
              <p className="text-xl font-bold" style={{ color: design.colors.primary, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{v}</p>
              <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-2">
          {[['Cardiology', '★★★★★', '48 doctors'], ['Neurology', '★★★★☆', '32 doctors'], ['Orthopedics', '★★★★★', '24 doctors']].map(([spec, stars, num]) => (
            <div key={spec} className="flex items-center justify-between p-3 rounded-xl border cursor-pointer" style={{ borderColor: design.colors.border }}>
              <span className="text-sm font-medium" style={{ color: design.colors.text }}>{spec}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs" style={{ color: '#f59e0b' }}>{stars}</span>
                <span className="text-xs" style={{ color: `${design.colors.text}50` }}>{num}</span>
                <span style={{ color: design.colors.primary }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealthcareDashboard({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="MediCare Portal" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full" style={{ background: `${design.colors.primary}20` }} />
          <div>
            <p className="font-semibold text-sm" style={{ color: design.colors.text }}>Good morning, Sarah</p>
            <p className="text-xs" style={{ color: `${design.colors.text}40` }}>Your health summary for today</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Next Appointment', val: 'Apr 30 · Dr. Chen', color: design.colors.primary },
            { label: 'Prescriptions', val: '2 active', color: design.colors.cta },
            { label: 'Blood Pressure', val: '118/76 mmHg', color: '#10B981' },
            { label: 'Last Visit', val: 'Apr 15, 2026', color: design.colors.secondary },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 border" style={{ borderColor: design.colors.border, background: `${s.color}06` }}>
              <p className="text-xs mb-1" style={{ color: `${design.colors.text}50` }}>{s.label}</p>
              <p className="text-sm font-semibold" style={{ color: s.color }}>{s.val}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border p-4" style={{ borderColor: design.colors.border }}>
          <p className="text-sm font-semibold mb-3" style={{ color: design.colors.text }}>Upcoming Schedule</p>
          {[
            { doc: 'Dr. Alice Chen', spec: 'Cardiologist', date: 'Apr 30 · 10:00 AM', status: 'Confirmed' },
            { doc: 'Dr. Mark Torres', spec: 'General Practice', date: 'May 8 · 2:00 PM', status: 'Pending' },
          ].map((a) => (
            <div key={a.doc} className="flex items-center justify-between py-3 border-b last:border-0" style={{ borderColor: `${design.colors.border}60` }}>
              <div>
                <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{a.doc}</p>
                <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{a.spec} · {a.date}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{
                background: a.status === 'Confirmed' ? `${design.colors.cta}20` : `${design.colors.secondary}20`,
                color: a.status === 'Confirmed' ? design.colors.cta : design.colors.secondary,
              }}>{a.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HealthcareAppointment({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="MediCare Portal" />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-6" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>Book Appointment</h2>
        {/* Doctor selector */}
        <div className="mb-4">
          <label className="block text-xs font-medium mb-2" style={{ color: `${design.colors.text}60` }}>Select Specialty</label>
          <div className="grid grid-cols-3 gap-2">
            {['Cardiology', 'Neurology', 'General'].map((s, i) => (
              <div key={s} className="py-2.5 px-2 rounded-xl border text-center text-xs cursor-pointer font-medium" style={{ borderColor: i === 0 ? design.colors.primary : design.colors.border, background: i === 0 ? `${design.colors.primary}10` : 'transparent', color: i === 0 ? design.colors.primary : `${design.colors.text}50` }}>{s}</div>
            ))}
          </div>
        </div>
        {/* Calendar */}
        <div className="mb-4 rounded-xl border p-4" style={{ borderColor: design.colors.border }}>
          <p className="text-xs font-semibold mb-3" style={{ color: `${design.colors.text}60` }}>MAY 2026</p>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <div key={i} className="text-[10px] font-medium" style={{ color: `${design.colors.text}30` }}>{d}</div>)}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <div key={d} className={`text-xs py-1.5 rounded-lg cursor-pointer ${d === 8 ? 'font-bold text-white' : ''}`}
                style={{ background: d === 8 ? design.colors.primary : 'transparent', color: d === 8 ? '#fff' : [1, 7, 14, 15, 21, 22, 28, 29].includes(d) ? `${design.colors.text}20` : `${design.colors.text}70` }}>
                {d}
              </div>
            ))}
          </div>
        </div>
        {/* Time slots */}
        <div className="mb-6">
          <p className="text-xs font-medium mb-2" style={{ color: `${design.colors.text}60` }}>Available times · May 8</p>
          <div className="grid grid-cols-3 gap-2">
            {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM', '5:00 PM'].map((t, i) => (
              <div key={t} className="text-center py-2 rounded-xl border text-xs cursor-pointer" style={{ borderColor: i === 2 ? design.colors.primary : design.colors.border, background: i === 2 ? `${design.colors.primary}10` : 'transparent', color: i === 2 ? design.colors.primary : `${design.colors.text}60` }}>{t}</div>
            ))}
          </div>
        </div>
        <button className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>Confirm Booking</button>
      </div>
    </div>
  );
}

/* ─── LMS ─── */
function LMSLanding({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="LearnWave" />
      <div className="px-8 py-12 text-center" style={{ background: `linear-gradient(180deg, ${design.colors.primary}12, transparent)` }}>
        <h1 className="text-3xl font-extrabold mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
          Learn anything.<br /><span style={{ color: design.colors.cta }}>At your own pace.</span>
        </h1>
        <p className="text-sm leading-relaxed mb-6 max-w-sm mx-auto" style={{ color: `${design.colors.text}60` }}>Over 1,200 courses taught by world-class instructors. Start learning today.</p>
        <button className="px-6 py-3 rounded-xl font-bold text-sm cursor-pointer shadow-lg" style={{ background: design.colors.cta, color: '#fff' }}>Explore Courses</button>
      </div>
      <div className="px-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Web Development', lessons: 48, students: '12K', emoji: '💻', color: design.colors.primary },
            { title: 'UI/UX Design', lessons: 36, students: '8.4K', emoji: '🎨', color: design.colors.cta },
            { title: 'Data Science', lessons: 52, students: '15K', emoji: '📊', color: '#10B981' },
            { title: 'Marketing', lessons: 28, students: '6.2K', emoji: '📢', color: design.colors.secondary },
          ].map((c) => (
            <div key={c.title} className="p-4 rounded-2xl border cursor-pointer" style={{ borderColor: `${c.color}30`, background: `${c.color}08` }}>
              <span className="text-2xl block mb-2">{c.emoji}</span>
              <h3 className="font-bold text-sm mb-1" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{c.title}</h3>
              <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{c.lessons} lessons · {c.students} students</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LMSCatalog({ design }: { design: SystemDesign }) {
  const courses = [
    { title: 'React & TypeScript Masterclass', level: 'Intermediate', duration: '12h', rating: 4.9, students: '3.2K', progress: null },
    { title: 'UI Design with Figma', level: 'Beginner', duration: '8h', rating: 4.7, students: '5.1K', progress: 65 },
    { title: 'Python for Data Science', level: 'Advanced', duration: '20h', rating: 4.8, students: '8.9K', progress: null },
    { title: 'Digital Marketing Strategy', level: 'Beginner', duration: '6h', rating: 4.6, students: '2.8K', progress: 30 },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="LearnWave" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>All Courses</h2>
          <div className="flex gap-2">
            {['All', 'Beginner', 'Intermediate'].map((f, i) => (
              <button key={f} className="text-xs px-3 py-1.5 rounded-lg cursor-pointer" style={{ background: i === 0 ? design.colors.primary : 'transparent', color: i === 0 ? '#fff' : `${design.colors.text}50`, border: `1px solid ${i === 0 ? 'transparent' : design.colors.border}` }}>{f}</button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {courses.map((c) => (
            <div key={c.title} className="flex gap-3 p-3 rounded-2xl border cursor-pointer" style={{ borderColor: design.colors.border, background: `${design.colors.text}02` }}>
              <div className="w-16 h-16 rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${design.colors.primary}40, ${design.colors.cta}30)` }} />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{c.title}</h3>
                <div className="flex gap-3 text-[10px] mb-2" style={{ color: `${design.colors.text}50` }}>
                  <span>{c.level}</span><span>{c.duration}</span><span>★ {c.rating}</span><span>{c.students} students</span>
                </div>
                {c.progress !== null && (
                  <div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: design.colors.border }}>
                      <div className="h-full rounded-full" style={{ width: `${c.progress}%`, background: design.colors.cta }} />
                    </div>
                    <p className="text-[10px] mt-0.5" style={{ color: design.colors.cta }}>{c.progress}% complete</p>
                  </div>
                )}
              </div>
              <button className="text-xs px-3 py-1.5 rounded-lg self-center flex-shrink-0 cursor-pointer font-semibold" style={{ background: c.progress !== null ? `${design.colors.cta}15` : design.colors.cta, color: c.progress !== null ? design.colors.cta : '#fff' }}>
                {c.progress !== null ? 'Continue' : 'Enroll'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LMSCourseDetail({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="LearnWave" />
      <div className="p-5">
        <div className="h-32 rounded-2xl mb-4" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.cta})` }}>
          <div className="h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>React & TypeScript Masterclass</h2>
        <div className="flex gap-3 text-xs mb-4" style={{ color: `${design.colors.text}50` }}>
          <span>★ 4.9 (3.2K reviews)</span><span>Intermediate</span><span>12 hours</span>
        </div>
        <div className="flex gap-2 mb-5">
          <button className="flex-1 py-2.5 rounded-xl font-bold text-sm cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>Enroll Now</button>
          <button className="px-4 py-2.5 rounded-xl text-sm cursor-pointer border" style={{ borderColor: design.colors.border }}>Wishlist ♡</button>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2" style={{ color: design.colors.text }}>Curriculum</p>
          {['Intro to TypeScript', 'React Hooks Deep Dive', 'State Management', 'API Integration', 'Testing & Deployment'].map((l, i) => (
            <div key={l} className="flex items-center gap-3 py-2.5 border-b" style={{ borderColor: `${design.colors.border}60` }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]" style={{ background: i < 2 ? `${design.colors.cta}20` : `${design.colors.border}`, color: i < 2 ? design.colors.cta : `${design.colors.text}40` }}>
                {i < 2 ? '✓' : i + 1}
              </div>
              <span className="text-xs flex-1" style={{ color: i < 2 ? design.colors.text : `${design.colors.text}60` }}>{l}</span>
              <span className="text-[10px]" style={{ color: `${design.colors.text}30` }}>45 min</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── LUXURY E-COMMERCE ─── */
function LuxuryLanding({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="AURUM" />
      <div className="relative" style={{ borderBottom: `1px solid ${design.colors.border}` }}>
        <div className="h-64 flex items-center px-10" style={{ background: `linear-gradient(135deg, ${design.colors.primary}08, ${design.colors.cta}08)` }}>
          <div>
            <p className="text-xs tracking-[0.3em] mb-3" style={{ color: `${design.colors.text}50` }}>SPRING / SUMMER 2026</p>
            <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
              New Collection.<br /><em style={{ color: design.colors.cta }}>Timeless Elegance.</em>
            </h1>
            <button className="px-6 py-2.5 text-xs font-semibold tracking-widest cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs tracking-widest mb-4" style={{ color: `${design.colors.text}40` }}>FEATURED</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Silk Evening Gown', price: '$2,840', label: 'New' },
            { name: 'Cashmere Coat', price: '$1,620', label: 'Bestseller' },
            { name: 'Leather Clutch', price: '$890', label: 'Limited' },
          ].map((p) => (
            <div key={p.name} className="cursor-pointer group">
              <div className="h-32 rounded-xl mb-2 overflow-hidden" style={{ background: `linear-gradient(135deg, ${design.colors.primary}15, ${design.colors.cta}10)`, border: `1px solid ${design.colors.border}` }}>
                <div className="h-full flex items-end p-2">
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold" style={{ background: design.colors.cta, color: '#fff' }}>{p.label}</span>
                </div>
              </div>
              <p className="text-xs font-semibold leading-tight" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{p.name}</p>
              <p className="text-xs" style={{ color: design.colors.cta, fontWeight: 600 }}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LuxuryListing({ design }: { design: SystemDesign }) {
  const items = [
    { name: 'Silk Evening Gown', price: '$2,840', sizes: ['XS', 'S', 'M', 'L'] },
    { name: 'Cashmere Trench Coat', price: '$1,620', sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Leather Clutch Bag', price: '$890', sizes: ['One Size'] },
    { name: 'Pearl Drop Earrings', price: '$420', sizes: ['One Size'] },
    { name: 'Velvet Blazer', price: '$980', sizes: ['XS', 'S', 'M'] },
    { name: 'Lace Blouse', price: '$560', sizes: ['XS', 'S', 'M', 'L'] },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="AURUM" />
      <div className="flex gap-4 p-5">
        {/* Filters */}
        <div className="w-36 flex-shrink-0">
          <p className="text-[10px] tracking-widest font-semibold mb-3" style={{ color: `${design.colors.text}40` }}>FILTER</p>
          {['All', 'Dresses', 'Outerwear', 'Accessories'].map((f, i) => (
            <div key={f} className="py-1.5 text-xs cursor-pointer" style={{ color: i === 0 ? design.colors.text : `${design.colors.text}40`, borderBottom: i === 0 ? `1px solid ${design.colors.cta}` : 'none' }}>{f}</div>
          ))}
        </div>
        {/* Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs" style={{ color: `${design.colors.text}50` }}>24 items</p>
            <select className="text-xs border rounded-lg px-2 py-1 cursor-pointer bg-transparent" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>
              <option>Featured</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {items.map((item) => (
              <div key={item.name} className="cursor-pointer group">
                <div className="h-28 rounded-xl mb-2" style={{ background: `linear-gradient(135deg, ${design.colors.primary}10, ${design.colors.border})`, border: `1px solid ${design.colors.border}` }} />
                <p className="text-xs font-semibold leading-tight" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{item.name}</p>
                <p className="text-xs font-semibold" style={{ color: design.colors.cta }}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LuxuryDetail({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="AURUM" />
      <div className="flex gap-5 p-5">
        <div className="flex-1 h-72 rounded-2xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}15, ${design.colors.cta}10)`, border: `1px solid ${design.colors.border}` }} />
        <div className="w-52 flex-shrink-0">
          <p className="text-[10px] tracking-widest mb-2" style={{ color: design.colors.cta }}>NEW ARRIVAL</p>
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Silk Evening Gown</h2>
          <p className="text-lg font-semibold mb-3" style={{ color: design.colors.cta }}>$2,840</p>
          <p className="text-xs leading-relaxed mb-4" style={{ color: `${design.colors.text}50` }}>Crafted from 100% pure silk. Delicately draped silhouette with hand-sewn pearl detail at the neckline.</p>
          <div className="mb-4">
            <p className="text-[10px] tracking-widest font-semibold mb-2" style={{ color: `${design.colors.text}40` }}>SIZE</p>
            <div className="flex gap-1.5 flex-wrap">
              {['XS', 'S', 'M', 'L'].map((s, i) => (
                <button key={s} className="w-8 h-8 rounded-lg text-xs cursor-pointer border" style={{ borderColor: i === 1 ? design.colors.primary : design.colors.border, background: i === 1 ? `${design.colors.primary}10` : 'transparent', color: i === 1 ? design.colors.primary : `${design.colors.text}60` }}>{s}</button>
              ))}
            </div>
          </div>
          <button className="w-full py-3 rounded-xl text-xs font-semibold tracking-widest cursor-pointer mb-2" style={{ background: design.colors.primary, color: '#fff' }}>ADD TO BAG</button>
          <button className="w-full py-2.5 rounded-xl text-xs font-semibold tracking-widest cursor-pointer border" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>WISHLIST ♡</button>
        </div>
      </div>
    </div>
  );
}

function LuxuryCheckout({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="AURUM" />
      <div className="flex gap-6 p-6">
        {/* Form */}
        <div className="flex-1">
          <div className="flex gap-3 mb-6">
            {['Shipping', 'Payment', 'Review'].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: i === 0 ? design.colors.primary : design.colors.border, color: i === 0 ? '#fff' : `${design.colors.text}40` }}>{i + 1}</div>
                <span className="text-xs" style={{ color: i === 0 ? design.colors.text : `${design.colors.text}40` }}>{s}</span>
                {i < 2 && <span style={{ color: `${design.colors.border}` }}>›</span>}
              </div>
            ))}
          </div>
          <h3 className="font-bold text-sm mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Shipping Address</h3>
          <div className="space-y-3">
            {[['First Name', 'Last Name'], ['Email', 'Phone'], ['Address'], ['City', 'ZIP']].map((row, ri) => (
              <div key={ri} className={`grid gap-2 ${row.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {row.map((f) => (
                  <div key={f}>
                    <label className="block text-[10px] font-medium mb-1" style={{ color: `${design.colors.text}50` }}>{f}</label>
                    <div className="h-9 rounded-lg border px-3 flex items-center text-xs" style={{ borderColor: design.colors.border, color: `${design.colors.text}30` }}>—</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="mt-5 w-full py-3 rounded-xl text-xs font-semibold tracking-widest cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>CONTINUE TO PAYMENT</button>
        </div>
        {/* Order summary */}
        <div className="w-52 flex-shrink-0">
          <h3 className="font-bold text-sm mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Order Summary</h3>
          <div className="h-16 w-full rounded-xl mb-3" style={{ background: `${design.colors.primary}10`, border: `1px solid ${design.colors.border}` }} />
          <div className="space-y-2 text-xs mb-4">
            {[['Silk Evening Gown · S', '$2,840'], ['Shipping', 'Free'], ['Tax', '$227']].map(([l, v]) => (
              <div key={l} className="flex justify-between" style={{ color: `${design.colors.text}60` }}>
                <span>{l}</span><span>{v}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold text-sm pt-3 border-t" style={{ borderColor: design.colors.border, color: design.colors.text }}>
            <span>Total</span><span style={{ color: design.colors.cta }}>$3,067</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── GAMING ─── */
function GamingLanding({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="NEXUS ARENA" />
      <div className="relative px-8 py-12 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${design.colors.primary}30, transparent)` }} />
        <div className="relative text-center">
          <div className="inline-flex gap-1 mb-4">
            {[design.colors.primary, design.colors.cta, design.colors.accent || design.colors.secondary].map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-3 uppercase tracking-wide" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
            Enter the<br />
            <span style={{ color: design.colors.primary, textShadow: `0 0 30px ${design.colors.primary}60` }}>NEXUS ARENA</span>
          </h1>
          <p className="text-sm mb-6" style={{ color: `${design.colors.text}60` }}>100M+ players. Infinite battles. Your legend starts now.</p>
          <div className="flex justify-center gap-3">
            <button className="px-6 py-2.5 rounded-lg font-bold text-sm cursor-pointer uppercase tracking-wider" style={{ background: design.colors.primary, color: design.colors.background, boxShadow: `0 0 20px ${design.colors.primary}50` }}>Play Now</button>
            <button className="px-6 py-2.5 rounded-lg font-bold text-sm cursor-pointer uppercase tracking-wider border" style={{ borderColor: design.colors.primary, color: design.colors.primary }}>Leaderboard</button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            { game: 'NEXUS CLASH', players: '2.1M online', status: 'HOT' },
            { game: 'VOID RUNNER', players: '840K online', status: 'NEW' },
            { game: 'GRID WARS', players: '1.4M online', status: 'LIVE' },
          ].map((g) => (
            <div key={g.game} className="rounded-xl p-4 border cursor-pointer" style={{ borderColor: `${design.colors.primary}30`, background: `${design.colors.primary}08` }}>
              <div className="h-12 rounded-lg mb-2" style={{ background: `linear-gradient(135deg, ${design.colors.primary}30, ${design.colors.secondary}20)` }} />
              <p className="text-xs font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{g.game}</p>
              <div className="flex justify-between mt-1">
                <span className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{g.players}</span>
                <span className="text-[10px] font-bold" style={{ color: design.colors.cta }}>{g.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GamingLeaderboard({ design }: { design: SystemDesign }) {
  const players = [
    { rank: 1, name: 'ShadowBlade', score: '128,940', kd: '8.4', badge: '👑' },
    { rank: 2, name: 'NeonViper', score: '124,820', kd: '7.2', badge: '🥈' },
    { rank: 3, name: 'CyberWolf', score: '118,500', kd: '6.9', badge: '🥉' },
    { rank: 4, name: 'PhantomX', score: '110,200', kd: '5.8', badge: '' },
    { rank: 5, name: 'StarlordG', score: '98,740', kd: '5.1', badge: '' },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="NEXUS ARENA" />
      <div className="p-5">
        <h2 className="text-xl font-bold mb-1 uppercase tracking-wide" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Global Leaderboard</h2>
        <p className="text-xs mb-5" style={{ color: `${design.colors.text}40` }}>Season 7 · Resets in 4d 12h</p>
        {/* Top 3 podium */}
        <div className="flex justify-center items-end gap-4 mb-6 h-24">
          {[players[1], players[0], players[2]].map((p, i) => (
            <div key={p.rank} className="flex flex-col items-center" style={{ height: i === 1 ? '100%' : i === 0 ? '80%' : '65%' }}>
              <p className="text-lg mb-1">{p.badge}</p>
              <div className="flex-1 w-14 rounded-t-xl flex items-end justify-center pb-2" style={{ background: i === 1 ? `${design.colors.primary}40` : i === 0 ? `${design.colors.secondary}25` : `${design.colors.border}` }}>
                <p className="text-[10px] font-bold" style={{ color: i === 1 ? design.colors.primary : `${design.colors.text}60` }}>#{p.rank}</p>
              </div>
              <p className="text-[10px] mt-1" style={{ color: `${design.colors.text}60` }}>{p.name}</p>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="space-y-2">
          {players.map((p) => (
            <div key={p.rank} className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ borderColor: p.rank === 1 ? `${design.colors.primary}40` : `${design.colors.border}50`, background: p.rank === 1 ? `${design.colors.primary}08` : 'transparent' }}>
              <span className="text-sm font-bold w-5 text-center" style={{ color: p.rank <= 3 ? design.colors.primary : `${design.colors.text}40` }}>#{p.rank}</span>
              <span className="text-lg w-6">{p.badge || '·'}</span>
              <span className="flex-1 text-sm font-medium" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{p.name}</span>
              <span className="text-xs" style={{ color: `${design.colors.text}50` }}>KD {p.kd}</span>
              <span className="text-sm font-bold" style={{ color: design.colors.cta }}>{p.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GamingProfile({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="NEXUS ARENA" />
      <div className="p-5">
        {/* Profile header */}
        <div className="relative h-28 rounded-2xl mb-4 overflow-hidden" style={{ background: `linear-gradient(135deg, ${design.colors.primary}40, ${design.colors.secondary}20)` }}>
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 flex items-end gap-3">
            <div className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center font-bold" style={{ background: design.colors.background, borderColor: design.colors.primary, color: design.colors.primary, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>SB</div>
            <div>
              <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>ShadowBlade</p>
              <p className="text-[10px]" style={{ color: `${design.colors.primary}` }}>◆ DIAMOND · Rank #1 Global</p>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[['128K', 'Score'], ['8.4', 'K/D'], ['2,840', 'Wins'], ['340h', 'Played']].map(([v, l]) => (
            <div key={l} className="rounded-xl p-2.5 text-center border" style={{ borderColor: `${design.colors.border}60` }}>
              <p className="text-sm font-bold" style={{ color: design.colors.primary, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{v}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l}</p>
            </div>
          ))}
        </div>
        {/* Achievements */}
        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: `${design.colors.text}40` }}>Achievements</p>
        <div className="grid grid-cols-4 gap-2">
          {['🏆', '⚡', '🎯', '🔥', '💎', '⭐', '🛡️', '🚀'].map((icon, i) => (
            <div key={i} className="aspect-square rounded-xl flex items-center justify-center text-xl border" style={{ borderColor: i < 5 ? `${design.colors.primary}40` : `${design.colors.border}40`, background: i < 5 ? `${design.colors.primary}10` : 'transparent', opacity: i < 5 ? 1 : 0.3 }}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SUSTAINABILITY ─── */
function ESGLanding({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="EarthMetrics" />
      <div className="px-8 py-12" style={{ background: `linear-gradient(180deg, ${design.colors.primary}08, transparent)` }}>
        <div className="max-w-sm">
          <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: `${design.colors.cta}15`, color: design.colors.cta }}>
            🌱 Sustainability Intelligence
          </span>
          <h1 className="text-3xl font-bold leading-snug mb-3" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
            Measure what<br />
            <em style={{ color: design.colors.primary }}>matters most.</em>
          </h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: `${design.colors.text}55` }}>
            Track carbon, water, social impact, and governance metrics in one unified ESG reporting platform.
          </p>
          <button className="px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>Start ESG Report</button>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-8">
          {[['CO₂ Offset', '12.4K', 'tonnes', design.colors.primary], ['Water Saved', '840K', 'liters', design.colors.secondary], ['Social Score', '94/100', 'pts', design.colors.cta]].map(([l, v, u, c]) => (
            <div key={l as string} className="rounded-xl p-4 border text-center" style={{ borderColor: `${c}30`, background: `${c}06` }}>
              <p className="text-xl font-bold" style={{ color: c as string, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{v as string}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l as string} ({u as string})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ESGDashboard({ design }: { design: SystemDesign }) {
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const emissions = [82, 78, 75, 71, 68, 65, 62, 58, 55, 52, 48, 44];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="EarthMetrics" />
      <div className="p-5">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>ESG Dashboard · 2026</h2>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Carbon Score', val: 'A+', sub: '-46% vs target', c: design.colors.cta },
            { label: 'Water Usage', val: '840K L', sub: '-12% YoY', c: design.colors.secondary },
            { label: 'Social Index', val: '94/100', sub: '+8 pts YoY', c: design.colors.primary },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 border" style={{ borderColor: `${s.c}30`, background: `${s.c}06` }}>
              <p className="text-xs mb-1" style={{ color: `${design.colors.text}50` }}>{s.label}</p>
              <p className="text-xl font-bold" style={{ color: s.c, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{s.val}</p>
              <p className="text-[10px]" style={{ color: s.c }}>{s.sub}</p>
            </div>
          ))}
        </div>
        {/* Emissions trend */}
        <div className="rounded-xl p-4 border mb-4" style={{ borderColor: design.colors.border }}>
          <p className="text-sm font-semibold mb-3" style={{ color: design.colors.text }}>CO₂ Emissions (tonnes) — 2026</p>
          <div className="flex items-end gap-1 h-20">
            {emissions.map((v, i) => (
              <div className="flex-1 flex flex-col items-center gap-1">
                <div key={i} className="w-full rounded-t-sm" style={{ height: `${v}%`, background: `${design.colors.primary}${Math.round((v / 82) * 255).toString(16).padStart(2, '0')}` }} />
                <span className="text-[8px]" style={{ color: `${design.colors.text}30` }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Goals */}
        <div className="rounded-xl border p-4" style={{ borderColor: design.colors.border }}>
          <p className="text-sm font-semibold mb-3" style={{ color: design.colors.text }}>2026 ESG Goals</p>
          {[
            { goal: 'Net Zero Carbon', prog: 68 },
            { goal: 'Renewable Energy', prog: 82 },
            { goal: 'Supply Chain Audit', prog: 45 },
          ].map((g) => (
            <div key={g.goal} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: design.colors.text }}>{g.goal}</span>
                <span style={{ color: design.colors.primary }}>{g.prog}%</span>
              </div>
              <div className="h-2 rounded-full" style={{ background: design.colors.border }}>
                <div className="h-full rounded-full" style={{ width: `${g.prog}%`, background: design.colors.primary }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ESGReport({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="EarthMetrics" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Annual ESG Report</h2>
            <p className="text-xs" style={{ color: `${design.colors.text}40` }}>FY 2025 · Published Apr 1, 2026</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-lg cursor-pointer font-semibold" style={{ background: design.colors.cta, color: '#fff' }}>↓ Download PDF</button>
        </div>
        {[
          { section: 'Environmental', score: 'A+', items: ['CO₂ emissions down 46%', 'Renewable energy at 82%', 'Zero landfill waste achieved'] },
          { section: 'Social', score: 'A', items: ['Gender pay gap closed', '94% employee satisfaction', '12K volunteer hours'] },
          { section: 'Governance', score: 'B+', items: ['Board diversity 54% women', 'Whistleblower policy updated', 'Supply chain audited'] },
        ].map((sec) => (
          <div key={sec.section} className="mb-4 rounded-xl border p-4" style={{ borderColor: design.colors.border }}>
            <div className="flex justify-between mb-3">
              <h3 className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{sec.section}</h3>
              <span className="text-lg font-bold" style={{ color: design.colors.primary }}>{sec.score}</span>
            </div>
            <ul className="space-y-1.5">
              {sec.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs" style={{ color: `${design.colors.text}65` }}>
                  <span style={{ color: design.colors.cta }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DEVELOPER DOCS ─── */
function DevLanding({ design }: { design: SystemDesign }) {
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="Spektrum API" />
      <div className="px-8 py-10">
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5" style={{ background: `${design.colors.accent}10`, color: design.colors.accent, border: `1px solid ${design.colors.accent}25` }}>
            v3.4.0 · Now with streaming support
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
            The API built for<br /><span style={{ color: design.colors.cta }}>developers first.</span>
          </h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: `${design.colors.text}55` }}>
            99.99% uptime SLA. Sub-50ms latency. Loved by 30,000+ developers building the next generation of products.
          </p>
          <div className="flex gap-3 mb-8">
            <button className="px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>Get API Key →</button>
            <button className="px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer border" style={{ borderColor: design.colors.border, color: `${design.colors.text}70` }}>View Docs</button>
          </div>
          {/* Code snippet */}
          <div className="rounded-xl p-4 font-mono text-xs leading-relaxed" style={{ background: design.colors.text, color: design.colors.background }}>
            <p style={{ color: '#888' }}># Quick start</p>
            <p><span style={{ color: '#0EA5E9' }}>curl</span> -X POST https://api.spektrum.dev/v3/generate \</p>
            <p>  -H <span style={{ color: '#F97316' }}>"Authorization: Bearer $API_KEY"</span> \</p>
            <p>  -d <span style={{ color: '#10B981' }}>'{"{"}"prompt":"Hello world"{"}"}'</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevDocs({ design }: { design: SystemDesign }) {
  const sections = ['Getting Started', 'Authentication', 'Endpoints', 'Rate Limits', 'Errors', 'SDKs'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="Spektrum API" />
      <div className="flex" style={{ minHeight: 'calc(100% - 57px)' }}>
        {/* Sidebar */}
        <div className="w-44 flex-shrink-0 p-4 border-r" style={{ borderColor: design.colors.border }}>
          {sections.map((s, i) => (
            <div key={s} className="py-1.5 px-2 rounded-lg text-xs cursor-pointer mb-0.5" style={{ background: i === 0 ? `${design.colors.accent}10` : 'transparent', color: i === 0 ? design.colors.accent : `${design.colors.text}50` }}>{s}</div>
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 p-6 max-w-lg">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Getting Started</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: `${design.colors.text}60` }}>To use the Spektrum API, you'll need an API key. You can get one from the dashboard after creating a free account.</p>
          <div className="rounded-xl p-3 font-mono text-xs leading-relaxed mb-4" style={{ background: `${design.colors.text}08`, border: `1px solid ${design.colors.border}` }}>
            <p style={{ color: design.colors.accent }}>// Install the SDK</p>
            <p style={{ color: design.colors.text }}>npm install <span style={{ color: design.colors.cta }}>@spektrum/sdk</span></p>
          </div>
          <div className="rounded-xl p-3 font-mono text-xs leading-relaxed" style={{ background: `${design.colors.text}08`, border: `1px solid ${design.colors.border}` }}>
            <p style={{ color: design.colors.accent }}>// Initialize</p>
            <p style={{ color: design.colors.text }}>import {'{ Spektrum }'} from <span style={{ color: '#F97316' }}>'@spektrum/sdk'</span></p>
            <p style={{ color: design.colors.text }}>const api = new <span style={{ color: design.colors.accent }}>Spektrum</span>({'{ apiKey: process.env.KEY }'})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevAPIRef({ design }: { design: SystemDesign }) {
  const endpoints = [
    { method: 'POST', path: '/v3/generate', desc: 'Generate text completion', status: 'stable' },
    { method: 'POST', path: '/v3/embed', desc: 'Create vector embeddings', status: 'stable' },
    { method: 'GET', path: '/v3/models', desc: 'List available models', status: 'stable' },
    { method: 'POST', path: '/v3/stream', desc: 'Streaming completions', status: 'beta' },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="Spektrum API" />
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>API Reference</h2>
        <div className="space-y-2">
          {endpoints.map((ep) => (
            <div key={ep.path} className="rounded-xl border p-4 cursor-pointer hover:bg-gray-50/5 transition-colors" style={{ borderColor: design.colors.border }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded" style={{ background: ep.method === 'POST' ? `${design.colors.cta}20` : `${design.colors.accent}20`, color: ep.method === 'POST' ? design.colors.cta : design.colors.accent }}>{ep.method}</span>
                <code className="text-xs font-mono" style={{ color: design.colors.text }}>{ep.path}</code>
                {ep.status === 'beta' && <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: `${design.colors.secondary}20`, color: design.colors.secondary }}>beta</span>}
              </div>
              <p className="text-xs" style={{ color: `${design.colors.text}55` }}>{ep.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DevChangelog({ design }: { design: SystemDesign }) {
  const releases = [
    { ver: 'v3.4.0', date: 'Apr 27, 2026', type: 'Minor', changes: ['Added streaming support for /v3/stream', 'New models: Optimus-4 and Helios-2'] },
    { ver: 'v3.3.2', date: 'Apr 10, 2026', type: 'Patch', changes: ['Fixed rate limit header bug', 'Improved latency by 12ms average'] },
    { ver: 'v3.3.0', date: 'Mar 15, 2026', type: 'Minor', changes: ['Embeddings endpoint now supports batch up to 100', 'Added webhook retry with exponential backoff'] },
  ];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="Spektrum API" />
      <div className="p-5">
        <h2 className="text-xl font-bold mb-5" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Changelog</h2>
        <div className="space-y-5">
          {releases.map((r) => (
            <div key={r.ver} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mt-1" style={{ background: r.type === 'Minor' ? design.colors.cta : design.colors.accent }} />
                <div className="w-0.5 flex-1 mt-2" style={{ background: design.colors.border }} />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-sm font-bold" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{r.ver}</code>
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: r.type === 'Minor' ? `${design.colors.cta}15` : `${design.colors.accent}15`, color: r.type === 'Minor' ? design.colors.cta : design.colors.accent }}>{r.type}</span>
                  <span className="text-xs" style={{ color: `${design.colors.text}30` }}>{r.date}</span>
                </div>
                <ul className="space-y-1">
                  {r.changes.map((c) => (
                    <li key={c} className="text-xs flex gap-2" style={{ color: `${design.colors.text}60` }}>
                      <span style={{ color: design.colors.primary }}>·</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GenericPages({ design, page }: Props) {
  switch (design.id) {
    case 'healthcare':
      if (page === 'landing') return <HealthcareLanding design={design} />;
      if (page === 'dashboard') return <HealthcareDashboard design={design} />;
      if (page === 'appointment') return <HealthcareAppointment design={design} />;
      return <HealthcareLanding design={design} />;

    case 'lms':
      if (page === 'landing') return <LMSLanding design={design} />;
      if (page === 'catalog') return <LMSCatalog design={design} />;
      if (page === 'course') return <LMSCourseDetail design={design} />;
      return <LMSLanding design={design} />;

    case 'luxury-ecommerce':
      if (page === 'landing') return <LuxuryLanding design={design} />;
      if (page === 'listing') return <LuxuryListing design={design} />;
      if (page === 'detail') return <LuxuryDetail design={design} />;
      if (page === 'checkout') return <LuxuryCheckout design={design} />;
      return <LuxuryLanding design={design} />;

    case 'gaming':
      if (page === 'landing') return <GamingLanding design={design} />;
      if (page === 'leaderboard') return <GamingLeaderboard design={design} />;
      if (page === 'profile') return <GamingProfile design={design} />;
      return <GamingLanding design={design} />;

    case 'sustainability':
      if (page === 'landing') return <ESGLanding design={design} />;
      if (page === 'dashboard') return <ESGDashboard design={design} />;
      if (page === 'report') return <ESGReport design={design} />;
      return <ESGLanding design={design} />;

    case 'developer-docs':
      if (page === 'landing') return <DevLanding design={design} />;
      if (page === 'docs') return <DevDocs design={design} />;
      if (page === 'api') return <DevAPIRef design={design} />;
      if (page === 'changelog') return <DevChangelog design={design} />;
      return <DevLanding design={design} />;

    default:
      return <div className="p-8 text-white/50 text-sm">No demo available for this page.</div>;
  }
}
