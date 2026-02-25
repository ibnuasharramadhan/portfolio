const updateYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    page_title: "Portfolio | Full Stack Developer",
    meta_description:
      "Full Stack Developer portfolio: 5+ years building government, banking, and enterprise systems.",
    nav_about: "About",
    nav_experience: "Experience",
    nav_impact: "Impact",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_collaborate: "Collaborate",
    hero_eyebrow: "Full Stack Developer • 5+ years experience",
    hero_title:
      "Building digital products that are <span class=\"accent\">secure, scalable</span>, and impactful.",
    hero_lead:
      "A Full Stack Developer with 5+ years of experience focused on building innovative software solutions for government, banking, and enterprise sectors. Experienced in delivering robust, maintainable, and scalable systems.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact Me",
    hero_cta_cv: "Download CV",
    hero_stat1_value: "5+ Years",
    hero_stat1_label: "Professional Experience",
    hero_stat2_value: "11+ Projects",
    hero_stat2_label: "Government & Enterprise",
    hero_stat3_value: "#NeverStopLearning",
    hero_stat3_label: "Growth Mindset",
    profile_role: "Full Stack Developer",
    profile_tag_years: "5+ Years",
    profile_tag_sector: "Gov • Banking • Enterprise",
    profile_availability: "Open to Collaboration",
    panel_core_title: "Core Expertise",
    panel_tools_title: "Tools",
    panel_tools_text: "Git • Linux • Postman",
    panel_methods_title: "Methods",
    panel_methods_text: "SDLC • UML • MVC / HMVC / MVP",
    panel_career_title: "Career Snapshot",
    panel_career_p1:
      "Started with a Computer Science background and a passion for coding. Began as a Junior Programmer in IT Consulting, building websites for state-owned enterprises. Now focused on payroll monitoring, banking, and government travel applications.",
    panel_career_p2: "Training: Fullstack MERN at CODE.ID.",
    about_eyebrow: "About",
    about_title: "Impact-driven, fueled by curiosity.",
    about_p1:
      "I believe the best technology comes from collaboration, creative problem-solving, and endless curiosity. In every project, I balance technical quality with business needs so solutions stay relevant and evolve.",
    about_p2:
      "My values: responsible, honest, communicative, and always ready to help the team deliver meaningful outcomes.",
    strengths_title: "Strengths",
    strength_1: "Design secure, well-structured backends.",
    strength_2: "Integrate responsive, user-friendly frontends.",
    strength_3: "Optimize databases for performance and reliability.",
    strength_4: "Apply SDLC best practices and design patterns.",
    exp_eyebrow: "Experience",
    exp_title: "Career journey & key contributions.",
    exp_time1: "2018 — Present",
    exp_role1: "Full Stack Developer",
    exp_desc1:
      "Building monitoring, payroll, and government systems with a focus on scalability and data security.",
    exp_time2: "2016 — 2018",
    exp_role2: "Junior Programmer (IT Consulting)",
    exp_desc2:
      "Directly involved in building websites for state-owned enterprises, shaping industry understanding early in my career.",
    exp_time3: "Training",
    exp_role3: "Fullstack MERN • CODE.ID",
    exp_desc3:
      "Strengthened modern JavaScript stack skills, API integration, and deployment workflow.",
    impact_eyebrow: "Impact",
    impact_title: "Numbers that reflect my impact.",
    impact_label1: "Years of Experience",
    impact_label2: "Projects Delivered",
    impact_label3: "Industry Sectors",
    impact_label4: "Core Frameworks",
    projects_eyebrow: "Projects",
    projects_title: "Client-based & government projects I have worked on.",
    projects_group1: "Client-Based • PT Bank Mega",
    proj1_title: "Transmart E-Coupon",
    proj1_desc:
      "Continued development of the e-coupon app with Spring Boot backend and ReactJS frontend.",
    proj2_title: "Data Cleansing Monitoring",
    proj2_desc:
      "Built a data cleansing monitoring system for banking with Spring Boot backend and Laravel Blade frontend.",
    proj3_title: "Credit Control Monitoring",
    proj3_desc: "Credit control dashboard to support banking operations.",
    proj4_title: "CC History",
    proj4_desc: "Credit control history application for internal analysis and audits.",
    projects_group2: "Government & Enterprise",
    proj5_title: "TNDE Archive System • KEMENKES",
    proj5_desc: "Maintenance of the TNDE archival system using CodeIgniter 3.",
    proj6_title: "Payroll System • KEMENKES",
    proj6_desc: "Payroll application using CodeIgniter 4 and Spring Boot.",
    proj7_title: "Government Travel Request • KEMENKES",
    proj7_desc: "Travel request application built with a monolith Spring Boot architecture.",
    proj8_title: "Archive Document System • KOMINFO",
    proj8_desc: "Built and developed an archival document system.",
    proj9_title: "Ship Travel Permit • Ministry of Marine Affairs",
    proj9_desc: "Ship travel permit application for the ministry.",
    proj10_title: "KMS • PT PLN Engineering",
    proj10_desc: "Knowledge Management System built with native PHP.",
    proj11_title: "SIPEG • PT Rekadaya Elektrika",
    proj11_desc: "Employee information system using native PHP and JavaScript.",
    skills_eyebrow: "Skills",
    skills_title: "Tech stack I use every day.",
    skill_backend_title: "Backend",
    skill_backend_desc: "Java (Spring Boot), PHP (Laravel, CodeIgniter 4), Node.js",
    skill_frontend_title: "Frontend",
    skill_frontend_desc: "JavaScript, ReactJS, jQuery, AJAX",
    skill_db_title: "Database",
    skill_db_desc: "MySQL, PostgreSQL",
    skill_workflow_title: "Workflow",
    skill_workflow_desc: "Git, Linux, Postman, SDLC, UML",
    skill_patterns_title: "Patterns",
    skill_patterns_desc: "MVC, HMVC, MVP",
    contact_eyebrow: "Contact",
    contact_title: "Let's build solutions that matter.",
    contact_desc:
      "Open to new collaborations, enterprise projects, or discussions around digital transformation needs.",
    footer_text:
      "© <span id=\"year\"></span> IBNU ASHAR RAMADHAN. All rights reserved."
  },
  id: {
    page_title: "Portofolio | Full Stack Developer",
    meta_description:
      "Portofolio Full Stack Developer: pengalaman 5+ tahun membangun sistem pemerintah, perbankan, dan enterprise.",
    nav_about: "Tentang",
    nav_experience: "Pengalaman",
    nav_impact: "Dampak",
    nav_projects: "Project",
    nav_skills: "Keahlian",
    nav_contact: "Kontak",
    nav_collaborate: "Kolaborasi",
    hero_eyebrow: "Full Stack Developer • 5+ tahun pengalaman",
    hero_title:
      "Membangun produk digital yang <span class=\"accent\">aman, skalabel</span>, dan berdampak.",
    hero_lead:
      "Full Stack Developer dengan pengalaman lebih dari 5 tahun yang fokus membangun solusi software inovatif untuk sektor pemerintah, perbankan, dan enterprise. Terbiasa menghadirkan sistem yang kuat, mudah dirawat, dan siap tumbuh.",
    hero_cta_projects: "Lihat Project",
    hero_cta_contact: "Hubungi Saya",
    hero_cta_cv: "Unduh CV",
    hero_stat1_value: "5+ Tahun",
    hero_stat1_label: "Pengalaman Profesional",
    hero_stat2_value: "11+ Project",
    hero_stat2_label: "Government & Enterprise",
    hero_stat3_value: "#NeverStopLearning",
    hero_stat3_label: "Mindset Bertumbuh",
    profile_role: "Full Stack Developer",
    profile_tag_years: "5+ Tahun",
    profile_tag_sector: "Pemerintah • Perbankan • Enterprise",
    profile_availability: "Terbuka untuk Kolaborasi",
    panel_core_title: "Keahlian Inti",
    panel_tools_title: "Tools",
    panel_tools_text: "Git • Linux • Postman",
    panel_methods_title: "Metode",
    panel_methods_text: "SDLC • UML • MVC / HMVC / MVP",
    panel_career_title: "Ringkasan Karier",
    panel_career_p1:
      "Berawal dari latar belakang Computer Science dan passion coding. Menjadi Junior Programmer di IT Consulting dan mengerjakan website BUMN. Kini fokus pada sistem monitoring payroll, banking, dan aplikasi perjalanan dinas pemerintah.",
    panel_career_p2: "Training: Fullstack MERN di CODE.ID.",
    about_eyebrow: "Tentang",
    about_title: "Berfokus pada dampak, didorong rasa ingin tahu.",
    about_p1:
      "Saya percaya teknologi terbaik lahir dari kolaborasi, problem solving kreatif, dan keingintahuan yang tak pernah habis. Di setiap project, saya menyeimbangkan kualitas teknis dengan kebutuhan bisnis agar solusi tetap relevan dan berkembang.",
    about_p2:
      "Nilai kerja saya: bertanggung jawab, jujur, komunikatif, dan siap membantu tim untuk mencapai target yang bermakna.",
    strengths_title: "Keunggulan",
    strength_1: "Mendesain backend yang aman dan terstruktur.",
    strength_2: "Mengintegrasikan frontend responsif dan ramah pengguna.",
    strength_3: "Mengoptimalkan database untuk performa dan reliability.",
    strength_4: "Menerapkan best practice SDLC dan design pattern.",
    exp_eyebrow: "Pengalaman",
    exp_title: "Perjalanan karier & kontribusi utama.",
    exp_time1: "2018 — Sekarang",
    exp_role1: "Full Stack Developer",
    exp_desc1:
      "Menangani pengembangan sistem monitoring, payroll, dan aplikasi pemerintahan dengan fokus pada skalabilitas dan keamanan data.",
    exp_time2: "2016 — 2018",
    exp_role2: "Junior Programmer (IT Consulting)",
    exp_desc2:
      "Terlibat langsung dalam pengembangan website untuk BUMN yang membentuk fondasi pemahaman industri sejak awal karier.",
    exp_time3: "Training",
    exp_role3: "Fullstack MERN • CODE.ID",
    exp_desc3:
      "Memperkuat skill modern JavaScript stack, integrasi API, dan workflow deployment.",
    impact_eyebrow: "Dampak",
    impact_title: "Angka yang menggambarkan dampak kerja saya.",
    impact_label1: "Tahun Pengalaman",
    impact_label2: "Project Terselesaikan",
    impact_label3: "Sektor Industri",
    impact_label4: "Framework Utama",
    projects_eyebrow: "Project",
    projects_title: "Project client-based & government yang pernah dikerjakan.",
    projects_group1: "Client Based • PT Bank Mega",
    proj1_title: "Transmart E-Coupon",
    proj1_desc:
      "Pengembangan lanjutan aplikasi e-coupon dengan backend Spring Boot dan frontend ReactJS.",
    proj2_title: "Data Cleansing Monitoring",
    proj2_desc:
      "Membangun sistem monitoring data cleansing perbankan dengan backend Spring Boot dan frontend Laravel Blade.",
    proj3_title: "Credit Control Monitoring",
    proj3_desc: "Dashboard credit control untuk mendukung operasional perbankan.",
    proj4_title: "CC History",
    proj4_desc: "Aplikasi histori credit control untuk analisis dan audit internal.",
    projects_group2: "Government & Enterprise",
    proj5_title: "Sistem Arsip TNDE • KEMENKES",
    proj5_desc: "Pemeliharaan sistem kearsipan TNDE menggunakan CodeIgniter 3.",
    proj6_title: "Sistem Penggajian • KEMENKES",
    proj6_desc: "Aplikasi penggajian menggunakan CodeIgniter 4 dan Spring Boot.",
    proj7_title: "Pengajuan Perjalanan Dinas • KEMENKES",
    proj7_desc: "Aplikasi pengajuan perjalanan dinas berbasis monolith Spring Boot.",
    proj8_title: "Sistem Dokumen Arsip • KOMINFO",
    proj8_desc: "Membangun dan mengembangkan sistem dokumen arsip.",
    proj9_title: "Surat Izin Jalan Kapal • Kementerian Kelautan",
    proj9_desc: "Aplikasi surat izin jalan kapal untuk kementerian.",
    proj10_title: "KMS • PT PLN Engineering",
    proj10_desc: "Knowledge Management System berbasis PHP native.",
    proj11_title: "SIPEG • PT Rekadaya Elektrika",
    proj11_desc: "Sistem kepegawaian menggunakan PHP native dan JavaScript.",
    skills_eyebrow: "Keahlian",
    skills_title: "Tech stack yang saya gunakan setiap hari.",
    skill_backend_title: "Backend",
    skill_backend_desc: "Java (Spring Boot), PHP (Laravel, CodeIgniter 4), Node.js",
    skill_frontend_title: "Frontend",
    skill_frontend_desc: "JavaScript, ReactJS, jQuery, AJAX",
    skill_db_title: "Database",
    skill_db_desc: "MySQL, PostgreSQL",
    skill_workflow_title: "Alur Kerja",
    skill_workflow_desc: "Git, Linux, Postman, SDLC, UML",
    skill_patterns_title: "Pola",
    skill_patterns_desc: "MVC, HMVC, MVP",
    contact_eyebrow: "Kontak",
    contact_title: "Mari bangun solusi yang berarti.",
    contact_desc:
      "Terbuka untuk kolaborasi baru, project enterprise, atau diskusi seputar kebutuhan digital transformation.",
    footer_text: "© <span id=\"year\"></span> IBNU ASHAR RAMADHAN. Semua hak dilindungi."
  }
};

