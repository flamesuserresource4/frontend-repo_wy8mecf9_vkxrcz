import { Home, Wrench, BookOpen, Sparkles, Scissors, Salad, Drill } from 'lucide-react';

const categories = [
  { name: 'Home Services', icon: Home, subs: ['Cleaning', 'Shifting', 'Painting'] },
  { name: 'Repairs', icon: Wrench, subs: ['Plumbing', 'AC Repair', 'Electrical'] },
  { name: 'Education', icon: BookOpen, subs: ['Tutoring', 'Language', 'Music'] },
  { name: 'Events', icon: Sparkles, subs: ['Catering', 'Photography', 'Decoration'] },
  { name: 'Salon & Beauty', icon: Scissors, subs: ['Salon at Home', 'Makeup', 'Grooming'] },
  { name: 'Wellness & Diet', icon: Salad, subs: ['Yoga', 'Dietitian', 'Therapy'] },
  { name: 'Appliance', icon: Drill, subs: ['Washing Machine', 'Refrigerator', 'TV'] },
];

export default function CategoriesGrid({ onSelect }) {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-amber-50/40 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Browse Categories</h3>
            <p className="text-slate-600 dark:text-slate-300">Explore popular services and subcategories</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.name}
                onClick={() => onSelect?.(c.name)}
                className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{c.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{c.subs.join(' • ')}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
