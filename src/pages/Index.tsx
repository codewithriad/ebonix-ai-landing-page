import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Dashboard />
        {/* <FeaturesSection />
        <TestimonialsSection />
        <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
