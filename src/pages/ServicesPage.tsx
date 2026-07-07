import {
  CheckCircle2,
  Code,
  Database,
  HelpCircle,
  MonitorCheck,
  Settings,
  ShieldCheck,
  Share2,
  Smartphone,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    eyebrow: 'Service 01',
    title: 'Zoho Implementation',
    description:
      'We take you from zero to a fully live, configured Zoho system. Whether a single app or complete Zoho One suite, we handle every step.',
    features: [
      'Business process mapping and requirements analysis',
      'Zoho One, CRM, Books, Creator, People and 45+ app setup',
      'Role-based access control and user management',
      'Data import and initial configuration',
      'UAT testing and go-live support',
      'Team training and handover documentation'
    ],
    cta: 'Get Started →',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    icon: Settings
  },
  {
    eyebrow: 'Service 02',
    title: 'Customization & Automation',
    description:
      'Zoho configured for your exact workflow is transformative. We extend and automate every aspect of your Zoho environment.',
    features: [
      'Custom modules, fields, layouts, and views',
      'Blueprint and process automation design',
      'Deluge scripting for advanced custom functions',
      'Workflow rules, approval processes, and alerts',
      'Custom reports and analytics dashboards',
      'Zoho Creator custom app development'
    ],
    cta: 'Discuss Requirements →',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    icon: Code
  },
  {
    eyebrow: 'Service 03',
    title: 'Integration Services',
    description:
      'We connect Zoho with your existing tools — payment gateways, e-commerce platforms, communication tools, and custom APIs.',
    features: [
      'WhatsApp Business API integration with Zoho CRM',
      'Razorpay, Stripe, PayU payment gateway integration',
      'Shopify, WooCommerce, and e-commerce sync',
      'Tally, QuickBooks, and accounting tool integration',
      'Google Workspace, Microsoft 365 sync',
      'Custom REST API and webhook development'
    ],
    cta: 'Plan Your Integration →',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    icon: Share2
  },
  {
    eyebrow: 'Service 04',
    title: 'Zoho Reselling',
    description:
      'As a Zoho Reseller Partner, we sell any Zoho license at official pricing — with dedicated onboarding, local support, and billing in INR.',
    features: [
      'Official Zoho One, CRM, Books, and all app licenses',
      'Best authorized partner pricing — no markups',
      'Billing in INR with GST invoice',
      'License management and renewal handling',
      'Free onboarding support with every license'
    ],
    cta: 'Get Zoho License →',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    icon: Users
  },
  {
    eyebrow: 'Service 05',
    title: 'Data Migration',
    description:
      'We migrate from spreadsheets, legacy CRMs, or any existing software into Zoho cleanly, accurately, with zero downtime.',
    features: [
      'Data audit, cleaning, and de-duplication',
      'Migration from Excel, Google Sheets, CSV files',
      'Migration from Salesforce, HubSpot, Tally, legacy CRMs',
      'Relationship mapping and data validation',
      'Post-migration reconciliation report'
    ],
    cta: 'Plan Your Migration →',
    image:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80',
    icon: Database
  },
  {
    eyebrow: 'Service 06',
    title: 'AMC & Managed Support',
    description:
      'Our Annual Maintenance Contracts keep your Zoho system optimized and running perfectly as your business evolves.',
    features: [
      'Dedicated support engineer — same person every time',
      'WhatsApp + email support with SLA guarantee',
      'Monthly Zoho usage reports and optimization',
      'New user onboarding and training included',
      'Periodic system audits and health checks'
    ],
    cta: 'Get Support Plan →',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    icon: MonitorCheck
  }
];

export const ServicesPage = () => {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden bg-zoho-blue-dark text-white">
        <div className="absolute inset-0 opacity-80">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Zoho services strategy"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zoho-blue/95 via-zoho-blue-dark/95 to-[#061426]/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <span className="inline-flex uppercase tracking-[0.35em] text-sm text-slate-200 opacity-80">
            Our Services
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Everything You Need to Run on Zoho
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/90">
            From buying the right license to fully automating your operations —
            we cover every step of your Zoho journey.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.title}
                className={`grid gap-10 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div
                  className={`space-y-8 ${isReversed ? 'lg:order-last lg:text-right' : ''}`}
                >
                  <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-zoho-blue">
                    {service.eyebrow}
                  </span>
                  <div
                    className={`flex flex-col gap-5 ${isReversed ? 'lg:items-end' : 'lg:items-start'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-zoho-blue/10 text-zoho-blue">
                        <Icon size={28} />
                      </div>
                      <h2 className="text-3xl font-semibold text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-zoho-blue"
                        />
                        <p className="text-sm leading-6 text-slate-700">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center rounded-full bg-zoho-blue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-zoho-blue/20 transition hover:bg-zoho-blue-bright"
                  >
                    {service.cta}
                  </Link>
                </div>

                <div className="overflow-hidden h-[60%] my-auto rounded-[36px] border border-slate-200/70 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-zoho-blue-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-semibold">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Book a free 30-minute call and we’ll help you figure out exactly
            what your business needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact-us" className="btn btn-white btn-lg">
              Book Free Call
            </Link>
            <a
              href="https://wa.me/918679390450"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ow btn-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
