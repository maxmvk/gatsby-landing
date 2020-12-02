import React, { useState } from "react";
import styles from "./contacts.module.scss";
import Layout from "../../components/layout/layout";
import { Link } from "gatsby";
import { Button } from "@material-ui/core";

const Contacts = ({ location }) => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleInputChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <Layout location={location}>
      <div className={styles.contacts}>
        <h1>Contacts</h1>
        <div className={styles.contacts__container}>
          <div className={styles.contacts__info}>
            <p>The CELLR app is the destination for users to curate every aspect of their wine life.</p>
            <p>
              Wine has become such an integral part of our social, food, and travel life that it 
              deserves to have a tool to reference all the wines we are lucky enough to experience.
            </p>
            <p>
              Whether users want to inventory the holdings of their cellar, keep track of their 
              wish list when they travel and dine, trade with other cellar owners, or just receive 
              the occasional special that is aligned with their tastes, CELLR will be that destination…
            </p>
            <p>
              CELLR is currently available as an invite only app on Apple Test Flight. We are 
              constantly adding new Users and would love to have you as a part of the CELLR community! 
              To get added to our Beta group send us an message with your info or visit our 
              <Link to="/beta">Become Beta User</Link> page.
            </p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off" className={styles.contacts__form}>
            <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>
            <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>
            <textarea
              type="text" 
              name="message" 
              placeholder="Message" 
              value={state.message} 
              onChange={handleInputChange}
            />
            <Button variant="contained" type="submit">Send</Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts;