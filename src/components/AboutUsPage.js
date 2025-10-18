import { AboutUsPageSection } from "./AboutUsSectionOnPage";
import { AboutUsPageProcess } from "./AboutUsPageProcess";
import { AboutUsPageSlider } from "./AboutUsPageSlider";
import { AboutUsPageMission } from "./AboutUsPageMission";
import { AboutUsPageFAQ } from "./AboutUsPageFAQ";

export const AboutUsPage = () => {
  return (
    <section className="about__us__page">
      <AboutUsPageSection />
      <AboutUsPageProcess />
      <AboutUsPageSlider />
      <AboutUsPageMission />
      <AboutUsPageFAQ />
    </section>
  );
};
