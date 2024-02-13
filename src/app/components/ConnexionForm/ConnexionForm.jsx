"use client";
import React, { useState } from "react";
import "../ConnexionForm/ConnexionForm.css";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // data
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="connexion_container">
      <h2 className="Connexion_title">Connexion</h2>
      <p className="access_p">
        Accédez à votre compte pour profiter <br />
        de toutes les fonctionnalités
      </p>
      <form onSubmit={handleSubmit}>
        <div className="co_inputs">
          <input
            placeholder="Adresse mail"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <input
            placeholder="Mot de passe"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="co_btn" type="submit">
          Connexion
        </button>
        <p className="no_account">Pas encore membre ?</p>
        <button className="sign_btn">Inscrivez-vous</button>
      </form>
    </div>
  );
}

export default LoginForm;
