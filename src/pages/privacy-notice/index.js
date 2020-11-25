import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import AcceptableUsePolicy from "../../components/policies/acceptable-use-policy/acceptable-use-policy";
import CookiesPolicy from "../../components/policies/cookies-policy/cookies-policy";
import CopyrightPolicy from "../../components/policies/copyright-policy/copyright-policy";
import PrivacyPolicy from "../../components/policies/privacy-policy/privacy-policy";
import styles from "./privacy-notice.module.scss";

const PrivacyNotice = ({ location }) => {
  let [slideNumber, setSlideNumber] = useState(1);

  const switchContent = (currentSlide) => {
    switch (currentSlide) {
      case 2: return <CookiesPolicy/>
      case 3: return <AcceptableUsePolicy/>
      case 4: return <CopyrightPolicy/>
      default: return <PrivacyPolicy/>
    }
  }

  return (
    <Layout location={location}>
      <div className={styles.notice}>
        <div className={styles.notice__title}>
          <h1>Privacy notice</h1>
        </div>
        <div className={styles.notice__container}>
          <div className={styles.notice__links}>
            <button onClick={() => setSlideNumber(1)} className={slideNumber === 1 ? styles.notice__link_active : styles.notice__link}>Privacy Policy</button>
            <button onClick={() => setSlideNumber(2)} className={slideNumber === 2 ? styles.notice__link_active : styles.notice__link}>Cookies Policy</button>
            <button onClick={() => setSlideNumber(3)} className={slideNumber === 3 ? styles.notice__link_active : styles.notice__link}>Acceptable Use Policy</button>
            <button onClick={() => setSlideNumber(4)} className={slideNumber === 4 ? styles.notice__link_active : styles.notice__link}>Copyright Policy</button>
          </div>
          <div className={styles.notice__content}>
            {switchContent(slideNumber)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyNotice;