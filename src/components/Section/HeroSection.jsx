import { bannerHero } from "../../assets";

const HeroSection = ({onScrollToCard}) => {
  return (
    <section className="relative mb-10 mx-auto md:mt-35 md:mb-16 w-full max-w-xs  md:max-w-7xl">
      {/**Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${bannerHero})` }}
      ></div>

      {/**Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-bg-overlay to-bg-overlay rounded-xl"></div>

      {/**Content */}
      <div className="relative z-10 flex flex-col flex-wrap items-center px-5 py-10 md:pt-20 md:pb-16 md:px-42 gap-6 text-text-inverse">
        <div className="flex flex-col text-center gap-3">
          <h1 className="font-poppins font-bold text-2xl md:text-5xl">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="font-normal text-sm md:text-base">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </div>
        <button onClick={onScrollToCard} className="w-full max-w-2xs md:max-w-92 min-h-10 md:min-h-11 md:font-bold bg-btn-primary hover:bg-btn-primary-hover font-normal text-sm md:text-base rounded-xl cursor-pointer">
          Temukan Video Course untuk Dipelajari!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
