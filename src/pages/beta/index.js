import React, { useState } from "react";
import styles from "./beta.module.scss";
import Layout from "../../components/layout/layout";
import { Button } from "@material-ui/core";
import Step from "../../components/beta/step/step";

const Beta = ({ location }) => { 
  const [state, setState] = useState({ name: "", email: "" });

  const handleInputChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <Layout location={location}>
      <div className={styles.beta}>
        <h1>Become beta user</h1>
        <p>
          Welcome to the CELLR beta program and we couldn’t be happier to have you onboard and 
          the valuable feedback you’ll be offering us.
        </p>
        <p>
          We certainly don’t want to infringe on your personal time too much, but there are 
          a few things we hope to get back from you as you use CELLR.
        </p>
        <div className={styles.beta__steps}>
          <div className={styles.beta__content}>
            <Step width="355px" color="#B01902" number="1." text="Please use the app with regular frequency to help us identify any bugs in the platform."/>
            <Step width="290px" color="#841002" number="2." text="Please use the app to take pictures of your inventory."/>
            <Step width="254px" color="#6E0C01" number="3." text="Please use the app to add wines and pictures to your wish list."/>
          </div>
          <div className={styles.beta__content}>
            <Step width="430px" color="#7C0C07" number="4." text="Please use the app to record the wines you consume from inventory or on the go."/>
            <Step width="550px" color="#A62936" number="5." text="Please do sync your inventory from Cellar Tracker so we can start building and testing the Community inventory functionality."/>
            <Step width="350px" color="#570701" number="6." text="Please do build out your Wish List on items you don’t want to lose track of."/>
          </div>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off" className={styles.beta__form}>
          <div className={styles.beta__column}>
            <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>
            <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>
          </div>
          <Button variant="contained" type="submit">Send me invite</Button>
        </form>
        <p className={styles.beta__final}>Thanks you again for being a part of the CELLR beta program and helping in our development!</p>
      </div>
    </Layout>
  )
};

export default Beta;