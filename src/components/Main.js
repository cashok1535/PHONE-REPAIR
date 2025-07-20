import { InteractivePhone } from "./InteractivePhone";
import manRepair from "../img/manRepair.webp";
import { WhatWeDo } from "./WhatWeDo";
import { AboutUsSection } from "./AboutUsSection";
export const Main = () => {
  return (
    <main className="main">
      <InteractivePhone />
      <div className="man__rapair__parrent">
        <img className="man__repair" src={manRepair} alt="" />
      </div>
      <WhatWeDo />
      <AboutUsSection />
    </main>
  );
};
