import AboutHealthProblem from "@/components/SingleHealthPageComponents/AboutHealthProblem";
import HeroSection from "@/components/SingleHealthPageComponents/HeroSection";
import QuickConsultation from "@/components/SingleHealthPageComponents/QuickConsultation";
import TreatmentOption from "@/components/SingleHealthPageComponents/TreatmentOption";

function SingleHealthPage() {
  return (
    <div>
      <HeroSection />
      <AboutHealthProblem />
      <QuickConsultation />
      <TreatmentOption />
    </div>
  );
}

export default SingleHealthPage;
