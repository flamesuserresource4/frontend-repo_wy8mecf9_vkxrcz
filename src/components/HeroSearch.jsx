import { useState } from 'react';
import { Search, MapPin, Sun, Moon } from 'lucide-react';

export default function HeroSearch({ onSearch, theme, toggleTheme }) {
  const [service, setService] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ service, city });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white dark:from-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            ServiceConnect
          </h1>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/5 transition"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            <span className="hidden sm:inline text-sm">{theme === 'light' ? 'Dark' : 'Light'} mode</span>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white leading-tight">
              Find trusted local services near you
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Browse verified providers across home services, education, events, repairs and more.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 bg-white dark:bg-slate-900/60 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-700 p-3 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900">
                  <Search className="text-slate-500" size={18} />
                  <input
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="What service do you need? (e.g., Plumber, Tutor)"
                    className="w-full bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                    aria-label="Service"
                  />
                </div>
                <div className="sm:w-64 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-900">
                  <MapPin className="text-slate-500" size={18} />
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                    aria-label="City"
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 rounded-xl px-5 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition"
                >
                  Search
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Tip: Try categories like Cleaning, Salon, or Catering.
              </p>
            </form>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-100 via-amber-50 to-white dark:from-indigo-900/30 dark:via-amber-900/10 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
