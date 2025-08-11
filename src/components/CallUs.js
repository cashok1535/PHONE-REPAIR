import { CallUsSlider } from "./CallUsSlider";

export const CallUs = () => {
  return (
    <section className="call__us">
      <CallUsSlider />
      <div className="call__us__info">
        <div className="orange__title__bold">CALL US</div>
        <div className="call__us__title">
          <span className="call__us__title__dark">Contact us </span>now for
          swift and reliable repairs!
        </div>
        <div className="call__us__phone__info">
          Schedule your repair today{" "}
          <a className="call__us__phone" href="tel:1 (234) 567890">+ 1 (234) 567890</a>
        </div>
      </div>
    </section>
  );
};
