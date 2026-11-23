export interface NavSubItem {
  label: string;
  slug: string;
  children?: NavSubItem[];
}

export interface NavItem {
  label: string;
  slug?: string;
  children?: NavSubItem[];
}

export interface ServiceDetailContent {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  heroImage: string;
  sections: {
    heading: string;
    description: string;
    bullets: { title?: string; text: string }[];
  }[];
  relatedCategory: string;
}

export const MAIN_MENU: NavItem[] = [
  {
    label: 'About Us',
    slug: 'about-us',
  },
  {
    label: 'Gynaecology',
    children: [
      { label: 'Evaluation and Management of Vaginal discharges', slug: 'best-doctors-for-vaginal-discharge-treatment-in-hyderabad' },
      { label: 'Menstrual irregularities', slug: 'best-doctor-for-irregular-periods-treatment-in-hyderabad' },
      { label: 'PCOD', slug: 'best-hospital-for-pcod-treatment-in-hyderabad' },
      { label: 'Family Planning', slug: 'family-planning-center-in-hyderabad' },
    ],
  },
  {
    label: 'Surgeries',
    children: [
      { label: 'Genral Surgery', slug: 'general-surgery-hospital-in-hyderabad' },
      {
        label: 'Hysteroscopy',
        slug: 'hysteroscopy',
        children: [
          { label: 'Diagnostic Hysteroscopy', slug: 'best-treatment-for-diagnostic-hysteroscopy-in-hyderabad' },
          { label: 'Hysteroscopic Polypectomy', slug: 'best-hysteroscopy-polypectomy-hospital-in-hyderabad' },
        ],
      },
      {
        label: 'Laparoscopy',
        slug: 'laparoscopy',
        children: [
          { label: 'Diagnostic Laparoscopy', slug: 'best-diagnostic-laparoscopy-hospitals-in-hyderabad' },
          { label: 'Laparoscopic Hysterectomy', slug: 'best-laparoscopic-hysterectomy-hospital-in-hyderabad' },
        ],
      },
    ],
  },
  {
    label: 'Infertility',
    children: [
      { label: 'Infertility Evaluation', slug: 'best-infertility-evaluation-treatment-in-hyderabad' },
      { label: 'IUI', slug: 'best-iui-clinic-in-hyderabad' },
      { label: 'IVF', slug: 'ivf-fertility-center-in-hyderabad' },
      { label: 'Reproductive planning and management', slug: 'advanced-reproductive-center-in-hyderabad' },
    ],
  },
  {
    label: 'Medicine',
    children: [
      { label: 'General Medicine', slug: 'best-general-medicine-hospital-hyderabad' },
      { label: 'Family Medicine', slug: 'best-hospital-with-family-medicine-hyderabad' },
    ],
  },
  {
    label: 'Contact Us',
    slug: 'contact-us',
  },
];

export const HOME_SERVICES = [
  {
    title: 'Obstetrics & Maternity Care',
    description: 'Complete care from pregnancy to delivery with expert monitoring and support.',
    image: '/images/service-obstetrics.webp',
    slug: 'best-obstetrician-and-antenatal-care-in-hyderabad',
  },
  {
    title: 'Gynaecology',
    description: 'Comprehensive women’s healthcare for all stages, from routine care to advanced treatment.',
    image: '/images/service-gynaecology.webp',
    slug: 'best-hospital-for-pcod-treatment-in-hyderabad',
  },
  {
    title: 'Minimally Invasive Surgeries',
    description: 'Advanced hysteroscopy and laparoscopy procedures with faster recovery.',
    image: '/images/service-surgeries.webp',
    slug: 'best-diagnostic-laparoscopy-hospitals-in-hyderabad',
  },
  {
    title: 'Paediatric & Neonatal Care',
    description: 'Specialized care for newborns and children, including screening and vaccinations.',
    image: '/images/service-paediatric.webp',
    slug: 'newborn-screening-hospital-in-hyderabad',
  },
  {
    title: 'Infertility & Reproductive Care',
    description: 'Personalized fertility treatments including evaluation, IUI, IVF, and planning.',
    image: '/images/service-infertility.webp',
    slug: 'ivf-fertility-center-in-hyderabad',
  },
  {
    title: 'General Medicine & Wellness',
    description: 'Holistic care for everyday health, preventive care, and lifestyle management.',
    image: '/images/service-medicine.webp',
    slug: 'best-general-medicine-hospital-hyderabad',
  },
];

