import React from "react";
import Layout from "../../components/layout/layout";
import styles from "./about.module.scss";

const About = () => {

  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.about__info}>
          <h1>About</h1>
          <p>
            CELLR was born from the great dinners and wines shared by a small group of friends. 
            A group of friends who would collectively open their cellars to share offerings and 
            vintages that could no longer be easily found. Vintages, that if found, were 
            subjected to the more formal and pricey auction or broker process. We wanted simplicity. 
            We wanted to increase our circle of friends who also had an appreciation for great wines. 
            We anted an app that was easy to use, search, and gave us recommendations based on what 
            we were actually drinking and not what was being sold on closeout by one of the many apps. 
            We wanted efficiency, trade, and ease of use…and thus, we founded CELLR for on-demand 
            cellar access.
          </p>
        </div>
        <div className={styles.about__numbers}>
          <div className={styles.about__group}>
            <div>
              <h3>10k+</h3>
              <p>Producers</p>
            </div>
            <div>
              <h3>28</h3>
              <p>Countries</p>
            </div>
          </div>
          <div className={styles.about__group}>
            <div>
              <h3>100+</h3>
              <p>Subregions</p>
            </div>
            <div>
              <h3>Beta</h3>
              <p>Users</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default About;