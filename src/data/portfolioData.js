import {
  Brain,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
  Youtube,
} from 'lucide-react';
import {
  SiCss,
  SiDocker,
  SiFlutter,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si';

export const localize = (value, language) => {
  if (value && typeof value === 'object' && 'en' in value) {
    return value[language] ?? value.en;
  }

  return value;
};

export const uiText = {
  en: {
    nav: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    pages: {
      about: 'About Me',
      doing: "What I'm Doing",
      skills: 'Skills',
      resume: 'Resume',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    filters: {
      all: 'All',
      machineLearning: 'Machine Learning',
      webDevelopment: 'Web Development',
      mobileApps: 'Mobile Apps',
    },
    controls: {
      switchTheme: 'Switch theme',
      switchLanguage: 'Switch language',
    },
    aria: {
      portfolioFilters: 'Portfolio filters',
      socialLinks: 'Social links',
    },
  },
  id: {
    nav: {
      about: 'Tentang',
      resume: 'Resume',
      portfolio: 'Portofolio',
      contact: 'Kontak',
    },
    pages: {
      about: 'Tentang Saya',
      doing: 'Yang Saya Kerjakan',
      skills: 'Keahlian',
      resume: 'Resume',
      portfolio: 'Portofolio',
      contact: 'Kontak',
    },
    filters: {
      all: 'Semua',
      machineLearning: 'Machine Learning',
      webDevelopment: 'Pengembangan Web',
      mobileApps: 'Aplikasi Mobile',
    },
    controls: {
      switchTheme: 'Ganti tema',
      switchLanguage: 'Ganti bahasa',
    },
    aria: {
      portfolioFilters: 'Filter portofolio',
      socialLinks: 'Tautan sosial',
    },
  },
};

export const profile = {
  name: 'Ramdhan Wijaya',
  primaryRole: 'AI Engineer',
  secondaryRole: 'Web Developer',
  avatar: '/images/profile/ramwijaya_pp.jpeg',
  email: 'ramwjay@gmail.com',
  phone: '083879831873',
  whatsapp: 'https://wa.me/6283879831873',
  location: 'Tangerang, Banten, Indonesia',
  contactLabels: {
    email: {
      en: 'Email',
      id: 'Email',
    },
    phone: {
      en: 'Phone',
      id: 'Telepon',
    },
    location: {
      en: 'Location',
      id: 'Lokasi',
    },
  },
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ram-wijaya',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/raamwhy',
      icon: Github,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/raamwhy',
      icon: Instagram,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@raamwhy',
      icon: Youtube,
    },
  ],
};

export const aboutParagraphs = [
  {
    en: 'Informatics student at Sultan Ageng Tirtayasa University with a GPA of 3.86/4.00, focused on Machine Learning and Web Development. Skilled in building modern, responsive, and user-friendly web applications, as well as developing Machine Learning and Deep Learning projects.',
    id: 'Mahasiswa Informatika di Universitas Sultan Ageng Tirtayasa dengan IPK 3.86/4.00, berfokus pada Machine Learning dan Web Development. Terampil membangun aplikasi web modern, responsif, dan mudah digunakan, serta mengembangkan proyek Machine Learning dan Deep Learning.',
  },
  {
    en: 'Passionate about creating impactful digital solutions that combine functionality, performance, and intelligent technology. A curious and adaptable individual who enjoys learning new things and continuously improving skills to contribute through meaningful projects and real-world solutions.',
    id: 'Bersemangat menciptakan solusi digital yang berdampak dengan menggabungkan fungsionalitas, performa, dan teknologi cerdas. Pribadi yang ingin tahu dan adaptif, senang mempelajari hal baru, serta terus meningkatkan kemampuan untuk berkontribusi melalui proyek bermakna dan solusi dunia nyata.',
  },
];

export const services = [
  {
    title: {
      en: 'Machine Learning',
      id: 'Machine Learning',
    },
    description: {
      en: 'Developing machine learning models for classification, prediction, clustering, forecasting, and data-driven decision support.',
      id: 'Mengembangkan model machine learning untuk klasifikasi, prediksi, clustering, forecasting, dan pendukung keputusan berbasis data.',
    },
    icon: Brain,
  },
  {
    title: {
      en: 'Web Development',
      id: 'Pengembangan Web',
    },
    description: {
      en: 'Building modern, responsive and user-friendly web development using React and Laravel.',
      id: 'Membangun aplikasi web modern, responsif, dan mudah digunakan menggunakan React dan Laravel.',
    },
    icon: Code2,
  },
];

