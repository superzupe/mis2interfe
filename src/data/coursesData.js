// Dummy data untuk React (export array "courses")
// Gunakan: import { courses } from './coursesData';

import {
  avDanu,
  avFarhan,
  avFauzan,
  avJihan,
  avJunior,
  avMarvin,
  avPerd,
  avSand,
  avSea,
  cardThum1,
  cardThum2,
  cardThum3,
  cardThum4,
  cardThum5,
  cardThum6,
  cardThum7,
  cardThum8,
  cardThum9,
} from "../assets";

export const courses = [
  // 🟢 Kategori: DESAIN
  {
    id: "c001",
    thumbnail: cardThum1,
    title: "UI/UX Design Fundamental",
    description:
      "Pelajari dasar desain antarmuka modern, prinsip estetika visual, pengalaman pengguna, serta bagaimana membangun sistem desain yang konsisten dan efisien untuk aplikasi digital.",
    instructor: {
      name: "Jihan Jitaputra",
      role: "Product Designer",
      company: "Blibli",
      avatar: avJihan,
    },
    category: "Desain",
    rating: { value: 4.7, reviews: 112 },
    price: 350000,
    priceLabel: "Rp 350K",
    tags: ["desain", "uiux", "creative"],
    durationMinutes: 240, // 4 jam
  },

  {
    id: "c002",
    thumbnail: cardThum7,
    title: "Photography & Visual Storytelling",
    description:
      "Pelajari komposisi, pencahayaan, dan narasi visual agar foto kamu mampu menyampaikan cerita yang kuat. Cocok untuk kreator konten dan desainer visual yang ingin mengasah rasa estetika.",
    instructor: {
      name: "Junior Panachai",
      role: "Visual Creator",
      company: "LensaWorks",
      avatar: avJunior,
    },
    category: "Desain",
    rating: { value: 4.3, reviews: 91 },
    price: 270000,
    priceLabel: "Rp 270K",
    tags: ["desain", "fotografi", "visual"],
    durationMinutes: 180, // 3 jam
  },

  // 🔵 Kategori: PEMASARAN
  {
    id: "c003",
    thumbnail: cardThum4,
    title: "Digital Marketing Mastery",
    description:
      "Optimalkan strategi pemasaran digital dengan SEO, iklan berbayar, dan analisis data. Pahami cara menjangkau audiens yang tepat dan meningkatkan konversi bisnis secara berkelanjutan.",
    instructor: {
      name: "Fauzan Jirapong",
      role: "Digital Marketing Specialist",
      company: "Shopee",
      avatar: avFauzan,
    },
    category: "Pemasaran",
    rating: { value: 4.8, reviews: 172 },
    price: 520000,
    priceLabel: "Rp 520K",
    tags: ["marketing", "seo", "ads"],
    durationMinutes: 360, // 6 jam
  },

  {
    id: "c004",
    thumbnail: cardThum3,
    title: "Content Writing for Brand Awareness",
    description:
      "Kuasai teknik storytelling, tone of voice, dan strategi penulisan agar kontenmu mampu meningkatkan awareness dan engagement di media sosial maupun situs web perusahaan.",
    instructor: {
      name: "Danu Natachai",
      role: "Content Strategist",
      company: "GoTo",
      avatar: avDanu,
    },
    category: "Pemasaran",
    rating: { value: 4.5, reviews: 88 },
    price: 280000,
    priceLabel: "Rp 280K",
    tags: ["content", "marketing", "writing"],
    durationMinutes: 210, // 3.5 jam
  },

  // 🟣 Kategori: PENGEMBANGAN DIRI
  {
    id: "c005",
    thumbnail: cardThum6,
    title: "Public Speaking Confidence",
    description:
      "Bangun rasa percaya diri saat berbicara di depan umum. Pelajari cara mengatur nada suara, gestur tubuh, serta storytelling yang memikat audiens dalam situasi profesional.",
    instructor: {
      name: "Sandya Pongsawan",
      role: "Communication Coach",
      company: "ImpactTalk",
      avatar: avSand,
    },
    category: "Pengembangan Diri",
    rating: { value: 4.4, reviews: 134 },
    price: 250000,
    priceLabel: "Rp 250K",
    tags: ["softskill", "publicspeaking"],
    durationMinutes: 150, // 2.5 jam
  },

  {
    id: "c006",
    thumbnail: cardThum9,
    title: "Career Growth & Personal Branding",
    description:
      "Bangun citra profesional dan reputasi digitalmu. Pelajari cara mengelola LinkedIn, membangun kehadiran online yang positif, dan menciptakan peluang karier melalui personal branding.",
    instructor: {
      name: "Farhan Natawan",
      role: "Career Consultant",
      company: "LinkedGrow",
      avatar: avFarhan,
    },
    category: "Pengembangan Diri",
    rating: { value: 4.5, reviews: 132 },
    price: 320000,
    priceLabel: "Rp 320K",
    tags: ["career", "branding", "softskill"],
    durationMinutes: 200, // ±3 jam 20 menit
  },

  // 🟠 Kategori: BISNIS
  {
    id: "c007",
    thumbnail: cardThum2,
    title: "Entrepreneurship Bootcamp",
    description:
      "Pelajari langkah-langkah membangun bisnis dari nol: mulai dari validasi ide, analisis pasar, hingga strategi pertumbuhan yang berkelanjutan dengan studi kasus nyata.",
    instructor: {
      name: "Samudra Tawinan",
      role: "Business Developer",
      company: "Tokopedia",
      avatar: avSea,
    },
    category: "Bisnis",
    rating: { value: 4.8, reviews: 154 },
    price: 490000,
    priceLabel: "Rp 490K",
    tags: ["bisnis", "startup", "entrepreneur"],
    durationMinutes: 480, // 8 jam
  },

  {
    id: "c008",
    thumbnail: cardThum8,
    title: "Business Data Analytics",
    description:
      "Gunakan data untuk mengambil keputusan bisnis yang lebih tepat. Pelajari dasar analisis data, visualisasi, dan interpretasi insight yang relevan bagi perusahaan.",
    instructor: {
      name: "Perdana Tanaputra",
      role: "Data Analyst",
      company: "Bukalapak",
      avatar: avPerd,
    },
    category: "Bisnis",
    rating: { value: 4.9, reviews: 301 },
    price: 600000,
    priceLabel: "Rp 600K",
    tags: ["bisnis", "data", "analytics"],
    durationMinutes: 540, // 9 jam
  },

  {
    id: "c009",
    thumbnail: cardThum5,
    title: "Product Management Essentials",
    description:
      "Pelajari peran penting seorang Product Manager dalam menghubungkan bisnis, desain, dan teknologi. Dapatkan panduan membangun roadmap produk yang efektif dan terukur.",
    instructor: {
      name: "Marvin Jirutama",
      role: "Product Manager",
      company: "Traveloka",
      avatar: avMarvin,
    },
    category: "Bisnis",
    rating: { value: 4.7, reviews: 210 },
    price: 550000,
    priceLabel: "Rp 550K",
    tags: ["bisnis", "product", "management"],
    durationMinutes: 300, // 5 jam
  },
];
