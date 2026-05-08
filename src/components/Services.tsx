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
      desc: 'We deliver value-driven solutions as certified Zoho experts, designed to elevate your business to the next level. Simply share your existing workflows, challenges, and goals with our consultants, and we will craft the most effective Zoho solution tailored to your growth'
    },
    {
      title: 'Zoho Implementation',
      icon: <Settings />,
      desc: 'Our certified Zoho experts bring years of implementation experience and ensure a seamless deployment through rigorous testing, quality assurance, and best practices—delivering reliable solutions built to solve your unique business challenges.'
    },
    {
      title: 'Zoho Customization',
      icon: <LayoutGrid />,
      desc: 'Our customization services make Zoho products more efficient and aligned with your business processes, helping you grow faster through smart automation. We understand that one size does not fit all, which is why we deliver tailored solutions designed around your unique operational needs.'
    },
    {
      title: 'Zoho Data Migration',
      icon: <Database />,
      desc: 'Our data migration services eliminate the complexities of transferring business data. We ensure a smooth and secure migration from third-party applications to Zoho solutions, enabling higher productivity, cleaner systems, and uninterrupted business operations.'
    },
    {
      title: 'Zoho Integration',
      icon: <Share2 />,
      desc: 'Our Zoho integration services connect your existing applications with Zoho products to create a unified and efficient business ecosystem. We enable seamless data flow, reduce manual work, and improve productivity by integrating systems that help your teams operate smarter and faster.'
    },
    {
      title: 'Zoho Training',
      icon: <GraduationCap />,
      desc: 'Our CloudVandexa experts help your team become productive with Zoho from day one. Our subject matter specialists provide structured training, hands-on guidance, and continuous support to ensure a smooth adoption and successful business transition.'
    },
    {
      title: 'Zoho Support',
      icon: <HelpCircle />,
      desc: 'Our Zoho support services ensure your business runs smoothly with timely assistance, expert guidance, and proactive issue resolution. Our dedicated specialists help you optimize performance, address challenges quickly, and keep your Zoho ecosystem operating efficiently at all times.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 font-poppins">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            Exceptional Zoho Experience with CloudVandexa
          </h2>
          <div className="w-16 h-1 bg-zoho-blue mx-auto mb-10"></div>
          <p className="text-lg text-zoho-black font-light max-w-4xl mx-auto ">
            We are committed to delivering strategic solutions, seamless
            support, and a service experience that drives real business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((s, i) => (
            <div key={i} className="bg-white  w-full   flex flex-col h-full">
              <div className="flex items-center justify-center mb-6 gap-4 bg-zoho-blue font-noto-sans">
                <div className="text-zoho-blue  bg-zoho-blue/5 w-16 h-16 flex items-center justify-center rounded-xl">
                  {React.cloneElement(s.icon as React.ReactElement, {
                    size: 32,
                    color: '#fff'
                  })}
                </div>
                <h3 className="text-lg  text-white tracking-tight">
                  {s.title}
                </h3>
              </div>

              <p className="text-black font-light text-[16px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
