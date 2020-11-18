import React, { useState } from "react";
import styles from "./partners.module.scss";

const Partners = ({ partners }) => {

  const [partnerNumber, setNumber] = useState(0);

  return (
    <div id="partners" className={styles.partners}>
      <div className={styles.grid}>
        {partners.map((partner, index) => (
          <button 
            key={index} 
            className={partnerNumber===index? styles.grid__logo_active: styles.grid__logo} 
            onClick={() => setNumber(index)}
          >{partner.title}
          </button>
        ))}
      </div>
      <div>
        <h1>Partner Name</h1>
        {partners.map((partner, index) => (
          partnerNumber===index? <p key={index}>{partner.text}</p> : ""
        ))}
      </div>
    </div>
  );
}

export default Partners;