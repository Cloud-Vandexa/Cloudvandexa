import {
  Users,
  Settings,
  Database,
  GraduationCap,
  HelpCircle,
  Share2,
  Code,
  LineChart,
  HardHat,
  MonitorCheck,
  Smartphone,
  ShieldCheck,
  Zap
} from 'lucide-react';
import customer_support from '../assets/customer_support.jpg';
import { PopupButton, Sidetab, Widget } from '@typeform/embed-react';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  const serviceCards = [
    {
      icon: Users,
      title: 'Consultation for Digital Transformation.',
      description:
        'We listen to you and understand your problems and pain points through consultation and suggest the best possible solution that can be implemented using various products from ZOHO. Here, we aim to not sell you a product, but a solution that caters for your business needs. We help you to technologically transform the workflow of your business and help you in figuring out what solutions can actually resolve your problems better.'
    },
    {
      icon: Share2,
      title: 'Seamless Integration with External Apps.',
      description:
        'Unlike other business automation companies, we don’t just give you what you asked for. We try and ensure that you get the best. When we deliver you a solution, we make sure that it is the most feasible one. We have seen our clients suffer due to their past experiences wherein they struggled to get data from their ERP software to CRMs and much more. To resolve this struggle, we have made a seamless integration with external applications possible through API Integration. This will help you in transferring data from one software to another hassle-free.'
    },
    {
      icon: Settings,
      title: 'Customisation and Development',
      description:
        'We don’t have a rigid rule for you to choose from a set of applications with standard features because we understand that all businesses are unique and hence have different problems to address. We custom-build the ZOHO Applications in a way that can cater for your business needs and requirements right. This will ensure a personalized solution for all your problems.'
    },
    {
      icon: Database,
      title: 'Data Migration in Zoho Apps',
      description:
        'Unlike other business automation companies, we don’t just give you what you asked for. We try and ensure that you get the best. When we deliver you a solution, we make sure that it is the most feasible one. We have seen our clients suffer due to their past experiences wherein they struggled to get data from their ERP software to CRMs and much more. To resolve this struggle, we have made a seamless integration with external applications possible through API Integration. This will help you in transferring data from one software to another hassle-free.'
    }
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-zoho-blue py-12 border-b border-slate-100 relative overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${customer_support})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-[39px] leading-[1.8] text-center text-white mb-6">
            Services & Support
          </h1>
          <p className="text-base font-noto-sans font-light w-full text-center text-white leading-[1.8]">
            Experience the CloudVandexa Difference with Customer-First Zoho
            Services
          </p>
          <p className="mt-8 text-base text-white font-light text-center">
            At <span className="font-medium text-white">CloudVandexa</span>, we
            believe every business deserves solutions that create measurable
            impact. Our customer-centric approach focuses on understanding your
            goals, solving operational challenges, and delivering long-term
            value through the right Zoho ecosystem.
          </p>
        </div>
      </section>

      {/* Extensive Services Breakdown */}
      <section className="py-32">
        <div className="mx-auto">
          <div className="grid gap-x-12 gap-y-8 px-20 md:px-40 lg:grid-cols-2 mb-10">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-4xl text-center shadow-2xl shadow-slate-200/40"
                >
                  <div className="flex gap-4 items-center text-lg font-montserrat mb-3">
                    <div className="w-12 h-12 hidden md:flex items-center justify-center text-zoho-blue">
                      <Icon size={40} />
                    </div>
                    <h2 className=" text-black">{card.title}</h2>
                  </div>
                  <p className="text-sm font-noto-sans text-black text-justify leading-[1.8]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full text-center mt-12 mb-28">
            <Link
              to="/contact-us"
              className="bg-zoho-blue hover:bg-zoho-blue-bright text-white  py-3 px-11.25 tracking-wider rounded-full transition font-noto-sans text-lg"
            >
              Contact Now
            </Link>
          </div>

          {/* Resource Augmentation Section */}
          <div className="bg-zoho-blue-dark  py-12 px-10 md:px-24 text-white overflow-hidden relative mb-18">
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                  <h2 className="text-[32px] font-montserrat mb-6">
                    Resource Augmentation
                  </h2>
                  <p className="text-base font-light opacity-80 leading-relaxed mb-12">
                    Scale your business with highly skilled professionals
                    through CloudVandexa’s flexible resource augmentation
                    services. We provide certified and experienced talent for
                    short-term projects, long-term engagements, and dedicated
                    support models.
                  </p>
                  <div className="inline-flex flex-col gap-4">
                    <span className="text- text-sm font-noto-sans font-bold tracking-widest uppercase">
                      Expertise
                    </span>
                    <h3 className="text-xl">
                      Technologies & Expertise We Provide
                    </h3>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="grid sm:grid-cols-2 gap-4 ">
                    {[
                      'Zoho Expert Team',
                      'Salesforce Developers',
                      'Microsoft Dynamics 365',
                      'SAP Functional Consultants',
                      'Oracle ERP / CRM',
                      'ServiceNow Experts',
                      'Full Stack Developers',
                      'Cloud Engineers',
                      'QA & Automation',
                      'Business Analysts',
                      'UI/UX Designers',
                      'DevOps Engineers'
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white p-4 rounded-lg border border-white/10"
                      >
                        <ShieldCheck
                          size={20}
                          className="text-zoho-blue shrink-0"
                        />
                        <span className="font-semibold text-zoho-blue font-noto-sans text-xs opacity-90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-sm italic opacity-60">
              Whether you need one expert or an extended offshore team, we help
              you reduce hiring timelines, optimize costs, and accelerate
              project delivery.
            </p>
            <div className="absolute top-0 right-0 h-full w-1/3 bg-zoho-blue-bright/10 skew-x-12 translate-x-24"></div>
          </div>

          {/* Dedicated Support */}
          <div className="flex flex-col gap-12 items-center">
            <div className="p-10 md:p-16  flex flex-col items-center text-center">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zoho-blue text-white rounded-full hidden md:flex items-center justify-center mb-10 shadow-xl shadow-zoho-blue/20">
                  <HelpCircle size={40} />
                </div>
                <h2 className="text-2xl font-light  text-black mb-8">
                  Dedicated Support & Optimization
                </h2>
              </div>

              <p className="text-base max-w-5xl font-light text-black leading-relaxed">
                Our relationship does not end after implementation. We provide
                responsive support, ongoing enhancements, user guidance, and
                performance optimization to ensure your Zoho environment
                continues to deliver maximum value.
              </p>
            </div>
            <div
              id="contact-form"
              className="bg-white p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 w-[70vw]"
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">
                Get in Touch
              </h2>
              <p className="text-center text-slate-500 mb-12">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <Widget
                id="ykvKHyYg"
                style={{ height: 1100, width: '100%' }}
                className="my-form"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