export const skills = [
  {
    name: 'TensorFlow',
    icon: SiTensorflow,
  },
  {
    name: 'Keras',
    icon: SiKeras,
  },
  {
    name: 'Scikit-learn',
    icon: SiScikitlearn,
  },
  {
    name: 'Python',
    icon: SiPython,
  },
  {
    name: 'HTML',
    icon: SiHtml5,
  },
  {
    name: 'CSS',
    icon: SiCss,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'PHP',
    icon: SiPhp,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
  },
  {
    name: 'MySQL',
    icon: SiMysql,
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
  },
  {
    name: 'Docker',
    icon: SiDocker,
  },
  {
    name: 'Git & GitHub',
    icon: SiGithub,
  },
];

export const resumeSections = [
  {
    title: {
      en: 'Education',
      id: 'Pendidikan',
    },
    icon: GraduationCap,
    items: [
      {
        title: 'Universitas Sultan Ageng Tirtayasa',
        subtitle: {
          en: "Bachelor's Degree, Informatics",
          id: 'S1 Informatika',
        },
        date: {
          en: '2023 - Present',
          id: '2023 - Sekarang',
        },
        location: 'Cilegon, Banten, Indonesia',
        description: {
          en: 'GPA: 3.86/4.00',
          id: 'IPK: 3.86/4.00',
        },
      },
      {
        title: 'SMK Siere Cendekia',
        subtitle: {
          en: 'Computer and Network Engineering',
          id: 'Teknik Komputer dan Jaringan',
        },
        date: '2020 - 2023',
        location: {
          en: 'Tangerang Regency, Banten, Indonesia',
          id: 'Kabupaten Tangerang, Banten, Indonesia',
        },
        description: {
          en: 'Gained practical experience in Cisco Packet Tracer, MikroTik configuration, network cabling, and troubleshooting.',
          id: 'Mendapatkan pengalaman praktis dalam Cisco Packet Tracer, konfigurasi MikroTik, pengkabelan jaringan, dan troubleshooting.',
        },
      },
    ],
  },
  {
    title: {
      en: 'Experience',
      id: 'Pengalaman',
    },
    icon: Briefcase,
    items: [
      {
        title: 'AI Engineer Cohort',
        subtitle: 'Coding Camp powered by DBS Foundation',
        date: {
          en: 'Jan 2026 - Present',
          id: 'Jan 2026 - Sekarang',
        },
        bullets: [
          {
            en: 'Built a customer transaction clustering model using K-Means Clustering, including data preprocessing, feature encoding, Elbow Method analysis, cluster interpretation, and exporting clustered data with target labels for further modeling.',
            id: 'Membangun model clustering transaksi pelanggan menggunakan K-Means Clustering, mencakup preprocessing data, encoding fitur, analisis Elbow Method, interpretasi cluster, dan ekspor data ber-cluster dengan label target untuk pemodelan lanjutan.',
          },
          {
            en: 'Developed a classification model based on clustering results using Decision Tree, including train-test split, model training, evaluation, hyperparameter tuning, and model export with joblib.',
            id: 'Mengembangkan model klasifikasi berdasarkan hasil clustering menggunakan Decision Tree, mencakup train-test split, pelatihan model, evaluasi, hyperparameter tuning, dan ekspor model dengan joblib.',
          },
          {
            en: 'Built a sentiment analysis model using Google Play reviews from Gojek, Grab, Shopee, Tokopedia, and DANA.',
            id: 'Membangun model analisis sentimen menggunakan ulasan Google Play dari Gojek, Grab, Shopee, Tokopedia, dan DANA.',
          },
          {
            en: 'Built a multi-class image classification system for 26,179 animal images across 10 categories, achieving 96.28% test accuracy through transfer learning with MobileNetV2.',
            id: 'Membangun sistem klasifikasi gambar multiclass untuk 26,179 gambar hewan dalam 10 kategori, mencapai akurasi test 96.28% melalui transfer learning dengan MobileNetV2.',
          },
          {
            en: 'Developed a multivariate multi-step Bitcoin price forecasting model using LSTM baseline and Sequence-to-Sequence architecture.',
            id: 'Mengembangkan model forecasting harga Bitcoin multivariate multi-step menggunakan baseline LSTM dan arsitektur Sequence-to-Sequence.',
          },
          {
            en: 'Developed an end-to-end AI-based Financial Analysis API using Deep Neural Network architecture with TensorFlow/Keras, FastAPI, Docker, and Hugging Face Spaces.',
            id: 'Mengembangkan API Analisis Keuangan berbasis AI end-to-end menggunakan arsitektur Deep Neural Network dengan TensorFlow/Keras, FastAPI, Docker, dan Hugging Face Spaces.',
          },
        ],
      },
      {
        title: {
          en: 'Digital Transformation - Internship',
          id: 'Digital Transformation - Magang',
        },
        subtitle: 'PT Krakatau Information Technology',
        date: {
          en: 'May 2026',
          id: 'Mei 2026',
        },
        location: 'Cilegon, Banten, Indonesia',
        bullets: [
          {
            en: 'Contributed to the development of a Flutter-based mobile application for the Tenancy Management System (TMS) Danareksa project by supporting feature development and improving the user interface.',
            id: 'Berkontribusi pada pengembangan aplikasi mobile berbasis Flutter untuk proyek Tenancy Management System (TMS) Danareksa dengan mendukung pengembangan fitur dan meningkatkan antarmuka pengguna.',
          },
          {
            en: 'Developed a cashflow forecasting model for a 13-week period with scenario analysis to support cashflow risk assessment and business decision-making.',
            id: 'Mengembangkan model forecasting cashflow untuk periode 13 minggu dengan analisis skenario untuk mendukung penilaian risiko cashflow dan pengambilan keputusan bisnis.',
          },
          {
            en: 'Conducted testing on the KIT SIAP application for attendance scenarios, including online/offline usage, synchronization, shift validation, and fake GPS detection.',
            id: 'Melakukan pengujian pada aplikasi KIT SIAP untuk skenario absensi, termasuk penggunaan online/offline, sinkronisasi, validasi shift, dan deteksi fake GPS.',
          },
          {
            en: 'Performed data labeling for Krakatau Steel Run 2 2025 visual assets through the Kravent admin platform.',
            id: 'Melakukan data labeling untuk aset visual Krakatau Steel Run 2 2025 melalui platform admin Kravent.',
          },
        ],
      },
      {
        title: 'Java Fundamentals & Java Programming',
        subtitle: 'Digital Talent Scholarship',
        date: 'Feb 2024 - Jul 2024',
        bullets: [
          {
            en: 'Participated in the Talent Scouting Academy program organized by Kementerian Komunikasi & Digital in collaboration with Oracle Academy.',
            id: 'Mengikuti program Talent Scouting Academy yang diselenggarakan oleh Kementerian Komunikasi & Digital bekerja sama dengan Oracle Academy.',
          },
          {
            en: 'Developed a Java-based employee attendance application as a final project.',
            id: 'Mengembangkan aplikasi absensi karyawan berbasis Java sebagai proyek akhir.',
          },
          {
            en: 'Created a space obstacle game using Greenfoot to strengthen object-oriented programming and basic game development skills.',
            id: 'Membuat game rintangan luar angkasa menggunakan Greenfoot untuk memperkuat pemrograman berorientasi objek dan dasar pengembangan game.',
          },
          {
            en: 'Built an animation project using Alice to apply visual programming concepts and interactive storytelling.',
            id: 'Membangun proyek animasi menggunakan Alice untuk menerapkan konsep visual programming dan storytelling interaktif.',
          },
        ],
      },
      {
        title: {
          en: 'Production Staff - Internship',
          id: 'Production Staff - Magang',
        },
        subtitle: 'SANKEN',
        date: 'Jun 2022 - Sep 2022',
        location: {
          en: 'Tangerang Regency, Banten, Indonesia',
          id: 'Kabupaten Tangerang, Banten, Indonesia',
        },
        bullets: [
          {
            en: 'Contributed to the production team at PT. Sanken Argadwija, focusing on operational data analysis, system management, process efficiency, and product quality consistency.',
            id: 'Berkontribusi di tim produksi PT. Sanken Argadwija, berfokus pada analisis data operasional, pengelolaan sistem, efisiensi proses, dan konsistensi kualitas produk.',
          },
        ],
      },
    ],
  },
  {
    title: {
      en: 'Organization',
      id: 'Organisasi',
    },
    icon: Users,
    items: [
      {
        title: 'Staff - Departemen Minat dan Bakat',
        subtitle: 'Himpunan Mahasiswa Informatika (HMIF) FT UNTIRTA',
        date: {
          en: 'Feb 2025 - Present',
          id: 'Feb 2025 - Sekarang',
        },
        bullets: [
          {
            en: 'Initiated and developed the IF Esport program as a platform for an active and competitive student gaming community.',
            id: 'Menginisiasi dan mengembangkan program IF Esport sebagai wadah komunitas gaming mahasiswa yang aktif dan kompetitif.',
          },
          {
            en: 'Served as the main coordinator in managing IF Esport activities, including program planning, participant coordination, and supervision of weekly events.',
            id: 'Berperan sebagai koordinator utama dalam mengelola kegiatan IF Esport, termasuk perencanaan program, koordinasi peserta, dan pengawasan acara mingguan.',
          },
          {
            en: 'Established and organized a Mobile Legends competition called IF ELSE League.',
            id: 'Membentuk dan menyelenggarakan kompetisi Mobile Legends bernama IF ELSE League.',
          },
          {
            en: 'Managed weekly esports activities for Valorant, EAFC, Chess, and Roblox to increase student participation and community engagement.',
            id: 'Mengelola kegiatan esports mingguan untuk Valorant, EAFC, Chess, dan Roblox untuk meningkatkan partisipasi mahasiswa dan keterlibatan komunitas.',
          },
          {
            en: 'Actively participated in IF Bugar activities such as futsal, basketball, and badminton.',
            id: 'Aktif mengikuti kegiatan IF Bugar seperti futsal, basket, dan bulu tangkis.',
          },
          {
            en: 'Conducted talent scouting to identify potential students in esports and sports.',
            id: 'Melakukan talent scouting untuk mengidentifikasi mahasiswa potensial di bidang esports dan olahraga.',
          },
        ],
      },
      {
        title: {
          en: 'Coordinator - Computer Network Competition, INFORTECHX 2026',
          id: 'Koordinator - Computer Network Competition, INFORTECHX 2026',
        },
        date: 'Feb 2026',
        bullets: [
          {
            en: 'Designed and prepared official participant regulations, competition mechanisms, and operational procedures.',
            id: 'Merancang dan menyiapkan peraturan resmi peserta, mekanisme kompetisi, dan prosedur operasional.',
          },
          {
            en: 'Developed the competition mechanism and case study using Cisco Packet Tracer, including topology scenarios, DHCP, routing, IP allocation, and connectivity testing.',
            id: 'Mengembangkan mekanisme lomba dan studi kasus menggunakan Cisco Packet Tracer, termasuk skenario topologi, DHCP, routing, alokasi IP, dan pengujian konektivitas.',
          },
          {
            en: 'Created participant worksheets, judge assessment sheets, scoring systems, and score transparency documentation.',
            id: 'Membuat lembar kerja peserta, lembar penilaian juri, sistem scoring, dan dokumentasi transparansi nilai.',
          },
          {
            en: 'Coordinated with judges regarding technical assessment procedures, evaluation standardization, and final result validation.',
            id: 'Berkoordinasi dengan juri terkait prosedur penilaian teknis, standardisasi evaluasi, dan validasi hasil akhir.',
          },
          {
            en: 'Managed the technical workflow of the competition professionally and fairly.',
            id: 'Mengelola alur teknis kompetisi secara profesional dan adil.',
          },
        ],
      },
      {
        title: {
          en: 'Coordinator - Field Coordinator Division, POM IF 2025',
          id: 'Koordinator - Divisi Koordinator Lapangan, POM IF 2025',
        },
        date: 'Jun 2025',
        bullets: [
          {
            en: 'Conducted pre-event site surveys for futsal, basketball, and badminton tournaments.',
            id: 'Melakukan survei lokasi pra-acara untuk turnamen futsal, basket, dan bulu tangkis.',
          },
          {
            en: 'Designed layout plans for athletes, supporters, and committee members.',
            id: 'Merancang layout untuk atlet, supporter, dan panitia.',
          },
          {
            en: 'Managed mobility flow, crowd control, safety protocols, and contingency plans.',
            id: 'Mengelola alur mobilitas, crowd control, protokol keselamatan, dan rencana kontingensi.',
          },
          {
            en: 'Oversaw on-the-day operations, venue readiness checks, and real-time issue handling.',
            id: 'Mengawasi operasional saat acara, pengecekan kesiapan venue, dan penanganan masalah secara real-time.',
          },
        ],
      },
      {
        title: {
          en: 'Staff - Equipment Division, DINAMIS KT 1',
          id: 'Staff - Divisi Perlengkapan, DINAMIS KT 1',
        },
        date: {
          en: 'May 2025 - Jun 2025',
          id: 'Mei 2025 - Jun 2025',
        },
        bullets: [
          {
            en: 'Prepared equipment and materials required for the event.',
            id: 'Menyiapkan perlengkapan dan material yang dibutuhkan untuk acara.',
          },
          {
            en: 'Transported logistical items and tools to the training location.',
            id: 'Mengangkut barang logistik dan alat ke lokasi pelatihan.',
          },
          {
            en: 'Assisted in setting up tents and essential event equipment.',
            id: 'Membantu pemasangan tenda dan perlengkapan penting acara.',
          },
          {
            en: 'Ensured all necessary items were available and functional throughout the activity.',
            id: 'Memastikan seluruh kebutuhan tersedia dan berfungsi sepanjang kegiatan.',
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    order: 1,
    title: 'Finary AI Model',
    category: {
      en: 'Machine Learning',
      id: 'Machine Learning',
    },
    filter: 'machine-learning',
    link: 'https://raamwhy-finary-model.hf.space/docs',
    thumbnail: '/images/portfolio/finary.png',
    description: {
      en: 'Deep Learning-based API designed to intelligently analyze user financial profiles, classify financial conditions, predict financial insights, and recommend suitable side hustles.',
      id: 'API berbasis Deep Learning yang dirancang untuk menganalisis profil keuangan pengguna secara cerdas, mengklasifikasikan kondisi keuangan, memprediksi insight keuangan, dan merekomendasikan side hustle yang sesuai.',
    },
    highlights: [
      {
        en: 'Financial Condition Classification: supervised multiclass classification using Deep Neural Network MLP with residual connection.',
        id: 'Klasifikasi Kondisi Keuangan: klasifikasi multiclass supervised menggunakan Deep Neural Network MLP dengan residual connection.',
      },
      {
        en: 'Insight Profile Model: multi-task learning combining regression and classification for next-month balance prediction and financial warning detection.',
        id: 'Insight Profile Model: multi-task learning yang menggabungkan regresi dan klasifikasi untuk prediksi saldo bulan berikutnya dan deteksi peringatan keuangan.',
      },
      {
        en: 'Side-Hustle Recommendation: multi-task learning model that estimates earning potential and recommends suitable side hustles based on user profile.',
        id: 'Rekomendasi Side-Hustle: model multi-task learning yang memperkirakan potensi pendapatan dan merekomendasikan side hustle yang sesuai berdasarkan profil pengguna.',
      },
    ],
  },
  {
    order: 2,
    title: 'Cashflow Forecasting',
    category: {
      en: 'Machine Learning',
      id: 'Machine Learning',
    },
    filter: 'machine-learning',
    link: 'https://github.com/raamwhy/cashflow-forecasting/blob/main/Cashflow%20Forecast%20Dashboard.pdf',
    thumbnail: '/images/portfolio/cashflow_forecast.png',
    description: {
      en: 'Cashflow forecasting dashboard designed to support 13-week financial planning, scenario analysis, and cashflow risk assessment.',
      id: 'Dashboard cashflow forecasting yang dirancang untuk mendukung perencanaan keuangan 13 minggu, analisis skenario, dan penilaian risiko cashflow.',
    },
    highlights: [
      {
        en: 'Forecasted short-term cashflow movement across a 13-week period.',
        id: 'Melakukan forecasting pergerakan cashflow jangka pendek selama periode 13 minggu.',
      },
      {
        en: 'Supported scenario analysis for financial risk assessment and business decision-making.',
        id: 'Mendukung analisis skenario untuk penilaian risiko keuangan dan pengambilan keputusan bisnis.',
      },
    ],
  },
  {
    order: 7,
    title: 'Image Classification Animals-10',
    category: {
      en: 'Machine Learning',
      id: 'Machine Learning',
    },
    filter: 'machine-learning',
    link: 'https://github.com/raamwhy/klasifikasi-gambar-10Animals',
    thumbnail: '/images/portfolio/animals10.png',
    description: {
      en: 'A multi-class animal image classification project across 10 categories using deep learning and transfer learning techniques.',
      id: 'Project klasifikasi gambar hewan multiclass dalam 10 kategori menggunakan deep learning dan teknik transfer learning.',
    },
    highlights: [
      {
        en: 'Built an image classification workflow for Animals-10 dataset categories.',
        id: 'Membangun workflow klasifikasi gambar untuk kategori dataset Animals-10.',
      },
      {
        en: 'Applied deep learning model training and evaluation for visual recognition tasks.',
        id: 'Menerapkan pelatihan dan evaluasi model deep learning untuk tugas pengenalan visual.',
      },
    ],
  },
  {
    order: 3,
    title: 'HijaukanKode',
    category: {
      en: 'Web Development',
      id: 'Pengembangan Web',
    },
    filter: 'web-development',
    link: 'https://hijaukankode.vercel.app/',
    thumbnail: '/images/portfolio/hijaukankode.png',
    description: {
      en: 'A web project with a clean environmental-themed interface focused on presenting HijaukanKode as a modern digital experience.',
      id: 'Project web dengan tampilan bersih bertema lingkungan yang menampilkan HijaukanKode sebagai pengalaman digital modern.',
    },
    highlights: [
      {
        en: 'Built as a responsive web interface with a simple and polished visual presentation.',
        id: 'Dibangun sebagai antarmuka web responsif dengan presentasi visual yang sederhana dan rapi.',
      },
    ],
  },
  {
    order: 4,
    title: 'Cleanora',
    category: {
      en: 'Web Development',
      id: 'Pengembangan Web',
    },
    filter: 'web-development',
    link: 'https://cleanora-service.vercel.app/',
    thumbnail: '/images/portfolio/cleanora.png',
    description: {
      en: 'A responsive cleaning service landing page with a polished interface, service sections, package information, and clear call-to-action flow.',
      id: 'Landing page layanan cleaning service yang responsif dengan tampilan rapi, section layanan, informasi paket, dan alur call-to-action yang jelas.',
    },
    highlights: [
      {
        en: 'Designed a modern service website experience with smooth interactions and responsive layout.',
        id: 'Merancang pengalaman website layanan modern dengan interaksi halus dan layout responsif.',
      },
    ],
  },
  {
    order: 5,
    title: 'VortaCreative',
    category: {
      en: 'Web Development',
      id: 'Pengembangan Web',
    },
    filter: 'web-development',
    link: 'https://vortacreative.vercel.app/',
    thumbnail: '/images/portfolio/vortacreative.png',
    description: {
      en: 'A creative web project presenting VortaCreative with a polished, responsive interface and clear brand-focused visual direction.',
      id: 'Project web kreatif yang menampilkan VortaCreative dengan antarmuka responsif yang rapi dan arahan visual brand yang jelas.',
    },
    highlights: [
      {
        en: 'Built as a modern brand website with responsive presentation across screen sizes.',
        id: 'Dibangun sebagai website brand modern dengan tampilan responsif di berbagai ukuran layar.',
      },
    ],
  },
  {
    order: 6,
    title: 'EduCourse Admin Dashboard',
    category: {
      en: 'Web Development',
      id: 'Pengembangan Web',
    },
    filter: 'web-development',
    link: 'https://educourse-admin.vercel.app/',
    thumbnail: '/images/portfolio/educourse_admin.png',
    description: {
      en: 'An admin dashboard for managing EduCourse operations with a structured interface for academic data and learning management workflows.',
      id: 'Dashboard admin untuk mengelola operasional EduCourse dengan antarmuka terstruktur untuk data akademik dan alur manajemen pembelajaran.',
    },
    highlights: [
      {
        en: 'Built a clean dashboard experience for monitoring and managing course management activities.',
        id: 'Membangun pengalaman dashboard yang rapi untuk memantau dan mengelola aktivitas course management.',
      },
    ],
  },
];

export const contactCards = [
  {
    title: {
      en: 'Email',
      id: 'Email',
    },
    value: 'ramwjay@gmail.com',
    href: 'mailto:ramwjay@gmail.com',
    icon: Mail,
  },
  {
    title: {
      en: 'Phone',
      id: 'Telepon',
    },
    value: '083879831873',
    href: 'https://wa.me/6283879831873',
    icon: Phone,
  },
  {
    title: {
      en: 'Location',
      id: 'Lokasi',
    },
    value: 'Tangerang, Banten, Indonesia',
    icon: MapPin,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/ram-wijaya',
    href: 'https://www.linkedin.com/in/ram-wijaya',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    value: 'github.com/raamwhy',
    href: 'https://github.com/raamwhy',
    icon: Github,
  },
  {
    title: 'Instagram',
    value: 'instagram.com/raamwhy',
    href: 'https://www.instagram.com/raamwhy',
    icon: Instagram,
  },
  {
    title: 'YouTube',
    value: 'youtube.com/@raamwhy',
    href: 'https://www.youtube.com/@raamwhy',
    icon: Youtube,
  },
];
