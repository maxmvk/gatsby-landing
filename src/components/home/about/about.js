import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styles from "./about.module.scss";

export const ABOUT_IMAGE_URL_QUERY = graphql`
  {
    allFile(filter: { name: { eq: "about" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default () => {
  return (
    <StaticQuery
      query={ABOUT_IMAGE_URL_QUERY}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL }
            }
          ]
        }
      }) => (
        <div id="about" className={styles.about}>
          <img src={publicURL} alt="about"/>
          <div>
            <h1>About CELLR</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Recusandae aliquid eum neque. Ullam, praesentium aliquam 
              voluptate at voluptatibus vero consectetur veniam reprehenderit, 
              cupiditate deserunt obcaecati animi nemo cum aspernatur iure!
              Inventore, aliquid adipisci recusandae reiciendis sapiente, 
              voluptatum in alias veniam quos earum id sit saepe nostrum maxime quaerat, 
              molestiae fugiat eum quia voluptas. 
            </p>
            <div className={styles.numbers}>
              <div>
                <h3>20</h3>
                <p>Producers</p>
              </div>
              <div>
                <h3>67</h3>
                <p>Countries</p>
              </div>
              <div>
                <h3>41</h3>
                <p>Subregions</p>
              </div>
              <div>
                <h3>182k</h3>
                <p>Users</p>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
};