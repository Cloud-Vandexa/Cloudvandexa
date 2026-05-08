/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Challenges } from './components/Challenges';
import { Services } from './components/Services';
import { QuantitativeBanner } from './components/QuantitativeBanner';
import { Products } from './components/Products';
import { MoreProducts } from './components/MoreProducts';
import { ZohoCorp } from './components/ZohoCorp';
import { Testimonial } from './components/Testimonial';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { ZohoCreator } from './components/ZohoCreator';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white font-poppins text-slate-800 antialiased selection:bg-zoho-blue/20 selection:text-zoho-blue">
        <TopBar />
        <Navbar />
        <Hero />
        <Intro />
        <Challenges />
        <Services />
        <QuantitativeBanner />
        <Products />
        <MoreProducts />
        <ZohoCorp />
        <ZohoCreator />
        {/* <AboutUs />
        <Testimonial /> */}
        <Footer />
      </div>
    </>
  );
}
