import React from "react";
import styles from "./feedback.module.scss";
import TextareaAutosize from 'react-textarea-autosize';

export default class FeedbackComponent extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.name, this.state.email, this.state.message)
  }

  render() {
    return (
      <div id="feedback" className={styles.feedback}>
        <h1>Send your feedback</h1>
        <p>
            Inventore, aliquid adipisci recusandae reiciendis sapiente, 
            voluptatum in alias veniam quos earum id sit saepe nostrum maxime quaerat, 
            molestiae fugiat eum quia voluptas. Non pulvinar neque laoreet suspendisse interdum.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
          <TextareaAutosize maxRows="10" type="text" name="message" placeholder="Message" value={this.state.message} onChange={this.handleInputChange}/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}