import { InteractivePhone } from "./InteractivePhone";
import manRepair from "../img/manRepair.webp";
import { WhatWeDo } from "./WhatWeDo";
import { AboutUsSection } from "./AboutUsSection";
import { WhatWeRepair } from "./WhatWeRepair";
import { Achivments } from "./Achivments";
import { HowWeWork } from "./HowWeWork";
import { Services } from "./Services";
import { CTA } from "./CTA";
import { CallUs } from "./CallUs";
import { FAQ } from "./FAQ";
import { NewsSlider } from "./NewsSlider";
export const Main = () => {
  return (
    <main className="main">
      <InteractivePhone />
      <div className="man__rapair__parrent">
        <img className="man__repair" src={manRepair} alt="" />
      </div>
      <WhatWeDo />
      <AboutUsSection />
      <WhatWeRepair />
      <Achivments />
      <HowWeWork />
      <Services />
      <CTA />
      <CallUs />
      <FAQ />
      <NewsSlider />
    </main>
  );
};

//fix <CallUs /> , <Services />, <NewsSlider />
