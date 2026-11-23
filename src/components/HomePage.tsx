import React, { useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import {
  MedicalServices as MedicalServicesIcon,
  Biotech as BiotechIcon,
  EscalatorWarning as EscalatorWarningIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleOutlineIcon,
} from '@mui/icons-material';
import {
  HOME_SERVICES,
  STATS_COUNTERS,
  CARE_JOURNEY_STEPS,
  GALLERY_IMAGES,
  GOOGLE_REVIEWS,
  HEALTH_INSIGHTS,
} from '../data/hospitalData';
import { HospitalImage, getAssetUrl } from './HospitalImage';
import { Logo } from './Logo';
import { FaqSection } from './FaqSection';

interface HomePageProps {
  onNavigate: (slug: string) => void;
  onOpenAppointmentModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  // Row 6 Inline CF7 Form State
  const [inlineName, setInlineName] = useState('');
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineError, setInlineError] = useState('');
  const [inlineSuccess, setInlineSuccess] = useState(false);

  // Row 15 Bottom Appointment Form State
  const [bottomName, setBottomName] = useState('');
  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomPhone, setBottomPhone] = useState('');
  const [bottomDate, setBottomDate] = useState('');
  const [bottomMsg, setBottomMsg] = useState('');
  const [bottomError, setBottomError] = useState('');
  const [bottomSuccess, setBottomSuccess] = useState(false);

  // Gallery Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Google Reviews Carousel & Custom Review State
  const [reviewsList, setReviewsList] = useState(GOOGLE_REVIEWS);
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [newReviewerName, setNewReviewerName] = useState('');
  const [newReviewText, setNewReviewText] = useState('');

  // Blog Reader Modal State
  const [selectedArticle, setSelectedArticle] = useState<(typeof HEALTH_INSIGHTS)[0] | null>(null);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineName.trim() || !inlineEmail.trim() || inlinePhone.replace(/\D/g, '').length < 10) {
      setInlineError('Please enter your Name, a valid Email, and a 10-digit Phone Number.');
      return;
    }
    setInlineError('');
    setInlineSuccess(true);
  };

  const handleBottomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bottomName.trim() || !bottomPhone.trim() || !bottomDate.trim()) {
      setBottomError('Please fill in Your Name, Phone Number, and preferred Date.');
      return;
    }
    setBottomError('');
    setBottomSuccess(true);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewerName.trim() || !newReviewText.trim()) return;
    setReviewsList([
      {
        name: newReviewerName.trim(),
        date: 'Posted just now on Google',
        rating: 5,
        avatarBg: '#4bc3c3',
        text: newReviewText.trim(),
      },
      ...reviewsList,
    ]);
    setNewReviewerName('');
    setNewReviewText('');
    setWriteReviewOpen(false);
    setReviewStartIndex(0);
  };

  const visibleReviews = [
    reviewsList[reviewStartIndex % reviewsList.length],
    reviewsList[(reviewStartIndex + 1) % reviewsList.length],
    reviewsList[(reviewStartIndex + 2) % reviewsList.length],
  ];

  return (
    <div className="w-full bg-white">
      {/* =================================================================
          ROW 4: HERO BANNER (.tb_lscb419)
      ================================================================= */}
      <section
        className="relative w-full py-[92px] lg:py-[123px] px-[5%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${getAssetUrl('/images/hero-new-bg.jpg')})`,
          backgroundPosition: 'center right',
        }}
      >
        {/* Exact overlay from .tb_lscb419>.builder_row_cover::before */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 48%, rgba(0, 0, 0, 0.15) 80%, rgba(0, 0, 0, 0.05) 100%)',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-inter font-semibold text-white text-[40px] leading-[48px] lg:text-[64px] lg:leading-[72px] m-0">
              Advanced Care for Women, Children &amp; Families
            </h1>
            <p className="font-opensans font-normal text-white text-[16px] leading-relaxed max-w-2xl m-0">
              Delivering expert medical care with compassion — from maternity and gynaecology to advanced surgeries and child healthcare, all under one roof.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[16px] px-7 py-3 rounded-[26px] transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </section>

      {/* =================================================================
          ROW 5: CONTINUOUS MARQUEE TICKER BAR (.tb_zbop198)
      ================================================================= */}
      <section className="w-full bg-[#97e078] py-[20px] border-b border-[#94e077]/30 overflow-hidden">
        <div className="animate-marquee-continuous">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mr-[64px] shrink-0"
            >
              <p className="font-opensans font-semibold text-white uppercase text-[18px] lg:text-[22px] leading-[22px] whitespace-nowrap m-0">
                🩺 Every Thursday 10AM to 12PM Free Consultation 🩺
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          ROW 6: INLINE BOOK YOUR APPOINTMENT BAR (.tb_3ub8728)
      ================================================================= */}
      <section
        className="w-full pt-[54px] pb-[44px] px-[5%]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgb(225, 237, 223) 0%, rgb(255, 255, 255) 100%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-inter font-semibold text-black text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px] mb-6 mt-0">
            Book Your Appointment Today
          </h2>

          {inlineSuccess ? (
            <div className="bg-white border border-[#97e078] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <CheckCircleOutlineIcon sx={{ color: '#4caf50', fontSize: 32 }} />
                <div>
                  <h4 className="font-inter font-semibold text-base text-black m-0">
                    Appointment Request Submitted!
                  </h4>
                  <p className="font-opensans text-sm text-neutral-700 m-0">
                    Thank you, <strong>{inlineName}</strong>. We will contact you shortly at <strong>{inlinePhone}</strong>.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setInlineSuccess(false);
                  setInlineName('');
                  setInlineEmail('');
                  setInlinePhone('');
                }}
                className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-sm px-5 py-2 rounded-lg cursor-pointer shrink-0"
              >
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleInlineSubmit} noValidate>
              <div className="flex flex-col md:flex-row gap-[15px] items-stretch w-full">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={inlineName}
                    onChange={(e) => setInlineName(e.target.value)}
                    className="w-full h-[50px] px-[15px] bg-white border border-neutral-300 rounded text-[15px] text-black placeholder:text-black focus:outline-none focus:border-[#4bc3c3]"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={inlineEmail}
                    onChange={(e) => setInlineEmail(e.target.value)}
                    className="w-full h-[50px] px-[15px] bg-white border border-neutral-300 rounded text-[15px] text-black placeholder:text-black focus:outline-none focus:border-[#4bc3c3]"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Phone Number"
                    value={inlinePhone}
                    onChange={(e) => setInlinePhone(e.target.value)}
                    className="w-full h-[50px] px-[15px] bg-white border border-neutral-300 rounded text-[15px] text-black placeholder:text-black focus:outline-none focus:border-[#4bc3c3]"
                  />
                </div>
                <div className="md:w-[140px] shrink-0">
                  <button
                    type="submit"
                    className="w-full h-[50px] rounded-[12px] bg-[#97e078] hover:bg-[#84d164] text-white font-opensans font-semibold text-[16px] cursor-pointer transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {inlineError && (
                <p className="text-red-600 font-opensans text-xs mt-2 mb-0">{inlineError}</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* =================================================================
          ROW 7: 4-COLUMN COUNTER STRIP (.tb_glny621)
      ================================================================= */}
      <section className="w-full py-[40px] lg:py-[64px] px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS_COUNTERS.map((stat, idx) => {
            const isLast = idx === STATS_COUNTERS.length - 1;
            return (
              <div
                key={stat.label}
                className={`text-center py-6 lg:py-2 px-4 ${!isLast
                  ? 'border-b border-[#c9c9c9] lg:border-b-0 lg:border-r lg:border-[#a1a1a1]'
                  : ''
                  }`}
              >
                <div className="font-inter font-bold text-[44px] lg:text-[54px] leading-tight text-black tabular-nums">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="font-opensans font-normal text-[18px] text-black mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          ROW 8: ABOUT US SPLIT SECTION (.tb_5khw579)
      ================================================================= */}
      <section className="w-full pt-[48px] pb-[64px] px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (.tb_jda9580): 2-column subrow with 3 photos + #6fcfcf experience box */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[16px]">
              <HospitalImage
                src="/images/about-new-1.jpg"
                alt="Doctor Consultation"
                className="w-full h-[230px] object-cover rounded-[12px]"
              />
              {/* .tb_5348941 #6fcfcf card */}
              <div className="bg-[#6fcfcf] rounded-[12px] p-5 text-black">
                <div className="font-inter font-bold text-[24px] leading-snug">
                  15 + Years Experience
                </div>
                <div className="font-opensans font-normal text-[15px] mt-1">
                  Trusted care with clinical excellence.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] sm:pt-[16px]">
              <HospitalImage
                src="/images/about-new-2.jpg"
                alt="Modern Hospital Facilities"
                className="w-full h-[220px] object-cover rounded-[12px]"
              />
              <HospitalImage
                src="/images/about-new-3.jpg"
                alt="Hospital Medical Specialists"
                className="w-full h-[165px] object-cover rounded-[12px]"
              />
            </div>
          </div>

          {/* Right Column: Copy + Know More About Us button */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] m-0">
              Healing with Expertise. Caring with Compassion.
            </h2>

            <div className="space-y-4 font-opensans font-normal text-[16px] leading-relaxed text-black">
              <p className="m-0">
                XYZ Hospital is committed to delivering high-quality, patient-centered healthcare with a focus on safety, comfort, and clinical excellence. With specialized services in obstetrics, gynaecology, infertility care, paediatrics, and advanced minimally invasive surgeries, we provide comprehensive care for every stage of life.
              </p>
              <p className="m-0">
                Our team of experienced doctors and skilled medical professionals work together to ensure accurate diagnosis, effective treatment, and continuous support for every patient.
              </p>
              <p className="m-0">
                We combine modern medical technology with a compassionate approach to create a healing environment you can trust. Whether it’s a routine consultation or a complex procedure, our goal is to offer care that is reliable, ethical, and tailored to your needs.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onNavigate('about-us');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[16px] px-7 py-3 rounded-[39px] transition-colors cursor-pointer"
              >
                Know More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 9: OUR BEST SERVICES (.tb_qsmw74, background: #e1eddf)
      ================================================================= */}
      <section className="w-full py-[64px] px-[5%] bg-[#e1eddf]">
        <div className="max-w-[1440px] mx-auto">
          {/* Top 3-column header (.tb_5vnd355 / .tb_x9s2918) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
            <div className="lg:col-span-4">
              <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] m-0">
                Our Best Services
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="font-opensans font-normal text-[16px] leading-relaxed text-black m-0">
                Explore our comprehensive range of healthcare services, from maternity and women’s health to advanced surgeries, paediatric care, and diagnostic support — all designed to provide complete care under one roof.
              </p>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <button
                type="button"
                onClick={() => {
                  onNavigate('best-obstetrician-and-antenatal-care-in-hyderabad');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[16px] px-7 py-3 rounded-[39px] transition-colors cursor-pointer whitespace-nowrap"
              >
                All Services
              </button>
            </div>
          </div>

          {/* 6 Service Cards (2 rows x 3 columns, overlapping white box) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-8 mt-[24px]">
            {HOME_SERVICES.map((srv) => (
              <div
                key={srv.title}
                onClick={() => {
                  onNavigate(srv.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full h-[260px] overflow-hidden">
                  <HospitalImage
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* .tb_ixwb576 negative margin wrapper */}
                <div className="px-[24px] pb-[24px] -mt-[64px] relative z-10 flex-1 flex">
                  {/* .tb_kvjy576 white box */}
                  <div className="bg-white p-[24px] w-full shadow-xs border border-black/5 group-hover:shadow-md transition-shadow">
                    <h4 className="font-inter font-semibold text-[20px] lg:text-[22px] text-black m-0 group-hover:text-[#4bc3c3] transition-colors">
                      {srv.title}
                    </h4>
                    <p className="font-opensans font-normal text-[16px] leading-relaxed text-black mt-2 mb-0">
                      {srv.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 10: WHY CHOOSE DHANVVANTRRI HOSPITAL (.tb_br1t139)
      ================================================================= */}
      <section className="w-full py-[64px] px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] m-0">
              Why Choose XYZ Hospital
            </h2>
            <p className="font-poppins font-normal text-[16px] text-black mt-3 mb-6 leading-relaxed">
              Delivering trusted healthcare with expertise, compassion, and a patient-first approach.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <MedicalServicesIcon sx={{ fontSize: 24, color: '#fff' }} />,
                  title: 'Experienced Specialists',
                  desc: 'Our team of skilled doctors brings years of expertise across women’s health, maternity, and advanced treatments.',
                },
                {
                  icon: <BiotechIcon sx={{ fontSize: 24, color: '#fff' }} />,
                  title: 'Advanced Medical Technology',
                  desc: 'We use modern equipment and minimally invasive techniques for accurate diagnosis and better outcomes.',
                },
                {
                  icon: <EscalatorWarningIcon sx={{ fontSize: 24, color: '#fff' }} />,
                  title: 'Focus on Women & Child Health',
                  desc: 'Specialized care for maternity, gynaecology, infertility, and paediatric services.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start">
                  {/* .tb_k6uh479.module-link-block .tb_link_block_icon */}
                  <div className="rounded-[64px] p-[11px] bg-[#97e078] text-white mr-[24px] shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-[20px] lg:text-[22px] text-black leading-snug">
                      {item.title}
                    </div>
                    <div className="font-opensans font-normal text-[16px] text-black mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (.tb_k71k160) */}
          <div className="lg:col-span-6">
            <HospitalImage
              src="/images/why-choose-new.jpg"
              alt="Compassionate Patient Care"
              className="w-full h-[340px] lg:h-[400px] object-cover rounded-[16px] shadow-md"
            />
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 11: SIMPLE, SEAMLESS CARE JOURNEY (.tb_dw14935)
      ================================================================= */}
      <section
        className="relative w-full py-[80px] px-[5%] bg-cover bg-center"
        style={{ backgroundImage: `url(${getAssetUrl('/images/journey-bg.webp')})` }}
      >
        {/* .tb_dw14935>.builder_row_cover::before */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Top 2-column header (.tb_oo9g337) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
            <div className="lg:col-span-6">
              <h2 className="font-inter font-semibold text-white text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] m-0">
                Simple, Seamless Care Journey
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="font-poppins font-normal text-[16px] text-white m-0 leading-relaxed">
                From consultation to recovery, we ensure a smooth and stress-free healthcare experience.
              </p>
            </div>
          </div>

          {/* 4-column Care Steps (.tb_gcyf957) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CARE_JOURNEY_STEPS.map((step) => (
              <div key={step.number} className="space-y-2">
                <div
                  className="font-inter font-bold text-[40px] leading-none tabular-nums"
                  style={{ color: 'rgba(255, 255, 255, 0.47)' }}
                >
                  {step.number}
                </div>
                <h4 className="font-inter font-semibold text-[20px] text-white m-0 pt-1">
                  {step.title}
                </h4>
                <p className="font-opensans font-normal text-[16px] text-white leading-relaxed m-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 12: CELEBRATING NEW BEGINNINGS GALLERY (.tb_lkk9750)
      ================================================================= */}
      <section className="w-full pt-[64px] pb-[40px] px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] text-center mb-8 mt-0">
            Celebrating New Beginnings
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[3/4] w-full overflow-hidden rounded-[8px] border border-black/10 focus:outline-none cursor-pointer"
              >
                <HospitalImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 13: WHAT OUR PATIENTS SAY (GOOGLE REVIEWS)
      ================================================================= */}
      <section className="w-full py-[48px] px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] text-center mb-10 mt-0">
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Google Business Profile Summary Card */}
            <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-xl p-6 text-center shadow-xs">
              <div className="flex justify-center mb-3">
                <Logo variant="dark" size="sm" showSubtitle={false} />
              </div>
              <h4 className="font-inter font-semibold text-[16px] text-black leading-snug m-0">
                Demo Logo Multi Speciality Hospital | Pediatric | Women Care | Emergency Care
              </h4>
              <div className="flex items-center justify-center gap-0.5 my-2.5 text-[#fbbc04]">
                {[0, 1, 2, 3, 4].map((s) => (
                  <StarIcon key={s} sx={{ fontSize: 22 }} />
                ))}
              </div>
              <p className="font-opensans text-sm text-neutral-600 m-0 mb-4">
                {reviewsList.length + 7} Google reviews
              </p>
              <button
                type="button"
                onClick={() => setWriteReviewOpen(true)}
                className="inline-flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-opensans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <span>Write a review</span>
              </button>
            </div>

            {/* Right Interactive Google Reviews Carousel */}
            <div className="lg:col-span-8 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visibleReviews.map((rev, idx) => (
                  <div
                    key={`${rev.name}-${idx}`}
                    className="bg-[#f8f9fa] border border-neutral-200 rounded-xl p-5 flex flex-col justify-between min-h-[230px]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-10 h-10 rounded-full text-white font-inter font-bold text-base flex items-center justify-center uppercase shrink-0"
                            style={{ backgroundColor: rev.avatarBg }}
                          >
                            {rev.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-inter font-semibold text-[14px] text-black leading-tight line-clamp-1">
                              {rev.name}
                            </div>
                            <div className="font-opensans text-[11.5px] text-neutral-500">
                              {rev.date}
                            </div>
                          </div>
                        </div>
                        {/* Google G badge */}
                        <span className="font-inter font-bold text-sm text-[#4285F4] shrink-0">
                          G
                        </span>
                      </div>

                      <div className="flex items-center gap-1 mb-2.5">
                        <div className="flex text-[#fbbc04]">
                          {[0, 1, 2, 3, 4].map((s) => (
                            <StarIcon key={s} sx={{ fontSize: 17 }} />
                          ))}
                        </div>
                        <VerifiedIcon
                          sx={{ fontSize: 15, color: '#1a73e8' }}
                          titleAccess="Trustindex verifies that the original source of the review is Google."
                        />
                      </div>

                      <p className="font-opensans text-[13.5px] text-neutral-800 leading-relaxed m-0 line-clamp-4">
                        {rev.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Arrows */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <IconButton
                  onClick={() =>
                    setReviewStartIndex(
                      (prev) => (prev - 1 + reviewsList.length) % reviewsList.length
                    )
                  }
                  aria-label="Previous review"
                  size="small"
                  sx={{ border: '1px solid #d4d4d4' }}
                >
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton
                  onClick={() =>
                    setReviewStartIndex((prev) => (prev + 1) % reviewsList.length)
                  }
                  aria-label="Next review"
                  size="small"
                  sx={{ border: '1px solid #d4d4d4' }}
                >
                  <ChevronRightIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 14: HEALTH TIPS & MEDICAL INSIGHTS (.tb_llku263)
      ================================================================= */}
      <section className="w-full pt-[40px] pb-[64px] px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
            <div className="lg:col-span-5">
              <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] m-0">
                Health Tips &amp; Medical Insights
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-opensans font-normal text-[16px] text-black leading-relaxed m-0">
                Stay informed with expert advice, health tips, and the latest updates on women’s health, maternity care, and overall wellness.
              </p>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <button
                type="button"
                onClick={() => setSelectedArticle(HEALTH_INSIGHTS[0])}
                className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[16px] px-7 py-3 rounded-[39px] transition-colors cursor-pointer"
              >
                View All
              </button>
            </div>
          </div>

          {/* 4 Blog Cards (.tb_8pql255, border: 1px solid #cfcfcf) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[24px]">
            {HEALTH_INSIGHTS.map((post) => (
              <div
                key={post.id}
                className="border border-[#cfcfcf] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[3/2] w-full overflow-hidden">
                    <HospitalImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-[16px]">
                    <h4 className="font-inter font-semibold text-[18px] text-black leading-snug m-0 mb-2">
                      {post.title}
                    </h4>
                    <p className="font-opensans font-normal text-[15px] text-black/85 leading-relaxed m-0 mb-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-[16px] pb-[16px]">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(post)}
                    className="font-opensans font-semibold text-[16px] text-[#97e078] hover:text-[#4bc3c3] transition-colors p-0 cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 15: BOOK YOUR APPOINTMENT & OPENING/CLOSING HOURS (.tb_h5fb471)
      ================================================================= */}
      <section className="w-full py-[64px] px-[5%] bg-[#e0ecde]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Book your Appointment Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-inter font-semibold text-black text-[34px] leading-[42px] lg:text-[42px] lg:leading-[50px] mb-6 mt-0">
              Book your <span className="text-black">Appointment</span>
            </h2>

            {bottomSuccess ? (
              <div className="bg-white rounded-xl p-8 text-center shadow-xs">
                <CheckCircleOutlineIcon sx={{ fontSize: 52, color: '#4caf50', mb: 1 }} />
                <h4 className="font-inter font-semibold text-xl text-black m-0">
                  Appointment Confirmed!
                </h4>
                <p className="font-opensans text-neutral-700 mt-2 mb-5">
                  Thank you, <strong>{bottomName}</strong>. Your preferred date (<strong>{bottomDate}</strong>) has been registered. Our reception desk will call you at <strong>{bottomPhone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setBottomSuccess(false);
                    setBottomName('');
                    setBottomEmail('');
                    setBottomPhone('');
                    setBottomDate('');
                    setBottomMsg('');
                  }}
                  className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium px-6 py-2.5 rounded-lg cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleBottomSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-opensans text-[15px] text-black mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={bottomName}
                      onChange={(e) => setBottomName(e.target.value)}
                      className="w-full h-[48px] px-4 bg-white border border-neutral-300 rounded-md text-[15px] text-black placeholder:text-black/70 focus:outline-none focus:border-[#4bc3c3]"
                    />
                  </div>
                  <div>
                    <label className="block font-opensans text-[15px] text-black mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={bottomEmail}
                      onChange={(e) => setBottomEmail(e.target.value)}
                      className="w-full h-[48px] px-4 bg-white border border-neutral-300 rounded-md text-[15px] text-black placeholder:text-black/70 focus:outline-none focus:border-[#4bc3c3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-opensans text-[15px] text-black mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={bottomPhone}
                      onChange={(e) => setBottomPhone(e.target.value)}
                      className="w-full h-[48px] px-4 bg-white border border-neutral-300 rounded-md text-[15px] text-black placeholder:text-black/70 focus:outline-none focus:border-[#4bc3c3]"
                    />
                  </div>
                  <div>
                    <label className="block font-opensans text-[15px] text-black mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={bottomDate}
                      onChange={(e) => setBottomDate(e.target.value)}
                      className="w-full h-[48px] px-4 bg-white border border-neutral-300 rounded-md text-[15px] text-black focus:outline-none focus:border-[#4bc3c3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-opensans text-[15px] text-black mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter your message"
                    value={bottomMsg}
                    onChange={(e) => setBottomMsg(e.target.value)}
                    className="w-full p-4 bg-white border border-neutral-300 rounded-md text-[15px] text-black placeholder:text-black/70 focus:outline-none focus:border-[#4bc3c3]"
                  />
                </div>

                {bottomError && (
                  <p className="text-red-600 font-opensans text-xs m-0">{bottomError}</p>
                )}

                <div className="pt-1">
                  <button
                    type="submit"
                    className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[16px] px-8 py-3 rounded-[8px] transition-colors cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Opening & Closing Hours Card (.tb_5ybd821) */}
          <div
            className="lg:col-span-6 relative rounded-[12px] p-[32px] bg-cover bg-center flex flex-col justify-between min-h-[460px] overflow-hidden"
            style={{ backgroundImage: `url(${getAssetUrl('/images/hours-bg.jpg')})` }}
          >
            {/* .tb_5ybd821>.builder_row_cover::before */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.13) 100%)',
              }}
            />

            <div className="relative z-10 space-y-2">
              <h2 className="font-inter font-semibold text-white text-[32px] lg:text-[36px] leading-[44px] m-0">
                Opening &amp; Closing Hours
              </h2>
              <p className="font-opensans font-normal text-white text-[16px] leading-relaxed m-0 max-w-lg">
                We are committed to providing accessible and convenient healthcare services for you.
              </p>
            </div>

            {/* Bottom Frosted White Box (.tb_p7dg854, rgba(255, 255, 255, .86)) */}
            <div
              className="relative z-10 rounded-[12px] p-[24px] mt-10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.86)' }}
            >
              <div className="grid grid-cols-2 gap-y-2.5 font-opensans font-medium text-[16px] text-black">
                <div>Monday – Friday</div>
                <div>9AM – 10PM</div>
                <div>Saturday</div>
                <div>9AM – 10PM</div>
                <div>Sunday</div>
                <div>10AM – 4PM</div>
              </div>

              <div className="mt-5">
                <a
                  href="tel:9876543210"
                  className="block w-full text-center bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-[16px] py-3 px-6 rounded-[60px] transition-colors"
                >
                  Call +91 9876543210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          ROW 17: FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
      ================================================================= */}
      <FaqSection onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* =================================================================
          LIGHTBOX DIALOG FOR CELEBRATING NEW BEGINNINGS GALLERY
      ================================================================= */}
      <Dialog
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        maxWidth="md"
        slotProps={{
          paper: {
            sx: { backgroundColor: 'transparent', boxShadow: 'none', overflow: 'visible' },
          },
        }}
      >
        {lightboxIndex !== null && (
          <div className="relative flex items-center justify-center">
            <IconButton
              onClick={() => setLightboxIndex(null)}
              aria-label="Close gallery preview"
              sx={{
                position: 'absolute',
                top: -44,
                right: 0,
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,0.6)',
              }}
            >
              <CloseIcon />
            </IconButton>
            <HospitalImage
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-h-[82vh] w-auto rounded-lg shadow-2xl"
            />
          </div>
        )}
      </Dialog>

      {/* =================================================================
          HEALTH INSIGHTS ARTICLE MODAL
      ================================================================= */}
      <Dialog
        open={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{ paper: { sx: { borderRadius: '12px' } } }}
      >
        {selectedArticle && (
          <div className="bg-white p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="font-inter font-semibold text-xl text-black m-0">
                {selectedArticle.title}
              </h3>
              <IconButton
                size="small"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <HospitalImage
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <div className="space-y-3 font-opensans text-[15px] text-neutral-800 leading-relaxed">
              {selectedArticle.fullContent.map((para, i) => (
                <p key={i} className="m-0">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenAppointmentModal();
                }}
                className="bg-[#97e078] hover:bg-[#84d164] text-white font-poppins font-medium text-sm px-6 py-2.5 rounded-full cursor-pointer"
              >
                Book Consultation with Specialist
              </button>
            </div>
          </div>
        )}
      </Dialog>

      {/* =================================================================
          WRITE A GOOGLE REVIEW MODAL
      ================================================================= */}
      <Dialog
        open={writeReviewOpen}
        onClose={() => setWriteReviewOpen(false)}
        maxWidth="xs"
        fullWidth
        slotProps={{ paper: { sx: { borderRadius: '12px' } } }}
      >
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-inter font-semibold text-lg text-black m-0">
              Share Your Experience
            </h4>
            <IconButton size="small" onClick={() => setWriteReviewOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <form onSubmit={handleAddReview} className="space-y-4">
            <div>
              <label className="block font-opensans text-sm text-black mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={newReviewerName}
                onChange={(e) => setNewReviewerName(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#4bc3c3]"
              />
            </div>
            <div>
              <label className="block font-opensans text-sm text-black mb-1">
                Your Review
              </label>
              <textarea
                rows={3}
                required
                placeholder="Share your feedback about Dhanvvantrri Hospital..."
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#4bc3c3]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-opensans font-semibold text-sm py-2.5 rounded-full cursor-pointer"
            >
              Post Review
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};
