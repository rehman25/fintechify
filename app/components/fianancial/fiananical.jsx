import Image from "next/image";
import styles from "./fianancial.module.css";
import Phone1 from "../assets/images/finPhone.png";
import { BsLightningCharge } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";
import Brand1 from "../assets/images/FINTECHIFY_1-3.png";
import { RiSecurePaymentLine } from "react-icons/ri";


const FinancialComponent = () => {
  return (
    <>
      <section className={`container mt-5 ${styles.container}`}>
        <div className="row  align-items-center">
          {/* Left Column */}
          <div
            className="col-lg-6 p-4"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className={styles.financialText}>
              <span className={styles.about}>
                <RiBuilding3Fill />
                About Fintechify
              </span>
              <h2>Credit Card to E-Cash innovations is the Goal.</h2>
              <p>
                Forget plastic, embrace the future. Fintechify unlocks next-level banking with a touch. Crafted experiences, not just solutions. We’re your gateway to dominate the digital finance game. Partner with Fintechify. Be the pioneer, not a follower.
              </p>
              <div className={`${styles.percentFlex} d-flex  mt-4`}>
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <BsLightningCharge className={styles.eletric} />
                    <h3>20x</h3>
                  </span>
                  <p>
                    Super fast instant <br />
                    transfers and payments.
                  </p>
                </div>
                <div className={`me-5 text-center ${styles.percent}`}>
                  <span className={styles.percent1}>
                    <RiSecurePaymentLine className={styles.eletric} />
                    <h3>100%</h3>
                  </span>
                  <p>
                    Ultra-secure data <br />
                    protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`col-lg-6 text-center ${styles.right}`}
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Image src={Phone1} alt="Phone1" className={styles.rightPhone} />
          </div>
        </div>
      </section>

      <section className={`mt-5 ${styles.section}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          {/* <h4 className="text-center">Trusted by industry-leading companies around the globe</h4> */}
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
                <Image src={Brand1} alt="Brand 1" className={styles.brand} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialComponent;
