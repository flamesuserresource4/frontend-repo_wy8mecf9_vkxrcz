import { Phone, Star } from 'lucide-react';

const featured = [
  {
    name: 'BlueWave Plumbing Co.',
    category: 'Plumbing',
    city: 'Mumbai',
    phone: '+91 98765 43210',
    rating: 4.8,
    description: 'Expert leak fixes, bathroom fittings, and maintenance with 24/7 support.'
  },
  {
    name: 'UrbanClean Services',
    category: 'Home Cleaning',
    city: 'Bengaluru',
    phone: '+91 99876 54321',
    rating: 4.6,
    description: 'Deep cleaning for homes and offices using eco-friendly products.'
  },
  {
    name: 'MindSpark Tutors',
    category: 'Education',
    city: 'Delhi',
    phone: '+91 91234 56789',
    rating: 4.9,
    description: 'Top-rated math and science tutors for classes 6-12. Online & in-person.'
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Featured Listings</h3>
            <p className="text-slate-600 dark:text-slate-300">Recently added providers you may like</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.category} • {item.city}</p>
                </div>
                <div className="inline-flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 flex-1">{item.description}</p>
              <a href={`tel:${item.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
