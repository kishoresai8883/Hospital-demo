import React, { useState } from 'react';
import {
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  PhoneInTalk as PhoneInTalkIcon,
} from '@mui/icons-material';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
  onOpenAppointmentModal?: () => void;
  className?: string;
}

const DEFAULT_HOME_FAQS: FaqItem[] = [
  {
    q: 'What medical specialties and services are available at Demo Logo Hospitals?',
    a: 'We offer comprehensive multidisciplinary care including Obstetrics & Maternity Care, Gynaecology, Infertility & IVF, Paediatrics & Neonatal ICU, Minimally Invasive Surgeries (Laparoscopy & Hysteroscopy), General Medicine, and 24/7 Emergency & Trauma services.',
  },
  {
    q: 'How can I schedule an appointment with a specialist?',
    a: 'You can easily book an appointment by clicking "Book Appointment" anywhere on this page, calling our 24/7 helpline at +91 98765 43210, or connecting directly with our patient care team on WhatsApp.',
  },
  {
    q: 'Are 24/7 emergency care and ambulance services available?',
    a: 'Yes. Our Emergency and Trauma wing operates 24 hours a day, 365 days a year. We are fully equipped with dedicated cardiac life-support ambulances, trauma care surgeons, and 24/7 on-call diagnostics.',
  },
  {
    q: 'Do you provide cashless health insurance (TPA) facilities?',
    a: 'Yes, we have tie-ups with all leading health insurance providers and TPAs including Star Health, Care Health, HDFC ERGO, ICICI Lombard, Medi Assist, Paramount, and corporate panels. Our on-site TPA desk assists with quick pre-authorization.',
  },
  {
    q: 'What are the consultation timings and inpatient visiting hours?',
    a: 'Outpatient (OPD) consultations run Monday to Saturday from 9:00 AM to 10:00 PM and Sundays from 10:00 AM to 4:00 PM. Inpatient visiting hours are 4:00 PM to 7:00 PM daily to ensure patients receive peaceful rest.',
  },
  {
    q: 'Can I access lab scan reports and prescriptions online?',
    a: 'Yes. Once verified by our radiologists and pathologists, your digital diagnostic reports and e-prescriptions are sent directly to your registered WhatsApp number and email address within hours.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({
  badge = 'Got Questions?',
  title = 'Frequently Asked Questions',
  subtitle = 'Find quick answers to common questions about appointments, medical care, insurance, and facilities.',
  items = DEFAULT_HOME_FAQS,
  onOpenAppointmentModal,
  className = '',
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={`w-full py-16 lg:py-20 px-[5%] bg-[#f8faf9] border-t border-black/5 ${className}`}>
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#e1eddf] text-[#2a8787] text-xs font-poppins font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <HelpOutlineIcon sx={{ fontSize: 16 }} />
            <span>{badge}</span>
          </div>
          <h2 className="font-inter font-bold text-[32px] md:text-[42px] leading-tight text-neutral-900 m-0">
            {title}
          </h2>
          <p className="font-opensans text-[15.5px] text-neutral-600 max-w-2xl mx-auto mt-3 mb-0 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {items.map((item, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-neutral-200/90 shadow-2xs overflow-hidden transition-all duration-200 hover:border-[#97e078]/80"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none transition-colors hover:bg-neutral-50/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-inter font-semibold text-[16px] sm:text-[17px] text-neutral-900 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#4bc3c3] text-white rotate-180 shadow-xs'
                        : 'bg-[#e1eddf] text-[#2a8787]'
                    }`}
                  >
                    <ExpandMoreIcon sx={{ fontSize: 20 }} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 font-opensans text-[15px] text-neutral-700 leading-relaxed border-t border-neutral-100 bg-neutral-50/40">
                    <p className="m-0">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#e1eddf]/80 via-white to-[#e1eddf]/80 rounded-[18px] border border-[#97e078]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-inter font-bold text-[18px] text-neutral-900 m-0">
              Still have a question or need emergency advice?
            </h4>
            <p className="font-opensans text-[14px] text-neutral-600 m-0">
              Our 24/7 patient support desk and medical coordinators are ready to help.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-[#4bc3c3] hover:bg-[#3ab1b1] text-white font-poppins font-medium text-[14px] px-5 py-2.5 rounded-full transition-colors shadow-xs"
            >
              <PhoneInTalkIcon sx={{ fontSize: 17 }} />
              <span>+91 98765 43210</span>
            </a>
            {onOpenAppointmentModal && (
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-1.5 bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[14px] px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
              >
                <span>Book Appointment</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
