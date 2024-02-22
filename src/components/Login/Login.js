import React, { useState } from "react";
import styles from "./Login.module.css";
import users from "../data/data";

const Login = () => {
  //  Const [variable, setVariable] =       useState(initialValue)
  const [userName, setUserName] = useState(""); // Step 1
  const [password, setPassword] = useState("");

  const login = () => {
    // handle Login Functionality
    console.log("name: ", userName);
    console.log("pass: ", password);

    let loginStatus = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === userName && users[i].password === password) {
        loginStatus = true;
      }
    }

    if (loginStatus === true) {
      alert("Login Successful!");
    } else {
      alert("Login Failed!");
    }
  };

  // 3. event listener function
  const changeName = (e) => {
    setUserName(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
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
      <button onClick={login}>Login</button>

      <a href="/signup">Don't have an account? Sign-up</a>
    </div>
  );
};

export default Login;
