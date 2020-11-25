import React from "react";
import Layout from "../components/layout/layout";
import { graphql, Link } from "gatsby";
import styles from "./home.module.scss";
import { Button } from "@material-ui/core";

const Home = ({ data, location }) => {
  const publicURL = data.allFile.edges[0].node.publicURL;

  return (
    <Layout location={location}>
      <div className={styles.home}>
        <img src={publicURL} alt="logo"/>
        <p>Welcome to CELLR! The one stop for you to curate every part of your wine life, connect with vineyards, insight on specials, and locate hard to source wines!</p>
        <div className={styles.home__buttons}>
          <Button component={Link} to="/beta" variant="contained">Become beta user</Button>
          <Button component={Link} to="/about" variant="outlined">Learn more</Button>
        </div>
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