import hardware from "../img/hardware.webp";
import screen from "../img/screen.webp";
export const WhatWeRepair = () => {
  return (
    <section className="what__we__repair">
      <div className="hardware__repair">
        <div className="what__we__repair__img">
          <img className="hardware__repair__img" src={hardware} alt="" />
        </div>
        <div className="hardware__repair__info">
          <div className="hardware__repair__info__title">Hardware Repair</div>
          <div className="hardware__repair__info__text">
            From battery replacements to fixing malfunctioning buttons, our
            expert technicians are equipped to handle a wide range of hardware
            issues with precision and care.
          </div>
          <div className="hardware__repair__info__text__little">
            Preliminary diagnostics is mandatory
          </div>
        </div>
      </div>
      <div className="screen__replasment">
        <div className="what__we__repair__img">
          <img src={screen} alt="" />
        </div>
        <div className="screen__replasment__info">
          <div className="screen__replasment__info__title">
            Screen Replacements
          </div>
          <div className="screen__replasment__info__text">
            We understand the frustration of dealing with a cracked or damaged
            screen. That's why we offer comprehensive screen replacement
            services for all gadgets.
          </div>
          <div className="screen__replasment__info__text__little">
            All models of top brands
          </div>
        </div>
      </div>
    </section>
  );
};
