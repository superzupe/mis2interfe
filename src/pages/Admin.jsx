import Header from "../components/Header/Header";
import AdminSection from "../components/Section/AdminSection";
import Footer from "../components/Footer/Footer";

const Admin = () => {
  return (
    <>
      <Header type="admin" />
      <main className="mt-30 mb-20">
        <AdminSection />
      </main>
      <Footer />
    </>
  );
};

export default Admin;
