import { AboutUsPageSection } from "./AboutUsSectionOnPage";
import { AboutUsPageProcess } from "./AboutUsPageProcess";
import { AboutUsPageSlider } from "./AboutUsPageSlider";

export const AboutUsPage = () => {
  return (
    <section className="about__us__page">
      <AboutUsPageSection />
      <AboutUsPageProcess />
      <AboutUsPageSlider />
    </section>
  );
};
