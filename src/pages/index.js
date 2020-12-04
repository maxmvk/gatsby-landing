import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import styles from "./home.module.scss";
import { Button } from "@material-ui/core";
import logoSrc from "../images/logo.svg";

const Home = ({ location }) => {

  return (
    <Layout location={location}>
      <div className={styles.home}>
        <img src={logoSrc} alt="logo"/>
        <p>Welcome to CELLR! The one stop for you to curate every part of your wine life, connect with vineyards, insight on specials, and locate hard to source wines!</p>
        <div className={styles.home__buttons}>
          <Button component={Link} to="/beta/" variant="contained">Become beta user</Button>
          <Button component={Link} to="/about/" variant="outlined">Learn more</Button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;