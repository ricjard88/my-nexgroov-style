import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Conditions from "@/components/Conditions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Methodology />
        <Divider />
        <Conditions />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
