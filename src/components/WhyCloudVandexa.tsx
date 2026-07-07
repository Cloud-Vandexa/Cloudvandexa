import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Zoho Reseller Partner',
    description:
      'Official partner status means best pricing, priority support, and Zoho-backed assurance.'
  },
  {
    title: 'Deep Technical Expertise',
    description:
      '3.5+ years of Deluge scripting, APIs, Blueprint automation, and Creator app development.'
  },
  {
    title: 'Startup Speed, Enterprise Quality',
    description:
      'Fast delivery, clear communication, fixed pricing. No bloated agency overhead.'
  },
  {
    title: 'One Team, Zero Hand-offs',
    description:
      'License purchase through go-live to AMC — one point of contact, complete ownership.'
  }
];

const stats = [
  {
    value: '40+',
    label: 'Projects delivered'
  },
  {
    value: '35+',
    label: 'Happy clients'
  },
  {
    value: '48h',
    label: 'Avg. response time'
  },
  {
    value: '98%',
    label: 'Client satisfaction'
  }
];

export const WhyCloudVandexa = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-slate-500">
              Why CloudVandexa
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">
              We Don’t Just Implement Zoho. We Make It Work for You.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Most partners hand you a setup and disappear. We stay, optimize,
              and grow with you.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-5">
              {stats.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
                >
                  <p className="text-3xl font-semibold text-zoho-blue">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.slice(2).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
                >
                  <p className="text-3xl font-semibold text-zoho-blue">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[32px] bg-zoho-blue p-10 text-white shadow-xl">
              <p className="text-5xl font-semibold">2+ Years</p>
              <p className="mt-3 text-base text-slate-100">
                In-house Zoho expertise — admin, developer & architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
