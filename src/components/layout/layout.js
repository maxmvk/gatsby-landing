import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./layout.module.scss"
import { StaticQuery, graphql } from "gatsby";
import Sidebar from "../sidebar/sidebar";

export const MENU_LINKS_QUERY = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
          imageUrl
          sidebarUrl
        }
      }
    }
  }
`;

const Layout = ({ children, location }) => {

  return (
    <StaticQuery
      query={MENU_LINKS_QUERY}
      render={data => (
        <div className={styles.layout}>
          <Sidebar location={location} menuLinks={data.site.siteMetadata.menuLinks}/>
          <div className={styles.layout__container}>
            {data.site.siteMetadata.menuLinks.map(link => (
              location.pathname === link.link
              ? <img key={link.name} src={link.imageUrl} alt="" className={styles.layout__image}/>
              : null
            ))}
            <Header menuLinks={data.site.siteMetadata.menuLinks}/>
            <div className={styles.layout__content}>
              {children}
            </div>
            <Footer />
          </div>
        </div>
      )}
    />
  )
};

export default Layout;