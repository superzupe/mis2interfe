import Header from "../components/Header/Header";
import AllVideosSection from "../components/Section/AllVideosSection";
import Footer from "../components/Footer/Footer";

const AllVideos = () => {
  return (
    <>
      <Header type="all-videos" />
      <main className="mt-30 mb-20">
        <AllVideosSection />
      </main>
      <Footer />
    </>
  );
};

export default AllVideos;
