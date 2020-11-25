import { graphql } from "gatsby";
import React from "react";
import styles from "./tutorial.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/layout/layout";

const Tutorial = ({ data, location }) => {
  const publicURL = data.allFile.edges[0].node.publicURL;
  
  return (
    <Layout location={location}>
      <div className={styles.tutorial}>
        <div className={styles.tutorial__slider}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
          <img src={publicURL} alt="tutorial"/>
          <FontAwesomeIcon icon={faArrowAltCircleRight}/>
        </div>
        <h1>Screen Name</h1>
        <p>
          Inventore, aliquid adipisci recusandae reiciendis sapiente, 
          voluptatum in alias veniam quos earum id sit saepe nostrum maxime quaerat, 
          molestiae fugiat eum quia voluptas. Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit.
        </p>
      </div>
    </Layout>
  );
}

export const tutorialQuery = graphql`
  query {
    allFile(filter: { name: { eq: "tutorial" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default Tutorial;