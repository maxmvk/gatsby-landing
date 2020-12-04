import React from "react";
import styles from "./sidebar.module.scss";
import logoSrc from "../../images/logo.svg";
import { Link } from "gatsby";
import Stepper from "../stepper/stepper";

const Sidebar = ({ location, menuLinks }) => {

  return (
    <div className={styles.sidebar}>
      {menuLinks.map(link => (
        location.pathname === link.link
        ? <img key={link.name} src={link.sidebarUrl} alt="" className={styles.sidebar__image}/>
        : null
      ))}
      <div className={styles.sidebar__container}>
        {location.pathname !== '/privacy-notice/'
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