export const STATS_COUNTERS = [
  { value: 10, suffix: 'k+', label: 'Patients Treated' },
  { value: 5, suffix: 'k+', label: 'Successful Deliveries' },
  { value: 2, suffix: 'k+', label: 'Surgeries Performed' },
  { value: 15, suffix: '+', label: 'Years of Medical Excellence' },
];

export const CARE_JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Book an Appointment',
    description: 'Schedule your visit through call or online and choose a convenient time.',
  },
  {
    number: '02',
    title: 'Consultation & Diagnosis',
    description: 'Meet our specialists for detailed evaluation, accurate diagnosis, and medical guidance.',
  },
  {
    number: '03',
    title: 'Personalized Treatment Plan',
    description: 'Receive a tailored treatment plan designed specifically for your health needs.',
  },
  {
    number: '04',
    title: 'Care & Follow-Up',
    description: 'Ongoing support, recovery guidance, and follow-ups to ensure your well-being.',
  },
];

export const GALLERY_IMAGES = [
  { src: '/images/gallery-new-1.jpg', alt: 'Modern Hospital Infrastructure and Reception Lounge' },
  { src: '/images/gallery-new-2.jpg', alt: 'Doctor Patient Consultation and Specialized Care' },
  { src: '/images/gallery-new-3.jpg', alt: 'Advanced Medical Diagnostics and Ultrasound Suite' },
  { src: '/images/gallery-new-4.jpg', alt: 'Comfortable In-Patient Recovery Ward and Patient Room' },
  { src: '/images/gallery-new-5.jpg', alt: 'Minimally Invasive Surgery and Advanced Operation Theatre' },
  { src: '/images/gallery-new-6.jpg', alt: 'Collaborative Clinical Team and Patient Care Round' },
];

export const GOOGLE_REVIEWS = [
  {
    name: 'vinod kumar',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#1976d2',
    text: 'Dr Devi mdm explained everything very well and provided good treatment and sajida also explained everything very nicely I have been coming here for many years since 20yrs thank you specially thanks for dr Devi mam',
  },
  {
    name: 'Maimuna Maimuna',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#7b1fa2',
    text: 'Satisfied with the doctors nd the staff.. Well behaved management. .. Specially The Dr Devi tq mam',
  },
  {
    name: 'Sudhir Kere',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#388e3c',
    text: 'Very good hospital great service all staff and doctors , Specially Devi madam',
  },
  {
    name: 'APS Hyderabad',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#e64a19',
    text: 'The staff is very nice, took a lot of care',
  },
  {
    name: 'Swetha Honey',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#c2185b',
    text: 'Sudeer bro nice thankyou so much for ur skills',
  },
  {
    name: 'pradeep sath bhai',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#00796b',
    text: 'Good service provided by the staff when ever we have visited.',
  },
  {
    name: 'Tangella Venkata Sai Manoj Kumar',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#5d4037',
    text: 'Excellent medical care and supportive nursing staff. Highly recommended hospital in hyd.',
  },
  {
    name: 'Anil Singh',
    date: 'Posted on Google',
    rating: 5,
    avatarBg: '#303f9f',
    text: 'Clean environment, prompt consultation, and compassionate doctors.',
  },
];

