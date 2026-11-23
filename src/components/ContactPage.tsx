import React, { useState } from 'react';
import {
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  PhoneInTalk as PhoneInTalkIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleOutlineIcon,
  LocalHospital as LocalHospitalIcon,
  WhatsApp as WhatsAppIcon,
  DirectionsCar as DirectionsCarIcon,
  DirectionsSubway as DirectionsSubwayIcon,
  DirectionsBus as DirectionsBusIcon,
  Accessible as AccessibleIcon,
  HelpOutline as HelpOutlineIcon,
  ExpandMore as ExpandMoreIcon,
  Call as CallIcon,
  MedicalServices as MedicalServicesIcon,
  Share as ShareIcon,
  CalendarMonth as CalendarMonthIcon,
} from '@mui/icons-material';
import { getAssetUrl } from './HospitalImage';

interface ContactPageProps {
  onNavigate: (slug: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Obstetrics & Maternity');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (9:00 AM - 1:00 PM)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [appointmentId, setAppointmentId] = useState('');

  // Transport Tab State
  const [activeTransportTab, setActiveTransportTab] = useState<'car' | 'metro' | 'bus' | 'access'>('car');

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!date) {
      setError('Please select your preferred appointment date.');
      return;
    }

    setError('');
    const randomId = `DEMO-APT-${Math.floor(10000 + Math.random() * 90000)}`;
    setAppointmentId(randomId);
    setSubmitted(true);
  };

  const departmentsList = [
    'Obstetrics & Maternity Care',
    'Gynaecology & Women Health',
    'Infertility & IVF Fertility Care',
    'Paediatrics & Neonatal Care',
    'Minimally Invasive Surgeries (Laparoscopy/Hysteroscopy)',
    'General Medicine & Family Wellness',
    'Physiotherapy & Rehabilitation',
    'Dental & Maxillofacial Care',
  ];

  const faqs = [
    {
      q: 'Do I need an appointment for emergency care?',
      a: 'No appointment is needed for emergencies. Our Emergency & Trauma Department is fully operational 24 hours a day, 7 days a week with on-duty physicians, emergency surgeons, and full diagnostic facilities.',
    },
    {
      q: 'Which cashless health insurance TPAs are accepted?',
      a: 'We accept all major public and private health insurance TPAs including Star Health, Care Health, HDFC ERGO, ICICI Lombard, Medi Assist, Paramount TPA, and corporate insurances. Our dedicated TPA Helpdesk on the 1st Floor assists you with instant pre-authorization.',
    },
    {
      q: 'What are the in-patient visiting hours?',
      a: 'General ward visiting hours are 4:00 PM to 7:00 PM daily. For ICU and NICU patients, visiting is restricted to immediate family from 11:00 AM to 12:00 PM and 5:00 PM to 6:00 PM to maintain a sterile recovery environment.',
    },
    {
      q: 'Can I receive laboratory and scan reports online?',
      a: 'Yes. Once your test results are verified by our pathologists and radiologists, digital copies are automatically sent via encrypted PDF to your registered WhatsApp number and email address within 2 to 4 hours.',
    },
    {
      q: 'Is valet parking available at the hospital premises?',
      a: 'Yes, we provide complimentary 24/7 valet parking for all patients and visitors, along with wheelchair assistance right from the car drop-off portico.',
    },
  ];

  return (
    <div className="w-full bg-white text-neutral-900">
      {/* =================================================================
          1. HERO BANNER WITH THEME GRADIENT & QUICK ACTION PILLS
      ================================================================= */}
      <section
        className="relative w-full py-20 lg:py-24 px-[5%] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${getAssetUrl('/images/contact-hero-bg.jpg')})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(16, 37, 37, 0.92) 0%, rgba(20, 60, 60, 0.78) 55%, rgba(151, 224, 120, 0.35) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          <div className="font-opensans text-[14px] text-white/80 flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#97e078] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#97e078] font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-inter font-bold text-[36px] sm:text-[46px] lg:text-[54px] leading-tight text-white m-0">
              We are Here for You and Your Family
            </h1>
            <p className="font-opensans text-[16px] sm:text-[18px] text-white/90 mt-4 mb-0 leading-relaxed">
              Reach out for medical consultations, 24/7 emergency care, second opinions, or hospital enquiries. Our healthcare team responds promptly.
            </p>

            {/* Quick Action Pills */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-[#e53935] hover:bg-[#d32f2f] text-white font-poppins font-medium text-[14px] px-5 py-2.5 rounded-full transition-all shadow-md"
              >
                <CallIcon sx={{ fontSize: 18 }} />
                <span>24/7 Emergency: +91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Demo%20Logo%20Hospital,%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white font-poppins font-medium text-[14px] px-5 py-2.5 rounded-full transition-all shadow-md"
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          2. TOP 4 KEY CONTACT & SERVICE CARDS
      ================================================================= */}
      <section className="py-14 px-[5%] bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 24/7 Emergency & Ambulance */}
          <div className="bg-white rounded-[16px] p-6 shadow-xs border border-neutral-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-2 h-full absolute left-0 top-0 bg-[#e53935]" />
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#e53935] flex items-center justify-center mb-4">
              <LocalHospitalIcon sx={{ fontSize: 26 }} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-red-600 bg-red-100/60 px-2.5 py-0.5 rounded-full">
              Round The Clock
            </span>
            <h3 className="font-inter font-semibold text-[20px] text-neutral-900 mt-2 mb-2">
              Emergency &amp; Trauma
            </h3>
            <p className="font-opensans text-[14px] text-neutral-600 mb-3">
              Immediate medical attention, critical care response, and 24/7 cardiac ICU ambulance.
            </p>
            <div className="space-y-1 font-inter font-semibold text-neutral-900 text-[15px]">
              <div>
                <a href="tel:+919876543210" className="text-[#e53935] hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="text-xs font-normal text-neutral-500">Toll-free: 1800-425-DEMO</div>
            </div>
          </div>

          {/* Card 2: OPD & General Enquiries */}
          <div className="bg-white rounded-[16px] p-6 shadow-xs border border-neutral-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-2 h-full absolute left-0 top-0 bg-[#97e078]" />
            <div className="w-12 h-12 rounded-full bg-[#e1eddf] text-[#2a8787] flex items-center justify-center mb-4">
              <PhoneInTalkIcon sx={{ fontSize: 26 }} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2a8787] bg-[#e1eddf] px-2.5 py-0.5 rounded-full">
              Appointments
            </span>
            <h3 className="font-inter font-semibold text-[20px] text-neutral-900 mt-2 mb-2">
              OPD &amp; Consultations
            </h3>
            <p className="font-opensans text-[14px] text-neutral-600 mb-3">
              Book specialist doctor slots, follow-ups, ultrasound scans, and preventative health checks.
            </p>
            <div className="space-y-1 font-inter font-semibold text-neutral-900 text-[15px]">
              <div>
                <a href="tel:+919876543210" className="hover:text-[#2a8787]">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <a href="tel:+914023456789" className="hover:text-[#2a8787]">
                  +91 40 2345 6789
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Hospital Location */}
          <div className="bg-white rounded-[16px] p-6 shadow-xs border border-neutral-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-2 h-full absolute left-0 top-0 bg-[#4bc3c3]" />
            <div className="w-12 h-12 rounded-full bg-[#e0f7f7] text-[#30adad] flex items-center justify-center mb-4">
              <LocationOnIcon sx={{ fontSize: 26 }} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#30adad] bg-[#e0f7f7] px-2.5 py-0.5 rounded-full">
              Main Campus
            </span>
            <h3 className="font-inter font-semibold text-[20px] text-neutral-900 mt-2 mb-2">
              Hospital Location
            </h3>
            <p className="font-opensans text-[14px] text-neutral-700 leading-relaxed mb-3">
              Road No. 12, Banjara Hills &amp; Attapur Main Road, Pillar No. 120, Hyderabad, Telangana 500018
            </p>
            <a
              href="https://maps.google.com/?q=Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-poppins text-xs font-semibold text-[#2a8787] hover:underline"
            >
              <span>Get Directions</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 4: Consultation & OPD Hours */}
          <div className="bg-white rounded-[16px] p-6 shadow-xs border border-neutral-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-2 h-full absolute left-0 top-0 bg-[#97e078]" />
            <div className="w-12 h-12 rounded-full bg-[#e1eddf] text-[#2a8787] flex items-center justify-center mb-4">
              <AccessTimeIcon sx={{ fontSize: 26 }} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2a8787] bg-[#e1eddf] px-2.5 py-0.5 rounded-full">
              Working Hours
            </span>
            <h3 className="font-inter font-semibold text-[20px] text-neutral-900 mt-2 mb-2">
              Opening Hours
            </h3>
            <div className="space-y-1.5 font-opensans text-[13.5px] text-neutral-700">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <strong className="text-neutral-900">9:00 AM – 10:00 PM</strong>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <strong className="text-neutral-900">9:00 AM – 10:00 PM</strong>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <strong className="text-neutral-900">10:00 AM – 4:00 PM</strong>
              </div>
              <div className="pt-1 text-xs text-green-700 font-medium">
                Emergency &amp; Pharmacy: 24 Hours Open
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. MAIN SECTION: APPOINTMENT / CONTACT FORM + GOOGLE MAP
      ================================================================= */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-[#e1eddf] text-[#2a8787] font-semibold text-xs uppercase px-3.5 py-1 rounded-full tracking-wider">
              Online Appointment &amp; Enquiry
            </span>
            <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-neutral-900 mt-3 mb-2">
              Book a Consultation or Send an Enquiry
            </h2>
            <p className="font-opensans text-neutral-600 text-[15.5px] leading-relaxed">
              Fill in your details below. Our patient care executive will confirm your appointment schedule within 15 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 bg-[#f8faf9] border border-[#e1eddf] rounded-[20px] p-6 sm:p-10 shadow-xs flex flex-col justify-between">
              {submitted ? (
                <div className="bg-white border-2 border-[#97e078] rounded-[16px] p-8 text-center my-auto shadow-md">
                  <div className="w-16 h-16 bg-[#e1eddf] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleOutlineIcon sx={{ fontSize: 44, color: '#388e3c' }} />
                  </div>
                  <span className="bg-[#e1eddf] text-[#2a8787] font-bold text-xs uppercase px-3 py-1 rounded-full">
                    Appointment Confirmed
                  </span>
                  <h3 className="font-inter font-bold text-2xl text-neutral-900 mt-3 mb-1">
                    Thank You, {name}!
                  </h3>
                  <p className="font-opensans text-neutral-600 text-sm max-w-md mx-auto mb-4">
                    Your appointment request has been scheduled with reference code:
                  </p>
                  <div className="inline-block bg-neutral-100 border border-neutral-300 font-mono text-base font-bold text-[#2a8787] px-4 py-2 rounded-lg mb-6">
                    {appointmentId}
                  </div>

                  <div className="bg-[#f0f9f0] text-left p-4 rounded-xl max-w-md mx-auto text-xs text-neutral-700 space-y-1.5 mb-6 border border-[#97e078]/40">
                    <div><strong>Department:</strong> {department}</div>
                    <div><strong>Date &amp; Time:</strong> {date} ({timeSlot})</div>
                    <div><strong>Contact Phone:</strong> {phone}</div>
                    <div><strong>Hospital Wing:</strong> Demo Logo Main Healthcare Centre</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setDate('');
                        setMessage('');
                      }}
                      className="bg-[#97e078] hover:bg-[#82cf63] text-white font-poppins font-medium text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=Hello,%20my%20appointment%20reference%20is%20${appointmentId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-poppins font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
                    >
                      <WhatsAppIcon sx={{ fontSize: 17 }} />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                      />
                    </div>
                    <div>
                      <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                        10-Digit Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                      />
                    </div>
                    <div>
                      <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                        Select Speciality Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                      >
                        {departmentsList.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Date and Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                      />
                    </div>
                    <div>
                      <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                      >
                        <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message / Health Query */}
                  <div>
                    <label className="block font-opensans text-[13.5px] font-semibold text-neutral-800 mb-1">
                      Brief Medical Query or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your health concern, symptoms, or doctor preference..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#4bc3c3] focus:ring-1 focus:ring-[#4bc3c3]"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-700 text-xs font-opensans p-3 rounded-lg border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#97e078] hover:bg-[#82cf63] text-white font-poppins font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                    >
                      <CalendarMonthIcon sx={{ fontSize: 19 }} />
                      <span>Confirm &amp; Schedule Appointment</span>
                    </button>
                    <p className="font-opensans text-xs text-neutral-500 mt-2 m-0">
                      🔒 Your medical data is strictly confidential and protected under HIPAA / NABH privacy guidelines.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Direction Guidance Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Live Embedded Map */}
              <div className="bg-white border border-neutral-200 rounded-[20px] overflow-hidden shadow-xs flex-1 min-h-[300px] flex flex-col">
                <div className="p-4 bg-[#e1eddf] border-b border-[#97e078]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LocationOnIcon sx={{ color: '#2a8787', fontSize: 20 }} />
                    <span className="font-inter font-semibold text-sm text-neutral-900">
                      Demo Logo Hospital Location
                    </span>
                  </div>
                  <span className="text-[11px] bg-white text-[#2a8787] font-semibold px-2.5 py-0.5 rounded-full">
                    Open in Maps
                  </span>
                </div>
                <div className="flex-1 w-full min-h-[260px] relative">
                  <iframe
                    title="Demo Logo Hospital Location Map"
                    src="https://www.google.com/maps?q=Hyderabad+Telangana+Hospital&output=embed"
                    className="w-full h-full min-h-[260px] border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Transport & Landmark Guidance Box */}
              <div className="bg-[#f0f9f0] border border-[#97e078]/40 rounded-[20px] p-6">
                <h4 className="font-inter font-semibold text-base text-neutral-900 m-0 mb-3 flex items-center gap-2">
                  <DirectionsCarIcon sx={{ color: '#2a8787', fontSize: 20 }} />
                  <span>How to Reach Us</span>
                </h4>

                {/* Transport Filter Tabs */}
                <div className="flex items-center gap-1.5 mb-4 bg-white/80 p-1 rounded-xl border border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setActiveTransportTab('car')}
                    className={`flex-1 py-1.5 text-xs font-poppins font-medium rounded-lg transition-colors cursor-pointer ${activeTransportTab === 'car'
                      ? 'bg-[#4bc3c3] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black'
                      }`}
                  >
                    By Car / Cab
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTransportTab('metro')}
                    className={`flex-1 py-1.5 text-xs font-poppins font-medium rounded-lg transition-colors cursor-pointer ${activeTransportTab === 'metro'
                      ? 'bg-[#4bc3c3] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black'
                      }`}
                  >
                    By Metro
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTransportTab('bus')}
                    className={`flex-1 py-1.5 text-xs font-poppins font-medium rounded-lg transition-colors cursor-pointer ${activeTransportTab === 'bus'
                      ? 'bg-[#4bc3c3] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black'
                      }`}
                  >
                    By Bus
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTransportTab('access')}
                    className={`flex-1 py-1.5 text-xs font-poppins font-medium rounded-lg transition-colors cursor-pointer ${activeTransportTab === 'access'
                      ? 'bg-[#4bc3c3] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-black'
                      }`}
                  >
                    Accessibility
                  </button>
                </div>

                <div className="font-opensans text-[13px] text-neutral-700 leading-relaxed min-h-[64px]">
                  {activeTransportTab === 'car' && (
                    <p className="m-0">
                      Located right on the main highway opposite Pillar No. 120. We offer free dedicated valet parking and ambulance drive-in bays at the front gate.
                    </p>
                  )}
                  {activeTransportTab === 'metro' && (
                    <p className="m-0">
                      Nearest Metro Station is only 1.2 km away. Feeder electric autos and taxis are readily available right outside the exit gate.
                    </p>
                  )}
                  {activeTransportTab === 'bus' && (
                    <p className="m-0">
                      City bus stop is situated right across the hospital main pedestrian entrance with services running every 5 to 10 minutes.
                    </p>
                  )}
                  {activeTransportTab === 'access' && (
                    <p className="m-0">
                      Wheelchair ramps, dedicated patient transfer elevators, tactile floor paths, and 24/7 stretcher assistance are available at all entrances.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =================================================================
          4. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION
      ================================================================= */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#2a8787] uppercase tracking-wider bg-[#e1eddf] px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="font-inter font-bold text-[30px] md:text-[36px] text-neutral-900 mt-3 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="font-opensans text-neutral-600 text-sm">
              Everything you need to know about visits, appointments, insurance, and medical care.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="border border-neutral-200 rounded-[14px] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#f8faf9] cursor-pointer transition-colors"
                  >
                    <span className="font-inter font-semibold text-[16px] text-neutral-900">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#e1eddf] text-[#2a8787] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#4bc3c3] text-white' : ''
                        }`}
                    >
                      <ExpandMoreIcon sx={{ fontSize: 18 }} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 font-opensans text-[14.5px] text-neutral-700 leading-relaxed bg-[#f8faf9] border-t border-neutral-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          5. 24/7 EMERGENCY CALLOUT BANNER
      ================================================================= */}
      <section className="py-12 px-[5%] bg-gradient-to-r from-[#143232] via-[#1a4a4a] to-[#255f5f] text-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block bg-[#e53935] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Critical Emergency Support
            </span>
            <h3 className="font-inter font-bold text-2xl lg:text-3xl text-white m-0">
              Immediate Medical Attention Needed?
            </h3>
            <p className="font-opensans text-white/85 text-sm max-w-xl m-0">
              Our 24-hour trauma wing, emergency surgeons, and fully equipped life-support ambulances are always ready to respond.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-[#97e078] hover:bg-[#82cf63] text-white font-poppins font-semibold text-[15px] px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              <PhoneInTalkIcon sx={{ fontSize: 19 }} />
              <span>Call Emergency: +91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210?text=Emergency%20Assistance%20Requested"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-poppins font-medium text-[15px] px-5 py-3 rounded-full transition-colors border border-white/20"
            >
              <WhatsAppIcon sx={{ fontSize: 19 }} />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
