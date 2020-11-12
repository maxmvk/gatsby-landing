import React, { useState } from "react";
import styles from "./feedback.module.scss";
import TextareaAutosize from 'react-textarea-autosize';

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    console.log(name, email, message)
  }

  return (
    <div id="feedback" className={styles.feedback}>
      <h1>Send your feedback</h1>
      <p>
          Inventore, aliquid adipisci recusandae reiciendis sapiente, 
          voluptatum in alias veniam quos earum id sit saepe nostrum maxime quaerat, 
          molestiae fugiat eum quia voluptas. Non pulvinar neque laoreet suspendisse interdum.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextareaAutosize 
          maxRows="10" 
          type="text" 
          name="message" 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Feedback;