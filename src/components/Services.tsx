import React from 'react';
import {
  Users,
  Settings,
  LayoutGrid,
  Database,
  GraduationCap,
  HelpCircle,
  Share2
} from 'lucide-react';

export const Services = () => {
  const serviceList = [
    {
      title: 'ZOHO CONSULTING',
      icon: <Users />,
      desc: `Certified Zoho experts delivering value-driven solutions. Share your workflows and challenges, and we'll craft the perfect Zoho solution tailored to your growth.`
    },
    {
      title: 'Zoho Implementation',
      icon: <Settings />,
      desc: 'Expert implementation with years of experience. We ensure seamless deployment through rigorous testing, quality assurance, and best practices.'
    },
    {
      title: 'Zoho Customization',
      icon: <LayoutGrid />,
      desc: `Tailored customization that aligns Zoho with your business processes. One size doesn't fit all—we build solutions around your unique needs.`
    },
    {
      title: 'Zoho Data Migration',
      icon: <Database />,
      desc: 'Eliminate migration complexities. We ensure smooth, secure transfers from third-party apps to Zoho, enabling higher productivity and uninterrupted operations.'
    },
    {
      title: 'Zoho Integration',
      icon: <Share2 />,
      desc: 'Connect your existing applications with Zoho to create a unified ecosystem. Seamless data flow, reduced manual work, and improved productivity for smarter operations.'
    },
    {
      title: 'Zoho Training',
      icon: <GraduationCap />,
      desc: 'Get your team productive with Zoho from day one. Structured training, hands-on guidance, and continuous support for smooth adoption and success.'
    },
    {
      title: 'Zoho Support',
      icon: <HelpCircle />,
      desc: 'Timely assistance and proactive issue resolution. Our specialists optimize performance, address challenges quickly, and keep your Zoho ecosystem running efficiently.'
    }
  ];

  return (
    <section className="py-24 bg-zoho-blue">
      <div className="font-poppins">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Exceptional Zoho Experience with CloudVandexa
          </h2>
          <div className="w-16 h-1  mx-auto mb-2"></div>
          <p className="text-lg text-white font-light max-w-4xl mx-auto ">
            We are committed to delivering strategic solutions, seamless
            support, and a service experience that drives real business success.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 py-8 px-12 bg-zoho-blue justify-center">
          {serviceList.map((s, i) => (
            <div
              key={i}
              className="bg-white max-w-[80vw] md:max-w-[30vw] lg:w-[25vw] flex-1 lg:flex-none flex flex-col max-h-[30vh] rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center gap-2 px-5 py-3  font-noto-sans">
                <div className="text-zoho-blue  items-center justify-center rounded-xl hidden md:flex">
                  {React.cloneElement(s.icon as React.ReactElement, {
                    size: 20,
                    color: '#328fe7',
                    strokeWidth: 2.5
                  })}
                </div>
                <h3 className="text-base font-semibold w-full text-left lg:text-lg text-zoho-blue-bright text-nowrap">
                  {s.title}
                </h3>
              </div>

              <p className="text-black font-light text-[14px] leading-[1.8] text-justify pb-2 px-4">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
