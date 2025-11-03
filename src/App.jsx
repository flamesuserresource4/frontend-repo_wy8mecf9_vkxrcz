import { useEffect, useState } from 'react';
import HeroSearch from './components/HeroSearch.jsx';
import CategoriesGrid from './components/CategoriesGrid.jsx';
import CitiesShowcase from './components/CitiesShowcase.jsx';
import FeaturedListings from './components/FeaturedListings.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('sc_theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('sc_theme', theme);
  }, [theme]);

  const handleSearch = ({ service, city }) => {
    // For now, just smooth-scroll to featured and emulate a filter highlight.
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('Search:', service, city);
  };

  const handleCategorySelect = (category) => {
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('Category selected:', category);
  };

  const handleCitySelect = (city) => {
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log('City selected:', city);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <HeroSearch onSearch={handleSearch} theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <CategoriesGrid onSelect={handleCategorySelect} />
      <CitiesShowcase onSelectCity={handleCitySelect} />
      <div id="featured">
        <FeaturedListings />
      </div>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} ServiceConnect — Find trusted local providers.
          </p>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Free for the first year • Admin-verified listings • No online bookings
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
