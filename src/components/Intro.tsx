import { motion } from 'motion/react';
import puzzle from '../assets/puzzle_mascott.png';

export const Intro = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 relative group">
          <div className="w-full h-125 flex items-center justify-center ">
            <div className=" h-100 w-100̥ flex items-center justify-center">
              <img src={puzzle} alt="puzzle" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 font-montserrat">
          <h2 className="text-4xl text-slate-800 font-poppins mb-10">
            CloudVandexa Zoho Solutions
          </h2>
          <div className="space-y-6 leading-relaxed text-[18px] font-montserrat">
            <p>
              Adding the right technology to a business should create growth,
              not complexity.{' '}
              <span className="font-medium text-slate-700">CloudVandexa</span>{' '}
              delivers seamless Zoho solutions that simplify operations, improve
              efficiency, and support long-term success. Our team guides you
              through the complete journey—from consultation to implementation
              and optimization.
            </p>
            <p>
              We understand that every business has different goals, processes,
              and challenges. That is why we do not follow a one-size-fits-all
              approach. We carefully analyze your requirements and design smart,
              scalable, and user-friendly Zoho solutions tailored to your needs
              and budget.
            </p>
            <p>
              Our experts focus on strategic implementation, smooth user
              adoption, and measurable business outcomes. Whether it is sales
              automation, finance control, customer support, or project
              management, we ensure Zoho works as a growth engine for your
              organization.
            </p>
            <p className="font-medium text-slate-800 pt-4 border-l-4 border-zoho-blue pl-6">
              We value your time, respond quickly, and believe in building
              lasting partnerships through trust and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
