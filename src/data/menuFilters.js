export const menuFilters = [
  {
    label: "Bidang Study",
    type: "checkbox",
    key: "categories",
    items: ["Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"],
  },
  {
    label: "Harga",
    type: "checkbox",
    key: "prices",
    items: [
      { id: "p1", label: "Kurang dari 300K", min: 0, max: 300000 },
      { id: "p2", label: "300K - 500K", min: 300000, max: 500000 },
      { id: "p3", label: "Lebih dari 500K", min: 500000, max: 9999999999 },
    ],
  },
  {
    label: "Durasi",
    type: "radio",
    key: "duration",
    items: [
      { id: "d1", label: "Kurang dari 4 Jam", min: 0, max: 240 },
      { id: "d2", label: "4-8 Jam", min: 240, max: 480 },
      { id: "d3", label: "Lebih dari 8 Jam", min: 480, max: 99999 },
    ],
  },
];
