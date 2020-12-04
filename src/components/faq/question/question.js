import React from "react";
import styles from "./question.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Question = ({ index, question, handleClick }) => {

  return (
    <div aria-hidden="true" className={styles.question} onClick={() => handleClick(index)}>
      <FontAwesomeIcon icon={faChevronDown}/>
      <p>{question}</p>
    </div>
  )
}

export default Question;