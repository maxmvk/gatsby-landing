import React from "react";
import styles from "./engagement.module.scss";
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faParachuteBox, faSmile, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Engagement = () => (
  <Slide right duration={500}>
    <h1>Engaging users</h1>
    <div className={styles.engagement}>
      <FontAwesomeIcon icon={faMedal}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className={styles.engagement}>
      <FontAwesomeIcon icon={faParachuteBox}/>
      <p>
        Semper quis lectus nulla at. Orci phasellus egestas tellus rutrum tellus. 
        Metus aliquam eleifend mi in. Sed risus pretium quam vulputate dignissim.
      </p>
    </div>
    <div className={styles.engagement}>
      <FontAwesomeIcon icon={faThumbsUp}/>
      <p>
        Tortor vitae purus faucibus ornare suspendisse sed. Lacus laoreet non curabitur 
        gravida arcu. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.
      </p>
    </div>
    <div className={styles.engagement}>
      <FontAwesomeIcon icon={faSmile}/>
      <p>
        Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Purus 
        in massa tempor nec feugiat nisl pretium.
      </p>
    </div>
  </Slide>
)

export default Engagement;