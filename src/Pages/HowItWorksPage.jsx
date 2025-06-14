import InnerSection from "@/components/Common/InnerSection";
import bgImg from "../assets/images/how-works-bg.png";
import WorkingProcess from "@/components/howItWorksComponents/WorkingProcess";
import OurMission from "@/components/howItWorksComponents/OurMission";
import TestimonialSection from "@/components/HomePageComponents/TestimonialSection";
import TeamSection from "@/components/HomePageComponents/TeamSection";

function HowItWorksPage() {
  return (
    <div>
      <InnerSection bgImg={bgImg} service="How It Works" />
      <WorkingProcess />
      {/* <OurMission /> */}
      <TeamSection />
      <TestimonialSection />
    </div>
  );
}

export default HowItWorksPage;
