import { CoreScroll } from "@/components/CoreScroll";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { LogoMarquee } from "@/components/LogoMarquee";
import { OtherTools } from "@/components/OtherTools";
import { StatsSection } from "@/components/StatsSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen dark">
      <CoreScroll />
      <ProjectShowcase />
      <LogoMarquee />
      <OtherTools />
      <StatsSection />
      <FAQ />
      <Footer />
    </div>
  );
}
