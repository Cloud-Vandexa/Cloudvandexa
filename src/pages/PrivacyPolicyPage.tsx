import {
  privacyPolicyArray,
  PrivacyPolicySection
} from '../constants/privacy_policy_ds';

export const PrivacyPolicyPage = () => {
  const privacySections: PrivacyPolicySection[] = privacyPolicyArray;

  return (
    <main className="max-w-[90vw] mx-auto px-4 py-24">
      <h1 className="text-4xl text-center mb-4 font-montserrat">
        Privacy Policy
      </h1>
      <h2 className="text-2xl font-semibold text-zoho-blue mb-1">
        CloudVandexa
      </h2>
      <p className="text-slate-500 mb-12 text-sm">Last Updated: May 2026</p>

      <div className="prose prose-slate max-w-none space-y-12 text-lg font-light leading-relaxed text-slate-600">
        {/* Intro Section */}
        <section className="font-noto-sans text-base">
          <p>
            At{' '}
            <span className="font-semibold text-slate-800">CloudVandexa</span>,
            we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            store, and safeguard your information when you visit our website,
            use our services, or communicate with us.
          </p>
          <p className="mt-4">
            By accessing our website or engaging with our services, you agree to
            the practices described in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-medium font-noto-sans text-black mb-6">
            1. Information We Collect
          </h2>
          <p className="text-black">
            We may collect the following types of information:
          </p>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-24 mt-8">
            <div>
              <h3 className="text-xl font-montserrat font-medium text-slate-800 mb-4">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {[
                  'Full Name',
                  'Email Address',
                  'Phone Number',
                  'Company Name',
                  'Job Title',
                  'Address or Business Location',
                  'Any details submitted through forms or enquiries'
                ].map((listItem, listIdx) => (
                  <li
                    className="text-base font-noto-sans text-black"
                    key={listIdx}
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-montserrat font-medium text-slate-800 mb-4">
                Technical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {[
                  'IP Address',
                  'Browser Type',
                  'Device Information',
                  'Operating System',
                  'Website usage data',
                  'Cookies and analytics data'
                ].map((listItem, listIdx) => (
                  <li
                    className="text-base font-noto-sans text-black"
                    key={listIdx}
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Main Sections */}
        {privacySections.map((section) => (
          <section
            key={section.number}
            className={
              section.number > 2 ? 'border-t border-slate-100 pt-12' : ''
            }
          >
            <h2 className="text-3xl font-noto-sans font-medium text-black mb-6">
              {section.number}. {section.title}
            </h2>

            {section.content.map((item, idx) => {
              if (item.type === 'paragraph') {
                return (
                  <p
                    key={idx}
                    className={`${idx > 0 ? 'mt-4' : ''} ${
                      item.highlight ? 'font-medium ' : ''
                    } ${item.italic ? 'italic' : ''} text-base font-noto-sans text-black`}
                  >
                    {item.text}
                  </p>
                );
              }

              if (item.type === 'list') {
                return (
                  <ul
                    key={idx}
                    className="list-disc text-base font-noto-sans pl-6 space-y-2 mt-4"
                  >
                    {item.items?.map((listItem, listIdx) => (
                      <li key={listIdx} className="text-black">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </section>
        ))}
        <p className="text-2xl font-bold text-zoho-blue mt-8">CloudVandexa</p>
      </div>
    </main>
  );
};
