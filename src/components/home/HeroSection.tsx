import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span className="text-white/60 text-xs font-medium">Design Intelligence System v2.0</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
        UI/UX Pro Max<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Design Explorer</span>
      </h1>
      <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-2xl mb-8">
        Browse 67 UI styles, 96 color palettes, 57 font pairings, and 16 fully designed system demos — all powered by the ui-ux-pro-max skill library.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Link
          to="/explorer?tab=styles"
          className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Browse Explorer
        </Link>
        <Link
          to="/systems"
          className="glass hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          View System Designs →
        </Link>
      </div>
    </div>
  );
}
