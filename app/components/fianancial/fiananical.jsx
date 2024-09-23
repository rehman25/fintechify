import Image from "next/image";
import styles from "./fianancial.module.css";
import Phone1 from "../assets/images/phone1.png";
import Phone2 from "../assets/images/phone2.png";
import Arrow1 from "../assets/images/h1_vector1.svg";
import Arrow2 from "../assets/images/h1_vector2.svg";
import { BsLightningCharge } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";
import Brand1 from '../assets/images/brand1.svg'
import Brand2 from '../assets/images/brand2.svg'
import Brand3 from '../assets/images/brand3.svg'
import Brand4 from '../assets/images/brand4.svg'
import Brand5 from '../assets/images/brand5.svg'

const FinancialComponent = () => {
  return (
    <>
      <section className={`container mt-5 ${styles.container}`}>
        <div className="row  align-items-center">
          {/* Left Column */}
          <div className="col-md-6 p-4">
            <div className={styles.financialText}>
              <span className={styles.about}>
                <RiBuilding3Fill />
                About finpoan
              </span>
              <h2>Start expanding your financial frontier</h2>
              <p>
                Impeccable beauty and functionality converge in both card and
                app. Marks the outset of a journey into a boundless world, free
                from constraints.
              </p>
              <div className="d-flex mt-4">
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>20x</h3>
                  </span>
                  <p>Super fast instant transfers and payments.</p>
                </div>
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>100%</h3>
                  </span>
                  <p>Ultra-secure data protection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`col-md-6 text-center ${styles.right}`}>
            <div className={`position-relative ${styles.backgroundCircle}`}>
              <span>
                <Image src={Arrow2} alt="Arrow 1" width={120} height={120} className={styles.arrow1} />
                <span className={styles.OneApp}>One app for all</span>
              </span>
              <div className="position-absolute top-50 start-50 translate-middle">
                <Image src={Phone2} alt="Phone 2" width={180} height={360} 
                  className={styles.phone2}
                 
                 />
              </div>
              <div>
              <span>
                <Image src={Arrow1} alt="Arrow 2" width={120} height={120} className={styles.arrow2} />
                <span className={styles.TwoApp}>One app for all</span>
              </span>
                <Image
                  src={Phone1}
                  alt="Phone 1"
                  width={180}
                  height={360}
                  className={styles.phone1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`mt-5 ${styles.section}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          <h4>Trusted by industry-leading companies around the globe</h4>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
                  <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                  <Image src={Brand2} alt="Brand 2" className={styles.brand}/>
                  <Image src={Brand3} alt="Brand 3" className={styles.brand} />
                  <Image src={Brand4} alt="Brand 4" className={styles.brand}/>
                  <Image src={Brand5} alt="Brand 5" className={styles.brand}/>
                  <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                  <Image src={Brand2} alt="Brand 2" className={styles.brand}/>
                  <Image src={Brand3} alt="Brand 3" className={styles.brand} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialComponent;
