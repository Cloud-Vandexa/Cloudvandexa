import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, MessageCircle, Phone } from 'lucide-react';

export const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-zoho-blue opacity-5 rounded-full blur-3xl"
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
        {/* Success Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full">
              <CheckCircle
                size={80}
                className="text-emerald-500"
                strokeWidth={1.5}
              />
            </div>
            {/* Floating animation */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-emerald-200/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-sansation font-bold text-zoho-gray mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Thank You!
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-emerald-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Your Request Has Been Received
        </motion.h2>

        {/* Description */}
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-zoho-gray/70 font-roboto leading-relaxed">
            We've received your inquiry and our Zoho expert will reach out to
            you
            <br className="hidden md:block" />
            <span className="font-semibold text-emerald-600">
              within 24 business hours
            </span>
            .
          </p>
          <p className="text-base text-zoho-gray/60 font-roboto">
            In the meantime, feel free to connect with us on WhatsApp or call us
            directly for immediate assistance.
          </p>
        </motion.div>

        {/* Next Steps Card */}
        <motion.div
          className="mb-12 bg-white rounded-2xl border-2 border-emerald-200/50 p-8 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest font-semibold text-zoho-gray/60 mb-6">
            While You Wait
          </p>
          <div className="space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918679390450"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-lg hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-emerald-600" />
                <span className="font-semibold text-zoho-gray">
                  Chat on WhatsApp
                </span>
              </div>
              <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918679390450"
              className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-zoho-blue" />
                <div className="text-left">
                  <p className="font-semibold text-zoho-gray">Call Us</p>
                  <p className="text-sm text-zoho-gray/60">+91 8679 390450</p>
                </div>
              </div>
              <span className="text-zoho-blue group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
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

          {/* Explore Services Button */}
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zoho-blue border-2 border-zoho-blue rounded-lg font-poppins font-semibold hover:bg-zoho-blue-light transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="text-sm text-zoho-gray/60 mt-10 font-roboto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Check your inbox for updates from our team
        </motion.p>
      </motion.div>
    </div>
  );
};
