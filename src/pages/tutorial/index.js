import React, { useRef, useState } from "react";
import styles from "./tutorial.module.scss";
import Layout from "../../components/layout/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import screenImage from "../../images/screen-1.jpg"

const Tutorial = ({ location }) => {
  const elementRef = useRef();
  let arr = [0, 1, 2, 3, 4];
  let [scrolling, setScrolling] = useState(false);

  const scrollToBottom = () => {
    setScrolling(true);
    elementRef.current.scrollTo({
      top: elementRef.current.scrollTop + elementRef.current.firstElementChild.offsetHeight,
      behavior: 'smooth'
    });
    setTimeout(() => setScrolling(false), 500);
  }

  const scrollToTop = () => {
    setScrolling(true);
    elementRef.current.scrollTo({
      top: elementRef.current.scrollTop - elementRef.current.firstElementChild.offsetHeight,
      behavior: 'smooth'
    });
    setTimeout(() => setScrolling(false), 500);
  }
  
  return (
    <Layout location={location}>
      <div className={styles.tutorial}>
        <div className={styles.tutorial__container}>
          <h1>Tutorial</h1>
          <p>
            Welcome to CELLR! The one stop for you to curate every part of your wine life, 
            connect with vineyards, insight on specials, and locate hard to source wines!
          </p>
          <div className={styles.tutorial__line}><span></span></div>
          <h3>CELLR home screen</h3>
          <p>
            Welcome to CELLR! The one stop for you to curate every part of your wine life, 
            connect with vineyards, insight on specials, and locate hard to source wines!
          </p>
        </div>
        <div className={styles.tutorial__sliderContainer}>
          <div className={styles.tutorial__slider} ref={elementRef}>
            {
              arr.map(el => (
                <img key={el} src={screenImage} alt="tutorial"/>
              ))
            }
          </div>
          <div className={styles.tutorial__arrows}>
            <button disabled={scrolling} onClick={scrollToTop} aria-label="Up"><FontAwesomeIcon icon={faArrowUp}/></button>
            <button disabled={scrolling} onClick={scrollToBottom} aria-label="Down"><FontAwesomeIcon icon={faArrowDown}/></button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tutorial;