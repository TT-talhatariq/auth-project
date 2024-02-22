import React, { useState } from "react";

import styles from "./Signup.module.css";
import users from "../data/data";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (e) => {
    setUserName(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const signup = () => {
    // check for account
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === userName) {
        alert("Account already Exist. Do Login");
        return;
      }
    }

    // make a account
  };

  return (
    <div className={styles.signupContainer}>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="User Name"
        value={userName} //  2. link it with value of input
        onChange={changeName} // 4. connect function here
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={changePassword}
      />
      <button onClick={signup}>Register</button>

      <a href="/login">Already have an account? Login</a>
    </div>
  );
};

export default Signup;
