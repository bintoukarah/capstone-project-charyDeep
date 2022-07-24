import React from "react";
import "../style/index.scss";


export default function Form() {
  return (
 
      <form className="form-container">
      <input
        type="text"
        email="email"
        placeholder="Connectez-vous avec google"
      />
      <input type="email" name="name" placeholder="Nom utilisateur ou email" />

      <input type="password" name="password" placeholder="Mot de passe" />
      <button type="submit" form="nameform" value="Submit" sx={{boxShadow:2}}>
        Connectez-vous
      </button>
      <a href="google.fr"className="no-account">Pas de compte ? Inscrivez-vous</a>

    </form>
  
    
  );
}
