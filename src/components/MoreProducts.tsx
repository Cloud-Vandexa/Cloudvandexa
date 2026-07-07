import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import zoho_projects from '../assets/zoho_projects.png';
import zoho_people from '../assets/svg/zoho_people.svg';
import zoho_books from '../assets/svg/zoho_books.svg';
import zoho_analytics from '../assets/zoho_analytics.png';
import zoho_sales_iq from '../assets/svg/zoho_sales_iq.svg';
import zoho_payroll from '../assets/zoho_payroll.png';
import zoho_workplace from '../assets/svg/zoho_workplace.svg';
import zoho_mail from '../assets/zoho_mail_logo.png';

const moreProducts = [
  {
    name: 'Zoho Projects',
    tag: 'Projects',
    icon: zoho_projects,
    description: 'Task management, Gantt charts, and timesheets.'
  },
  {
    name: 'Zoho People',
    tag: 'HR',
    icon: zoho_people,
    description: 'HRMS for attendance, payroll, and performance.'
  },
  {
    name: 'Zoho Books',
    tag: 'Accounting',
    icon: zoho_books,
    description: 'GST-ready accounting, invoicing, and bank reconciliation.'
  },
  {
    name: 'Zoho Analytics',
    tag: 'Analytics',
    icon: zoho_analytics,
    description: 'BI dashboards and data blending across all your apps.'
  },
  {
    name: 'Zoho SalesIQ',
    tag: 'Sales',
    icon: zoho_sales_iq,
    description: 'Website chat, lead scoring, and visitor tracking.'
  },
  {
    name: 'Zoho Payroll',
    tag: 'Payroll',
    icon: zoho_payroll,
    description: 'Payroll, compliance, and employee salary processing.'
  },
  {
    name: 'Zoho Workplace',
    tag: 'Collaboration',
    icon: zoho_workplace,
    description: 'Mail, Cliq, WorkDrive, and meetings in one suite.'
  },
  {
    name: 'Zoho Mail',
    tag: 'Email',
    icon: zoho_mail,
    description: 'Secure business email with calendars and collaboration tools.'
  }
];

export const MoreProducts = () => {
  return (
    <section className="bg-zoho-blue-light py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-slate-500">
            More Products
          </span>
          <h2 className="mt-5 text-4xl font-semibold text-slate-900">
            More Zoho Apps We Implement
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {moreProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={product.icon}
                alt={product.name}
                className="mb-6 h-28 w-full object-contain"
              />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {product.name}
              </h3>
              <p className="text-sm leading-7 text-slate-600 mb-5">
                {product.description}
              </p>
              <span className="inline-flex rounded-full bg-zoho-blue-light px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
                {product.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-zoho-blue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-zoho-blue/20 transition hover:bg-zoho-blue-bright"
          >
            Ask About Any Zoho Product →
          </Link>
        </div>
      </div>
    </section>
  );
};
