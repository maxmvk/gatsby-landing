import React from "react";
import styles from "./program.module.scss";
import Slide from 'react-reveal/Slide';

const Program = () => (
  <Slide right duration={500}>
    <h1>Managing the beta user program</h1>
    <ol className={styles.list}>
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
  </Slide>
)

export default Program;