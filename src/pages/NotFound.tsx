import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Search } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zoho-blue-light via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-zoho-blue opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-zoho-blue-bright opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 404 Number */}
        <div className="mb-8">
          <motion.div
            className="inline-block"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-8xl md:text-9xl font-black bg-gradient-to-r from-zoho-blue to-zoho-blue-bright bg-clip-text text-transparent">
              404
            </span>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-sansation font-bold text-zoho-gray mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-zoho-gray/70 font-roboto mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Oops! It looks like the page you're looking for doesn't exist.
          <br className="hidden md:block" />
          Let's get you back on track.
        </motion.p>

        {/* Error Illustration */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-linear-to-br from-zoho-blue-light to-blue-100 rounded-full">
            <div className="text-6xl">
              <Search size={40} />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zoho-blue text-white rounded-lg font-poppins font-semibold hover:bg-zoho-blue-dark transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </Link>

          {/* Contact Button */}
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zoho-blue border-2 border-zoho-blue rounded-lg font-poppins font-semibold hover:bg-zoho-blue-light transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contact Support
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Additional Help Text */}
        <motion.p
          className="text-sm text-zoho-gray/60 mt-8 font-roboto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          If you believe this is a mistake, please{' '}
          <Link
            to="/contact-us"
            className="text-zoho-blue hover:underline font-semibold"
          >
            reach out to us
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};
