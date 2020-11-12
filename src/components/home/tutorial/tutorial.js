import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styles from "./tutorial.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export const TUTORIAL_IMAGE_URL_QUERY = graphql`
  {
    allFile(filter: { name: { eq: "tutorial" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

const Tutorial = () => {
  return (
    <StaticQuery
      query={TUTORIAL_IMAGE_URL_QUERY}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL }
            }
          ]
        }
      }) => (
        <div id="tutorial" className={styles.tutorial}>
          <div className={styles.slider}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className={styles.icon}/>
            <img src={publicURL} alt="tutorial"/>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.icon}/>
          </div>
          <h1>Screen Name</h1>
          <p>
            Inventore, aliquid adipisci recusandae reiciendis sapiente, 
            voluptatum in alias veniam quos earum id sit saepe nostrum maxime quaerat, 
            molestiae fugiat eum quia voluptas. Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Recusandae aliquid eum neque.
          </p>
        </div>
      )}
    />
  )
};

export default Tutorial;