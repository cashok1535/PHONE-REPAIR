import screen from "../img/screenRepair.webp";
import battery from "../img/batteryReplasment.webp";
import charging from "../img/chargingPortRepairs.webp";
import water from "../img/waterDamageRestoration.webp";
import software from "../img/SoftwareIssues.webp";

const services = [
  {
    id: 1,
    title: "Screen Repairs",
    img: screen,
    prices: [
      {
        id: 1,
        name: "OLED Screen Replacement",
        price: 185,
        about: "Get a new, vibrant OLED display with our replacement service.",
      },
      {
        id: 2,
        name: "Digitizer Replacement",
        price: 138,
        about:
          "Restore touch responsiveness with precise digitizer replacements.",
      },
      {
        id: 3,
        name: "Full Glass Replacement",
        price: 69,
        about: "Cracked screen? Get a complete glass replacement today.",
      },
      {
        id: 4,
        name: "Sensitivity Calibration",
        price: 47,
        about: "Optimize screen sensitivity for seamless touch interactions.",
      },
      {
        id: 5,
        name: "Restoration of Multi-Touch Functionality",
        price: 59,
        about:
          "Regain multi-touch functionality with our expert restoration service.",
      },
    ],
  },
  {
    id: 2,
    title: "Battery Replacement",
    img: battery,
    prices: [
      {
        id: 1,
        name: "Standard Battery Replacement",
        price: 125,
        about: "Install new battery for improved device performance.",
      },
      {
        id: 2,
        name: "Power Management Optimization",
        price: 38,
        about: "Extend battery lifespan with efficient power management.",
      },
      {
        id: 3,
        name: "Fast Charging Port Installation",
        price: 69,
        about: "Upgrade to quick charging capabilities.",
      },
      {
        id: 4,
        name: "OEM Battery Upgrade",
        price: 97,
        about: "Upgrade to original manufacturer battery for reliability.",
      },
      {
        id: 5,
        name: "Same-Day Battery Replacement",
        price: 159,
        about: "Swift battery replacement service for minimal downtime.",
      },
    ],
  },
  {
    id: 3,
    title: "Charging Port Repairs",
    img: charging,
    prices: [
      {
        id: 1,
        name: "Charging Port Cleaning",
        price: 38,
        about: "Remove debris for optimal charging efficiency.",
      },
      {
        id: 2,
        name: "Port Replacement",
        price: 85,
        about: "Install new charging port for seamless connectivity.",
      },
      {
        id: 3,
        name: "Fast Charging Port Upgrade",
        price: 69,
        about: "Upgrade to faster charging capabilities.",
      },
      {
        id: 4,
        name: "Water Damage Repair",
        price: 77,
        about: "Restore charging port functionality after water exposure.",
      },
      {
        id: 5,
        name: "USB-C Port Retrofit",
        price: 159,
        about:
          "Retrofit older devices with USB-C charging ports for modern compatibility.",
      },
    ],
  },
  {
    id: 4,
    title: "Water Damage Restoration",
    img: water,
    prices: [
      {
        id: 1,
        name: "Speaker and Microphone Repair",
        price: 85,
        about: "Repair or replace water-damaged speakers and microphones.",
      },
      {
        id: 2,
        name: "Drying and Dehumidification",
        price: 88,
        about: "Remove moisture to prevent further damage.",
      },
      {
        id: 3,
        name: "Button and Switch Repair",
        price: 69,
        about: "Repair or replace water-damaged buttons and switches.",
      },
      {
        id: 4,
        name: "Corrosion Treatment",
        price: 47,
        about: "Address corrosion to prevent future issues.",
      },
      {
        id: 5,
        name: "Data Recovery",
        price: 159,
        about: "Retrieve data from water-damaged devices for peace of mind.",
      },
    ],
  },
  {
    id: 5,
    title: "Software Issues",
    img: software,
    prices: [
      {
        id: 1,
        name: "Diagnostic Testing",
        price: "free",
        about:
          "Thoroughly assess device to identify underlying software issues.",
      },
      {
        id: 2,
        name: "Operating System Updates",
        price: 30,
        about:
          "Install latest software updates for improved performance and security.",
      },
      {
        id: 3,
        name: "Virus and Malware Removal",
        price: 60,
        about: "Remove harmful software to protect device and data.",
      },
      {
        id: 4,
        name: "App Compatibility Check",
        price: 20,
        about: "Ensure compatibility with latest apps for seamless usage.",
      },
      {
        id: 5,
        name: "Performance Optimization",
        price: 50,
        about: "Optimize device settings for smoother and faster operation.",
      },
    ],
  },
];