export const HEALTH_INSIGHTS = [
  {
    id: 'pregnancy-care-tips',
    title: 'Essential Pregnancy Care Tips for a Healthy Journey',
    excerpt: 'Learn key precautions, nutrition tips, and medical advice to ensure a safe and healthy pregnancy.',
    image: '/images/blog-1.webp',
    fullContent: [
      'A healthy pregnancy starts with structured antenatal check-ups, balanced maternal nutrition, and consistent monitoring of both mother and baby.',
      'During the first trimester, taking prescribed folic acid supplements, staying hydrated, and avoiding strenuous stress are vital for early fetal neural development.',
      'In the second and third trimesters, regular ultrasound scans, blood pressure monitoring, gestational diabetes screening, and guided prenatal exercises help ensure a safe and smooth delivery at Dhanvvantrri Hospital.',
    ],
  },
  {
    id: 'understanding-pcod',
    title: 'Understanding PCOD: Symptoms, Causes & Treatment',
    excerpt: 'A complete guide to managing PCOD with lifestyle changes and medical care.',
    image: '/images/blog-2.webp',
    fullContent: [
      'Polycystic Ovarian Disease (PCOD) is a common hormonal condition affecting women of reproductive age, often presenting with irregular menstrual cycles, weight fluctuations, acne, and ovulatory challenges.',
      'Early diagnosis through pelvic ultrasound and hormonal profiling allows our gynaecologists to create a personalized management plan.',
      'Combining balanced low-glycemic nutrition, regular physical activity, stress management, and targeted medical therapy restores cycle regularity and supports long-term reproductive wellness.',
    ],
  },
  {
    id: 'when-to-consult-gynaecologist',
    title: 'When to Consult a Gynaecologist?',
    excerpt: 'Know the signs and symptoms that indicate it’s time to seek expert medical advice.',
    image: '/images/blog-3.webp',
    fullContent: [
      'Routine gynaecological check-ups are essential at every stage of a woman’s life—from adolescence and reproductive years through menopause.',
      'You should schedule a consultation if you experience irregular or heavy periods, persistent pelvic pain, unusual vaginal discharge, difficulty conceiving, or menopausal symptoms.',
      'At Dhanvvantrri Hospital, our experienced specialists provide confidential, compassionate evaluations and evidence-based care.',
    ],
  },
  {
    id: 'newborn-care-guide',
    title: 'Newborn Care: First 30 Days Guide for Parents',
    excerpt: 'Essential tips on feeding, hygiene, sleep, and health care to keep your newborn safe and healthy.',
    image: '/images/blog-4.webp',
    fullContent: [
      'The first 30 days of a newborn’s life require gentle care, exclusive breastfeeding every 2–3 hours, and maintaining optimal thermal comfort.',
      'Parents should monitor newborn screening milestones, umbilical cord hygiene, sleep safety, and early signs of neonatal jaundice.',
      'Our Paediatric & Neonatal Care team provides complete newborn screening, timely immunizations, phototherapy support, and lactation guidance for new parents.',
    ],
  },
];

export const EXPERT_DOCTORS = [
  {
    name: 'Dr. Rupashri',
    role: 'Senior Consultant – Multi Speciality Hospital',
    specialty: 'Gynecologist & Infertility Specialist',
    image: '/images/doc-new-1.jpg',
  },
  {
    name: 'Dr. Gurunath Nayak',
    role: 'Consultant Physiotherapist & Rehabilitation',
    specialty: 'Bachelor of Physiotherapy (BPT)',
    image: '/images/doc-new-2.jpg',
  },
  {
    name: 'Dr. Lucky Srivani Reddy',
    role: 'M.S. (Obstetrics & Gynecology)',
    specialty: 'Infertility • High-Risk Pregnancy • Gynecological Disorders',
    image: '/images/doc-new-3.jpg',
  },
  {
    name: 'Dr. Mohammed Abdul Quadir',
    role: 'MDS Prosthodontist & Implantologist',
    specialty: 'MIPS | OMICP (USA)',
    image: '/images/doc-new-4.jpg',
  },
];

