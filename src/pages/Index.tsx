import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Choose from "@/components/Choose";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Choose />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
