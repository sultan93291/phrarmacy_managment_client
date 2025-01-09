import HeroSection from "../components/HomePageComponents/HeroSection";
import SymptomsSection from "../components/HomePageComponents/SymptomsSection";
import PersonalizedSection from "../components/HomePageComponents/PersonalizedSection";
import PopularTreatment from "../components/HomePageComponents/PopularTreatment";
import HealthcareSection from "../components/HomePageComponents/HealthcareSection";
import TeamSection from "../components/HomePageComponents/TeamSection";
import TestimonialSection from "../components/HomePageComponents/TestimonialSection";
import FaqSection from "../components/HomePageComponents/FaqSection";


function HomePage() {
  return (
    <div className="mt-[75px] lg:mt-0">
      {/* <PageTitle title="Home" /> */}
      <HeroSection />
      <SymptomsSection />
      <PersonalizedSection />
      <PopularTreatment />
      <HealthcareSection />
      <TeamSection />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
}

export default HomePage;
