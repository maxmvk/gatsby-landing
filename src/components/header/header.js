import React, { useEffect } from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss"
import { StaticQuery, graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useScrollYPosition } from 'react-use-scroll-position';

export const LOGO_IMAGE_URL_QUERY = graphql`
  {
    allFile(filter: { name: { eq: "logo" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default function Header ({ menuLinks }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollY = useScrollYPosition();
  const blockHeight = typeof document !== `undefined` ? document.getElementById("home")?.offsetHeight || 1 : 1;

  return (
    <StaticQuery
      query={LOGO_IMAGE_URL_QUERY}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL }
            }
          ]
        }
      }) => (
        <header className={styles.header}>
          <div className={styles.container}>
            <Link to="/">
              <img src={publicURL} alt="logo" className={styles.logo}/>
            </Link>
            <div className={styles.nav}>
              {menuLinks.map((link, index) => (
                <AnchorLink to={link.link} key={link.name} className={(scrollY>=(blockHeight*index)-blockHeight/2)&&(scrollY<blockHeight*(index+1)-blockHeight/2)? styles.active: ""}>{link.name}</AnchorLink>
              ))}
            </div>
          </div>
        </header>
      )}
    />
  )
}