import zoho_creator from '../assets/svg/zoho_creator.svg';

export const ZohoCreator = () => {
  return (
    <section>
      <div className="flex items-center flex-col lg:flex-row p-10 gap-10">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={zoho_creator}
            alt="Zoho Creator"
            className="w-75 h-23.5 object-cover rounded-lg"
          />
        </div>
        <div className="pt-8 flex lg:w-1/2 flex-col items-left text-center lg:text-left text-black">
          <h4 className="text-2xl text-center font-light  mb-4">
            Zoho Creator Specialist
          </h4>
          <p className="lg:max-w-[42vw] text-lg font-light text-center mb-8">
            <span>
              Create customised application for your unique challenges and
              &nbsp;
            </span>
            <span>
              utilize them across various platforms to maximise productivity.
            </span>
          </p>

          <div className="space-y-2 mb-12 text-center  text-xl font-semibold">
            <p>Infinite Possibilities &</p>
            <p>Easy business</p>
          </div>
          <button className="bg-zoho-gray text-sm text-white px-8.75 py-2.5 rounded-full shadow-lg hover:brightness-110 transition-all w-fit mx-auto  font-noto-sans">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};
