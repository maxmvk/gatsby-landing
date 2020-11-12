import React, { useState } from "react";
import styles from "./beta.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faMedal, faParachuteBox, faSmile, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Beta = () => {
  let [slideNumber, setSlideNumber] = useState(1);

  const switchContent = (currentSlide) => {
    switch (currentSlide) {
      case 2: {
        return (
          <>
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
          </>
        )
      }

      case 3: {
        return (
          <>
            <h1>Promotions</h1>
          </>
        )
      }

      case 4: {
        return (
          <>
            <h1>Become beta user</h1>
          </>
        )
      }
    
      default:
        return (
          <>
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
          </>
        )
    }
  }

  const handleNextSlide = () => {
    slideNumber < 4 ? setSlideNumber(slideNumber+1) : setSlideNumber(1)
  }

  return (
    <div id="beta" className={styles.beta}>
      <div className={styles.content}>
        {switchContent(slideNumber)}
      </div>
      <button>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.icon} onClick={handleNextSlide}/>
      </button>
    </div>
  )
};

export default Beta;