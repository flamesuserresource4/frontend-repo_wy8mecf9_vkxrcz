import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1535242208474-9a2793260ca7?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Bengaluru', img: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Delhi', img: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Chennai', img: 'https://images.unsplash.com/photo-1590742914894-651f467fcab2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff1e2c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kolkata', img: 'https://images.unsplash.com/photo-1578926374607-2f6dbbcccf2b?q=80&w=1200&auto=format&fit=crop' },
];

export default function CitiesShowcase({ onSelectCity }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Discover Major Cities</h3>
            <p className="text-slate-600 dark:text-slate-300">Quickly browse providers by location</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((c) => (
            <button
              key={c.name}
              onClick={() => onSelectCity?.(c.name)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:shadow-md transition"
            >
              <img src={c.img} alt={c.name} className="h-40 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2 text-white">
                <MapPin size={18} />
                <span className="font-medium">{c.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
