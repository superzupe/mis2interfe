import { useState } from "react";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";

const FooterLink = () => {
  const link = [
    {
      title: "Kategori",
      items: [
        "Digital & Teknologi",
        "Pemasaran",
        "Manajemen Bisnis",
        "Pengembangan Diri",
        "Desain",
      ],
    },
    {
      title: "Perusahaan",
      items: [
        "Tentang Kami",
        "FAQ",
        "Kebijakan Privasi",
        "Ketentuan Layanan",
        "Bantuan",
      ],
    },
    { title: "Komunitas", items: ["Tips Sukses", "Blog"] },
  ];

  const [showList, setShowList] = useState(Array(link.length).fill(false));

  const handleShow = (index) => {
    const updated = [...showList];
    updated[index] = !updated[index];
    setShowList(updated); //nilainya bergantung pada nilai updated skrg, yang nilai awalnya sama dengan nilai showList
  };

  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        {link.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between items-center md:flex-col md:justify-start md:items-start gap-4">
              <h3 className="font-bold text-base text-text-main">
                {item.title}
              </h3>
              <ul className="hidden md:flex flex-col gap-3 ">
                {item.items.map((e, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="font-medium text-base text-text-base hover:text-text-main transition-all duration-300 ease-in-out"
                    >
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleShow(index)}
                className="text-xl text-text-base md:hidden"
              >
                {showList[index] ? <HiChevronDown /> : <HiChevronRight />}
              </button>
            </div>
            {showList[index] && (
              <ul className="flex flex-col gap-1 md:hidden">
                {item.items.map((e, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="font-medium text-sm text-text-base"
                    >
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterLink;
