import { MessagesSquare } from 'lucide-react';
import zoho_creator from '../assets/zoho_creator_desktop.png';
import zoho_crm_plus from '../assets/zoho_crm_plus.png';
import zoho_mail from '../assets/zoho_mail.png';
import zoho_one from '../assets/zoho_one.png';

export const Products = () => {
  return (
    <section className="bg-zoho-blue text-white">
      <div className=" py-20 text-center ">
        <h2 className="text-4xl font-extralight mb-8">Zoho Products</h2>
        <p className="max-w-[78vw] mx-auto px-4 text-lg font-light  font-montserrat">
          The Zoho family is growing – with over 50+ products, we've got
          everything you need for your business and team.
        </p>
      </div>

      {/* Zoho One */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:w-1/2">
          <img src={zoho_one} alt="Zoho One" className="w-full h-auto " />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-[34px] font-light  mb-8">Zoho One</h3>
          <p className=" text-lg font-light mb-12">
            Zoho One integration provides access to a variety of business
            applications from a single, easy-to-use control panel. Zoho One
            offers a comprehensive suite of enterprise-grade apps for
            Solopreneurs, Start-ups, and SMBs, all of which can be customized to
            fit your business needs.
          </p>
          <button className="bg-white text-black px-8 font-noto-sans text-sm py-2 rounded-full">
            Get in touch
          </button>
        </div>
      </div>
      {/* Zoho CRM+ */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center gap-6 mt-16">
        <div className="lg:w-1/2">
          <img src={zoho_crm_plus} alt="Zoho CRM+" className="w-full h-auto " />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-[34px] font-light  mb-8">Zoho CRM+</h3>
          <p className=" text-lg font-light mb-12">
            Zoho CRM, will help you in managing and preventing the loss of
            leads, prospects, and loyal customers. It gives you varied ways of
            interacting with customers. Your employees will have better access
            to all the data, so that interactions with your customers become
            more efficient.
          </p>
          <button className="bg-white text-black px-8 font-noto-sans text-sm py-2 rounded-full">
            Get in touch
          </button>
        </div>
      </div>

      {/*Zoho Creator*/}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:w-1/2">
          <img
            src={zoho_creator}
            alt="Zoho Creator"
            className="w-full h-auto "
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-[34px] font-light  mb-8">Zoho Creator</h3>
          <p className=" text-lg font-light mb-12">
            Using Zoho CRM Plus, businesses can unify customer information,
            provide a unified environment for all customer touchpoints, and
            offer excellent customer experiences across the entire customer
            lifecycle.
          </p>
          <button className="bg-white text-black px-8 font-noto-sans text-sm py-2 rounded-full">
            Get in touch
          </button>
        </div>
      </div>

      {/* Zoho Mail */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse items-center gap-6 mt-16">
        <div className="lg:w-1/2">
          <img src={zoho_mail} alt="Zoho Mail" className="w-full h-auto " />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-[34px] font-light  mb-8">Zoho Mail</h3>
          <p className=" text-lg font-light mb-12">
            Zoho Mail is the complete solution for the entire business
            communication needs. The Zoho Mail template provides a simple yet
            professional way to easily design, personalize and send business
            mails. Create a lasting impression on your recipients even before
            they read it.
          </p>
          <button className="bg-white text-black px-8 font-noto-sans text-sm py-2 rounded-full">
            Get in touch
          </button>
        </div>
      </div>

      <div className="py-24 text-center bg-white">
        <h2 className="text-[34px]  mb-6 leading-[1.8] font-montserrat text-black">
          To know more
        </h2>
        <button className="bg-zoho-blue text-white px-12 py-4 rounded-md text-lg hover:shadow-xl transition-all flex m-auto gap-4 items-center font-noto-sans">
          <MessagesSquare size={20} />
          <p>Schedule Meeting</p>
        </button>
      </div>
    </section>
  );
};
