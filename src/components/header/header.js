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
      )}
    />
  )
}

export default Header;