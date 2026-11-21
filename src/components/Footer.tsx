import React, { useState } from 'react';
import {
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
  LocationOn as LocationOnIcon,
  MarkEmailUnread as MarkEmailUnreadIcon,
  PhoneInTalk as PhoneInTalkIcon,
  WhatsApp as WhatsAppIcon,
  Close as CloseIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { FOOTER_COLUMNS } from '../data/hospitalData';
import { HospitalImage } from './HospitalImage';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [whatsappMsg, setWhatsappMsg] = useState('');

  const handleLinkClick = (slug: string) => {
    onNavigate(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(whatsappMsg.trim() || 'Hello Dhanvvantrri Hospital, I would like to book an appointment.');
    window.location.href = `https://wa.me/919874563210?text=${text}`;
    setWhatsappOpen(false);
    setWhatsappMsg('');
  };

  const renderServiceLink = (item: { label: string; slug: string }) => (
    <li key={item.slug} className="mb-2">
      <button
        type="button"
        onClick={() => handleLinkClick(item.slug)}
        className="group flex items-start gap-2 text-left font-opensans text-[15px] text-white hover:text-[#97e078] transition-colors cursor-pointer"
      >
        <KeyboardDoubleArrowRightIcon
          sx={{ fontSize: 17, color: '#97e078', mt: '3px', flexShrink: 0 }}
        />
        <span className="leading-snug">{item.label}</span>
      </button>
    </li>
  );

  return (
    <>
      {/* Main Footer (.tb_gw6e54, background-color: #303030) */}
      <footer className="w-full bg-[#303030] text-white pt-[64px] pb-[40px] px-[5%]">
        <div className="max-w-[1440px] mx-auto">
          {/* Top 4-Column Subrow (.tb_3cb2279) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/15">
            {/* Column 1: White Logo, Description, Follow Us */}
            <div className="flex flex-col gap-5">
              <button
                type="button"
                onClick={() => handleLinkClick('home')}
                className="text-left cursor-pointer focus:outline-none w-fit py-1"
                aria-label="Demo Logo Hospital Home"
              >
                <Logo variant="light" size="lg" />
              </button>

              <p className="font-opensans text-[15px] leading-relaxed text-white/95 m-0">
                Comprehensive healthcare for women, children, and families — delivered with compassion and expertise.
              </p>

              <div>
                <h6 className="font-inter font-semibold text-[18px] text-white mb-3 mt-1">
                  Follow Us
                </h6>
                <div className="flex items-center gap-2.5">
                  {[
                    {
                      label: 'Facebook',
                      href: 'https://www.facebook.com/',
                      svg: (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 17 32">
                          <path d="M13.5 5.31q-1.13 0-1.78.38t-.85.94-.18 1.43V12H16l-.75 5.69h-4.56V32H4.8V17.7H0V12h4.8V7.5q0-3.56 2-5.53T12.13 0q2.68 0 4.37.25v5.06h-3z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'Instagram',
                      href: 'https://www.instagram.com/',
                      svg: (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32">
                          <path d="M14 8.81q3 0 5.1 2.1t2.09 5.1-2.1 5.08T14 23.2t-5.1-2.1T6.82 16t2.1-5.1T14 8.82zm0 11.88q1.94 0 3.31-1.38T18.7 16t-1.38-3.31T14 11.3t-3.31 1.38T9.3 16t1.38 3.31T14 20.7zM23.13 8.5q0 .69-.47 1.19t-1.16.5-1.19-.5-.5-1.19.5-1.16 1.19-.46 1.16.46.46 1.16zm4.8 1.75Q28 11.94 28 16t-.06 5.75q-.19 3.81-2.28 5.9t-5.9 2.23Q18.05 30 14 30t-5.75-.13q-3.81-.18-5.87-2.25-.82-.75-1.32-1.75t-.72-1.93-.21-2.2Q0 20.07 0 16t.13-5.81Q.3 6.44 2.38 4.37q2.06-2.12 5.87-2.31Q9.94 2 14 2t5.75.06q3.81.19 5.9 2.28t2.29 5.9z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'X / Twitter',
                      href: 'https://x.com/',
                      svg: (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/company/',
                      svg: (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32">
                          <path d="M6.25 28H.44V9.31h5.81V28zM3.37 6.75Q2 6.75 1 5.75T0 3.37 1 1t2.38-1 2.37 1 1 2.38-1 2.37-2.38 1zM28 28h-5.81v-9.13q0-.8-.03-1.34t-.2-1.28-.43-1.19-.87-.78-1.47-.34q-2.07 0-2.78 1.31t-.72 3.5V28H9.87V9.31h5.63v2.56h.06q.63-1.25 2.06-2.15t3.44-.9q2.13 0 3.53.65t2.13 1.94 1 2.78.28 3.56V28z" />
                        </svg>
                      ),
                    },
                    {
                      label: 'YouTube',
                      href: 'https://www.youtube.com/',
                      svg: (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 36 32">
                          <path d="M34.38 7.75q.18.75.34 1.88t.22 2.21.1 2.03.02 1.57V16q0 5.63-.68 8.31-.32 1.07-1.13 1.88t-1.94 1.12q-1.19.32-4.5.47t-6.06.22H18q-10.7 0-13.31-.69-2.44-.68-3.07-3-.31-1.18-.47-3.28T.94 17.5V16q0-5.56.68-8.25.32-1.12 1.13-1.94T4.69 4.7q1.18-.31 4.5-.47T15.25 4H18q10.69 0 13.31.69 1.13.31 1.94 1.12t1.13 1.94zM14.5 21.13 23.44 16l-8.94-5.06v10.19z" />
                        </svg>
                      ),
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-md bg-[#94e077]/20 hover:bg-[#97e078] text-white flex items-center justify-center transition-colors"
                    >
                      {s.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Obstetrics & Maternal Care + Gynaecology */}
            <div>
              <h6 className="font-inter font-semibold text-[18px] text-white mb-3 mt-0">
                Obstetrics &amp; Maternal Care
              </h6>
              <ul className="list-none p-0 m-0 mb-6">
                {FOOTER_COLUMNS.col2.obstetrics.map(renderServiceLink)}
              </ul>
              <h6 className="font-inter font-semibold text-[18px] text-white mb-3 mt-0">
                Infertility &amp; More
              </h6>
              <ul className="list-none p-0 m-0">
                {FOOTER_COLUMNS.col3.infertility.map(renderServiceLink)}
              </ul>

            </div>

            {/* Column 3: Hysteroscopy + Laparoscopy + Infertility */}
            <div>
              <h6 className="font-inter font-semibold text-[18px] text-white mb-3 mt-0">
                Hysteroscopy services
              </h6>
              <ul className="list-none p-0 m-0 mb-5">
                {FOOTER_COLUMNS.col3.hysteroscopy.map(renderServiceLink)}
              </ul>

              <h6 className="font-inter font-semibold text-[18px] text-white mb-3 mt-0">
                Laparoscopy services
              </h6>
              <ul className="list-none p-0 m-0 mb-5">
                {FOOTER_COLUMNS.col3.laparoscopy.map(renderServiceLink)}
              </ul>


            </div>

            {/* Column 4: Paediatric + Medicine + Nutrition + Other Services */}
            <div>
              <h6 className="font-inter font-semibold text-[18px] text-white mb-3 mt-0">
                Gynaecology
              </h6>
              <ul className="list-none p-0 m-0">
                {FOOTER_COLUMNS.col2.gynaecology.map(renderServiceLink)}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Row (.tb_sszl527) */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 font-opensans text-[15px] text-white/90">
            <div>Copyright © XYZ Hospital 2026. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Chaty Widget & Call Now Button (Replicated from live site plugins) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {whatsappOpen && (
          <div className="w-[310px] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden mb-1">
            <div className="bg-[#4AA485] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <WhatsAppIcon sx={{ fontSize: 22 }} />
                <span className="font-inter font-semibold text-sm">
                  Let&apos;s chat on WhatsApp
                </span>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappOpen(false)}
                className="text-white/90 hover:text-white cursor-pointer"
                aria-label="Hide WhatsApp Form"
              >
                <CloseIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
            <div className="p-4 bg-[#f5f7f6]">
              <div className="bg-white rounded-xl p-3 shadow-xs text-sm font-opensans text-neutral-800 mb-3">
                How can I help you? :)
              </div>
              <form onSubmit={handleSendWhatsapp} className="flex items-center gap-2">
                <input
                  type="text"
                  value={whatsappMsg}
                  onChange={(e) => setWhatsappMsg(e.target.value)}
                  placeholder="Write your message..."
                  className="flex-1 bg-white border border-neutral-300 rounded-full px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#4AA485]"
                />
                <button
                  type="submit"
                  aria-label="Send WhatsApp Message"
                  className="w-9 h-9 rounded-full bg-[#49E670] hover:bg-[#3cd160] text-white flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <SendIcon sx={{ fontSize: 16 }} />
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          {/* Call Now Button */}
          <a
            href="tel:+919874563210"
            aria-label="Call Now +91 96522 76644"
            title="Call +91 96522 76644"
            className="w-12 h-12 rounded-full bg-[#4bc3c3] hover:bg-[#3ab0b0] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
          >
            <PhoneInTalkIcon sx={{ fontSize: 24 }} />
          </a>

          {/* Chaty WhatsApp Button */}
          <button
            type="button"
            onClick={() => setWhatsappOpen(!whatsappOpen)}
            aria-label="WhatsApp Message"
            title="Chat on WhatsApp"
            className="w-12 h-12 rounded-full bg-[#49E670] hover:bg-[#3dd462] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <WhatsAppIcon sx={{ fontSize: 28 }} />
          </button>
        </div>
      </div>
    </>
  );
};
