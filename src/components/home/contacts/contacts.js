import React, { useState } from "react";
import styles from "./contacts.module.scss";
import TextareaAutosize from 'react-textarea-autosize';

const Contacts = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleInputChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Contact Us</h1>
        <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>
        <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>
        <TextareaAutosize 
          maxRows="7" 
          minRows="7" 
          type="text" 
          name="message" 
          placeholder="Message" 
          value={state.message} 
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contacts;