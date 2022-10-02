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
      <li className={styles.heading2}>1.</li>
  <h2><li >Coffee</li>
  Bring or send your item
  </h2>
  <li className={styles.heading2}>2</li>
  <li>We Process Your item(s)</li>
  <li className={styles.heading2}>3</li>
  <li>We import your item(s) to Nigeria and deliver to your final location. Air freight: 3 days </li>
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
