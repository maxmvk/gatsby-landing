import React from "react";
import styles from "./stepper.module.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Stepper = ({ location, menuLinks }) => {

  return (
    <div className={styles.stepper}>
      <div className={location.pathname !== menuLinks[0].link? styles.stepper__part : styles.stepper__part_hidden}>
        {menuLinks.map((link, index) => (
          location.pathname === link.link && index > 0
          ? <Link to={menuLinks[index-1].link} key={index}><FontAwesomeIcon icon={faArrowUp}/></Link>
          : null
        ))}
        <div className={styles.stepper__line}></div>
      </div>
      <div className={styles.stepper__dots}>
        {menuLinks.map(link => (
          <div key={link.name} className={location.pathname === link.link? styles.stepper__dot_active: styles.stepper__dot}></div>
        ))}
      </div>
      <div className={location.pathname !== menuLinks[menuLinks.length-1].link? styles.stepper__part : styles.stepper__part_hidden}>
        <div className={styles.stepper__line}></div>
        {menuLinks.map((link, index) => (
          location.pathname === link.link && index+1 < menuLinks.length
          ? <Link to={menuLinks[index+1].link} key={index}><FontAwesomeIcon icon={faArrowDown}/></Link>
          : null
        ))}
      </div>
    </div>
  )
}

export default Stepper;