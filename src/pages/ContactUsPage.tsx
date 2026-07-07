import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const APP_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwd7iY3jDL1ksyqROOaCctP5Inql6S4Uo1dVBDP25T_p2qJrKYDWQqnfO2swuYH2G095A/exec';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  companySize: '',
  need: '',
  details: ''
};

const faqItems = [
  {
    question: 'How much does Zoho One cost in India?',
    answer:
      'Zoho One is priced at approximately ₹1,250 per user per month (billed annually) in India. As an Zoho Reseller Partner, we provide official pricing and help you choose the right edition.'
  },
  {
    question: 'How long does a Zoho implementation take?',
    answer:
      'Typical implementations take 2–6 weeks depending on complexity, number of apps, and data migration needs. Simple setups can go live in 1–2 weeks. We give you a clear timeline in our proposal.'
  },
  {
    question: 'Do you provide support after go-live?',
    answer:
      'Absolutely. We offer Annual Maintenance Contracts (AMC) with dedicated support, periodic audits, and optimization. Most clients stay with us long-term — we become their permanent Zoho team.'
  },
  {
    question: 'Can you migrate our data from Tally / Salesforce / Excel?',
    answer:
      'Yes. We have migrated from Excel, Google Sheets, Tally, Salesforce, HubSpot, Pipedrive, and custom databases — with data cleaning, deduplication, mapping, and a full reconciliation report.'
  },
  {
    question: 'Is it better to buy Zoho directly or through a partner?',
    answer:
      'Buying through us gives you the same official pricing, plus: dedicated support, bundled onboarding, billing in INR with GST invoice, and an implementation expert who knows your setup from day one.'
  },
  {
    question: 'Can Zoho integrate with WhatsApp, Razorpay, and Shopify?',
    answer:
      'Yes — all three are integrations we do regularly. WhatsApp Business API connects to Zoho CRM. Razorpay links to Zoho Books for automatic payment reconciliation. Shopify syncs orders and inventory in real time.'
  },
  {
    question: 'What is your implementation pricing?',
    answer:
      'Pricing varies by scope, number of apps, customization depth, and data migration complexity. We always provide a fixed-price quote upfront. Book a free call and we’ll give you a detailed proposal within 48 hours.'
  },
  {
    question: 'Do you work with small businesses or only enterprises?',
    answer:
      'We work with businesses of all sizes — from 5-person startups to 500-person enterprises. Many of our best implementations are for companies with 10–100 employees replacing 5–10 disconnected tools with Zoho One.'
  }
];

