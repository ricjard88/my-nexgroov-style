import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Conditions from "@/components/Conditions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Conditions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
