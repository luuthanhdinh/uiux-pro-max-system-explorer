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

/* ─── HEALTHCARE RECORDS ─── */
function HealthcareRecords({ design }: { design: SystemDesign }) {
  const labs: [string, string, string, boolean][] = [['Complete Blood Count', '2026-04-10', 'Normal', true], ['HbA1c', '2026-03-22', 'Borderline', false], ['Lipid Panel', '2026-02-14', 'Normal', true], ['Thyroid (TSH)', '2026-01-08', 'Normal', true]];
  const history = [['2026-04-15', 'Annual Check-up', 'Dr. Patel', 'Cardiology'], ['2026-03-02', 'Follow-up Visit', 'Dr. Kim', 'Endocrinology'], ['2026-01-19', 'Blood Pressure Review', 'Dr. Patel', 'Cardiology']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="MediCare Portal" />
      <div className="px-8 py-6">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Health Records</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}50` }}>Lab Results</p>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
              <div className="grid grid-cols-4 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider" style={{ background: `${design.colors.primary}08`, color: `${design.colors.text}40` }}>
                <span>Test</span><span>Date</span><span>Status</span><span>Action</span>
              </div>
              {labs.map(([test, date, status, normal]) => (
                <div key={test} className="grid grid-cols-4 items-center px-4 py-3 border-t text-xs" style={{ borderColor: design.colors.border }}>
                  <span style={{ color: design.colors.text }}>{test}</span>
                  <span style={{ color: `${design.colors.text}50` }}>{date}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold w-fit" style={{ background: normal ? `${design.colors.cta}15` : `${design.colors.accent}15`, color: normal ? design.colors.cta : design.colors.accent }}>{status}</span>
                  <button className="text-[10px] cursor-pointer font-medium" style={{ color: design.colors.primary }}>View →</button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}50` }}>Visit History</p>
            <div className="space-y-3">
              {history.map(([date, visit, doctor, dept]) => (
                <div key={date} className="flex gap-3 p-4 rounded-xl border" style={{ borderColor: design.colors.border }}>
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: design.colors.primary }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold" style={{ color: design.colors.text }}>{visit}</p>
                      <span className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{date}</span>
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: `${design.colors.text}50` }}>{doctor} · {dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── LMS PROGRESS ─── */
function LMSProgress({ design }: { design: SystemDesign }) {
  const courses = [['React Advanced Patterns', 94, '✅'], ['TypeScript Deep Dive', 100, '🏆'], ['GraphQL Fundamentals', 72, '📖'], ['Next.js Mastery', 45, '⏳']];
  const badges = [['🔥', 'Hot Streak', '14 days'], ['⭐', 'Top Learner', 'Apr 2026'], ['🚀', 'Fast Finisher', '< 1 week'], ['💎', 'Diamond', 'Level 5']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="LearnHub" />
      <div className="px-8 py-6">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>My Progress</h2>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-4 rounded-full overflow-hidden border" style={{ borderColor: design.colors.border, background: `${design.colors.border}40` }}>
            <div className="h-full rounded-full" style={{ width: '68%', background: `linear-gradient(90deg, ${design.colors.primary}, ${design.colors.cta})` }} />
          </div>
          <span className="text-sm font-bold" style={{ color: design.colors.primary }}>Level 5 · 6,800 / 10,000 XP</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[['14', 'Day Streak 🔥'], ['12', 'Completed'], ['3', 'Certificates']].map(([v, l]) => (
            <div key={l} className="text-center p-4 rounded-2xl border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}06` }}>
              <p className="text-2xl font-bold" style={{ color: design.colors.primary, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{v}</p>
              <p className="text-xs mt-1" style={{ color: `${design.colors.text}50` }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}50` }}>Enrolled Courses</p>
            <div className="space-y-3">
              {courses.map(([title, pct, icon]) => (
                <div key={title} className="p-3 rounded-xl border" style={{ borderColor: design.colors.border }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: design.colors.text }}>{icon} {title}</span>
                    <span className="text-xs font-semibold" style={{ color: design.colors.primary }}>{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: `${design.colors.border}60` }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: design.colors.primary }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}50` }}>Badges Earned</p>
            <div className="grid grid-cols-2 gap-2">
              {badges.map(([icon, name, sub]) => (
                <div key={name} className="flex items-center gap-2 p-3 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}06` }}>
                  <span className="text-2xl">{icon}</span>
                  <div><p className="text-xs font-semibold" style={{ color: design.colors.text }}>{name}</p><p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{sub}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── LUXURY WISHLIST ─── */
function LuxuryWishlist({ design }: { design: SystemDesign }) {
  const items = [['Silk Evening Gown', '$2,840', 'Size 6', 'In Stock'], ['Cashmere Coat', '$4,200', 'Size S', 'Low Stock'], ['Patent Leather Heels', '$890', 'EU 38', 'In Stock'], ['Gold Chain Clutch', '$1,650', 'One Size', 'In Stock'], ['Wool Blazer', '$1,980', 'Size 4', 'Sold Out'], ['Pearl Drop Earrings', '$620', 'One Size', 'In Stock']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="ÉLARA" />
      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>My Wishlist ({items.length})</h2>
          <button className="text-xs px-4 py-2 rounded-xl border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>Share Wishlist</button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {items.map(([name, price, size, stock]) => (
            <div key={name} className="rounded-2xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
              <div className="h-40 flex items-center justify-center text-4xl" style={{ background: `${design.colors.primary}08` }}>👗</div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-sm font-semibold" style={{ color: design.colors.text, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{name}</p>
                  <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded" style={{ background: stock === 'Sold Out' ? `${design.colors.accent}15` : stock === 'Low Stock' ? `${design.colors.cta}15` : `${design.colors.border}40`, color: stock === 'Sold Out' ? design.colors.accent : stock === 'Low Stock' ? '#d97706' : `${design.colors.text}50` }}>{stock}</span>
                </div>
                <p className="text-xs mb-1" style={{ color: `${design.colors.text}50` }}>{size}</p>
                <p className="text-sm font-bold mb-3" style={{ color: design.colors.text }}>{price}</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: stock === 'Sold Out' ? `${design.colors.border}40` : design.colors.cta, color: stock === 'Sold Out' ? `${design.colors.text}40` : '#fff' }} disabled={stock === 'Sold Out'}>Move to Bag</button>
                  <button className="px-3 py-1.5 rounded-lg text-xs border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── GAMING STORE ─── */
function GamingStore({ design }: { design: SystemDesign }) {
  const featured = [['Dragon Slayer Skin', '⚔️', '1,200 G', 'Legendary', '#FF0080'], ['Neon Racer Bundle', '🏎️', '2,800 G', 'Bundle', '#FFEA00'], ['Ghost Protocol', '👻', '800 G', 'Rare', '#00FF88'], ['Void Walker Set', '🌑', '3,500 G', 'Epic', '#A855F7']];
  const daily = [['XP Booster ×2', '🚀', '200 G', '23:45:12'], ['Random Loot Box', '📦', '150 G', '23:45:12'], ['Premium Pass Day', '⭐', '500 G', '23:45:12']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: design.colors.border, background: `${design.colors.background}` }}>
        <span className="font-bold text-sm tracking-widest uppercase" style={{ color: design.colors.primary, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>NEXUS STORE</span>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold" style={{ borderColor: design.colors.cta, color: design.colors.cta }}>💰 14,320 G</div>
      </nav>
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Featured Items</h2>
          <span className="text-xs px-2 py-1 rounded-lg font-semibold" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>Limited Time</span>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6">
          {featured.map(([name, icon, price, rarity, color]) => (
            <div key={name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: color + '40', background: `${color}10` }}>
              <div className="h-24 flex items-center justify-center text-4xl" style={{ background: `${color}20` }}>{icon}</div>
              <div className="p-3">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded mb-1.5 inline-block" style={{ background: `${color}30`, color: color }}>{rarity}</span>
                <p className="text-xs font-semibold mb-2" style={{ color: design.colors.text }}>{name}</p>
                <button className="w-full py-1.5 rounded-lg text-xs font-bold cursor-pointer" style={{ background: color, color: '#000' }}>{price}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Daily Deals</h3>
          <span className="text-xs font-mono" style={{ color: design.colors.cta }}>Resets in 23:45:12</span>
        </div>
        <div className="space-y-2">
          {daily.map(([name, icon, price, timer]) => (
            <div key={name} className="flex items-center justify-between px-4 py-3 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <div><p className="text-sm font-semibold" style={{ color: design.colors.text }}>{name}</p><p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>Resets in {timer}</p></div>
              </div>
              <button className="px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer" style={{ background: design.colors.cta, color: '#000' }}>{price}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── ESG GOALS ─── */
function ESGGoals({ design }: { design: SystemDesign }) {
  const goals = [['Net-Zero Emissions', 2030, 38, 'Carbon'], ['100% Renewable Energy', 2028, 62, 'Energy'], ['Zero Waste to Landfill', 2027, 45, 'Waste'], ['Supply Chain Transparency', 2026, 81, 'Social']];
  const milestones: [string, string, boolean][] = [['Q1 2026', 'Scope 3 audit complete', true], ['Q4 2025', 'Solar installations Phase 1', true], ['Q3 2025', 'Sustainability report published', true], ['Q2 2026', 'Supplier code of conduct rollout', false], ['Q4 2026', 'Carbon offset credits retired', false]];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="EcoMetrics" />
      <div className="px-8 py-6">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Sustainability Goals</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}50` }}>Target Progress</p>
            <div className="space-y-4">
              {goals.map(([name, year, pct, cat]) => (
                <div key={name} className="p-4 rounded-2xl border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}04` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold" style={{ color: design.colors.text }}>{name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: `${design.colors.secondary}20`, color: design.colors.primary }}>{cat}</span>
                  </div>
                  <p className="text-xs mb-2" style={{ color: `${design.colors.text}40` }}>Target: {year}</p>
                  <div className="h-2 rounded-full mb-1" style={{ background: `${design.colors.border}50` }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${design.colors.primary}, ${design.colors.secondary})` }} />
                  </div>
                  <p className="text-right text-[10px] font-semibold" style={{ color: design.colors.primary }}>{pct}% complete</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}50` }}>Milestone Timeline</p>
            <div className="relative pl-5 space-y-4">
              {milestones.map(([date, title, done]) => (
                <div key={title} className="relative">
                  <div className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 flex items-center justify-center" style={{ borderColor: done ? design.colors.primary : design.colors.border, background: done ? design.colors.primary : design.colors.background }}>
                    {done && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <p className="text-[10px] mb-0.5" style={{ color: `${design.colors.text}40` }}>{date}</p>
                  <p className="text-sm" style={{ color: done ? design.colors.text : `${design.colors.text}50` }}>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── DEV PLAYGROUND ─── */
function DevPlayground({ design }: { design: SystemDesign }) {
  const methods = ['GET', 'POST', 'PUT', 'DELETE'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <Nav design={design} brand="DevAPI Docs" />
      <div className="px-8 py-6">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>API Playground</h2>
        <p className="text-sm mb-6" style={{ color: `${design.colors.text}50` }}>Build and test API requests directly in the browser.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Method + Endpoint</p>
              <div className="flex gap-2">
                <div className="flex rounded-xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
                  {methods.map((m) => (
                    <button key={m} className="px-2.5 py-2 text-xs font-bold cursor-pointer" style={{ background: m === 'POST' ? design.colors.cta : 'transparent', color: m === 'POST' ? '#fff' : `${design.colors.text}50` }}>{m}</button>
                  ))}
                </div>
                <div className="flex-1 h-10 rounded-xl border px-3 flex items-center text-xs font-mono" style={{ borderColor: design.colors.border, color: design.colors.text }}>/v1/chat/completions</div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Headers</p>
              <div className="rounded-xl border divide-y" style={{ borderColor: design.colors.border }}>
                {[['Authorization', 'Bearer sk-••••••••••••••••'], ['Content-Type', 'application/json']].map(([k, v]) => (
                  <div key={k} className="flex text-xs font-mono px-3 py-2">
                    <span className="w-36 flex-shrink-0" style={{ color: design.colors.accent }}>{k}</span>
                    <span style={{ color: `${design.colors.text}60` }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Request Body</p>
              <div className="rounded-xl border p-3 text-xs font-mono leading-relaxed" style={{ borderColor: design.colors.border, background: `${design.colors.text}04` }}>
                <div style={{ color: `${design.colors.text}70` }}>{'{'}</div>
                <div className="ml-4"><span style={{ color: design.colors.accent }}>"model"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"nova-4"</span>,</div>
                <div className="ml-4"><span style={{ color: design.colors.accent }}>"messages"</span><span style={{ color: `${design.colors.text}70` }}>: [{'{'}</span><span style={{ color: design.colors.accent }}>"role"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"user"</span>, <span style={{ color: design.colors.accent }}>"content"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"Hello!"</span>{'}'}{']'}</div>
                <div style={{ color: `${design.colors.text}70` }}>{'}'}</div>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-xl text-sm font-semibold cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>Send Request →</button>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Response <span className="ml-2 px-1.5 py-0.5 rounded text-[10px]" style={{ background: '#16a34a20', color: '#16a34a' }}>200 OK · 142ms</span></p>
            <div className="rounded-xl border p-4 text-xs font-mono leading-relaxed h-64 overflow-y-auto" style={{ borderColor: design.colors.border, background: `${design.colors.text}04` }}>
              <div style={{ color: `${design.colors.text}70` }}>{'{'}</div>
              <div className="ml-4"><span style={{ color: design.colors.accent }}>"id"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"chatcmpl-abc123"</span>,</div>
              <div className="ml-4"><span style={{ color: design.colors.accent }}>"model"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"nova-4"</span>,</div>
              <div className="ml-4"><span style={{ color: design.colors.accent }}>"choices"</span><span style={{ color: `${design.colors.text}70` }}>: [</span></div>
              <div className="ml-8"><span style={{ color: `${design.colors.text}70` }}>{'{'}</span></div>
              <div className="ml-12"><span style={{ color: design.colors.accent }}>"message"</span><span style={{ color: `${design.colors.text}70` }}>: {'{'}</span><span style={{ color: design.colors.accent }}>"role"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"assistant"</span>, <span style={{ color: design.colors.accent }}>"content"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"Hello! How can I help?"</span>{'}'}</div>
              <div className="ml-12"><span style={{ color: design.colors.accent }}>"finish_reason"</span><span style={{ color: `${design.colors.text}70` }}>: </span><span style={{ color: design.colors.cta }}>"stop"</span></div>
              <div className="ml-8"><span style={{ color: `${design.colors.text}70` }}>{'}'}</span></div>
              <div className="ml-4"><span style={{ color: `${design.colors.text}70` }}>]</span></div>
              <div style={{ color: `${design.colors.text}70` }}>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SOCIAL MEDIA ─── */
function SocialFeed({ design }: { design: SystemDesign }) {
  const stories = ['You', 'alex_k', 'mia.r', 'j_photo', 'surf_co', 'nat_geo'];
  const posts = [
    { user: 'alex_k', handle: '@alex_k', time: '2m', content: 'Golden hour hits different from 10,000 feet ✈️', likes: '1.2k', comments: '48', emoji: '🌅' },
    { user: 'mia.r', handle: '@mia.r', time: '15m', content: 'New studio setup is finally complete. Ready to create 🎨', likes: '843', comments: '32', emoji: '🎨' },
    { user: 'surf_co', handle: '@surf_co', time: '1h', content: 'Summer collection drops Friday. Are you ready? 🏄', likes: '5.4k', comments: '211', emoji: '🌊' },
  ];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 z-10" style={{ borderColor: design.colors.border, background: design.colors.background }}>
        <span className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vibe</span>
        <div className="flex gap-3">
          {['🔔', '💬'].map((i) => <button key={i} className="text-lg cursor-pointer">{i}</button>)}
        </div>
      </div>
      {/* Stories */}
      <div className="flex gap-3 px-4 py-3 overflow-x-auto scrollbar-none border-b" style={{ borderColor: design.colors.border }}>
        {stories.map((s, i) => (
          <div key={s} className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: i === 0 ? `${design.colors.border}60` : `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.accent})`, color: design.colors.text, padding: '2px' }}>
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: i === 0 ? design.colors.border : `${design.colors.background}` }}>
                {s[0].toUpperCase()}
              </div>
            </div>
            <span className="text-[10px]" style={{ color: `${design.colors.text}60` }}>{s}</span>
          </div>
        ))}
      </div>
      {/* Feed */}
      <div className="divide-y" style={{ borderColor: design.colors.border }}>
        {posts.map((p) => (
          <div key={p.user} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>{p.user[0].toUpperCase()}</div>
              <div className="flex-1"><p className="text-sm font-semibold" style={{ color: design.colors.text }}>{p.user}</p><p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{p.handle} · {p.time}</p></div>
              <button className="text-xs cursor-pointer" style={{ color: `${design.colors.text}40` }}>•••</button>
            </div>
            <div className="rounded-2xl h-40 flex items-center justify-center text-5xl mb-3" style={{ background: `linear-gradient(135deg, ${design.colors.primary}20, ${design.colors.accent}20)` }}>{p.emoji}</div>
            <p className="text-sm mb-3" style={{ color: design.colors.text }}>{p.content}</p>
            <div className="flex gap-5">
              {[['❤️', p.likes], ['💬', p.comments], ['🔁', ''], ['📤', '']].map(([icon, count]) => (
                <button key={icon} className="flex items-center gap-1.5 text-xs cursor-pointer" style={{ color: `${design.colors.text}50` }}>{icon} {count}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialProfile({ design }: { design: SystemDesign }) {
  const grid = ['🌅', '🎨', '🏄', '🌿', '🎵', '🌆', '✈️', '🍜', '🎭'];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="h-32" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.cta}, ${design.colors.accent})` }} />
      <div className="px-4 pb-4 -mt-10">
        <div className="flex items-end justify-between mb-4">
          <div className="w-20 h-20 rounded-full border-4 flex items-center justify-center text-2xl font-bold" style={{ borderColor: design.colors.background, background: design.colors.border, color: design.colors.text }}>AK</div>
          <div className="flex gap-2 mt-12">
            <button className="px-4 py-1.5 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Follow</button>
            <button className="px-3 py-1.5 rounded-xl text-xs border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>Message</button>
          </div>
        </div>
        <p className="font-bold text-base mb-0.5" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Alex Kim</p>
        <p className="text-xs mb-2" style={{ color: `${design.colors.text}50` }}>@alex_k · Photographer & Explorer 📸</p>
        <p className="text-sm mb-4" style={{ color: `${design.colors.text}70` }}>Capturing moments, chasing light. Based in SF 🌉</p>
        <div className="flex gap-6 mb-5">
          {[['284', 'Posts'], ['48.2K', 'Followers'], ['612', 'Following']].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-bold text-sm" style={{ color: design.colors.text }}>{v}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {grid.map((e, i) => (
            <div key={i} className="aspect-square flex items-center justify-center text-3xl rounded-sm cursor-pointer" style={{ background: `${design.colors.primary}${15 + i * 3}` }}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialExplore({ design }: { design: SystemDesign }) {
  const trending = [['#GoldenHour', '284K posts'], ['#StreetArt', '192K posts'], ['#TravelVibes', '1.2M posts'], ['#FoodPhotography', '3.4M posts']];
  const grid = ['🌅', '🎨', '🏙️', '🌿', '🎵', '🍜', '🏄', '✈️', '🌸', '🎭', '🌊', '🦋'];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-4 pt-4 pb-2 sticky top-0 z-10" style={{ background: design.colors.background }}>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}40` }}>
          <span style={{ color: `${design.colors.text}40` }}>🔍</span>
          <span className="text-sm" style={{ color: `${design.colors.text}30` }}>Search people, tags, places…</span>
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Trending Now</p>
        <div className="flex gap-2 overflow-x-auto scrollbar-none mb-5">
          {trending.map(([tag, count]) => (
            <div key={tag} className="flex-shrink-0 px-3 py-2 rounded-xl border cursor-pointer" style={{ borderColor: `${design.colors.primary}40`, background: `${design.colors.primary}10` }}>
              <p className="text-xs font-semibold" style={{ color: design.colors.primary }}>{tag}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{count}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Discover</p>
        <div className="grid grid-cols-3 gap-1">
          {grid.map((e, i) => (
            <div key={i} className={`flex items-center justify-center text-3xl cursor-pointer rounded-lg ${i === 4 ? 'col-span-2 row-span-2' : ''}`} style={{ background: `linear-gradient(135deg, ${design.colors.primary}${10 + i * 4}, ${design.colors.accent}${10 + i * 3})`, aspectRatio: i === 4 ? undefined : '1', height: i === 4 ? '130px' : undefined }}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialMessages({ design }: { design: SystemDesign }) {
  const convos = [
    { user: 'mia.r', msg: 'Love that new shot! 🔥', time: '2m', unread: 3 },
    { user: 'surf_co', msg: 'Can you collab on Friday?', time: '1h', unread: 0 },
    { user: 'j_photo', msg: 'Sent you the RAW files', time: '3h', unread: 1 },
    { user: 'nat_geo', msg: 'Thanks for the submission!', time: '1d', unread: 0 },
  ];
  const messages = [
    { from: 'them', text: 'Love that new shot! 🔥', time: '2:41 PM' },
    { from: 'them', text: 'What camera did you use?', time: '2:41 PM' },
    { from: 'me', text: 'Thanks!! Shot on Sony A7IV', time: '2:43 PM' },
    { from: 'me', text: 'Golden hour was perfect yesterday', time: '2:43 PM' },
    { from: 'them', text: 'We should shoot together sometime!', time: '2:45 PM' },
  ];
  return (
    <div className="min-h-full flex" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="w-56 flex-shrink-0 border-r" style={{ borderColor: design.colors.border }}>
        <div className="p-4 border-b" style={{ borderColor: design.colors.border }}>
          <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Messages</p>
        </div>
        {convos.map((c) => (
          <div key={c.user} className="flex items-center gap-3 px-4 py-3 cursor-pointer border-b" style={{ borderColor: design.colors.border, background: c.user === 'mia.r' ? `${design.colors.primary}10` : 'transparent' }}>
            <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>{c.user[0].toUpperCase()}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{c.user}</p>
                <p className="text-[10px]" style={{ color: `${design.colors.text}30` }}>{c.time}</p>
              </div>
              <p className="text-[11px] truncate" style={{ color: `${design.colors.text}50` }}>{c.msg}</p>
            </div>
            {c.unread > 0 && <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: design.colors.primary, color: '#fff' }}>{c.unread}</span>}
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: design.colors.border }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>M</div>
          <p className="text-sm font-semibold" style={{ color: design.colors.text }}>mia.r</p>
        </div>
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[60%] px-3 py-2 rounded-2xl text-xs" style={{ background: m.from === 'me' ? design.colors.primary : `${design.colors.border}60`, color: m.from === 'me' ? '#fff' : design.colors.text }}>
                {m.text}
                <p className="text-[9px] mt-1 opacity-60">{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-4 py-3 border-t" style={{ borderColor: design.colors.border }}>
          <div className="flex-1 px-3 py-2 rounded-2xl text-xs border" style={{ borderColor: design.colors.border, background: `${design.colors.border}30`, color: `${design.colors.text}30` }}>Message mia.r…</div>
          <button className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>↑</button>
        </div>
      </div>
    </div>
  );
}

/* ─── REAL ESTATE ─── */
function RealEstateLanding({ design }: { design: SystemDesign }) {
  const listings = [['Modern Loft, SF', '$1,250,000', '2 bd · 2 ba · 1,100 sqft', '🏢'], ['Victorian Home', '$2,480,000', '4 bd · 3 ba · 2,800 sqft', '🏠'], ['Beach Condo', '$890,000', '1 bd · 1 ba · 680 sqft', '🌊']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>Estatum</span>
        <div className="flex gap-6 text-sm" style={{ color: `${design.colors.text}60` }}>
          {['Buy', 'Rent', 'Sell', 'Agents'].map((l) => <a key={l} className="cursor-pointer hover:opacity-80">{l}</a>)}
        </div>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>List Property</button>
      </nav>
      <div className="px-8 py-12">
        <h1 className="text-4xl font-bold leading-tight mb-4 max-w-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Find your<br /><span style={{ color: design.colors.primary }}>perfect home.</span></h1>
        <div className="flex gap-2 max-w-xl mb-12 p-2 rounded-2xl border" style={{ borderColor: design.colors.border, background: '#fff' }}>
          {[['📍', 'City, neighborhood…'], ['🏠', 'Property type'], ['💰', 'Price range']].map(([icon, ph]) => (
            <div key={ph} className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs" style={{ borderColor: design.colors.border, color: `${design.colors.text}40` }}>{icon} {ph}</div>
          ))}
          <button className="px-5 py-2 rounded-xl text-xs font-bold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Search</button>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: `${design.colors.text}40` }}>Featured Listings</p>
        <div className="grid grid-cols-3 gap-4">
          {listings.map(([name, price, details, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: design.colors.border }}>
              <div className="h-32 flex items-center justify-center text-5xl" style={{ background: `${design.colors.primary}08` }}>{icon}</div>
              <div className="p-4">
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{name}</p>
                <p className="text-xs mb-1" style={{ color: `${design.colors.text}50` }}>{details}</p>
                <p className="font-bold" style={{ color: design.colors.primary }}>{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealEstateListing({ design }: { design: SystemDesign }) {
  const properties = [['Modern Loft, SOMA', '$1,250,000', '2 bd · 2 ba · 1,100 sqft', 'For Sale', '🏢'], ['Victorian Home, Noe', '$2,480,000', '4 bd · 3 ba · 2,800 sqft', 'For Sale', '🏠'], ['Beach Condo, Pacifica', '$890,000', '1 bd · 1 ba · 680 sqft', 'For Rent', '🌊'], ['Penthouse, FiDi', '$4,200,000', '3 bd · 3.5 ba · 3,200 sqft', 'For Sale', '🏙️'], ['Studio, Mission', '$3,200/mo', 'Studio · 1 ba · 490 sqft', 'For Rent', '🌆'], ['Townhouse, Castro', '$1,850,000', '3 bd · 2.5 ba · 1,900 sqft', 'For Sale', '🏡']];
  return (
    <div className="flex min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <aside className="w-52 flex-shrink-0 border-r p-4" style={{ borderColor: design.colors.border }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Filters</p>
        {([['Type', ['Any', 'House', 'Condo', 'Apartment']], ['Status', ['For Sale', 'For Rent']], ['Beds', ['Any', '1+', '2+', '3+']]] as [string, string[]][]).map(([label, opts]) => (
          <div key={label} className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>{label}</p>
            <div className="flex flex-wrap gap-1">
              {(opts as string[]).map((o, i) => (
                <button key={o} className="px-2 py-1 rounded-lg text-[10px] cursor-pointer border" style={{ background: i === 0 ? design.colors.primary : 'transparent', color: i === 0 ? '#fff' : `${design.colors.text}50`, borderColor: i === 0 ? design.colors.primary : design.colors.border }}>{o}</button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t" style={{ borderColor: design.colors.border }}>
          <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Max Price</p>
          <div className="h-1.5 rounded-full mb-1" style={{ background: design.colors.border }}><div className="h-full rounded-full w-3/5" style={{ background: design.colors.primary }} /></div>
          <div className="flex justify-between text-[10px]" style={{ color: `${design.colors.text}40` }}><span>$0</span><span>$5M+</span></div>
        </div>
      </aside>
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm" style={{ color: `${design.colors.text}50` }}>{properties.length} properties found</p>
          <select className="text-xs border rounded-lg px-2 py-1 cursor-pointer" style={{ borderColor: design.colors.border, color: design.colors.text, background: design.colors.background }}>
            <option>Sort: Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {properties.map(([name, price, details, status, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: design.colors.border }}>
              <div className="h-28 flex items-center justify-center text-4xl relative" style={{ background: `${design.colors.primary}08` }}>
                {icon}
                <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: `${design.colors.cta}20`, color: design.colors.cta }}>{status}</span>
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{name}</p>
                <p className="text-[11px] mb-1" style={{ color: `${design.colors.text}50` }}>{details}</p>
                <p className="font-bold text-sm" style={{ color: design.colors.primary }}>{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealEstateDetail({ design }: { design: SystemDesign }) {
  const features = ['Central AC/Heat', 'In-unit Laundry', 'Rooftop Deck', 'Pet Friendly', 'Parking Included', 'EV Charging'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="h-56 flex items-center justify-center text-7xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}10, ${design.colors.secondary}10)` }}>🏢</div>
      <div className="px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Modern Loft, SOMA</h1>
            <p className="text-sm" style={{ color: `${design.colors.text}50` }}>📍 123 Brannan St, San Francisco, CA 94107</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold" style={{ color: design.colors.primary }}>$1,250,000</p>
            <p className="text-xs" style={{ color: `${design.colors.text}40` }}>Est. $5,800/mo</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[['🛏', '2', 'Beds'], ['🚿', '2', 'Baths'], ['📐', '1,100', 'sqft'], ['🏗', '2019', 'Built']].map(([icon, v, l]) => (
            <div key={l} className="text-center p-3 rounded-xl border" style={{ borderColor: design.colors.border }}>
              <p className="text-lg">{icon}</p>
              <p className="font-bold text-sm" style={{ color: design.colors.text }}>{v}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Features</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {features.map((f) => <span key={f} className="text-xs px-2.5 py-1 rounded-xl border" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>{f}</span>)}
            </div>
            <div className="h-28 rounded-2xl flex items-center justify-center text-xs border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}06`, color: `${design.colors.text}40` }}>🗺 Map View</div>
          </div>
          <div className="p-4 rounded-2xl border" style={{ borderColor: design.colors.border }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>SL</div>
              <div><p className="font-semibold text-sm" style={{ color: design.colors.text }}>Sarah Lee</p><p className="text-xs" style={{ color: `${design.colors.text}50` }}>Licensed Agent · DRE #01234567</p></div>
            </div>
            <p className="text-xs mb-4" style={{ color: `${design.colors.text}50` }}>Specializing in SOMA and Mission Bay properties for 12+ years.</p>
            <div className="space-y-2">
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Schedule Tour</button>
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold cursor-pointer border" style={{ borderColor: design.colors.border, color: design.colors.text }}>Contact Agent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealEstateMortgage({ design }: { design: SystemDesign }) {
  const breakdown = [['Principal & Interest', '$5,342'], ['Property Tax', '$1,042'], ['Home Insurance', '$167'], ['HOA Fees', '$250']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>Estatum</span>
      </nav>
      <div className="px-8 py-6 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Mortgage Calculator</h2>
        <p className="text-sm mb-6" style={{ color: `${design.colors.text}50` }}>Estimate your monthly payment based on loan details.</p>
        <div className="space-y-5 mb-8">
          {[['Home Price', '$1,250,000', 75], ['Down Payment (20%)', '$250,000', 20], ['Loan Term', '30 Years', 60], ['Interest Rate', '6.75%', 68]].map(([label, val, pct]) => (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <p className="text-xs font-semibold" style={{ color: `${design.colors.text}60` }}>{label}</p>
                <p className="text-xs font-bold" style={{ color: design.colors.primary }}>{val}</p>
              </div>
              <div className="h-2 rounded-full" style={{ background: `${design.colors.border}60` }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${design.colors.primary}, ${design.colors.secondary})` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-2xl border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}06` }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: `${design.colors.text}40` }}>Monthly Breakdown</p>
          <p className="text-4xl font-bold mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>$6,801<span className="text-lg font-normal" style={{ color: `${design.colors.text}40` }}>/mo</span></p>
          <div className="space-y-2">
            {breakdown.map(([label, amount]) => (
              <div key={label} className="flex justify-between text-sm">
                <span style={{ color: `${design.colors.text}60` }}>{label}</span>
                <span className="font-semibold" style={{ color: design.colors.text }}>{amount}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-5 py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Get Pre-Approved →</button>
        </div>
      </div>
    </div>
  );
}

/* ─── RESTAURANT ─── */
function RestaurantLanding({ design }: { design: SystemDesign }) {
  const dishes = [['Truffle Risotto', '$32', '⭐ 4.9', '🍚'], ['Wagyu Steak', '$68', '⭐ 4.8', '🥩'], ['Lobster Bisque', '$24', '⭐ 4.9', '🦞']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-xl italic" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>La Maison</span>
        <div className="flex gap-6 text-sm" style={{ color: `${design.colors.text}60` }}>
          {['Menu', 'Reserve', 'Order', 'About'].map((l) => <a key={l} className="cursor-pointer hover:opacity-80">{l}</a>)}
        </div>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Reserve a Table</button>
      </nav>
      <div className="px-8 py-10">
        <div className="max-w-lg mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: `${design.colors.primary}15`, color: design.colors.primary }}>Est. 1998 · San Francisco</span>
          <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
            Where every meal<br /><span style={{ color: design.colors.primary }}>tells a story.</span>
          </h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: `${design.colors.text}60` }}>French-inspired cuisine with locally sourced ingredients. Open for dinner Tuesday through Sunday.</p>
          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Reserve Tonight</button>
            <button className="px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer border" style={{ borderColor: design.colors.border, color: design.colors.text }}>View Menu</button>
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: `${design.colors.text}40` }}>Chef's Signatures</p>
        <div className="grid grid-cols-3 gap-4">
          {dishes.map(([name, price, rating, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
              <div className="h-32 flex items-center justify-center text-5xl" style={{ background: `${design.colors.primary}08` }}>{icon}</div>
              <div className="p-4">
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{name}</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold" style={{ color: design.colors.primary }}>{price}</p>
                  <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 p-4 rounded-2xl border" style={{ borderColor: design.colors.border }}>
          {[['🕐', 'Hours', 'Tue–Sun 5pm–11pm'], ['📍', 'Location', '42 Rue de Paris, SF'], ['📞', 'Reservations', '+1 (415) 555-0192']].map(([icon, label, val]) => (
            <div key={label} className="text-center">
              <p className="text-xl mb-1">{icon}</p>
              <p className="text-xs font-semibold" style={{ color: `${design.colors.text}50` }}>{label}</p>
              <p className="text-xs" style={{ color: design.colors.text }}>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RestaurantMenu({ design }: { design: SystemDesign }) {
  const categories = ['Starters', 'Mains', 'Desserts', 'Drinks'];
  const items = {
    Starters: [['Foie Gras Torchon', 'With brioche and fig jam', '$22'], ['Oysters Rockefeller', 'Six oysters, spinach, Pernod', '$28'], ['Burrata Salad', 'Heirloom tomato, basil oil', '$18']],
    Mains: [['Wagyu Beef Tenderloin', '8oz with truffle jus and dauphinoise', '$68'], ['Lobster Thermidor', 'Half lobster, gratin, cognac sauce', '$58'], ['Duck Confit', 'Slow-cooked, lentils, orange reduction', '$42']],
    Desserts: [['Crème Brûlée', 'Classic vanilla, caramelized crust', '$14'], ['Chocolate Fondant', 'Warm center, vanilla ice cream', '$16'], ['Tarte Tatin', 'Caramelized apple, crème fraîche', '$12']],
    Drinks: [['Château Margaux 2018', 'Bordeaux, France · Bottle', '$220'], ['Krug Grande Cuvée', 'Champagne · Glass', '$48'], ['Lavender Spritz', 'House-made, non-alcoholic', '$14']],
  };
  const activeItems = items['Mains'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Our Menu</h2>
        <div className="flex gap-2 mb-6">
          {categories.map((c) => (
            <button key={c} className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: c === 'Mains' ? design.colors.primary : `${design.colors.border}40`, color: c === 'Mains' ? '#fff' : `${design.colors.text}60` }}>{c}</button>
          ))}
        </div>
        <div className="space-y-3">
          {activeItems.map(([name, desc, price]) => (
            <div key={name} className="flex items-center justify-between p-4 rounded-2xl border" style={{ borderColor: design.colors.border }}>
              <div className="flex-1">
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{name}</p>
                <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{desc}</p>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <p className="font-bold" style={{ color: design.colors.primary }}>{price}</p>
                <button className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RestaurantReservation({ design }: { design: SystemDesign }) {
  const times = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [26, 27, 28, 29, 30, 1, 2];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-8 py-6 max-w-xl">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Reserve a Table</h2>
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold mb-3" style={{ color: `${design.colors.text}60` }}>Select Date</p>
            <div className="grid grid-cols-7 gap-1 text-center">
              {days.map((d) => <p key={d} className="text-[10px] font-semibold py-1" style={{ color: `${design.colors.text}40` }}>{d}</p>)}
              {dates.map((d, i) => (
                <button key={d} className="py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: d === 29 ? design.colors.primary : 'transparent', color: d === 29 ? '#fff' : i >= 5 ? `${design.colors.text}30` : design.colors.text }}>{d}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Party Size</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, '7+'].map((n) => (
                <button key={n} className="w-9 h-9 rounded-xl text-xs font-semibold cursor-pointer border" style={{ background: n === 2 ? design.colors.primary : 'transparent', color: n === 2 ? '#fff' : `${design.colors.text}60`, borderColor: n === 2 ? design.colors.primary : design.colors.border }}>{n}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>Available Times</p>
            <div className="grid grid-cols-4 gap-2">
              {times.map((t) => (
                <button key={t} className="py-2 rounded-xl text-xs font-semibold cursor-pointer border" style={{ background: t === '7:00 PM' ? design.colors.primary : 'transparent', color: t === '7:00 PM' ? '#fff' : `${design.colors.text}60`, borderColor: t === '7:00 PM' ? design.colors.primary : design.colors.border }}>{t}</button>
              ))}
            </div>
          </div>
          <button className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Confirm Reservation</button>
        </div>
      </div>
    </div>
  );
}

function RestaurantOrder({ design }: { design: SystemDesign }) {
  const cart = [['Wagyu Beef Tenderloin', '$68', 1, '🥩'], ['Lobster Bisque', '$24', 2, '🦞'], ['Crème Brûlée', '$14', 1, '🍮']];
  const subtotal = 130;
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Order Online</h2>
        <div className="flex gap-2 mb-6">
          {['Delivery', 'Pickup'].map((o) => (
            <button key={o} className="px-5 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: o === 'Delivery' ? design.colors.primary : `${design.colors.border}40`, color: o === 'Delivery' ? '#fff' : `${design.colors.text}50` }}>{o}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Your Order</p>
            <div className="space-y-3">
              {cart.map(([name, price, qty, icon]) => (
                <div key={name} className="flex items-center gap-3 p-3 rounded-2xl border" style={{ borderColor: design.colors.border }}>
                  <span className="text-2xl">{icon}</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{name}</p>
                    <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-6 h-6 rounded-lg flex items-center justify-center text-xs border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}50` }}>−</button>
                    <span className="text-xs font-semibold w-4 text-center" style={{ color: design.colors.text }}>{qty}</span>
                    <button className="w-6 h-6 rounded-lg flex items-center justify-center text-xs cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-2xl border h-fit" style={{ borderColor: design.colors.border, background: `${design.colors.primary}04` }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: `${design.colors.text}40` }}>Order Summary</p>
            <div className="space-y-2 mb-4">
              {[['Subtotal', `$${subtotal}`], ['Delivery Fee', '$5'], ['Tax (8.5%)', '$11.05']].map(([l, v]) => (
                <div key={l} className="flex justify-between text-xs"><span style={{ color: `${design.colors.text}60` }}>{l}</span><span style={{ color: design.colors.text }}>{v}</span></div>
              ))}
              <div className="flex justify-between font-bold pt-2 border-t text-sm" style={{ borderColor: design.colors.border }}>
                <span style={{ color: design.colors.text }}>Total</span><span style={{ color: design.colors.primary }}>$146.05</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Place Order →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ANALYTICS DASHBOARD ─── */
function AnalyticsOverview({ design }: { design: SystemDesign }) {
  const kpis = [['Total Users', '248,391', '+12.4%'], ['Sessions', '1.2M', '+8.7%'], ['Conversion', '3.48%', '+0.3%'], ['Revenue', '$84,210', '+18.2%']];
  const sources = [['Organic Search', '42%', 104312], ['Direct', '28%', 69549], ['Social Media', '18%', 44710], ['Referral', '12%', 29807]];
  const weeks = [40, 65, 55, 80, 70, 90, 75, 95, 85, 100, 88, 72];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>DataPulse</span>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>Last 30 days ▾</div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {kpis.map(([label, value, change]) => (
            <div key={label} className="p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}40` }}>
              <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: `${design.colors.text}40` }}>{label}</p>
              <p className="text-xl font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{value}</p>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>{change}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
            <p className="text-xs font-semibold mb-4" style={{ color: `${design.colors.text}60` }}>Sessions (Last 12 Weeks)</p>
            <div className="flex items-end gap-1 h-24">
              {weeks.map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === weeks.length - 1 ? design.colors.primary : `${design.colors.primary}40` }} />
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
            <p className="text-xs font-semibold mb-4" style={{ color: `${design.colors.text}60` }}>Top Sources</p>
            <div className="space-y-3">
              {sources.map(([src, pct]) => (
                <div key={src}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span style={{ color: `${design.colors.text}70` }}>{src}</span>
                    <span style={{ color: design.colors.primary }}>{pct}</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: `${design.colors.border}60` }}>
                    <div className="h-full rounded-full" style={{ width: pct, background: design.colors.primary }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsReports({ design }: { design: SystemDesign }) {
  const bars = [120, 85, 140, 95, 160, 110, 130, 75, 150, 100, 145, 90];
  const area = [30, 45, 40, 60, 55, 75, 65, 80, 70, 90, 85, 100];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>DataPulse</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-base" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Reports</h2>
          <div className="flex gap-2">
            {['7D', '30D', '90D', '1Y'].map((r) => (
              <button key={r} className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: r === '30D' ? design.colors.primary : `${design.colors.border}40`, color: r === '30D' ? '#fff' : `${design.colors.text}50` }}>{r}</button>
            ))}
            <button className="px-3 py-1.5 rounded-lg text-xs border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}50` }}>↓ Export</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
            <p className="text-xs font-semibold mb-1" style={{ color: `${design.colors.text}60` }}>Revenue</p>
            <p className="text-xl font-bold mb-4" style={{ color: design.colors.primary }}>$84,210</p>
            <div className="flex items-end gap-1 h-20">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${(h / 160) * 100}%`, background: i === 5 ? design.colors.cta : `${design.colors.primary}50` }} />
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
            <p className="text-xs font-semibold mb-1" style={{ color: `${design.colors.text}60` }}>User Growth</p>
            <p className="text-xl font-bold mb-4" style={{ color: design.colors.accent }}>+12.4%</p>
            <div className="flex items-end gap-0.5 h-20">
              {area.map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, ${design.colors.accent}80, ${design.colors.accent}20)` }} />
              ))}
            </div>
          </div>
          <div className="col-span-2 p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
            <p className="text-xs font-semibold mb-3" style={{ color: `${design.colors.text}60` }}>Report Breakdown</p>
            <div className="grid grid-cols-4 gap-3">
              {[['New Users', '18,420', design.colors.primary], ['Returning', '229,971', design.colors.secondary], ['Bounce Rate', '34.2%', design.colors.cta], ['Avg. Session', '4m 12s', design.colors.accent]].map(([l, v, c]) => (
                <div key={l} className="text-center p-3 rounded-lg" style={{ background: `${c}10` }}>
                  <p className="text-lg font-bold" style={{ color: c, fontFamily: `'${design.typography.headingFont}', sans-serif` }}>{v}</p>
                  <p className="text-[10px] mt-1" style={{ color: `${design.colors.text}40` }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsSegments({ design }: { design: SystemDesign }) {
  const segments = [['Power Users', '12,840', '5.2%', 95], ['Regular Users', '84,210', '33.9%', 70], ['Casual Users', '98,450', '39.6%', 50], ['New Users', '52,891', '21.3%', 30]];
  const funnel: [string, number, number][] = [['Visited', 248391, 100], ['Signed Up', 42800, 17], ['Activated', 18200, 7], ['Converted', 8640, 3]];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>DataPulse</span>
      </div>
      <div className="p-6">
        <h2 className="font-bold text-base mb-5" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Audience Segments</h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Segment Breakdown</p>
            <div className="space-y-3">
              {segments.map(([name, users, pct, bar]) => (
                <div key={name} className="p-3 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-semibold" style={{ color: design.colors.text }}>{name}</span>
                    <span className="text-xs" style={{ color: design.colors.primary }}>{pct}</span>
                  </div>
                  <p className="text-[10px] mb-2" style={{ color: `${design.colors.text}40` }}>{users} users</p>
                  <div className="h-1.5 rounded-full" style={{ background: `${design.colors.border}60` }}>
                    <div className="h-full rounded-full" style={{ width: `${bar}%`, background: `linear-gradient(90deg, ${design.colors.primary}, ${design.colors.secondary})` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Conversion Funnel</p>
            <div className="space-y-2">
              {funnel.map(([stage, count, pct], i) => (
                <div key={stage} className="relative">
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: `${design.colors.text}70` }}>{stage}</span>
                    <span className="font-mono" style={{ color: design.colors.primary }}>{count.toLocaleString()}</span>
                  </div>
                  <div className="h-8 rounded-lg flex items-center px-3" style={{ width: `${pct + 10}%`, background: `${design.colors.primary}${30 - i * 6}`, minWidth: '40%' }}>
                    <span className="text-[10px] font-semibold" style={{ color: design.colors.text }}>{pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsSettings({ design }: { design: SystemDesign }) {
  const sources: [string, string, boolean][] = [['Google Analytics 4', 'analytics.google.com', true], ['Mixpanel', 'mixpanel.com', true], ['Salesforce CRM', 'salesforce.com', false], ['Stripe Payments', 'stripe.com', true], ['HubSpot', 'hubspot.com', false]];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>DataPulse</span>
      </div>
      <div className="p-6 max-w-2xl">
        <h2 className="font-bold text-base mb-5" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Settings</h2>
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Data Sources</p>
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
              {sources.map(([name, domain, connected]) => (
                <div key={name} className="flex items-center justify-between px-4 py-3 border-b last:border-0" style={{ borderColor: design.colors.border }}>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: design.colors.text }}>{name}</p>
                    <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{domain}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-2 py-1 rounded-full font-semibold" style={{ background: connected ? `${design.colors.primary}20` : `${design.colors.border}60`, color: connected ? design.colors.primary : `${design.colors.text}40` }}>{connected ? 'Connected' : 'Disconnected'}</span>
                    <button className="text-xs cursor-pointer" style={{ color: connected ? `${design.colors.text}40` : design.colors.cta }}>{connected ? 'Disconnect' : 'Connect'}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>API Access</p>
            <div className="p-4 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
              <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>API Key</p>
              <div className="flex gap-2">
                <div className="flex-1 h-9 rounded-lg border px-3 flex items-center font-mono text-xs" style={{ borderColor: design.colors.border, color: `${design.colors.text}50`, background: `${design.colors.background}80` }}>dp_live_••••••••••••••••••••••••••••</div>
                <button className="px-3 py-2 rounded-lg text-xs border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}50` }}>Copy</button>
                <button className="px-3 py-2 rounded-lg text-xs cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>Regenerate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── TRAVEL & BOOKING ─── */
function TravelLanding({ design }: { design: SystemDesign }) {
  const destinations = [['Bali, Indonesia', '✈️ 14h · $620', '🌴'], ['Paris, France', '✈️ 10h · $490', '🗼'], ['Tokyo, Japan', '✈️ 12h · $780', '⛩️'], ['New York, USA', '✈️ 8h · $350', '🗽']];
  const trending = [['Santorini', '🇬🇷', '4.9★'], ['Maldives', '🇲🇻', '4.8★'], ['Kyoto', '🇯🇵', '4.9★'], ['Amalfi Coast', '🇮🇹', '4.7★'], ['Iceland', '🇮🇸', '4.8★'], ['Patagonia', '🇦🇷', '4.6★']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>Wandr</span>
        <div className="flex gap-6 text-sm" style={{ color: `${design.colors.text}60` }}>
          {['Flights', 'Hotels', 'Packages', 'Experiences'].map((l) => <a key={l} className="cursor-pointer hover:opacity-80">{l}</a>)}
        </div>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Sign In</button>
      </nav>
      <div className="px-8 py-10">
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Where to next?</h1>
        <p className="text-sm mb-6" style={{ color: `${design.colors.text}50` }}>Search flights, hotels, and experiences worldwide</p>
        <div className="flex gap-2 p-2 rounded-2xl border mb-10 max-w-2xl" style={{ borderColor: design.colors.border, background: '#fff' }}>
          {[['📍', 'From'], ['📍', 'To'], ['📅', 'Dates'], ['👥', 'Guests']].map(([icon, ph]) => (
            <div key={ph} className="flex-1 flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs" style={{ borderColor: design.colors.border, color: `${design.colors.text}40` }}>{icon} {ph}</div>
          ))}
          <button className="px-5 py-2 rounded-xl text-xs font-bold cursor-pointer flex-shrink-0" style={{ background: design.colors.cta, color: '#fff' }}>Search</button>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: `${design.colors.text}40` }}>Popular Destinations</p>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {destinations.map(([name, info, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: design.colors.border }}>
              <div className="h-28 flex items-center justify-center text-5xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}15, ${design.colors.secondary}10)` }}>{icon}</div>
              <div className="p-3">
                <p className="font-semibold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{name}</p>
                <p className="text-xs mt-0.5" style={{ color: `${design.colors.text}50` }}>{info}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Trending Now</p>
        <div className="flex gap-3 flex-wrap">
          {trending.map(([place, flag, rating]) => (
            <div key={place} className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer" style={{ borderColor: design.colors.border }}>
              <span>{flag}</span><span className="text-xs font-medium" style={{ color: design.colors.text }}>{place}</span><span className="text-[10px]" style={{ color: design.colors.cta }}>{rating}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TravelSearch({ design }: { design: SystemDesign }) {
  const results = [
    { name: 'Sunset Beach Resort', location: 'Bali, Indonesia', price: '$142/night', rating: '4.9', icon: '🏖️', tags: ['Pool', 'Breakfast', 'Spa'] },
    { name: 'Azure Cliff Hotel', location: 'Santorini, Greece', price: '$310/night', rating: '4.8', icon: '🌊', tags: ['Sea View', 'Rooftop', 'WiFi'] },
    { name: 'Forest Canopy Lodge', location: 'Costa Rica', price: '$88/night', rating: '4.7', icon: '🌿', tags: ['Eco', 'Pool', 'Tours'] },
    { name: 'Tokyo Central Inn', location: 'Tokyo, Japan', price: '$95/night', rating: '4.6', icon: '🏯', tags: ['Central', 'WiFi', 'Gym'] },
  ];
  return (
    <div className="flex min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <aside className="w-52 flex-shrink-0 border-r p-4" style={{ borderColor: design.colors.border }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Filters</p>
        {[['Price Range', ['Any', 'Under $100', '$100–$200', '$200+'], 0], ['Rating', ['Any', '4★+', '4.5★+', '5★'], 0], ['Type', ['Hotel', 'Resort', 'Villa', 'Hostel'], 0]].map(([label, opts, active]) => (
          <div key={label as string} className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: `${design.colors.text}60` }}>{label as string}</p>
            <div className="flex flex-wrap gap-1">
              {(opts as string[]).map((o, i) => (
                <button key={o} className="px-2 py-1 rounded-lg text-[10px] cursor-pointer border" style={{ background: i === active ? design.colors.primary : 'transparent', color: i === active ? '#fff' : `${design.colors.text}50`, borderColor: i === active ? design.colors.primary : design.colors.border }}>{o}</button>
              ))}
            </div>
          </div>
        ))}
      </aside>
      <div className="flex-1 p-5">
        <p className="text-sm mb-4" style={{ color: `${design.colors.text}50` }}>Showing {results.length} hotels · Bali, Apr 29 – May 5 · 2 guests</p>
        <div className="space-y-4">
          {results.map((r) => (
            <div key={r.name} className="flex gap-4 p-4 rounded-2xl border cursor-pointer" style={{ borderColor: design.colors.border }}>
              <div className="w-24 h-20 rounded-xl flex items-center justify-center text-4xl flex-shrink-0" style={{ background: `${design.colors.primary}10` }}>{r.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{r.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: `${design.colors.text}50` }}>📍 {r.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold" style={{ color: design.colors.primary }}>{r.price}</p>
                    <p className="text-xs" style={{ color: design.colors.cta }}>{r.rating}★</p>
                  </div>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {r.tags.map((t) => <span key={t} className="text-[10px] px-2 py-0.5 rounded-lg border" style={{ borderColor: design.colors.border, color: `${design.colors.text}50` }}>{t}</span>)}
                </div>
              </div>
              <button className="self-center px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer flex-shrink-0" style={{ background: design.colors.cta, color: '#fff' }}>Book</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TravelDetail({ design }: { design: SystemDesign }) {
  const amenities = ['Swimming Pool', 'Free WiFi', 'Spa & Wellness', 'Airport Transfer', 'Room Service', 'Breakfast Included', 'Beach Access', 'Gym'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="h-48 flex items-center justify-center text-8xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}20, ${design.colors.secondary}15)` }}>🏖️</div>
      <div className="px-8 py-5">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Sunset Beach Resort</h1>
            <p className="text-sm" style={{ color: `${design.colors.text}50` }}>📍 Seminyak, Bali · <span style={{ color: design.colors.cta }}>4.9★</span> (2,840 reviews)</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold" style={{ color: design.colors.primary }}>$142<span className="text-sm font-normal" style={{ color: `${design.colors.text}40` }}>/night</span></p>
            <p className="text-xs" style={{ color: `${design.colors.text}40` }}>6 nights · $852 total</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Amenities</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {amenities.map((a) => <span key={a} className="text-xs px-2.5 py-1 rounded-xl border" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>✓ {a}</span>)}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: `${design.colors.text}40` }}>Description</p>
            <p className="text-sm leading-relaxed" style={{ color: `${design.colors.text}60` }}>Nestled along Seminyak's golden coastline, Sunset Beach Resort blends Balinese architecture with modern luxury. Wake up to ocean views and fall asleep to the sound of waves.</p>
          </div>
          <div className="p-4 rounded-2xl border" style={{ borderColor: design.colors.border }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Your Stay</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[['Check-in', 'Apr 29'], ['Check-out', 'May 5'], ['Guests', '2 Adults'], ['Room', 'Deluxe Ocean']].map(([l, v]) => (
                <div key={l} className="p-2.5 rounded-xl border" style={{ borderColor: design.colors.border }}>
                  <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l}</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: design.colors.text }}>{v}</p>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 mb-4 text-xs">
              {[['6 nights × $142', '$852'], ['Taxes & fees', '$102'], ['Total', '$954']].map(([l, v], i) => (
                <div key={l} className={`flex justify-between ${i === 2 ? 'font-bold pt-2 border-t' : ''}`} style={{ borderColor: design.colors.border }}>
                  <span style={{ color: i === 2 ? design.colors.text : `${design.colors.text}60` }}>{l}</span>
                  <span style={{ color: i === 2 ? design.colors.primary : design.colors.text }}>{v}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelCheckout({ design }: { design: SystemDesign }) {
  const steps = ['Traveler Details', 'Payment', 'Confirmation'];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>Wandr</span>
      </nav>
      <div className="px-8 py-6 max-w-2xl">
        <div className="flex items-center gap-2 mb-6">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: i === 0 ? design.colors.primary : i < 0 ? design.colors.cta : `${design.colors.border}60`, color: i <= 0 ? '#fff' : `${design.colors.text}40` }}>{i + 1}</div>
                <span className="text-xs" style={{ color: i === 0 ? design.colors.text : `${design.colors.text}40` }}>{s}</span>
              </div>
              {i < steps.length - 1 && <div className="w-8 h-px" style={{ background: design.colors.border }} />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: design.colors.text }}>Primary Traveler</p>
            {[['First Name', 'John'], ['Last Name', 'Doe'], ['Email', 'john@example.com'], ['Phone', '+1 (555) 000-0000'], ['Passport No.', 'AB1234567']].map(([label, placeholder]) => (
              <div key={label}>
                <p className="text-xs mb-1" style={{ color: `${design.colors.text}60` }}>{label}</p>
                <div className="h-9 rounded-xl border px-3 flex items-center text-xs" style={{ borderColor: design.colors.border, color: `${design.colors.text}50`, background: '#fff' }}>{placeholder}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="p-4 rounded-2xl border mb-4" style={{ borderColor: design.colors.border, background: `${design.colors.primary}05` }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Booking Summary</p>
              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${design.colors.primary}15` }}>🏖️</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: design.colors.text }}>Sunset Beach Resort</p>
                  <p className="text-xs" style={{ color: `${design.colors.text}50` }}>Apr 29 – May 5 · 2 guests</p>
                </div>
              </div>
              {[['Room', 'Deluxe Ocean View'], ['Subtotal', '$852'], ['Taxes', '$102'], ['Total', '$954']].map(([l, v], i) => (
                <div key={l} className={`flex justify-between text-xs ${i === 3 ? 'font-bold pt-2 border-t mt-2' : 'mb-1.5'}`} style={{ borderColor: design.colors.border }}>
                  <span style={{ color: `${design.colors.text}60` }}>{l}</span><span style={{ color: i === 3 ? design.colors.primary : design.colors.text }}>{v}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Continue to Payment →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── HR & PEOPLE OPS ─── */
function HRDashboard({ design }: { design: SystemDesign }) {
  const kpis = [['142', 'Employees', '+4 this month'], ['8', 'Open Roles', '3 urgent'], ['94%', 'Retention', '+2% YoY'], ['4.6', 'Eng. Score', '↑ from 4.4']];
  const activity = [['Sarah Kim joined Engineering', '2h ago', '🎉'], ['Interview: Alex Chen scheduled', '4h ago', '📅'], ['Performance review due: 12 people', '1d ago', '⚠️'], ['New offer sent: Backend Engineer', '2d ago', '📤']];
  const depts = [['Engineering', 52, 37], ['Product', 18, 13], ['Design', 14, 10], ['Sales', 38, 27], ['Marketing', 20, 13]];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>PeopleHub</span>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.cta, color: '#fff' }}>+ Add Employee</button>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-3 mb-6">
          {kpis.map(([val, label, sub]) => (
            <div key={label} className="p-4 rounded-2xl border" style={{ borderColor: design.colors.border }}>
              <p className="text-2xl font-bold mb-0.5" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>{val}</p>
              <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{label}</p>
              <p className="text-[10px] mt-0.5" style={{ color: `${design.colors.text}40` }}>{sub}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Department Breakdown</p>
            <div className="space-y-2">
              {depts.map(([name, count, pct]) => (
                <div key={name} className="flex items-center gap-3">
                  <span className="text-xs w-24 flex-shrink-0" style={{ color: `${design.colors.text}70` }}>{name}</span>
                  <div className="flex-1 h-2 rounded-full" style={{ background: `${design.colors.border}60` }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: design.colors.primary }} />
                  </div>
                  <span className="text-xs w-6 text-right" style={{ color: `${design.colors.text}50` }}>{count}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Recent Activity</p>
            <div className="space-y-2">
              {activity.map(([msg, time, icon]) => (
                <div key={msg} className="flex items-start gap-2 p-2.5 rounded-xl border" style={{ borderColor: design.colors.border }}>
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-xs" style={{ color: design.colors.text }}>{msg}</p>
                    <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HRCandidates({ design }: { design: SystemDesign }) {
  const stages = ['Applied', 'Screening', 'Interview', 'Offer', 'Hired'];
  const candidates: Record<string, { name: string; role: string; score?: string }[]> = {
    Applied: [{ name: 'Jordan Lee', role: 'Sr. Frontend Eng.' }, { name: 'Sam Park', role: 'Product Designer' }, { name: 'Priya Nair', role: 'Sr. Frontend Eng.' }],
    Screening: [{ name: 'Alex Chen', role: 'Backend Eng.', score: '82%' }, { name: 'Maria Lopez', role: 'Sr. Frontend Eng.', score: '79%' }],
    Interview: [{ name: 'David Kim', role: 'Backend Eng.', score: '91%' }],
    Offer: [{ name: 'Emma Walsh', role: 'Product Designer', score: '95%' }],
    Hired: [{ name: 'Tom Becker', role: 'Sr. Frontend Eng.' }],
  };
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>PeopleHub</span>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>+ Add Candidate</button>
      </div>
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-3 min-w-max">
          {stages.map((stage) => (
            <div key={stage} className="w-44">
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-xs font-semibold" style={{ color: `${design.colors.text}70` }}>{stage}</p>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>{candidates[stage]?.length ?? 0}</span>
              </div>
              <div className="space-y-2">
                {(candidates[stage] ?? []).map((c) => (
                  <div key={c.name} className="p-3 rounded-xl border cursor-pointer" style={{ borderColor: design.colors.border, background: '#fff' }}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>{c.name[0]}</div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold truncate" style={{ color: design.colors.text }}>{c.name}</p>
                        <p className="text-[10px] truncate" style={{ color: `${design.colors.text}50` }}>{c.role}</p>
                      </div>
                    </div>
                    {c.score && <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{ background: `${design.colors.cta}20`, color: design.colors.cta }}>{c.score} match</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HREmployee({ design }: { design: SystemDesign }) {
  const goals = [['Ship v2 API redesign', 90, 'Q2 2026'], ['Complete system design course', 60, 'Q2 2026'], ['Lead 2 cross-team projects', 50, 'Q3 2026']];
  const reviews = [['Q1 2026', 'Exceeded', '4.8/5.0'], ['Q4 2025', 'Meets', '4.2/5.0'], ['Q3 2025', 'Exceeded', '4.7/5.0']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center gap-4 px-8 py-5 border-b" style={{ borderColor: design.colors.border }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold" style={{ background: `${design.colors.primary}20`, color: design.colors.primary }}>DK</div>
        <div className="flex-1">
          <p className="font-bold text-base" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>David Kim</p>
          <p className="text-xs" style={{ color: `${design.colors.text}50` }}>Senior Backend Engineer · Engineering · San Francisco</p>
        </div>
        <div className="flex gap-2">
          {['Message', 'Edit Profile'].map((l, i) => (
            <button key={l} className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer border" style={{ background: i === 1 ? design.colors.primary : 'transparent', color: i === 1 ? '#fff' : `${design.colors.text}60`, borderColor: i === 1 ? design.colors.primary : design.colors.border }}>{l}</button>
          ))}
        </div>
      </div>
      <div className="px-8 py-5 grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Current Goals</p>
          <div className="space-y-3">
            {goals.map(([goal, pct, due]) => (
              <div key={goal} className="p-3 rounded-xl border" style={{ borderColor: design.colors.border }}>
                <div className="flex justify-between mb-1">
                  <p className="text-xs font-medium" style={{ color: design.colors.text }}>{goal}</p>
                  <span className="text-[10px]" style={{ color: `${design.colors.text}40` }}>Due {due}</span>
                </div>
                <div className="h-1.5 rounded-full mb-1" style={{ background: `${design.colors.border}60` }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: design.colors.primary }} />
                </div>
                <p className="text-[10px]" style={{ color: design.colors.primary }}>{pct}%</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Performance Reviews</p>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: design.colors.border }}>
            <div className="grid grid-cols-3 px-4 py-2 text-[10px] font-semibold uppercase" style={{ background: `${design.colors.primary}08`, color: `${design.colors.text}40` }}>
              <span>Period</span><span>Rating</span><span>Score</span>
            </div>
            {reviews.map(([period, rating, score]) => (
              <div key={period} className="grid grid-cols-3 px-4 py-3 text-xs border-t" style={{ borderColor: design.colors.border }}>
                <span style={{ color: design.colors.text }}>{period}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold w-fit" style={{ background: rating === 'Exceeded' ? `${design.colors.cta}15` : `${design.colors.border}40`, color: rating === 'Exceeded' ? design.colors.cta : `${design.colors.text}60` }}>{rating}</span>
                <span style={{ color: design.colors.primary }}>{score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HROnboarding({ design }: { design: SystemDesign }) {
  const tasks: [string, string, boolean][] = [['Complete profile & photo', 'HR Team', true], ['Sign employment contract', 'Legal', true], ['Set up laptop & tools', 'IT', true], ['Meet your manager 1:1', 'Manager', false], ['Join team Slack channels', 'Self', false], ['Complete security training', 'IT', false], ['Review company handbook', 'HR Team', false]];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-8 py-6">
        <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl border" style={{ borderColor: design.colors.border, background: `${design.colors.primary}06` }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: `${design.colors.primary}20` }}>👋</div>
          <div>
            <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Welcome, Sarah! Day 1 of 30</p>
            <p className="text-xs" style={{ color: `${design.colors.text}50` }}>You're joining as Product Designer · Starting April 28, 2026</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-2xl font-bold" style={{ color: design.colors.primary }}>3/7</p>
            <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>tasks done</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-2 rounded-full" style={{ background: `${design.colors.border}60` }}>
            <div className="h-full rounded-full" style={{ width: '43%', background: `linear-gradient(90deg, ${design.colors.primary}, ${design.colors.cta})` }} />
          </div>
          <span className="text-xs font-semibold" style={{ color: design.colors.primary }}>43%</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Onboarding Checklist</p>
        <div className="space-y-2">
          {tasks.map(([task, owner, done]) => (
            <div key={task} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: done ? `${design.colors.cta}30` : design.colors.border, background: done ? `${design.colors.cta}05` : 'transparent' }}>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: done ? design.colors.cta : design.colors.border, background: done ? design.colors.cta : 'transparent' }}>
                {done && <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              <p className="flex-1 text-sm" style={{ color: done ? `${design.colors.text}60` : design.colors.text, textDecoration: done ? 'line-through' : 'none' }}>{task}</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: `${design.colors.border}60`, color: `${design.colors.text}50` }}>{owner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── NFT MARKETPLACE ─── */
function NFTLanding({ design }: { design: SystemDesign }) {
  const featured = [['Cosmic Drift #042', '8.4 ETH', '⏱ 2h 14m left', '🌌'], ['Neon Genesis #18', '2.1 ETH', 'Buy now', '⚡'], ['Void Protocol #7', '14.0 ETH', '⏱ 45m left', '🌀']];
  const stats = [['420K+', 'Artworks'], ['48K+', 'Artists'], ['$2.4B', 'Volume'], ['190K', 'Collectors']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <nav className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <span className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VAULTT</span>
        <div className="flex gap-5 text-sm" style={{ color: `${design.colors.text}60` }}>
          {['Explore', 'Create', 'Rankings', 'Activity'].map((l) => <a key={l} className="cursor-pointer hover:opacity-80">{l}</a>)}
        </div>
        <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>Connect Wallet</button>
      </nav>
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold mb-3 max-w-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>
          Discover & collect <span style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.cta})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>extraordinary</span> NFTs
        </h1>
        <p className="text-sm mb-6" style={{ color: `${design.colors.text}50` }}>The world's largest digital marketplace for crypto collectibles</p>
        <div className="flex gap-3 mb-8">
          <button className="px-6 py-2.5 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>Explore</button>
          <button className="px-6 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border" style={{ borderColor: design.colors.border, color: design.colors.text }}>Create</button>
        </div>
        <div className="flex gap-6 mb-8">
          {stats.map(([val, label]) => (
            <div key={label}>
              <p className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>{val}</p>
              <p className="text-xs" style={{ color: `${design.colors.text}40` }}>{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: `${design.colors.text}40` }}>Live Auctions</p>
        <div className="grid grid-cols-3 gap-4">
          {featured.map(([name, price, action, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden" style={{ borderColor: design.colors.border, background: `${design.colors.border}40` }}>
              <div className="h-36 flex items-center justify-center text-6xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}20, ${design.colors.secondary}10)` }}>{icon}</div>
              <div className="p-4">
                <p className="font-semibold text-sm mb-1" style={{ color: design.colors.text }}>{name}</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold" style={{ color: design.colors.primary }}>{price}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-lg" style={{ background: `${design.colors.cta}20`, color: design.colors.cta }}>{action}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NFTExplore({ design }: { design: SystemDesign }) {
  const categories = ['All', 'Art', 'Gaming', 'Music', 'Photography', 'Sports', 'Utility'];
  const items = [['Void Protocol #7', '14.0 ETH', '🌀'], ['Neon Genesis #18', '2.1 ETH', '⚡'], ['Cosmic Drift #42', '8.4 ETH', '🌌'], ['Pixel Punk #301', '0.8 ETH', '👾'], ['Astral Being #9', '5.5 ETH', '✨'], ['Dark Matter #61', '3.2 ETH', '🔮'], ['Aurora #15', '1.9 ETH', '🌈'], ['Cipher #88', '6.0 ETH', '🧩'], ['Phantom #4', '12.5 ETH', '👻']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-6 pt-5 pb-3 border-b" style={{ borderColor: design.colors.border }}>
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((c) => (
            <button key={c} className="px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer flex-shrink-0" style={{ background: c === 'All' ? design.colors.primary : `${design.colors.border}40`, color: c === 'All' ? '#fff' : `${design.colors.text}60` }}>{c}</button>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm" style={{ color: `${design.colors.text}50` }}>420,312 items</p>
          <select className="text-xs border rounded-xl px-2 py-1.5 cursor-pointer" style={{ borderColor: design.colors.border, color: design.colors.text, background: design.colors.background }}>
            <option>Recently listed</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {items.map(([name, price, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: design.colors.border, background: `${design.colors.border}30` }}>
              <div className="h-28 flex items-center justify-center text-5xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}15, ${design.colors.secondary}10)` }}>{icon}</div>
              <div className="p-3">
                <p className="text-xs font-semibold mb-1" style={{ color: design.colors.text }}>{name}</p>
                <p className="text-xs font-bold" style={{ color: design.colors.primary }}>{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NFTItem({ design }: { design: SystemDesign }) {
  const bids = [['0xA3f...892', '13.5 ETH', '5m ago'], ['0xB7c...441', '12.0 ETH', '12m ago'], ['0xF1e...230', '10.8 ETH', '28m ago']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="grid grid-cols-2 gap-6 p-6">
        <div>
          <div className="rounded-2xl h-64 flex items-center justify-center text-8xl border" style={{ borderColor: design.colors.border, background: `linear-gradient(135deg, ${design.colors.primary}20, ${design.colors.secondary}10)` }}>🌀</div>
        </div>
        <div>
          <p className="text-xs mb-1" style={{ color: design.colors.secondary }}>Void Protocol Collection</p>
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Void Protocol #7</h1>
          <p className="text-xs mb-4" style={{ color: `${design.colors.text}50` }}>Owned by <span style={{ color: design.colors.primary }}>0xA3f...892</span></p>
          <div className="p-4 rounded-2xl border mb-4" style={{ borderColor: design.colors.border, background: `${design.colors.border}30` }}>
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: `${design.colors.text}40` }}>Current Bid</p>
            <p className="text-3xl font-bold" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>14.0 ETH</p>
            <p className="text-xs mt-1" style={{ color: design.colors.cta }}>⏱ Auction ends in 45:12</p>
          </div>
          <div className="flex gap-2 mb-5">
            <button className="flex-1 py-3 rounded-xl font-semibold text-sm cursor-pointer" style={{ background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>Place Bid</button>
            <button className="px-4 py-3 rounded-xl border cursor-pointer" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>♡</button>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: `${design.colors.text}40` }}>Bid History</p>
          <div className="space-y-2">
            {bids.map(([addr, amount, time]) => (
              <div key={addr} className="flex items-center justify-between text-xs">
                <span style={{ color: design.colors.primary }}>{addr}</span>
                <span className="font-semibold" style={{ color: design.colors.text }}>{amount}</span>
                <span style={{ color: `${design.colors.text}40` }}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NFTProfile({ design }: { design: SystemDesign }) {
  const created = [['Void Protocol #7', '14.0 ETH', '🌀'], ['Void Protocol #12', '9.2 ETH', '🌀'], ['Dark Matter #61', '3.2 ETH', '🔮']];
  return (
    <div style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="h-24" style={{ background: `linear-gradient(135deg, ${design.colors.primary}60, ${design.colors.secondary}40, ${design.colors.cta}20)` }} />
      <div className="px-6 pb-6 -mt-8">
        <div className="flex items-end gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl border-4 flex items-center justify-center text-2xl font-bold" style={{ borderColor: design.colors.background, background: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`, color: '#fff' }}>V</div>
          <div className="flex-1 pt-8">
            <p className="font-bold text-base" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>VoidArtist</p>
            <p className="text-xs" style={{ color: `${design.colors.text}50` }}>0xA3f...892 · Verified Creator</p>
          </div>
          <button className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer border" style={{ borderColor: design.colors.primary, color: design.colors.primary }}>Follow</button>
        </div>
        <div className="flex gap-6 mb-5">
          {[['142', 'Items'], ['48.2K', 'Volume'], ['2.4K', 'Followers'], ['312', 'Following']].map(([v, l]) => (
            <div key={l}>
              <p className="font-bold text-sm" style={{ color: design.colors.primary }}>{v}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mb-4">
          {['Created', 'Collected'].map((tab, i) => (
            <button key={tab} className="px-4 py-1.5 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: i === 0 ? design.colors.primary : `${design.colors.border}40`, color: i === 0 ? '#fff' : `${design.colors.text}60` }}>{tab}</button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {created.map(([name, price, icon]) => (
            <div key={name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: design.colors.border, background: `${design.colors.border}30` }}>
              <div className="h-20 flex items-center justify-center text-4xl" style={{ background: `linear-gradient(135deg, ${design.colors.primary}15, ${design.colors.secondary}10)` }}>{icon}</div>
              <div className="p-2.5">
                <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{name}</p>
                <p className="text-xs font-bold" style={{ color: design.colors.primary }}>{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── FITNESS & WELLNESS ─── */
function FitnessDashboard({ design }: { design: SystemDesign }) {
  const rings: [string, number, number, string][] = [['Move', 820, 900, design.colors.primary], ['Exercise', 42, 60, design.colors.cta], ['Stand', 10, 12, design.colors.accent ?? design.colors.border]];
  const upcoming = [['Upper Body Power', '45 min · Intermediate', '💪'], ['5K Run', '30 min · Cardio', '🏃'], ['Yoga Flow', '20 min · Recovery', '🧘']];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <div>
          <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Good morning, Alex 👋</p>
          <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>Monday · 14-day streak 🔥</p>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ background: design.colors.primary, color: '#fff' }}>AJ</div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {rings.map(([label, val, max, color]) => (
            <div key={label} className="p-4 rounded-2xl border text-center" style={{ borderColor: design.colors.border, background: `${design.colors.border}30` }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-sm" style={{ background: `conic-gradient(${color} ${(Number(val)/Number(max))*360}deg, ${design.colors.border} 0deg)`, color: design.colors.text }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: design.colors.background }}>
                  <span className="text-[10px] font-bold" style={{ color }}>{Math.round(Number(val)/Number(max)*100)}%</span>
                </div>
              </div>
              <p className="text-xs font-semibold" style={{ color: design.colors.text }}>{label}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{val}/{max}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[['1,840', 'kcal burned'], ['8,420', 'steps today'], ['72', 'bpm avg']].map(([v, l]) => (
            <div key={l} className="p-3 rounded-xl border text-center" style={{ borderColor: design.colors.border }}>
              <p className="font-bold text-lg" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>{v}</p>
              <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{l}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>Today's Schedule</p>
        <div className="space-y-2">
          {upcoming.map(([name, meta, icon]) => (
            <div key={name} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
              <span className="text-2xl">{icon}</span>
              <div className="flex-1"><p className="text-sm font-semibold" style={{ color: design.colors.text }}>{name}</p><p className="text-[10px]" style={{ color: `${design.colors.text}50` }}>{meta}</p></div>
              <button className="px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Start</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FitnessWorkout({ design }: { design: SystemDesign }) {
  const exercises: [string, string, string, boolean][] = [['Barbell Squat', '4 × 8', '80kg', true], ['Romanian Deadlift', '3 × 10', '60kg', true], ['Leg Press', '3 × 12', '120kg', false], ['Calf Raises', '4 × 15', 'BW', false], ['Leg Extension', '3 × 12', '50kg', false]];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <div>
          <p className="text-[10px] uppercase tracking-wider" style={{ color: `${design.colors.text}40` }}>Active Workout</p>
          <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Lower Body Power</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold font-mono" style={{ color: design.colors.primary }}>24:18</p>
          <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>elapsed</p>
        </div>
      </div>
      <div className="p-5">
        <div className="p-4 rounded-2xl border mb-4" style={{ borderColor: `${design.colors.primary}40`, background: `${design.colors.primary}10` }}>
          <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: `${design.colors.text}40` }}>Current Exercise</p>
          <p className="text-xl font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Romanian Deadlift</p>
          <p className="text-sm font-semibold" style={{ color: design.colors.primary }}>Set 2 of 3 · 60kg</p>
          <div className="flex gap-4 mt-3">
            <button className="flex-1 py-2 rounded-xl text-xs font-bold cursor-pointer border" style={{ borderColor: design.colors.border, color: `${design.colors.text}60` }}>Skip</button>
            <button className="flex-1 py-2 rounded-xl text-xs font-bold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Complete Set ✓</button>
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: `${design.colors.text}40` }}>All Exercises</p>
        <div className="space-y-2">
          {exercises.map(([name, sets, weight, done]) => (
            <div key={`${name}-${sets}`} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: done ? `${design.colors.cta}30` : design.colors.border, background: done ? `${design.colors.cta}05` : 'transparent', opacity: done ? 0.7 : 1 }}>
              <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center" style={{ borderColor: done ? design.colors.cta : design.colors.border, background: done ? design.colors.cta : 'transparent' }}>
                {done && <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              <p className="flex-1 text-sm" style={{ color: design.colors.text }}>{name}</p>
              <p className="text-xs" style={{ color: `${design.colors.text}50` }}>{sets}</p>
              <p className="text-xs font-semibold" style={{ color: design.colors.primary }}>{weight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FitnessPlans({ design }: { design: SystemDesign }) {
  const plans = [
    { name: '12-Week Strength', level: 'Intermediate', days: '4x/week', duration: '45–60 min', icon: '💪', tag: 'Popular' },
    { name: '5K Run Program', level: 'Beginner', days: '3x/week', duration: '30 min', icon: '🏃', tag: 'New' },
    { name: 'Lean & Tone', level: 'Intermediate', days: '5x/week', duration: '40 min', icon: '🔥', tag: '' },
    { name: 'Yoga for Athletes', level: 'All levels', days: '3x/week', duration: '20 min', icon: '🧘', tag: '' },
    { name: 'HIIT Blast', level: 'Advanced', days: '4x/week', duration: '30 min', icon: '⚡', tag: 'Hard' },
    { name: 'Mobility & Recovery', level: 'All levels', days: '2x/week', duration: '25 min', icon: '🌿', tag: '' },
  ];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-5 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Training Plans</p>
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none">
          {['All', 'Strength', 'Cardio', 'Yoga', 'HIIT'].map((c) => (
            <button key={c} className="px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer flex-shrink-0" style={{ background: c === 'All' ? design.colors.primary : `${design.colors.border}40`, color: c === 'All' ? '#fff' : `${design.colors.text}60` }}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
              <div className="h-20 flex items-center justify-center text-4xl relative" style={{ background: `linear-gradient(135deg, ${design.colors.primary}20, ${design.colors.secondary}10)` }}>
                {p.icon}
                {p.tag && <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded font-bold" style={{ background: design.colors.cta, color: '#fff' }}>{p.tag}</span>}
              </div>
              <div className="p-3">
                <p className="text-sm font-bold mb-1" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>{p.name}</p>
                <p className="text-[10px] mb-2" style={{ color: `${design.colors.text}50` }}>{p.level} · {p.days} · {p.duration}</p>
                <button className="w-full py-1.5 rounded-xl text-xs font-semibold cursor-pointer" style={{ background: design.colors.primary, color: '#fff' }}>Start Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FitnessNutrition({ design }: { design: SystemDesign }) {
  const meals = [['Overnight Oats', 'Breakfast', '420 kcal', '12g P · 68g C · 14g F'], ['Grilled Chicken Bowl', 'Lunch', '580 kcal', '48g P · 52g C · 12g F'], ['Protein Shake', 'Snack', '180 kcal', '25g P · 8g C · 4g F']];
  const macros = [['Protein', 85, 150, design.colors.primary], ['Carbs', 240, 280, design.colors.cta], ['Fat', 58, 80, design.colors.accent]];
  return (
    <div className="min-h-full" style={{ background: design.colors.background, color: design.colors.text, fontFamily: `'${design.typography.bodyFont}', sans-serif` }}>
      <div className="px-5 py-4 border-b" style={{ borderColor: design.colors.border }}>
        <p className="font-bold text-sm" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.text }}>Nutrition</p>
      </div>
      <div className="p-5">
        <div className="p-4 rounded-2xl border mb-5" style={{ borderColor: design.colors.border, background: `${design.colors.border}20` }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold" style={{ color: `${design.colors.text}60` }}>Calories Today</p>
            <p className="text-xs" style={{ color: `${design.colors.text}40` }}>Goal: 2,200</p>
          </div>
          <p className="text-3xl font-bold mb-2" style={{ fontFamily: `'${design.typography.headingFont}', sans-serif`, color: design.colors.primary }}>1,180 <span className="text-sm font-normal" style={{ color: `${design.colors.text}40` }}>kcal</span></p>
          <div className="h-2 rounded-full mb-4" style={{ background: `${design.colors.border}60` }}>
            <div className="h-full rounded-full" style={{ width: '54%', background: `linear-gradient(90deg, ${design.colors.primary}, ${design.colors.cta})` }} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {macros.map(([name, val, max, color]) => (
              <div key={name} className="text-center">
                <div className="h-1.5 rounded-full mb-1" style={{ background: `${design.colors.border}60` }}>
                  <div className="h-full rounded-full" style={{ width: `${(Number(val)/Number(max))*100}%`, background: color as string }} />
                </div>
                <p className="text-xs font-bold" style={{ color: color as string }}>{val}g</p>
                <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: `${design.colors.text}40` }}>Today's Meals</p>
          <button className="text-xs font-semibold cursor-pointer" style={{ color: design.colors.primary }}>+ Log Meal</button>
        </div>
        <div className="space-y-2">
          {meals.map(([name, mealType, kcal, macroStr]) => (
            <div key={name} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: design.colors.border }}>
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-xl" style={{ background: `${design.colors.primary}15` }}>🥗</div>
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: design.colors.text }}>{name}</p>
                <p className="text-[10px]" style={{ color: `${design.colors.text}40` }}>{mealType} · {macroStr}</p>
              </div>
              <p className="text-xs font-bold" style={{ color: design.colors.primary }}>{kcal}</p>
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
      if (page === 'records') return <HealthcareRecords design={design} />;
      return <HealthcareLanding design={design} />;

    case 'lms':
      if (page === 'landing') return <LMSLanding design={design} />;
      if (page === 'catalog') return <LMSCatalog design={design} />;
      if (page === 'course') return <LMSCourseDetail design={design} />;
      if (page === 'progress') return <LMSProgress design={design} />;
      return <LMSLanding design={design} />;

    case 'luxury-ecommerce':
      if (page === 'landing') return <LuxuryLanding design={design} />;
      if (page === 'listing') return <LuxuryListing design={design} />;
      if (page === 'detail') return <LuxuryDetail design={design} />;
      if (page === 'checkout') return <LuxuryCheckout design={design} />;
      if (page === 'wishlist') return <LuxuryWishlist design={design} />;
      return <LuxuryLanding design={design} />;

    case 'gaming':
      if (page === 'landing') return <GamingLanding design={design} />;
      if (page === 'leaderboard') return <GamingLeaderboard design={design} />;
      if (page === 'profile') return <GamingProfile design={design} />;
      if (page === 'store') return <GamingStore design={design} />;
      return <GamingLanding design={design} />;

    case 'sustainability':
      if (page === 'landing') return <ESGLanding design={design} />;
      if (page === 'dashboard') return <ESGDashboard design={design} />;
      if (page === 'report') return <ESGReport design={design} />;
      if (page === 'goals') return <ESGGoals design={design} />;
      return <ESGLanding design={design} />;

    case 'developer-docs':
      if (page === 'landing') return <DevLanding design={design} />;
      if (page === 'docs') return <DevDocs design={design} />;
      if (page === 'api') return <DevAPIRef design={design} />;
      if (page === 'changelog') return <DevChangelog design={design} />;
      if (page === 'playground') return <DevPlayground design={design} />;
      return <DevLanding design={design} />;

    case 'social-media':
      if (page === 'feed') return <SocialFeed design={design} />;
      if (page === 'profile') return <SocialProfile design={design} />;
      if (page === 'explore') return <SocialExplore design={design} />;
      if (page === 'messages') return <SocialMessages design={design} />;
      return <SocialFeed design={design} />;

    case 'real-estate':
      if (page === 'landing') return <RealEstateLanding design={design} />;
      if (page === 'listing') return <RealEstateListing design={design} />;
      if (page === 'detail') return <RealEstateDetail design={design} />;
      if (page === 'mortgage') return <RealEstateMortgage design={design} />;
      return <RealEstateLanding design={design} />;

    case 'restaurant':
      if (page === 'landing') return <RestaurantLanding design={design} />;
      if (page === 'menu') return <RestaurantMenu design={design} />;
      if (page === 'reservation') return <RestaurantReservation design={design} />;
      if (page === 'order') return <RestaurantOrder design={design} />;
      return <RestaurantLanding design={design} />;

    case 'analytics-dashboard':
      if (page === 'overview') return <AnalyticsOverview design={design} />;
      if (page === 'reports') return <AnalyticsReports design={design} />;
      if (page === 'segments') return <AnalyticsSegments design={design} />;
      if (page === 'settings') return <AnalyticsSettings design={design} />;
      return <AnalyticsOverview design={design} />;

    case 'travel-booking':
      if (page === 'landing') return <TravelLanding design={design} />;
      if (page === 'search') return <TravelSearch design={design} />;
      if (page === 'detail') return <TravelDetail design={design} />;
      if (page === 'checkout') return <TravelCheckout design={design} />;
      return <TravelLanding design={design} />;

    case 'hr-people':
      if (page === 'dashboard') return <HRDashboard design={design} />;
      if (page === 'candidates') return <HRCandidates design={design} />;
      if (page === 'employee') return <HREmployee design={design} />;
      if (page === 'onboarding') return <HROnboarding design={design} />;
      return <HRDashboard design={design} />;

    case 'nft-marketplace':
      if (page === 'landing') return <NFTLanding design={design} />;
      if (page === 'explore') return <NFTExplore design={design} />;
      if (page === 'item') return <NFTItem design={design} />;
      if (page === 'profile') return <NFTProfile design={design} />;
      return <NFTLanding design={design} />;

    case 'fitness-app':
      if (page === 'dashboard') return <FitnessDashboard design={design} />;
      if (page === 'workout') return <FitnessWorkout design={design} />;
      if (page === 'plans') return <FitnessPlans design={design} />;
      if (page === 'nutrition') return <FitnessNutrition design={design} />;
      return <FitnessDashboard design={design} />;

    default:
      return <div className="p-8 text-white/50 text-sm">No demo available for this page.</div>;
  }
}
