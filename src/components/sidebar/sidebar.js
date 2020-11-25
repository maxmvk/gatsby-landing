import React from "react";
import styles from "./sidebar.module.scss";
import logoSrc from "../../images/logo.png";
import { Link } from "gatsby";
import Stepper from "../stepper/stepper";

const Sidebar = ({ location, menuLinks }) => {

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        {location.pathname !== '/privacy-notice'
        ? <Stepper location={location} menuLinks={menuLinks}/>
        : null}
      </div>
      {location.pathname !== '/'
      ? <Link to="/" className={styles.sidebar__logo}>
          <img src={logoSrc} alt="logo"/>
        </Link> 
      : null}
    </div>
  )
}

export default Sidebar;