import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import styles from "./faq.module.scss";
import { graphql } from "gatsby";

const Faq = ({ data }) => {
  const partners = data.site.siteMetadata.partners;
  const [partnerNumber, setNumber] = useState(0);

  return (
    <Layout>
      <div className={styles.partners}>
        <div className={styles.grid}>
          {partners.map((partner, index) => (
            <button 
              key={index} 
              className={partnerNumber===index? styles.grid__logo_active: styles.grid__logo} 
              onClick={() => setNumber(index)}
            >{partner.title}
            </button>
          ))}
        </div>
        <div>
          <h1>Partner Name</h1>
          {partners.map((partner, index) => (
            partnerNumber===index? <p key={index}>{partner.text}</p> : ""
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        partners {
          title
          text
        }
      }
    }
  }
`

export default Faq;