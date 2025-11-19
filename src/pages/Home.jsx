import { useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";

const Home = () => {
  const cardRef = useRef(null);

  const scrollToCard = () => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header type="main" />
      <main>
        <HeroSection onScrollToCard={scrollToCard} />
        <CardSection ref={cardRef} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
