/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactUsPage } from './pages/ContactUsPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-white font-poppins text-slate-800 antialiased selection:bg-zoho-blue/20 selection:text-zoho-blue">
          <ScrollToTop />
          <TopBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
