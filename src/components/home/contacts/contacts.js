import React, { useState } from "react";
import styles from "./contacts.module.scss";
import TextareaAutosize from 'react-textarea-autosize';

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    console.log(name, email, message)
  }

  return (
    <div id="contacts" className={styles.contacts}>
      <div className={styles.info}>
        <h1>Info</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare 
          suspendisse sed. Lacus laoreet non curabitur gravida arcu. Adipiscing vitae proin 
          sagittis nisl rhoncus mattis rhoncus urna neque. Orci sagittis eu volutpat odio 
          facilisis mauris sit amet massa. Pharetra pharetra massa massa ultricies mi quis 
          hendrerit dolor magna. Purus in massa tempor nec feugiat nisl pretium. Semper quis 
          lectus nulla at. Orci phasellus egestas tellus rutrum tellus. Metus aliquam 
          eleifend mi in. Sed risus pretium quam vulputate dignissim. Pulvinar elementum 
          integer enim neque volutpat ac tincidunt vitae. Cras fermentum odio eu feugiat 
          pretium nibh.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextareaAutosize 
          maxRows="7" 
          minRows="7" 
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

export default Contacts;