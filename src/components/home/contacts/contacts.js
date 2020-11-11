import React from "react";
import styles from "./contacts.module.scss";
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
        <form onSubmit={this.handleSubmit}>
          <h1>Contact Us</h1>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
          <TextareaAutosize maxRows="7" minRows="7" type="text" name="message" placeholder="Message" value={this.state.message} onChange={this.handleInputChange}/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}