import React from "react";
import styles from "./index.module.scss";

export default ({ imageUrl }) => (
  <div id="home" className={styles.home}>
    <img src={imageUrl} alt="logo"/>
  </div>
);