import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind, 
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cloudtel,
  tekion,
  linux,
  kubernetes,
  nginx,
  apache,
  githubactions,
  jenkins,
  bootstrap,
  java,
  mysql,
  postgresql,
  sqlite,
  firebase,
  flask,
  fastapi,
  django,
  postman,
  python,
  c,
  cpp,
  bash,
  aws,
  gcp,
  heroku,
  votify,
  buyNsell,
  admindashboard,
  hackerrank,
  awsccp,
  gcpdg,
  pythoncert,
  awsball,
  az900,
  petrokimia,
  plnicon,
  alfath,
  bnsp,
  dicoding,
  kominfo,
  cerBnsp,
  cerManpro,
  cerPython,
  cerScience,
  cerSql,
  cerVsga,
  damkar,
  mapspotensial,
  metative,
  psikoline,
  sellerin,
  vangkringan,
  bredo,
  nabila,
  quran,
  simapos,
  polije,
  man4,
  microsoft

} from "../assets";

export const about = "I am a fresh graduate from Applied Bachelor of Informatics Engineering. I have strong interest and experience as a Fullstack Developer"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Desktop Developer",
    icon: mobile,
  },
  {
    title: "AI & IoT",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },

  {
    name: "typescript",
    icon: typescript,
  },

  {
    name: "c",
    icon: c,
  },
  {
    name: "java",
    icon: java,
  },
    {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Departemen Manajemen Produk Baru",
    company_name: "PT Petrokimia Gresik",
    icon: petrokimia,
    iconBg: "#FFF",
    date: "Oct 2025 - Present",
    points: [
      "Conducted market surveys for new product development",
      "Analyzed market potential and product promotion",
      "Developed market potential data applications",
    ],
  },
  { 
    title: "Divisi Operasi Pemeliharaan dan Aset",
    company_name: "PLN Icon Plus",
    icon: plnicon,
    iconBg: "#FFF",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Operation and maintenance of company assets",
      "Developed applications to support operational activities",
      "Built digital solutions for internal divisions",
    ],
  },
    {
    title: "Divisi IT",
    company_name: "PT Alfath Corp",
    icon: alfath,
    iconBg: "#FFF",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Developed applications based on client requirements",
      "Maintained and enhanced client applications",
      "Built internal operational systems",

    ],
  }
];

const educations = [
  {
    school: "State Polytechnic of Jember",
    icon: polije,
    degree: "Applied Bachelor's Degree in Information Technology",
    date: "Aug 2021 - Aug 2025",
    score: "IPK: 3.75/4.00",
    activities: [
      "Student Executive Board – Hastabrata Cabinet (2021–2022)",
      "Student Executive Board – Saturasi Cabinet (2022–2023)",
    ],
  },
  {
    school: "MAN 4 Banyuwangi",
    icon: man4,
    degree: "Senior High School, Mathematics and Science",
    date: "Jun 2018 - Jun 2021",
    score: "Averrage: 87/100",
    activities: [
       "Student Council Organization (2018–2020)",
    ],
  },
];

const certifications = [
  {
    name: "Web Developer – BNSP",
    image: cerBnsp,
    icon: bnsp,
    url: "https://s.id/sertifbnsp_afizi2025",
  },
  {
    name: "Junior Web Developer – VSGA BPSDM",
    image: cerVsga,
    icon: kominfo,
    url: "https://s.id/sertifvsga2024_afizi",
  },
  {
    name: "Python Programming - Dicoding",
    image: cerPython,
    icon: dicoding,
    url: "https://drive.google.com/file/d/1UdbyOvdfVpMnN3clKCEqBDpmsroZMkAj/view?usp=sharing",
  },
  {
    name: "Data Science - Dicoding",
    image: cerScience,
    icon: dicoding,
    url: "https://drive.google.com/file/d/11xLl4CY16FPC3bb_K3pO67ua7X8eesDJ/view?usp=sharing",
  },
    {
    name: "Projek Management - Dicoding",
    image: cerManpro,
    icon: dicoding,
    url: "https://drive.google.com/file/d/1-Zw6XRuZVAJ69jiYaKXIz2VTttHpVLIq/view?usp=sharing",
  },
    {
    name: "Structured Query Language (SQL) - Dicoding",
    image: cerSql,
    icon: dicoding,
    url: "https://drive.google.com/file/d/1OUtjylbv4VM8kAAnCrk2ZA25XYYPnsk7/view?usp=sharing",
  },
];

const projects = [
  {
    name: "e-damkar",
    description:
      "A website used by firefighters to manage public reports related to monitoring and evaluation (M&E) of fire department activities.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: damkar,
    source_code_link: "https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/details/projects/",
  },
  {
    name: "1petapasar",
    description:
      "A website that designed to map and analyze market potential, helping users identify strategic business locations based on demographic data.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "bun", color: "pink-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
    ],
    image: mapspotensial,
    source_code_link: "https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/details/projects/",
  },
  {
    name: "AMetativeHLE",
    description:
      "An educational web application built to measure and improve metacognitive skills, featuring personalized learning assessments and cognitive performance tracking.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: metative,
    source_code_link: "https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/details/projects/",
  },
  {
    name: "Psikoline",
    description:
      "An integrated psychological testing platform that simplifies the recruitment process with automated online assessments and real-time result generation.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: psikoline,
    source_code_link: "https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/details/projects/",
  },
  {
    name: "Seller.in",
    description:
      "A comprehensive management system for resellers to streamline inventory control, sales tracking, and communication between distributors and sellers.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: sellerin,
    source_code_link: "https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/details/projects/",
  },
  {
    name: "VAngkringan",
    description:
      "A digital point-of-sale (POS) and inventory management system specifically designed to digitize traditional Angkringan business operations and daily reporting.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "bootstrap", color: "green-text-gradient" },
      { name: "php", color: "pink-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
    ],
    image: vangkringan,
    source_code_link: "https://www.linkedin.com/in/ahmad-firdaus-tarmidzi-503629221/details/projects/",
  },
];

export { services, technologies, experiences, educations, certifications, projects };