export const Pricing = () => {
  return (
    <>
      <div className="about__us__page__info">
        <div className="interactive__flex__info__title about__us__page__center">
          Pricing<span className="interactive__flex__info__orange">.</span>
        </div>
        <div className="page__info__little">
          <div className="page__home">HOME</div>
          <span className="page__home__arrow">→</span>
          <div className="page__current__page">PRICING</div>
        </div>
      </div>
      <section className="pricing">
        <div className="pricing__flex">
          {services.map((el) => (
            <div key={el.id} className="pricing__flex__element">
              {el.id % 2 !== 0 && (
                <div
                  style={{
                    background: `url('${el.img}')`,
                    backgroundSize: "cover",
                  }}
                  className="pricing__flex__element__img__parrent pricing__img__left"
                ></div>
              )}
              <div className="pricing__flex__element__text">
                <div className="pricing__flex__element__title">{el.title}</div>
                {el.prices.map((element) => (
                  <div key={element.id} className="pricing__element__flex">
                    <div className="pricing__element__flex__top">
                      <div className="pricing__element__flex__title">
                        {element.name}
                      </div>
                      <div className="pricing__element__flex__line"></div>
                      <div className="pricing__element__flex__price">
                        ${element.price}
                      </div>
                    </div>
                    <div className="pricing__element__flex__text">
                      {element.about}
                    </div>
                  </div>
                ))}
              </div>
              {el.id % 2 === 0 && (
                <div
                  style={{
                    background: `url('${el.img}')`,
                    backgroundSize: "cover",
                  }}
                  className="pricing__flex__element__img__parrent"
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="pricing__bottom">
          <div className="pricing__flex__element pricing__flex__element__bottom">
            <div className="pricing__flex__element__text pricing__title__left">
              <div className="pricing__flex__element__title pricing__bottom__title">
                Additional Services
              </div>
            </div>
            <div className="about__us__section__text__bold about__us__page__process__text pricing__phone__left">
              Feel free to ask our technicians about any additional services we
              may offer to keep your smartphone safe and sound.
            </div>
          </div>
          <div className="pricing__element__grid">
            <div className="pricing__element__flex">
              <div className="pricing__element__flex__top">
                <div className="pricing__element__flex__title">
                  Unlocking Services
                </div>
                <div className="pricing__element__flex__line"></div>
                <div className="pricing__element__flex__price">$69</div>
              </div>
              <div className="pricing__element__flex__text">
                We provide safe and reliable smartphone unlocking service.
              </div>
            </div>
            <div className="pricing__element__flex">
              <div className="pricing__element__flex__top">
                <div className="pricing__element__flex__title">
                  Screen Protectors
                </div>
                <div className="pricing__element__flex__line"></div>
                <div className="pricing__element__flex__price">$20</div>
              </div>
              <div className="pricing__element__flex__text">
                Shield your device from scratches and cracks.
              </div>
            </div>
            <div className="pricing__element__flex">
              <div className="pricing__element__flex__top">
                <div className="pricing__element__flex__title">
                  Data Backup and Transfer
                </div>
                <div className="pricing__element__flex__line"></div>
                <div className="pricing__element__flex__price">$49</div>
              </div>
              <div className="pricing__element__flex__text">
                Safeguard your important data with our services.
              </div>
            </div>
            <div className="pricing__element__flex">
              <div className="pricing__element__flex__top">
                <div className="pricing__element__flex__title">
                  Device Customization
                </div>
                <div className="pricing__element__flex__line"></div>
                <div className="pricing__element__flex__price">from $89</div>
              </div>
              <div className="pricing__element__flex__text">
                Personalize your device with our device customization services.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
