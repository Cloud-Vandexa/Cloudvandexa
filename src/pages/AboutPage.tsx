import React from 'react';
import {
  CheckCircle2,
  Target,
  Rocket,
  Users,
  ShieldCheck,
  Clock,
  Award
} from 'lucide-react';
import about_us from '../assets/about_us.jpg';

export const AboutPage = () => {
  return (
    <main>
      {/* Hero Section for About Page */}
      <section className="bg-zoho-blue py-12 border-b border-slate-100 relative overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${about_us})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-[39px] leading-[1.8] text-center text-white mb-6">
            About Us
          </h1>
          <p className="text-base font-noto-sans font-light w-full text-center text-white leading-[1.8]">
            Empowering Businesses Through Smart Digital Transformation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-20 max-w-4xl mx-auto">
            <div className="space-y-8 text-base font-light leading-relaxed text-center">
              <p>
                At{' '}
                <span className="font-semibold text-slate-800">
                  CloudVandexa
                </span>
                , we are committed to helping businesses grow smarter, faster,
                and more efficiently through innovative cloud solutions and
                strategic technology consulting. We specialize in delivering
                end-to-end business automation solutions powered by{' '}
                <span className="font-medium text-slate-800">
                  Zoho Corporation
                </span>
                , enabling organizations to streamline operations, improve
                productivity, and unlock sustainable growth.
              </p>
              <div className="p-4 bg-zoho-blue/5 border-l-4 border-zoho-blue rounded-r-2xl">
                <p className="text-sm italic ">
                  "Our mission is simple — to transform complex business
                  challenges into seamless digital solutions that create
                  measurable impact."
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-[26px]  text-black text-center mb-6 underline decoration-zoho-blue/30 underline-offset-8">
                  Who We Are
                </h2>
                <p className="text-base font-light text-black leading-relaxed">
                  CloudVandexa is a customer-focused technology consulting
                  company built on the principles of trust, innovation, and
                  results. We work closely with startups, SMEs, and growing
                  enterprises to understand their unique business models and
                  implement solutions that align with their goals.
                </p>
                <p className="text-base font-light text-black leading-relaxed mt-4">
                  With expertise across CRM, finance, operations, HR, customer
                  support, and workflow automation, we help organizations build
                  connected systems that drive efficiency and visibility across
                  departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-zoho-blue-dark ">
        <div className="max-w-7xl mx-auto px-4 text-white ">
          <h2 className="text-[32px] font-montserrat text-center mb-6">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
            {[
              'Zoho Corporation Consulting & Implementation',
              'CRM Setup & Sales Automation',
              'Finance & Accounting Solutions',
              'Workflow Automation',
              'Customization & Development',
              'Third-Party Integrations',
              'Data Migration',
              'Analytics & Dashboards',
              'Training & Ongoing Support'
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border border-white/10 text-black"
              >
                <CheckCircle2 className="text-zoho-blue shrink-0" size={24} />
                <span className="font-semibold text-zoho-blue font-noto-sans text-xs opacity-90">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center mt-16 text-sm italic opacity-60">
            Every solution we deliver is designed to be practical, scalable, and
            ROI-driven.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-[28px] text-black mb-6">Our Approach</h2>
            <p className="text-[17px] text-black font-light max-w-4xl mx-auto">
              We believe technology should serve business goals—not complicate
              them. That’s why our approach begins with understanding your
              current challenges, processes, and growth vision before
              recommending any solution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Listening first, advising second', icon: <Users /> },
              {
                title: 'Tailored solutions over one-size-fits-all models',
                icon: <Target />
              },
              {
                title: 'Process efficiency through automation',
                icon: <Rocket />
              },
              { title: 'Fast, smooth implementation', icon: <Clock /> },
              {
                title: 'Long-term partnerships and continuous support',
                icon: <ShieldCheck />
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 bg-zoho-blue-light rounded-2xl border border-zoho-blue-light hover:shadow-xl hover:shadow-slate-200/50 transition-all"
              >
                <div className="text-zoho-blue mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, {
                    size: 28
                  })}
                </div>
                <h3 className="text-sm font-medium text-slate-800 leading-[1.6]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CloudVandexa */}
      <section className="py-24 bg-zoho-blue-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl mb-8 text-center">Why Choose CloudVandexa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Certified Zoho Experts',
              'Business-First Consulting Approach',
              'Customized & Scalable Solutions',
              'Transparent Communication',
              'Fast Turnaround Time',
              'Dedicated Post-Go-Live Support',
              'Proven Focus on Client Success'
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-sm py-4 px-6 rounded-xl border border-white/20 hover:scale-105 transition-transform flex gap-6 items-center"
              >
                <Award className="text-white" size={24} />
                <h3 className="text-xs">{item}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
      </section>

      {/* Vision & Promise */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-4 md:px-16">
            <div>
              <h2 className="text-3xl font-montserrat text-center -translate-4 text-black">
                Our Vision
              </h2>
              <p className="text-base font-light text-black leading-relaxed border-l-4 border-zoho-blue pl-6">
                To become a trusted digital transformation partner for
                businesses worldwide by delivering innovative cloud solutions
                that simplify operations and accelerate growth.
              </p>
            </div>
            <div className="bg-zoho-blue-light p-12 rounded-3xl border border-zoho-blue-light text-center">
              <h2 className="text-3xl font-montserrat text-center -translate-4 text-black mb-4">
                Our Promise
              </h2>
              <p className="text-base font-light text-slate-600 mb-6 leading-relaxed">
                At CloudVandexa, we don’t just implement software—we build
                systems that help businesses perform better, scale faster, and
                compete stronger.
              </p>
              <div className="space-y-4">
                <div className="text-3xl font-semibold font-noto-sans tracking-tight text-slate-800">
                  Transform. Automate. Grow.
                </div>
                <div className="text-zoho-blue font-montserrat text-lg">
                  Powered by CloudVandexa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
