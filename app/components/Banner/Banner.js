import React from 'react';
import styles from '../assets/Banner.module.css';

const Banner = ({headOne,headTwo,Des}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1>{headOne}</h1>
        <h3>{headTwo}</h3>
        <span>
          {Des}
        </span>
      </div>
      <div className={styles.bottomShape}></div>
    </div>
  );
};

export default Banner;
