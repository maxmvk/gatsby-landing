import React, { useState } from "react";
import styles from "./beta-user.module.scss";
import Slide from 'react-reveal/Slide';

const BetaUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    console.log(name, email, region, role)
  }

  return (
    <Slide right duration={500}>
      <h1>Become beta user</h1>
      <form onSubmit={handleSubmit} className={styles.betaForm}>
        <div className={styles.betaInputs}>
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" name="region" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)}/>
          <input type="text" name="role" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)}/>
        </div>
        <button type="submit">Apply</button>
      </form>
    </Slide>
  )
}

export default BetaUser;