export const FOOTER_COLUMNS = {
  col2: {
    obstetrics: [
      { label: 'Preconception to Antenatal checkup', slug: 'best-obstetrician-and-antenatal-care-in-hyderabad' },
      { label: 'Normal Vaginal delivery', slug: 'best-hospital-for-normal-delivery-in-hyderabad' },
      { label: 'Caesarean section', slug: 'best-hospital-for-c-section-delivery-in-hyderabad' },
      { label: 'High risk pregnancy', slug: 'best-hospital-for-high-risk-pregnancy-in-hyderabad' },
    ],
    gynaecology: [
      { label: 'Evaluation and Management of Vaginal discharges', slug: 'best-doctors-for-vaginal-discharge-treatment-in-hyderabad' },
      { label: 'Menstrual irregularities', slug: 'best-doctor-for-irregular-periods-treatment-in-hyderabad' },
      { label: 'PCOD', slug: 'best-hospital-for-pcod-treatment-in-hyderabad' },
      { label: 'Menopause', slug: 'best-clinic-for-menopause-treatment-in-hyderabad' },
      { label: 'Contraceptive counselling', slug: 'contraceptive-counselling-in-hyderabad' },
      { label: 'Family Planning', slug: 'family-planning-center-in-hyderabad' },
      { label: 'Adenomyosis and Endometriosis', slug: 'adenomyosis-and-endometriosis-treatment-in-hyderabad' },
      { label: 'MTP (Medical termination of pregnancy)', slug: 'safe-mtp-abortion-hospital-in-hyderabad' },
    ],
  },
  col3: {
    hysteroscopy: [
      { label: 'Diagnostic Hysteroscopy', slug: 'best-treatment-for-diagnostic-hysteroscopy-in-hyderabad' },
      { label: 'Hysteroscopic Polypectomy', slug: 'best-hysteroscopy-polypectomy-hospital-in-hyderabad' },
      { label: 'Hysteroscopic septal resection', slug: 'hysteroscopic-septal-resection-in-hyderabad' },
      { label: 'Hysteroscopic Endometrial biopsy', slug: 'best-hysteroscopic-endometrial-biopsy-treatment-in-hyderabad' },
      { label: 'Hysteroscopic Myomectomy', slug: 'best-hysteroscopic-myomectomy-hospital-in-hyderabad' },
    ],
    laparoscopy: [
      { label: 'Diagnostic Laparoscopy', slug: 'best-diagnostic-laparoscopy-hospitals-in-hyderabad' },
      { label: 'Laparoscopic Hysterectomy', slug: 'best-laparoscopic-hysterectomy-hospital-in-hyderabad' },
      { label: 'Laparoscopic Ovarian Cystectomy', slug: 'best-laparoscopic-ovarian-cystectomy-hospital-in-hyderabad' },
      { label: 'Laparoscopic Ectopic pregnancy resection', slug: 'best-laparoscopic-ectopic-pregnancy-resection-hospital-in-hyderabad' },
      { label: 'Laparoscopic tubectomy', slug: 'best-hospital-for-laparoscopic-tubectomy-in-hyderabad' },
    ],
    infertility: [
      { label: 'Infertility Evaluation', slug: 'best-infertility-evaluation-treatment-in-hyderabad' },
      { label: 'Follicular Monitoring study', slug: 'best-follicular-scan-doctors-in-hyderabad' },
      { label: 'IUI', slug: 'best-iui-clinic-in-hyderabad' },
      { label: 'IVF', slug: 'ivf-fertility-center-in-hyderabad' },
      { label: 'Reproductive planning and management', slug: 'advanced-reproductive-center-in-hyderabad' },
    ],
  },
};

