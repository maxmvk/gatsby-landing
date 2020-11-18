import React, { useState } from "react";
import styles from "./beta.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Promotions from "./promotions/promotions";
import Program from "./program/program";
import Engagement from "./engagement/engagement";
import BetaUser from "./beta-user/beta-user";

const Beta = () => {
  let [slideNumber, setSlideNumber] = useState(1);

  const switchContent = (currentSlide) => {
    switch (currentSlide) {
      case 2: return <Engagement/>
      case 3: return <Promotions/>
      case 4: return <BetaUser/>
      default: return <Program/>
    }
  }

  const handleNextSlide = () => {
    slideNumber < 4 ? setSlideNumber(slideNumber+1) : setSlideNumber(1)
  }

  return (
    <div id="beta" className={styles.beta}>
      <div className={styles.beta__content}>
        {switchContent(slideNumber)}
      </div>
      <button>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.beta__icon} onClick={handleNextSlide}/>
      </button>
    </div>
  )
};

export default Beta;