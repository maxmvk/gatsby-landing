import React, { useRef, useState } from "react";
import styles from "./feedback.module.scss";
import Layout from "../../components/layout/layout";
import { Button } from "@material-ui/core";

const Feedback = ({ location }) => {
  const [state, setState] = useState({ name: "", email: "", subject: "", url: "", message: "", file: null });
  const hiddenFileInput = useRef(null);

  const uploadFile = () => {
    hiddenFileInput.current.click();
  };

  const changeFile = event => {
    setState({...state, file: event.target.files[0]})
  };

  const handleInputChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <Layout location={location}>
      <div className={styles.feedback}>
        <h1>Feedback</h1>
        <p>
          CELLR has never been a vanity project for its founders. It’s been a commitment to 
          bring the best wine lifestyle platform to our users and allow them to curate their 
          wine life as they see fit. For CELLR to be our community’s crossroads for all 
          things wine. 
        </p>
        <p>
          If you have a suggestion for new functions, see an error in a particular area, 
          want to suggest a new winery partnership, or anything that will make your wine 
          life more enjoyable…we want to hear about it!
        </p>
        <form onSubmit={handleSubmit} autoComplete="off" className={styles.feedback__form}>
          <div className={styles.feedback__fields}>
            <div className={styles.feedback__column}>
              <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>
              <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>
              <input type="text" name="subject" placeholder="Subject" value={state.subject} onChange={handleInputChange}/>
              <input type="text" name="url" placeholder="URL" value={state.url} onChange={handleInputChange}/>
            </div>
            <div className={styles.feedback__column}>
              <textarea
                type="text" 
                name="message" 
                placeholder="Message" 
                value={state.message} 
                onChange={handleInputChange}
              />
              <Button variant="contained" onClick={uploadFile} type="button">
                <p>Upload file</p>
                <p>{state.file?.name}</p>
              </Button>

              {/* This input is only for the possibility of choosing a file. Never displayed! */}
              <input
                type="file"
                accept="image/jpeg, image/png, image/heic"
                ref={hiddenFileInput}
                onChange={changeFile}
                style={{display: 'none'}}
              />
            </div>
          </div>
          <div className={styles.feedback__submit}>
            <Button variant="contained" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Feedback;