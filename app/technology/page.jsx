import TechnologySection from "../../components/TechnologySection";
import CarbonCaptureSection from "../../components/CarbonCaptureSection";
import BECCSSection from "../../components/BECCSSection";
import DACSection from "../../components/DACSection";
import AdvantagesSection from "../../components/AdvantagesSection";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <TechnologySection />
      <CarbonCaptureSection />
      <BECCSSection />
      <DACSection />
      <AdvantagesSection />
    </div>
  );
}







