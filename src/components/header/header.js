import React, { useEffect, useState } from "react";
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
  const [blockHeight, setBlockHeight] = useState(null);
  const scrollY = useScrollYPosition();
  const halfHeight = blockHeight/2;

  useEffect(() => {
    setBlockHeight(typeof document !== `undefined` ? document.getElementById("home")?.offsetHeight: null);
  }, [])

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
                <AnchorLink 
                  to={link.link} 
                  key={link.name} 
                  className={(scrollY>=(blockHeight*index)-halfHeight)&&(scrollY<blockHeight*(index+1)-halfHeight)
                    ? styles.active
                    : ""}
                  title={link.name}
                />
              ))}
            </div>
          </div>
        </header>
      )}
    />
  )
}