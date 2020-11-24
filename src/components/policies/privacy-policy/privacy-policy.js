import React from "react";
import styles from "./privacy-policy.module.scss";
import Fade from 'react-reveal/Fade';

const PrivacyPolicy = () => (
  <Fade>
    <p>CELLR and Cellar Ventures, Inc. takes your security and the privacy very seriously. 
      We want to be open and clear about how we collect and store personal information. 
      Personal Information is information that relates to an identified or identifiable natural person.</p>
    <p>How we use your personal information</p>
    <ul className={styles.info}>
      <li>To keep CELLR users posted on latest news, product announcements and software updates.</li>
      <li>To identify subscribers to enable log in and to synchronize information across different devices.</li>
      <li>To help operate and improve CELLR services such as anti-fraud protection and data analysis and research into trends.</li>
      <li>CELLR also de-identifies personal information to create aggregated anonymous 
        reports on community inventory trends, consumption trends, and similar reports.</li>
      <li>CELLR may share information in the future with partners to provide technical services and for 
        enabling and conducting customer research. These companies are obligated to protect your 
        information and are forbiden from using information collected in any other way. 
        Future providers may support services in the following areas.</li>
    </ul>
    <ul className={styles.areas}>
      <li>Customer feedback</li>
      <li>Mailing lists</li>
      <li>Payment gateway providers</li>
      <li>Technical support</li>
    </ul>
  </Fade>
)

export default PrivacyPolicy;

