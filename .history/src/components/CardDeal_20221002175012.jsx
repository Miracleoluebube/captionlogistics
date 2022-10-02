import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="contact Us" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Get Your goods delivered  <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <ol type="1">
      <li >1.</li>
  <li className={`${styles.paragraph} max-w-[470px] mt-5`}>Coffee</li>
  <li>2</li>
  <li>Tea</li>
  <li>3</li>
  <li>Milk</li>
</ol>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