const metaDescription = document.querySelector('meta[name="description"]');
const langToggle = document.querySelector(".lang-toggle");

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  if (dict.page_title) {
    document.title = dict.page_title;
  }

  if (metaDescription && dict.meta_description) {
    metaDescription.setAttribute("content", dict.meta_description);
  }

  if (langToggle) {
    langToggle.setAttribute(
      "aria-label",
      lang === "en" ? "Switch to Indonesian" : "Switch to English"
    );
  }

  updateYear();
};

const storedLang = localStorage.getItem("lang");
const initialLang = storedLang || "en";
applyLanguage(initialLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = document.documentElement.lang === "en" ? "id" : "en";
    localStorage.setItem("lang", nextLang);
    applyLanguage(nextLang);
  });
}

const revealElements = document.querySelectorAll("[data-reveal]");
if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

const progressBar = document.querySelector(".scroll-progress");
const updateProgress = () => {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

const navLinks = document.querySelectorAll(".nav-links a");
const navSections = Array.from(navLinks)
  .map((link) => {
    const id = link.getAttribute("href")?.replace("#", "");
    const section = id ? document.getElementById(id) : null;
    return section ? { link, section } : null;
  })
  .filter(Boolean);

const setActiveLink = () => {
  if (!navSections.length) return;
  const scrollPosition = window.scrollY + 200;
  let current = navSections[0];

  navSections.forEach((item) => {
    if (item.section.offsetTop <= scrollPosition) {
      current = item;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });

  if (current?.link) {
    current.link.classList.add("active");
    current.link.setAttribute("aria-current", "page");
  }
};

let isTicking = false;
const onScroll = () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      updateProgress();
      setActiveLink();
      isTicking = false;
    });
    isTicking = true;
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
  updateProgress();
  setActiveLink();
});

updateProgress();
setActiveLink();

const counterElements = document.querySelectorAll("[data-count]");
const animateCount = (el) => {
  const target = Number(el.dataset.count || 0);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = `${value}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = `${target}${suffix}`;
    }
  };

  window.requestAnimationFrame(step);
};

if (counterElements.length) {
  if (prefersReducedMotion) {
    counterElements.forEach((el) => {
      const suffix = el.dataset.suffix || "";
      el.textContent = `${el.dataset.count || 0}${suffix}`;
    });
  } else {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counterElements.forEach((el) => counterObserver.observe(el));
  }
}
