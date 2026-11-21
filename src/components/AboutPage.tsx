import React from 'react';
import {
  MedicalServices as MedicalServicesIcon,
  Biotech as BiotechIcon,
  EscalatorWarning as EscalatorWarningIcon,
} from '@mui/icons-material';
import { EXPERT_DOCTORS } from '../data/hospitalData';
import { HospitalImage, getAssetUrl } from './HospitalImage';

interface AboutPageProps {
  onNavigate: (slug: string) => void;
  onOpenAppointmentModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Hero Banner */}
      <section
        className="relative w-full py-24 px-[5%] bg-cover bg-center"
        style={{ backgroundImage: `url(${getAssetUrl('/images/about-hero-bg.jpg')})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(14, 34, 34, 0.88) 0%, rgba(20, 60, 60, 0.65) 60%, rgba(151, 224, 120, 0.3) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto text-white">
          <div className="inline-block bg-[#97e078]/25 text-[#97e078] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Our Story &amp; Clinical Excellence
          </div>
          <h1 className="font-inter font-bold text-[40px] md:text-[56px] leading-tight m-0 text-white">
            About Demo Logo Hospital
          </h1>
          <p className="font-opensans text-[17px] text-white/90 max-w-2xl mt-3 mb-0 leading-relaxed">
            A premier healthcare institution dedicated to pioneering patient-first medicine, advanced multi-speciality treatments, and compassionate family care.
          </p>
          <div className="mt-4 font-opensans text-[15px] text-white/80 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-[#97e078] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#97e078] font-medium">About Us</span>
          </div>
        </div>
      </section>

      {/* About Us Main Content & Philosophy */}
      <section className="py-16 px-[5%]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 2x2 Image & Experience Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <HospitalImage
                src="/images/about-new-1.jpg"
                alt="Doctor Consultation & Care"
                className="w-full h-[220px] object-cover rounded-[12px] shadow-sm"
              />
              <div className="bg-[#6fcfcf] rounded-[12px] p-5 text-black">
                <div className="font-inter font-bold text-[28px] leading-tight">
                  15 + Years Experience
                </div>
                <p className="font-opensans text-[15px] mt-1 mb-0">
                  Trusted care with clinical excellence.
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <HospitalImage
                src="/images/about-new-2.jpg"
                alt="Modern Hospital Facilities"
                className="w-full h-[210px] object-cover rounded-[12px] shadow-sm"
              />
              <HospitalImage
                src="/images/about-new-3.jpg"
                alt="Specialist Medical Team"
                className="w-full h-[160px] object-cover rounded-[12px] shadow-sm"
              />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-inter font-semibold text-[32px] md:text-[40px] leading-tight text-black m-0">
              About Us – XYZ Hospitals
            </h2>
            <h4 className="font-inter font-medium text-[20px] text-[#4bc3c3] m-0">
              Advanced IVF Doctor &amp; Fertility Care in Hyderabad
            </h4>
            <p className="font-opensans text-[16px] leading-relaxed text-black m-0">
              At <strong>XYZ Hospitals</strong>, we are committed to delivering compassionate, holistic, and state-of-the-art healthcare to every member of your family. With a focus on women’s health, paediatric care, and multi-specialty services, we provide comprehensive medical solutions under one roof, ensuring comfort, safety, and excellence in every aspect of care.
            </p>

            <h3 className="font-inter font-semibold text-[24px] text-black pt-2 m-0">
              Our Philosophy
            </h3>
            <p className="font-opensans text-[16px] leading-relaxed text-black m-0">
              We believe that quality healthcare goes beyond treatment—it is about nurturing trust, ensuring well-being, and empowering patients with informed choices. Our dedicated team of specialists, surgeons, and healthcare professionals work collaboratively to offer personalized care, leveraging the latest technology and evidence-based practices.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="bg-[#97e078] hover:bg-[#82cf63] text-white font-poppins font-medium text-[16px] px-7 py-3 rounded-[39px] transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Doctors Section */}
      <section className="py-16 px-[5%] bg-[#e1eddf]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="font-inter font-semibold text-[34px] md:text-[42px] text-black m-0">
              Our Expert Doctors
            </h2>
            <p className="font-opensans text-[16px] text-black/85 mt-3 mb-0 leading-relaxed">
              Our highly skilled doctors bring years of experience, compassion, and advanced expertise across specialties, ensuring personalized and trusted care for every patient at Dhanvvantrri Hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERT_DOCTORS.map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-[16px] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-black/5 flex flex-col group"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100 relative">
                  <HospitalImage
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#2a8787] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    Verified Expert
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between border-t-4 border-[#97e078]">
                  <div>
                    <h4 className="font-inter font-semibold text-[20px] text-black m-0">
                      {doc.name}
                    </h4>
                    <p className="font-poppins font-medium text-[13.5px] text-[#3a9e9e] mt-1 mb-2">
                      {doc.role}
                    </p>
                    <p className="font-opensans text-[14px] text-neutral-700 m-0 leading-relaxed">
                      {doc.specialty}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={onOpenAppointmentModal}
                      className="w-full bg-[#e1eddf] hover:bg-[#97e078] hover:text-white text-black font-poppins font-medium text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dhanvvantrri Hospitals */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-inter font-semibold text-[34px] md:text-[42px] text-black m-0 leading-tight">
              Why Choose XYZ Hospitals
            </h2>
            <p className="font-poppins text-[16px] text-black m-0 leading-relaxed">
              We combine expert doctors, advanced technology, compassionate care, and comprehensive services under one roof, ensuring safe, personalized, and trusted healthcare for your family.
            </p>

            <div className="space-y-5 pt-2">
              {[
                {
                  icon: <MedicalServicesIcon sx={{ fontSize: 26, color: '#fff' }} />,
                  title: 'Experienced Specialists',
                  desc: 'Our team of skilled doctors brings years of expertise across women’s health, maternity, and advanced treatments.',
                },
                {
                  icon: <BiotechIcon sx={{ fontSize: 26, color: '#fff' }} />,
                  title: 'Advanced Medical Technology',
                  desc: 'We use modern equipment and minimally invasive techniques for accurate diagnosis and better outcomes.',
                },
                {
                  icon: <EscalatorWarningIcon sx={{ fontSize: 26, color: '#fff' }} />,
                  title: 'Focus on Women & Child Health',
                  desc: 'Specialized care for maternity, gynaecology, infertility, and paediatric services.',
                },
              ].map((feat) => (
                <div key={feat.title} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#97e078] flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-[20px] text-black m-0">
                      {feat.title}
                    </h4>
                    <p className="font-opensans text-[15.5px] text-black/85 mt-1 mb-0 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <HospitalImage
              src="/images/why-choose-new.jpg"
              alt="Compassionate Medical Excellence"
              className="w-full h-[400px] object-cover rounded-[16px] shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
