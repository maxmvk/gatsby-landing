import React, { useState } from "react";
import styles from "./beta-user.module.scss";
import Slide from 'react-reveal/Slide';

const BetaUser = () => {
  const [state, setState] = useState({ name: "", email: "", region: "", role: "" });

  const handleInputChange = event => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <Slide right duration={500}>
      <h1>Become beta user</h1>
      <form onSubmit={handleSubmit} className={styles.betaForm} autoComplete="off">
        <div className={styles.betaInputs}>
          <input type="text" name="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>
          <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>
          <input type="text" name="region" placeholder="Region" value={state.region} onChange={handleInputChange}/>
          <input type="text" name="role" placeholder="Role" value={state.role} onChange={handleInputChange}/>
        </div>
        <button type="submit">Apply</button>
      </form>
    </Slide>
  )
}

export default BetaUser;