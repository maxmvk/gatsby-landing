import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useScrollYPosition } from 'react-use-scroll-position';

export default ({ menuLinks }) => {

const scrollY = useScrollYPosition();
const blockHeight = document.getElementById("home")?.offsetHeight || 1;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>© 2020 Cellr Ltd.</p>
          <p>All rights reserved.</p>
          <p>Privacy Notice.</p>
        </div>
        <div className={styles.scroll}>
          {menuLinks.map((link, index) => (
            (scrollY+blockHeight>=(blockHeight*index)-blockHeight/2)&&(scrollY+blockHeight<blockHeight*(index+1)-blockHeight/2)
            ?<AnchorLink to={link.link} key={link.name} className={styles.scroll}>
              <FontAwesomeIcon icon={faArrowAltCircleDown} className={styles.icon}/>
              <p>Scroll down</p>
            </AnchorLink>
            : ""
          ))}
        </div>
        <div className={styles.icons}>
          <a href="https://www.facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://twitter.com/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
}