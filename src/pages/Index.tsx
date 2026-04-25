import { Navbar } from "@/components/romance/Navbar";
import { Hero } from "@/components/romance/Hero";
import { EyesSection } from "@/components/romance/EyesSection";
import { Memories } from "@/components/romance/Memories";
import { Letter } from "@/components/romance/Letter";
import { Sorry } from "@/components/romance/Sorry";
import { Promises } from "@/components/romance/Promises";
import { Footer } from "@/components/romance/Footer";
import { FallingPetals } from "@/components/romance/FallingPetals";
import { HeartCursor } from "@/components/romance/Cursor";

const Index = () => {
  return (
    <main className="relative overflow-x-hidden">
      <FallingPetals />
      <HeartCursor />
      <Navbar />
      <Hero />
      <EyesSection />
      <Memories />
      <Letter />
      <Sorry />
      <Promises />
      <Footer />
    </main>
  );
};

export default Index;
