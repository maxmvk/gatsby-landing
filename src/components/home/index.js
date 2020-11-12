import React from "react";
import styles from "./index.module.scss";

const Home = ({ imageUrl }) => (
  <div id="home" className={styles.home}>
    <img src={imageUrl} alt="logo"/>
  </div>
);

export default Home;