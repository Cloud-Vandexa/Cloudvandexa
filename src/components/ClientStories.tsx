import { User } from 'lucide-react';

const testimonials = [
  {
    quote:
      'CloudVandexa completely transformed our sales process. Every lead, follow-up, and deal is now tracked automatically. We saw a 35% increase in conversion within 3 months.',
    name: 'David Chen',
    image: ''
  },
  {
    quote:
      'We integrated Zoho Books with our Shopify store. CloudVandexa handled everything — data migration, GST setup, custom workflows. Super responsive and genuinely expert.',
    name: 'Michele Thompson'
  },
  {
    quote:
      'As a manufacturing company we needed robust PO and inventory workflows. CloudVandexa built a Zoho Creator app that is now central to our daily operations. Outstanding.',
    name: 'Amit Mehta'
  }
];

export const ClientStories = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-zoho-blue">
            Client Stories
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl flex flex-col justify-between border border-t-2 border-t-zoho-blue-bright border-slate-200 bg-white p-10 shadow-sm hover:shadow-lg hover:scale-105 transition-all"
            >
              <div className="flex items-center gap-3 text-amber-400">
                <span className="text-xl">★★★★★</span>
              </div>
              <p className="mt-6 text-sm italic text-slate-700 leading-[1.6]">
                “{item.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100">
                  {item.image && item.image !== '' ?
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  : <span className="flex h-full w-full items-center justify-center text-slate-400">
                      <User size={25} />
                    </span>
                  }
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
