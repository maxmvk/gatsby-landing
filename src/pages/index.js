import React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import styles from "./home.module.scss";

const Home = ({ data }) => {
  const publicURL = data.allFile.edges[0].node.publicURL;

  return (
    <Layout>
      <div className={styles.home}>
        <img src={publicURL} alt="logo"/>
      </div>
    </Layout>
  );
}

export const homeQuery = graphql`
  query {
    allFile(filter: { name: { eq: "logo" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default Home;