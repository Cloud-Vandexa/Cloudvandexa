import { Hero } from '../components/Hero';
import { MoreProducts } from '../components/MoreProducts';
import { Products } from '../components/Products';
import { QuantitativeBanner } from '../components/QuantitativeBanner';
import { ZohoCorp } from '../components/ZohoCorp';
import { ZohoCreator } from '../components/ZohoCreator';
import { ClientStories } from '../components/ClientStories';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Products />
      <MoreProducts />
      <ClientStories />
      <QuantitativeBanner />
      <ZohoCorp />
      <ZohoCreator />
    </>
  );
};
