import zoho_projects from '../assets/zoho_projects.png';
import zoho_people from '../assets/svg/zoho_people.svg';
import zoho_books from '../assets/svg/zoho_books.svg';
import zoho_analytics from '../assets/zoho_analytics.png';
import zoho_sales_iq from '../assets/svg/zoho_sales_iq.svg';
import zoho_payroll from '../assets/zoho_payroll.png';
import zoho_workplace from '../assets/svg/zoho_workplace.svg';

const products = [
  {
    name: 'Projects',
    color: '#F23D2E',
    icon: zoho_projects,
    scale: 'scale-[1.2]'
  },
  {
    name: 'People',
    color: '#06A64A',
    icon: zoho_people,
    scale: 'scale-[1.2]'
  },
  {
    name: 'Books',
    color: '#1D7FCE',
    icon: zoho_books,
    scale: 'scale-[1.1]'
  },
  {
    name: 'Analytics',
    color: '#EA1B25',
    icon: zoho_analytics,
    scale: 'scale-[1.2]'
  },
  {
    name: 'SalesIQ',
    color: '#EA1B25',
    icon: zoho_sales_iq,
    scale: 'scale-[1.1]'
  },
  {
    name: 'Payroll',
    color: '#E73030',
    icon: zoho_payroll,
    scale: 'scale-[1.2]'
  },
  {
    name: 'Workplace',
    color: '#EA1B25',
    icon: zoho_workplace,
    scale: 'scale-[1.2]'
  }
];

export const MoreProducts = () => {
  return (
    <section className="bg-[#F7F5F0] py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[32px]  leading-[1.8] text-slate-900 uppercase mb-16 font-montserrat">
          More Products...
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 items-start">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.name}
              className="flex items-center justify-center"
            >
              <img
                className={`w-[197.78px] h-15 bg-cover ${product.scale ? product.scale : ''}`}
                src={product.icon}
                alt="product.name"
              />
            </div>
          ))}

          {products.slice(3, 6).map((product) => (
            <div
              key={product.name}
              className="flex items-center justify-center"
            >
              <img
                className={`w-[197.78px] h-15 bg-cover ${product.scale ? product.scale : ''}`}
                src={product.icon}
                alt="product.name"
              />
            </div>
          ))}

          <div className="sm:col-span-3 flex justify-center">
            <div className="flex items-center justify-center">
              <img
                className="w-[197.78px] h-15 bg-cover"
                src={products[6].icon}
                alt="product.name"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
