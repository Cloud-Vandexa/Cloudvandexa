import { MessagesSquare } from 'lucide-react';
import zoho_books from '../assets/zoho_books_desktop.png';
import zoho_creator from '../assets/zoho_creator_desktop.png';
import zoho_crm_plus from '../assets/zoho_crm_plus.png';
import zoho_one from '../assets/zoho_one.png';
import zoho_mail from '../assets/zoho_mail.png';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const products = [
  {
    label: 'Z1',
    badge: 'Most Popular',
    badgeColor: '#e42527',
    title: 'Zoho One — The OS for Your Business',
    description:
      '45+ business applications under a single subscription. Replace 10+ standalone tools with one connected platform.',
    benefits: [
      '45+ integrated apps',
      'Single sign-on across apps',
      'Unified analytics and Zia AI',
      'GST compliant business operations',
      '₹1250/user/mo'
    ],
    cta: 'Get Zoho One →',
    buttonText: 'Get Zoho One →',
    image: zoho_one,
    imageAlt: 'Zoho One product suite',
    reverse: false
  },
  {
    label: 'CRM',
    badge: 'Sales Growth',
    badgeColor: '#e53935',
    title: 'Zoho CRM — Close More Deals, Faster',
    description:
      'Complete sales management — capture leads, automate follow-ups, manage pipelines, and close deals with AI insights from Zia.',
    benefits: [
      'Lead & contact management',
      'Sales pipeline automation',
      'WhatsApp & email integration',
      'AI lead scoring',
      'Blueprint automation',
      'Sales forecasting'
    ],
    cta: 'Implement Zoho CRM →',
    buttonText: 'Implement Zoho CRM →',
    image: zoho_crm_plus,
    imageAlt: 'Zoho CRM product screenshot',
    reverse: true
  },
  {
    label: 'MAIL',
    badge: 'Email & Collaboration',
    badgeColor: '#0f172a',
    title: 'Zoho Mail — Secure Business Email',
    description:
      'A business email platform built for security, productivity, and smooth collaboration across your team.',
    benefits: [
      'Ad-free email experience',
      'Custom domain support',
      'Calendars and tasks built-in',
      'Advanced spam protection',
      'Seamless Zoho integration',
      'Mobile-ready inbox'
    ],
    cta: 'Implement Zoho Mail →',
    buttonText: 'Implement Zoho Mail →',
    image: zoho_mail,
    imageAlt: 'Zoho Mail product screenshot',
    reverse: false
  },

  {
    label: 'CRT',
    badge: 'Custom Apps',
    badgeColor: '#fb8c00',
    title: 'Zoho Creator — Custom Business Apps',
    description:
      'Low-code platform for fully custom business applications. When standard apps don’t fit your process, Creator fills the gap.',
    benefits: [
      'Custom forms and workflows',
      'Mobile-ready apps',
      'Deluge scripting',
      '550+ integrations',
      'Approval workflows',
      'AI-powered features'
    ],
    cta: 'Build Your Custom App →',
    buttonText: 'Build Your Custom App →',
    image: zoho_creator,
    imageAlt: 'Zoho Creator product screenshot',
    reverse: true
  },
  {
    label: 'BKS',
    badge: 'GST Ready',
    badgeColor: '#43a047',
    title: 'Zoho Books — GST-Ready Accounting',
    description:
      'India’s leading cloud accounting system — GST-compliant, automated, and integrated with banking.',
    benefits: [
      'GST invoicing & returns',
      'Bank reconciliation',
      'Accounts payable & receivable',
      'Expense tracking',
      'Multi-currency support',
      'Tally migration'
    ],
    cta: 'Implement Zoho Books →',
    buttonText: 'Implement Zoho Books →',
    image: zoho_books,
    imageAlt: 'Zoho Books product screenshot',
    reverse: false
  }
];

export const Products = () => {
  const transition: any = {
    duration: 0.8,
    ease: 'easeInOut'
  };

  const initialLeft = { opacity: 0, x: 200 };
  const initialRight = { opacity: 0, x: -200 };
  const whileInView = { opacity: 1, x: 0 };

  return (
    <main className="overflow-hidden">
      <section className="overflow-hidden bg-zoho-blue-light">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="w-full text-center uppercase tracking-[0.35em] text-sm text-zoho-blue font-semibold">
            Zoho Products
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-center leading-tight md:text-4xl">
            45+ Zoho Apps. We Implement Them All.
          </h1>
          <p className="mt-6 text-base text-center">
            Buy through us as an authorized reseller and get expert
            implementation bundled in.
          </p>
        </div>
      </section>

      <section className=" pt-10 pb-24 bg-zoho-blue-light">
        <div className="mx-auto max-w-7xl px-4 space-y-24">
          {products.map((product) => (
            <div
              key={product.title}
              className={`grid gap-10 lg:grid-cols-2 ${product.reverse ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <motion.div
                initial={product.reverse ? initialLeft : initialRight}
                whileInView={whileInView}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition}
                className={`${product.reverse ? 'lg:order-last lg:text-right' : ''} space-y-8`}
              >
                <div className="flex flex-col gap-4">
                  <span
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold"
                    style={{ backgroundColor: '#ecf2ff', color: '#1d4ed8' }}
                  >
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-3xl text-lg font-semibold text-white"
                      style={{ backgroundColor: product.badgeColor }}
                    >
                      {product.label}
                    </div>
                    <h2 className="text-3xl font-semibold text-slate-900">
                      {product.title}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-base leading-8 text-slate-600">
                    {product.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {product.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <span className="mt-1 text-zoho-blue">✓</span>
                      <p className="text-sm leading-6 text-slate-700">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-zoho-blue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-zoho-blue/20 transition hover:bg-zoho-blue-bright"
                >
                  {product.buttonText}
                </Link>
              </motion.div>

              <motion.div
                initial={product.reverse ? initialRight : initialLeft}
                whileInView={whileInView}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition}
                className="flex items-center justify-center"
              >
                <div className="overflow-hidden w-[80%] md:w-[70%] lg:w-full mx-auto md:mx-0 bg-transparent">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="md:h-130 w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zoho-blue-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-semibold">
            Which Zoho App Does Your Business Need?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Book a free consultation and we’ll map the right products to your
            goals.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-zoho-blue transition hover:bg-slate-100"
            >
              Book Free Call
            </Link>
            <a
              href="https://wa.me/918796390450"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <MessagesSquare size={18} className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
