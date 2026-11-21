import React from 'react';
import {
  CallMade as CallMadeIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
} from '@mui/icons-material';
import { MAIN_MENU, getServiceDetailBySlug } from '../data/hospitalData';
import { HospitalImage, getAssetUrl } from './HospitalImage';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (slug: string) => void;
  onOpenAppointmentModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const detail = getServiceDetailBySlug(slug);

  // Get sibling services for the left #services-acc sidebar
  const parentCategory = MAIN_MENU.find((m) => m.label === detail.relatedCategory) || MAIN_MENU[1];
  const sidebarLinks: { label: string; slug: string }[] = [];

  if (parentCategory && parentCategory.children) {
    for (const child of parentCategory.children) {
      if (child.children) {
        for (const nested of child.children) {
          sidebarLinks.push({ label: nested.label, slug: nested.slug });
        }
      } else {
        sidebarLinks.push({ label: child.label, slug: child.slug });
      }
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Service Hero Banner */}
      <section
        className="relative w-full py-20 px-[5%] bg-cover bg-center"
        style={{ backgroundImage: `url(${getAssetUrl(detail.heroImage)})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto text-white max-w-3xl">
          <div className="font-poppins text-sm text-[#97e078] mb-2">
            {detail.category}
          </div>
          <h1 className="font-inter font-semibold text-[34px] md:text-[48px] leading-tight m-0">
            {detail.title}
          </h1>
          <p className="font-opensans text-[16px] text-white/95 mt-4 mb-0 leading-relaxed max-w-2xl">
            {detail.subtitle}
          </p>
        </div>
      </section>

      {/* Main 2-Column Service Layout (Left Sidebar #services-acc + Right Clinical Content) */}
      <section className="py-16 px-[5%]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Related Services List (#services-acc) */}
            {sidebarLinks.length > 0 && (
              <div className="bg-[#e1eddf] rounded-[12px] p-6">
                <h4 className="font-inter font-semibold text-[20px] text-black m-0 mb-4">
                  {detail.category} Services
                </h4>
                <div id="services-acc" className="divide-y divide-black/10">
                  {sidebarLinks.map((item) => {
                    const isCurrent = item.slug === slug;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => {
                          onNavigate(item.slug);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`group w-full flex items-center justify-between py-3 text-left font-opensans text-[15px] transition-colors cursor-pointer ${
                          isCurrent
                            ? 'font-semibold text-black'
                            : 'text-neutral-800 hover:text-black'
                        }`}
                      >
                        <span className="pr-3 leading-snug">{item.label}</span>
                        <CallMadeIcon
                          sx={{
                            fontSize: 18,
                            color: isCurrent ? '#8BC34A' : '#000',
                            transition: 'transform 0.3s ease, color 0.3s ease',
                          }}
                          className="group-hover:rotate-45 group-hover:!text-[#8BC34A] shrink-0"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Request Appointment CTA Card */}
            <div
              className="relative rounded-[12px] overflow-hidden p-7 text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${getAssetUrl('/images/hours-bg.jpg')})` }}
            >
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 space-y-4">
                <h4 className="font-inter font-semibold text-[24px] m-0">
                  Request Appointment
                </h4>
                <p className="font-opensans text-[15px] text-white/90 leading-relaxed m-0">
                  Schedule your visit with our doctors for expert medical care, quick service, and a hassle-free appointment experience.
                </p>
                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="bg-[#97e078] hover:bg-[#82cf63] text-white font-poppins font-medium text-[15px] px-6 py-2.5 rounded-[39px] transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </aside>

          {/* Right Main Clinical Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="rounded-[12px] overflow-hidden max-h-[380px]">
              <HospitalImage
                src={detail.heroImage}
                alt={detail.title}
                className="w-full h-[340px] object-cover rounded-[12px]"
              />
            </div>

            {detail.sections.map((sec) => (
              <div
                key={sec.heading}
                className="bg-white border border-neutral-200 rounded-[12px] p-6 sm:p-8 space-y-4"
              >
                <h2 className="font-inter font-semibold text-[26px] sm:text-[30px] text-black m-0">
                  {sec.heading}
                </h2>
                <p className="font-opensans text-[16px] leading-relaxed text-neutral-800 m-0">
                  {sec.description}
                </p>
                <ul className="list-none p-0 m-0 pt-2 space-y-3">
                  {sec.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <KeyboardDoubleArrowRightIcon
                        sx={{ color: '#97e078', fontSize: 22, mt: '2px', flexShrink: 0 }}
                      />
                      <span className="font-opensans text-[15.5px] text-black leading-relaxed">
                        {b.title ? <strong>{b.title} : </strong> : null}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