export function getServiceDetailBySlug(slug: string): ServiceDetailContent {
  // Specific rich data for Obstetrics & Antenatal Care and dynamic specialized content for all 31 hospital slugs
  if (slug === 'best-obstetrician-and-antenatal-care-in-hyderabad') {
    return {
      slug,
      title: 'Best Obstetrician & Antenatal Care in Hyderabad',
      category: 'Obstetrics',
      subtitle:
        'A complete care journey from planning pregnancy to regular antenatal visits, ensuring the health and well-being of both mother and baby through every stage.',
      heroImage: '/images/service-obstetrics.webp',
      relatedCategory: 'Obstetrics',
      sections: [
        {
          heading: 'Preconception Care',
          description:
            'Preconception care involves steps a woman and her partner take before pregnancy to ensure good health. It includes managing medical conditions, improving lifestyle habits, and preparing physically and emotionally. This phase is vital as early fetal development begins before pregnancy is known. Healthy diet, folic acid, avoiding harmful habits, and medical advice help reduce risks and ensure a safe pregnancy.',
          bullets: [
            { title: 'Medical Check-up', text: 'Visit a doctor to assess overall health and existing conditions' },
            { title: 'Folic Acid Intake', text: 'Start supplements to prevent birth defects' },
            { title: 'Healthy Diet', text: 'Eat nutritious, balanced meals rich in vitamins and minerals' },
            { title: 'Maintain Ideal Weight', text: 'Achieve a healthy BMI for better fertility' },
            { title: 'Avoid Harmful Habits', text: 'Stop smoking, alcohol, and limit caffeine' },
          ],
        },
        {
          heading: 'Fertility Planning & Conception',
          description:
            'Fertility planning focuses on understanding the menstrual cycle, tracking ovulation, and identifying the most fertile days. It helps couples improve their chances of natural conception effectively. It also includes lifestyle improvements, medical guidance, and timely interventions if needed. Early planning supports healthy conception and reduces delays in achieving pregnancy.',
          bullets: [
            { title: 'Ovulation Tracking', text: 'Identify fertile window for better chances' },
            { title: 'Timed Intercourse', text: 'Plan during most fertile days' },
            { title: 'Cycle Awareness', text: 'Know regularity and hormonal patterns' },
            { title: 'Healthy Lifestyle', text: 'Balanced diet, exercise, proper sleep' },
            { title: 'Medical Guidance', text: 'Consult a specialist if conception delays occur' },
          ],
        },
        {
          heading: 'Trimester-Wise Antenatal Monitoring',
          description:
            'Regular antenatal check-ups allow continuous assessment of maternal health and fetal growth. Our obstetrics team provides personalized ultrasound monitoring, nutritional guidance, and birth preparedness.',
          bullets: [
            { title: 'First Trimester', text: 'Dating scan, viability assessment, and early prenatal blood screening' },
            { title: 'Second Trimester', text: 'TIFFA anomaly scan, maternal blood pressure, and gestational diabetes screening' },
            { title: 'Third Trimester', text: 'Fetal growth Doppler, NST monitoring, and safe delivery planning' },
          ],
        },
      ],
    };
  }

  // Find label and parent category from MAIN_MENU
  let foundLabel = 'Specialized Medical Care';
  let foundCategory = 'Obstetrics';
  let heroImg = '/images/service-obstetrics.webp';

  for (const item of MAIN_MENU) {
    if (item.slug === slug) {
      foundLabel = item.label;
      foundCategory = item.label;
    }
    if (item.children) {
      for (const child of item.children) {
        if (child.slug === slug) {
          foundLabel = child.label;
          foundCategory = item.label;
        }
        if (child.children) {
          for (const sub of child.children) {
            if (sub.slug === slug) {
              foundLabel = sub.label;
              foundCategory = item.label;
            }
          }
        }
      }
    }
  }

  if (foundCategory === 'Gynaecology') heroImg = '/images/service-gynaecology.webp';
  else if (foundCategory === 'Surgeries') heroImg = '/images/service-surgeries.webp';
  else if (foundCategory === 'Infertility') heroImg = '/images/service-infertility.webp';
  else if (foundCategory.includes('Paediatric')) heroImg = '/images/service-paediatric.webp';
  else if (foundCategory === 'Medicine' || foundCategory === 'Nutrition' || foundCategory === 'Other Services') {
    heroImg = '/images/service-medicine.webp';
  }

  return {
    slug,
    title: `${foundLabel} in Hyderabad`,
    category: foundCategory,
    subtitle: `Comprehensive, compassionate, and evidence-based ${foundLabel.toLowerCase()} services at Dhanvvantrri Multi Speciality Hospital, Attapur, Hyderabad.`,
    heroImage: heroImg,
    relatedCategory: foundCategory,
    sections: [
      {
        heading: `Overview of ${foundLabel}`,
        description: `At XYZ Hospital, our ${foundCategory} department specializes in ${foundLabel.toLowerCase()} using modern diagnostic protocols and patient-centered clinical care. Every treatment plan is tailored to ensure safety, comfort, and faster recovery.`,
        bullets: [
          { title: 'Expert Clinical Evaluation', text: 'Detailed consultation and history assessment by senior specialists' },
          { title: 'Precision Diagnostics', text: 'High-accuracy ultrasound, laboratory, and endoscopic evaluation under one roof' },
          { title: 'Personalized Care Protocol', text: 'Evidence-based medical and surgical management tailored to your condition' },
          { title: '24/7 Emergency & Nursing Support', text: 'Dedicated medical and nursing team ensuring round-the-clock patient comfort' },
        ],
      },
      {
        heading: 'Why Choose XYZ Hospital for Your Treatment?',
        description:
          'Led by Dr. Devi and our multidisciplinary team of experienced doctors, we combine 15+ years of clinical excellence with transparent, ethical, and compassionate family healthcare.',
        bullets: [
          { title: 'Experienced Specialists', text: 'Senior obstetricians, gynaecologists, laparoscopic surgeons, and paediatricians' },
          { title: 'Modern Modular Facilities', text: 'Equipped with advanced laparoscopy, hysteroscopy, NICU phototherapy, and labour suites' },
          { title: 'Seamless Follow-up Care', text: 'Structured post-treatment recovery guidance, nutrition counselling, and follow-up support' },
        ],
      },
    ],
  };
}
