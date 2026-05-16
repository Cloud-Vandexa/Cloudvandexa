import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { Challenges } from '../components/Challenges';
import { Services } from '../components/Services';
import { QuantitativeBanner } from '../components/QuantitativeBanner';
import { Products } from '../components/Products';
import { MoreProducts } from '../components/MoreProducts';
import { ZohoCorp } from '../components/ZohoCorp';
import { ZohoCreator } from '../components/ZohoCreator';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Challenges />
      <Services />
      <QuantitativeBanner />
      <Products />
      <MoreProducts />
      <ZohoCorp />
      <ZohoCreator />
    </>
  );
};
