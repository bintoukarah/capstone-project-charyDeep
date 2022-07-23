import "../style/index.scss"

export default function SignUp() {
  return (
 
    <main className="main-signup">
      <header>
        <h1>CharyDeep</h1>
        {/* <img src={logo} alt="Logo" /> */}
      </header>
      <input type="checkbox" id="asso" name="asso">Je suis une association</input>

      <div className="form-main">
        <div className="form-title">
          <p>
            Bienvenue chez <span>CharyDeep</span>
          </p>
          <p>Connectez-vous</p>
          <form className="form-container">
      <input type="email" email="email" placeholder="Adresse email" />
      <input type="email" name="name" placeholder="Numéro RNA" />

      <input type="password" name="password" placeholder="Nom d'utilisateur" />
      <input type="password" name="password" placeholder="Mot de passe" />
      <button
      className="asso-btn"
      type="submit"
      form="nameform"
      value="Submit"
    >
      Bienvenue sur CharyDeep
    </button>
    </form>
        </div>
      </div>
    </main>
   
  );
}
