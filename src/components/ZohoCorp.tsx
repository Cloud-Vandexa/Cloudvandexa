import { Link } from 'react-router-dom';
import { ZohoLogo } from './ZohoLogo';
import { motion } from 'framer-motion';

export const ZohoCorp = () => {
  const transition: any = {
    duration: 0.8,
    ease: 'easeInOut'
  };
  return (
    <section className="py-32 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transition}
          className="lg:w-1/2 flex justify-center"
        >
          <ZohoLogo className="h-48 md:h-64 w-[90%]" />
        </motion.div>
        <div className="lg:w-1/2">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transition}
            className="text-[34px] font-montserrat text-black mb-4 tracking-tight"
          >
            Zoho Corporation
          </motion.h2>
          <div className="w-10 h-1 bg-zoho-blue my-4"></div>
          <div className="text-[18px] leading-[1.8] text-justify font-noto-sans pr-4">
            <p className="mb-6">
              Open your door to the world of work with Zoho. The cloud-based
              company offers a suite of online business tools accessible from
              anywhere, on any device, even without an internet connection. Zoho
              makes it easy and simple for everyone from entrepreneurs and
              freelancers to large businesses. Zoho Corporation is a
              multinational technology firm established in India that creates
              web-based business solutions. It is most well-known for its online
              office suite.
            </p>
            <Link
              to="/contact-us"
              className="bg-zoho-gray text-white px-6 py-2 text-sm font-noto-sans rounded-full"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
