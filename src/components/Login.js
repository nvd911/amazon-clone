import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Login</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          perspiciatis explicabo nihil minus molestiae voluptate iste porro
          ullam omnis adipisci unde.
        </p>
        <button className="login_signInButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
