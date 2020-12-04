import React from "react";
import styles from "./step.module.scss";

const Step = ({ width, color, number, text }) => {

  return (
    <div className={styles.step} style={{backgroundImage: `linear-gradient(to right, ${color}, ${color})`}}>
      <span>{number}</span>
      <p style={{width}}>{text}</p>
    </div>
  )
}

export default Step;