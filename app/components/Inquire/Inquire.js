import React from 'react';
import styles from '../assets/InquirySection.module.css';

const InquirySection = () => {
  return (
    <section className={`${styles.inquirySection} ${"m-5"}`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6">
            <h2 className={styles.title}>Inquire About Our <br /> Product</h2>
          </div>
          {/* Input Section */}
          <div className="col-lg-6 d-flex justify-content-end" id={styles.centerInput}>
            <form className="d-flex">
              <input
                type="email"
                className={`${styles.input} form-control`}
                placeholder="Your email address"
              />
              <button type="submit" className={styles.submitButton}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
