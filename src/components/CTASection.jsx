import { useState } from "react";
import { bannerCTA } from "../assets";

const CTASection = () => {
    const [value, setValue] = useState("");
    return (
      <>
        <section className="relative flex flex-col items-center mx-auto my-16 w-full max-w-xs md:max-w-7xl">
          {/**Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${bannerCTA})` }}
          ></div>

          {/**Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-bg-overlay to-bg-overlay rounded-sm"></div>

          {/**Content */}
          <div className="relative z-10 flex flex-col w-full max-w-xs md:max-w-200 px-7 py-10 md:px-35 md:py-22 gap-10">
            <div className="flex flex-col text-center gap-1">
              <p className="text-base md:text-lg font-medium text-text-gray-light">
                NEWSLETTER
              </p>
              <h3 className="font-poppins text-2xl md:text-4xl font-semibold text-text-inverse">
                Mau Belajar Lebih Banyak?
              </h3>
              <p className="text-sm md:text-base font-normal text-text-bg-light">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </p>
            </div>
            <form className="flex flex-col gap-4 md:flex-row md:justify-between md:w-full md:min-h-15 md:py-2 md:px-4 md:bg-bg-main rounded-xl">
              <input
                type="email"
                name="email"
                id="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Masukkan Emailmu"
                autoComplete="email"
                required
                className="bg-bg-main text-sm md:text-base font-medium text-text-main w-full max-w-xs text-center md:text-start p-3 border border-border-light md:border-none rounded-md focus:outline focus:outline-border-medium md:focus:outline-none"
              />
              <button
                type="submit"
                onClick={() => setValue(value)}
                className="w-full max-w-xs p-3 bg-btn-alt hover:bg-btn-alt-hover font-bold text-sm md:text-base md:max-w-33 text-text-inverse rounded-md md:rounded-xl cursor-pointer "
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </>
    );
}

export default CTASection;