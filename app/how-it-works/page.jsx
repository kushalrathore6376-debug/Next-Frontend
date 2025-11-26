import HeroWithBg from "../../components/HeroWithBg";
import HowItWorksSection from "../../components/HowItWorksSection";
import WhyItMattersSection from "../../components/WhyItMattersSection";
import IndustryReadinessSection from "../../components/IndustryReadinessSection";
import ModularScalableSystem from "../../components/ModularScalableSystem";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <HeroWithBg />
      <ModularScalableSystem />
      <HowItWorksSection />
      <WhyItMattersSection />
      <IndustryReadinessSection />
    </div>
  );
}







