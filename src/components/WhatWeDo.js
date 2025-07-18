import repairGrid1 from "../img/rapairGrid1.svg";
import repairGrid2 from "../img/repairGrid2.svg";
import repairGrid3 from "../img/repairGrid3.svg";
import repairGrid4 from "../img/repairGrid4.svg";
import repairGrid5 from "../img/RepairGrid5.svg";

export const WhatWeDo = () => {
  return (
    <section className="what__we__do">
      <div className="what__we__do__grid">
        <div className="what__we__do__grid__title">
          <div className="orange__title">WE REPAIR YOUR GADGES</div>
          <div className="what__we__do__title">
            WE MAKE MOBILE REPAIR STRESS-FREE
            <span className="interactive__flex__info__orange">.</span>
          </div>
        </div>
        <div className="what__we__do__grid__element">
          <img
            src={repairGrid1}
            className="what__we__do__grid__element__img"
            alt=""
          />
          <div className="what__we__do__grid__element__title">
            Poor Battery Life
          </div>
          <div className="what__we__do__grid__element__text">
            Revive your device's stamina with TechPro's battery replacement
            service.
          </div>
          <div className="what__we__do__grid__element__price">
            Repairs from $ 38
          </div>
        </div>
        <div className="what__we__do__grid__element">
          <img
            src={repairGrid2}
            className="what__we__do__grid__element__img"
            alt=""
          />
          <div className="what__we__do__grid__element__title">
            Water Damages
          </div>
          <div className="what__we__do__grid__element__text">
            Swiftly restore water-damaged devices to their former glory with our
            expert care.
          </div>
          <div className="what__we__do__grid__element__price">
            Repairs from $ 47
          </div>
        </div>
        <div className="what__we__do__grid__element">
          <img
            src={repairGrid3}
            className="what__we__do__grid__element__img"
            alt=""
          />
          <div className="what__we__do__grid__element__title">
            Broken Speakers
          </div>
          <div className="what__we__do__grid__element__text">
            Get crystal-clear sound back with TechPro's speaker repair service.
          </div>
          <div className="what__we__do__grid__element__price">
            Repairs from $ 45
          </div>
        </div>
        <div className="what__we__do__grid__element">
          <img
            src={repairGrid4}
            className="what__we__do__grid__element__img"
            alt=""
          />
          <div className="what__we__do__grid__element__title">
            No WiFi or Bluetooth
          </div>
          <div className="what__we__do__grid__element__text">
            Stay connected with our WiFi and Bluetooth troubleshooting and
            repair.
          </div>
          <div className="what__we__do__grid__element__price">
            Repairs from $ 65
          </div>
        </div>
        <div className="what__we__do__grid__element">
          <img
            src={repairGrid5}
            className="what__we__do__grid__element__img"
            alt=""
          />
          <div className="what__we__do__grid__element__title">
            Cracked Screens
          </div>
          <div className="what__we__do__grid__element__text">
            Say goodbye to cracks and hello to pristine displays with TechPro's
            screen repair service.
          </div>
          <div className="what__we__do__grid__element__price">
            Repairs from $ 47
          </div>
        </div>
      </div>
    </section>
  );
};