export const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>();

  const validatePhoneNumber = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return 'Mobile number is required.';
    }

    const digitsOnly = trimmedValue.replace(/\D/g, '');

    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return 'Please enter a valid mobile number.';
    }

    return '';
  };

  const handleChange =
    (key: keyof typeof initialFormData) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFormData((current) => ({ ...current, [key]: event.target.value }));

      if (key === 'phone') {
        setPhoneError('');
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneValidationError = validatePhoneNumber(formData.phone);

    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      setSubmitError('');
      setSubmitSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    setPhoneError('');

    try {
      const response = await fetch(APP_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
          ...formData,
          _subject:
            `New enquiry from ${formData.firstName} ${formData.lastName}`.trim(),
          _captcha: 'false',
          _template: 'table'
        }).toString()
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormData(initialFormData);
      // Redirect to thank you page after successful submission
      setTimeout(() => {
        navigate('/thank-you');
      }, 500);
    } catch (error) {
      setSubmitError('Unable to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-zoho-blue-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-zoho-blue-dark/95 via-zoho-blue/85 to-slate-950/90 opacity-95" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="mt-6 text-4xl w-[85%] mx-auto font-semibold leading-tight text-white md:text-5xl">
            Let’s Build Your Zoho System Together
          </h1>
          <p className="mx-auto mt-6 text-base leading-8 text-slate-200/90">
            Book a free 30-minute discovery call or fill the form. Our expert
            will reach out within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div>
                <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-zoho-blue">
                  Reach Us Directly
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                  Multiple Ways to Connect
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  We are available and responsive — typically replying within a
                  few hours during business hours.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href="tel:+918796390450"
                  className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-zoho-blue hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-2xl">
                    📞
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Call Us
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      +91 8679 390450
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@cloudvandexa.com"
                  className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-zoho-blue hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-2xl">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Email Us
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      info@cloudvandexa.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/918796390450"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-zoho-blue hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-2xl">
                    💬
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      +91 8679 390450
                    </p>
                  </div>
                </a>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-200">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-zoho-blue">
                    Business Hours (IST)
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-4">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-slate-900">
                      9 AM – 7 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-4">
                    <span>Saturday</span>
                    <span className="font-semibold text-slate-900">
                      10 AM – 5 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-4">
                    <span>Sunday</span>
                    <span className="font-semibold text-slate-900">
                      WhatsApp only
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">
                  What Happens After You Submit
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      label: 'We review your request',
                      detail:
                        'Our Zoho expert reviews your requirements within 24h.'
                    },
                    {
                      label: 'We schedule a discovery call',
                      detail:
                        'Free 30-min call to understand your business goals.'
                    },
                    {
                      label: 'You get a clear proposal',
                      detail:
                        'Scope, timeline, and fixed price — no vague estimates.'
                    }
                  ].map((step, index) => (
                    <div key={step.label} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zoho-blue text-white font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {step.label}
                        </p>
                        <p className="text-sm leading-7 text-slate-600">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="form-card rounded-[32px] bg-white p-8 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Book Your Free Consultation
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Fill in your details and we’ll reach out within 24 hours.
                </p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700">
                        First Name *
                      </span>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange('firstName')}
                        placeholder="Rahul"
                        className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-slate-700">
                        Last Name
                      </span>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange('lastName')}
                        placeholder="Sharma"
                        className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      Work Email
                    </span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      placeholder="rahul@company.com"
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      Mobile Number *
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                    />

                    {phoneError && (
                      <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      Company Name
                    </span>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange('companyName')}
                      placeholder="Your Company Pvt Ltd"
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      Company Size
                    </span>
                    <select
                      value={formData.companySize}
                      onChange={handleChange('companySize')}
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                    >
                      <option value="">Select team size...</option>
                      <option value="1-10 employees">1–10 employees</option>
                      <option value="11-50 employees">11–50 employees</option>
                      <option value="51-200 employees">51–200 employees</option>
                      <option value="200+ employees">200+ employees</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      What do you need?
                    </span>
                    <select
                      value={formData.need}
                      onChange={handleChange('need')}
                      className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                    >
                      <option value="">Select a service...</option>
                      <option value="Zoho One Implementation">
                        Zoho One Implementation
                      </option>
                      <option value="Zoho CRM Setup">Zoho CRM Setup</option>
                      <option value="Zoho Customization / Automation">
                        Zoho Customization / Automation
                      </option>
                      <option value="Zoho License Purchase (Reseller)">
                        Zoho License Purchase (Reseller)
                      </option>
                      <option value="Integration with 3rd Party Apps">
                        Integration with 3rd Party Apps
                      </option>
                      <option value="Data Migration">Data Migration</option>
                      <option value="AMC / Ongoing Support">
                        AMC / Ongoing Support
                      </option>
                      <option value="Not sure — just exploring">
                        Not sure — just exploring
                      </option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      Tell us more
                    </span>
                    <textarea
                      value={formData.details}
                      onChange={handleChange('details')}
                      placeholder="Describe your current setup, pain points, and what you want to achieve..."
                      className="mt-2 h-64 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-zoho-blue"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-zoho-blue px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-zoho-blue/20 transition hover:bg-zoho-blue-bright disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get in Touch with Us'}
                  </button>

                  <p className="mt-4 text-sm text-slate-500">
                    🔒 100% secure. We never share your information.
                  </p>
                </form>

                {submitSuccess && (
                  <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
                    <h4 className="font-semibold">Request Received!</h4>
                    <p className="mt-2 text-sm text-slate-700">
                      Our Zoho expert will reach out within 24 business hours.
                    </p>
                    <a
                      href="https://wa.me/918796390450"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-zoho-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-zoho-blue-bright"
                    >
                      💬 Chat on WhatsApp Now
                    </a>
                  </div>
                )}

                {submitError && (
                  <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-900">
                    <p>{submitError}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-wrapper bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="inline-flex uppercase tracking-[0.35em] text-sm font-semibold text-zoho-blue">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Common Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Everything you need to know before getting started with
              CloudVandexa.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left text-slate-900"
                  >
                    <span className="text-base font-semibold">
                      {item.question}
                    </span>
                    <span className="text-2xl text-zoho-blue">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 text-sm leading-7 text-slate-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-band bg-zoho-blue-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-semibold">Still Have Questions?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200">
            Just send us a WhatsApp message or give us a call — happy to answer
            anything.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/918796390450"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-zoho-blue transition hover:bg-slate-100"
            >
              💬 WhatsApp Us Now
            </a>
            <a
              href="tel:+918796390450"
              className="inline-flex items-center justify-center rounded-full border border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              📞 Call +91 8679 390450
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
