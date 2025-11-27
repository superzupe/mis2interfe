import { useRef } from "react";
import Header from "../components/Header/Header";
import HeroSection from '../components/Section/HeroSection'
import CTASection from "../components/Section/CTASection";
import VideosSection from "../components/Section/VideosSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const cardRef = useRef(null);

  const scrollToCard = () => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header type="main" />
      <main className="mt-30">
        <HeroSection onScrollToCard={scrollToCard} />
        <VideosSection
          type="main"
          ref={cardRef}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
