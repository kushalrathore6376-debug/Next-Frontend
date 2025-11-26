import SectionAbout from "../../components/SectionAbout";
import TeamSection from "../../components/TeamSection";
import TimelineCarousel from "../../components/TimelineCarousel";
import KnowMoreSection from "../../components/KnowMoreSection";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <SectionAbout />
      <TeamSection />
      <TimelineCarousel />
      {/* <KnowMoreSection /> */}
    </div>
  );
}
