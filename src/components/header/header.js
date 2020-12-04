import React from "react";
import styles from "./header.module.scss"
import { Link } from "gatsby";

const Header = ({ menuLinks }) => {

  return (
    <header className={styles.header}>
      {/* <Link to="/">
        <img src={publicURL} alt="logo" className={styles.header__logo}/>
      </Link> */}
      {menuLinks.map(link => (
        <Link 
          to={link.link} 
          key={link.name} 
          activeClassName={styles.header_active}
        >{link.name}
        </Link>
      ))}
    </header>
  )
}

export default Header;