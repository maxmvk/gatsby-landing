import React from "react";

import Header from "../header/header";
import Footer from "../footer/footer";

import styles from "./layout.module.scss"
import { StaticQuery, graphql } from "gatsby";

export const MENU_LINKS_QUERY = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

export default ({ children }) => {

  return (
    <StaticQuery
      query={MENU_LINKS_QUERY}
      render={data => (
        <div className={styles.layout}>
          <Header menuLinks={data.site.siteMetadata.menuLinks}/>
          <div className={styles.content}>
            {children}
          </div>
          <Footer menuLinks={data.site.siteMetadata.menuLinks}/>
        </div>
      )}
    />
  )
};