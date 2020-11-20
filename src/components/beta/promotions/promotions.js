import React from "react";
import styles from "./promotions.module.scss";
import Slide from 'react-reveal/Slide';

const Promotions = () => (
  <Slide right duration={500}>
    <h1>Promotions</h1>
    <div className={styles.promotions}>
      <div className={styles.promotions__item}>
        <div></div>
        <p>Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</p>
      </div>
      <div className={styles.promotions__item}>
        <div></div>
        <p>Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</p>
      </div>
      <div className={styles.promotions__item}>
        <div></div>
        <p>Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</p>
      </div>
    </div>
  </Slide>
)

export default Promotions;