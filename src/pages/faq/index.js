import React, { useRef, useState } from "react";
import Layout from "../../components/layout/layout";
import styles from "./faq.module.scss";
import { graphql } from "gatsby";
import Question from "../../components/faq/question/question";
import Answer from "../../components/faq/answer/answer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ data, location }) => {
  const faqs = data.site.siteMetadata.faqs;
  const [faqNumber, setNumber] = useState(0);
  const elementRef = useRef();

  const handleClick = (index) => {
    setNumber(index)
  }

  const scrollToBottom = () => {
    elementRef.current.scrollTo({
      top: elementRef.current.scrollTop + 100,
      behavior: 'smooth'
    });
  }

  const scrollToTop = () => {
    elementRef.current.scrollTo({
      top: elementRef.current.scrollTop - 100,
      behavior: 'smooth'
    });
  }

  return (
    <Layout location={location}>
      <div className={styles.faqs}>
        <div className={styles.faqs__title}>
          <h1>FAQ</h1>
        </div>
        <div className={styles.faqs__container}>
          <div className={styles.faqs__questions} ref={elementRef}>
            {faqs.map((faq, index) => (
              faqNumber===index+1
              ? <Answer key={index} faq={faq} handleClick={handleClick}/>
              : <Question key={index} index={index+1} question={faq.question} handleClick={handleClick}/>
            ))}
          </div>
          <div className={styles.faqs__arrows}>
            <button onClick={scrollToTop} aria-label="Up"><FontAwesomeIcon icon={faArrowUp}/></button>
            <button onClick={scrollToBottom} aria-label="Down"><FontAwesomeIcon icon={faArrowDown}/></button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const faqQuery = graphql`
  query {
    site {
      siteMetadata {
        faqs {
          question
          answer
        }
      }
    }
  }
`

export default Faq;