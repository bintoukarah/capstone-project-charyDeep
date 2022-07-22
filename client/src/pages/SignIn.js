import "../style/index.scss";
import Form from "../components/Form";

// import logo from "../assets/img/CharyDeep_logo.png"

export default function SignIn() {
  return (
    <main className="signin-main">
      <header>
        <h1>CharyDeep</h1>
        {/* <img src={logo} alt="Logo" /> */}
      </header>
      <div className="form-main">
        <div className="form-title">
          <p>
            Bienvenue chez <span>CharyDeep</span>
          </p>
          <p>Connectez-vous</p>
          <Form />
        </div>
      </div>
    </main>
  );
}
