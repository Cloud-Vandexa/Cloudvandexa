const steps = [
  {
    title: 'Discovery Call',
    description:
      'Free 30-min call to understand your team, tools, pain points, and goals.'
  },
  {
    title: 'Solution Design',
    description:
      'We map your workflows to the right Zoho apps with a clear plan and fixed quote.'
  },
  {
    title: 'Build & Configure',
    description:
      'Setup, customization, integrations, and data migration — with weekly demos.'
  },
  {
    title: 'Go Live & Support',
    description:
      'We train your team, go live, and stay as your permanent Zoho partner with AMC.'
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-24 bg-zoho-blue text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-slate-200">
            How We Work
          </span>
          <h2 className="mt-4 text-4xl font-semibold">
            Simple, Transparent, Delivered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200/90">
            A proven 4-step process from discovery call to fully live Zoho
            system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[32px] border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100/10 text-xl font-semibold text-white">
                  {`0${index + 1}`}
                </div>
                <h3 className="mt-6 h-14 text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-7 text-slate-200/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
