import React from "react";
import styles from "./beta.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div id="beta" className={styles.beta}>
    <div className={styles.program}>
      <h1>Managing the beta user program</h1>
      <ol>
        <li>Sed risus pretium quam vulputate dignissim eleifend mi in.</li>
        <li>Pulvinar elementum integer enim neque volutpat ac tincidunt.</li>
        <li>Cras fermentum odio eu feugiat pretium nibh metus aliquam.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Tortor vitae purus faucibus ornare suspendisse sed. Lacus laoreet
          non curabitur gravida arcu massa ultricies mi quis hendrerit.</li>
        <li>Pulvinar elementum integer enim neque volutpat ac tincidunt.</li>
        <li>Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus 
          urna neque semper quis lectus nulla at phasellus egestas tellus.</li>
        <li>Orci sagittis eu volutpat odio facilisis mauris sit amet massa.</li>
      </ol>
    </div>
    <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.icon}/>
  </div>
);