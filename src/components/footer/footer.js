import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <a href="https://twitter.com/" aria-label="Twitter" className={styles.footer__item}><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.instagram.com/" aria-label="Instagram" className={styles.footer__item}><FontAwesomeIcon icon={faInstagram} /></a>
      <p className={styles.footer__item}>Copyright © 2020 Cellar Ventures, Inc. All rights reserved.</p>
      <Link to="/privacy-notice/" className={styles.footer__item} activeClassName={styles.footer__item_active}>Privacy Notice</Link>
    </footer>
  );
}

export default Footer;