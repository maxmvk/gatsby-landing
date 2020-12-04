import React from "react";
import styles from "./answer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Answer = ({ faq, handleClick }) => {

  return (
    <div aria-hidden="true" className={styles.answer} onClick={() => handleClick(0)}>
      <div className={styles.answer__question}>
        <FontAwesomeIcon icon={faChevronUp}/>
        <p>{faq.question}</p>
      </div>
      <p className={styles.answer__text}>{faq.answer}</p>
    </div>
  )
}

export default Answer;