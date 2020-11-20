import React from "react";
import styles from "./header.module.scss"
import { StaticQuery, graphql, Link } from "gatsby";

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

const Header = ({ menuLinks }) => {

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
          <div className={styles.header__container}>
            <Link to="/">
              <img src={publicURL} alt="logo" className={styles.header__logo}/>
            </Link>
            <div className={styles.header__nav}>
              {menuLinks.map(link => (
                <Link 
                  to={link.link} 
                  key={link.name} 
                  activeClassName={styles.header__nav_active}
                >{link.name}
                </Link>
              ))}
            </div>
          </div>
        </header>
      )}
    />
  )
}

export default Header;