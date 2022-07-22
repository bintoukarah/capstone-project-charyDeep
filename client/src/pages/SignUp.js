import FormAsso from "../components/FormAsso";
import "../style/index.scss"

// import Form from "../components/Form";
export default function Signup() {
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
          <FormAsso />
        </div>
      </div>
    </main>
  );
}
