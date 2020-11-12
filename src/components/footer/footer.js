import React, { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useScrollYPosition } from 'react-use-scroll-position';

const Footer = ({ menuLinks }) => {
  const [blockHeight, setBlockHeight] = useState(null);
  const scrollY = useScrollYPosition();
  const halfHeight = blockHeight/2;
  const scrolled = scrollY+blockHeight;

  useEffect(() => {
    setBlockHeight(typeof document !== `undefined` ? document.getElementById("home")?.offsetHeight: null);
  }, [])

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
            (scrolled>=(blockHeight*index)-halfHeight)&&(scrolled<blockHeight*(index+1)-halfHeight)
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

export default Footer;