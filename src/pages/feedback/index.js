import React, { useState } from "react";
import styles from "./feedback.module.scss";
import TextareaAutosize from 'react-textarea-autosize';
import Layout from "../../components/layout/layout";

const Feedback = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleInputChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <Layout>
      <div className={styles.feedback}>
        <h1>Send your feedback</h1>
        <p>
          Inventore, aliquid adipisci recusandae reiciendis sapiente, 
          voluptatum in alias veniam quos earum id sit saepe nostrum maxime quaerat, 
          molestiae fugiat eum quia voluptas. Non pulvinar neque laoreet suspendisse interdum.
        </p>
        <form onSubmit={handleSubmit} autoComplete="off" className={styles.feedback__form}>
          <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>
          <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>
          <TextareaAutosize 
            maxRows="10" 
            type="text" 
            name="message" 
            placeholder="Message" 
            value={state.message} 
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default Feedback;