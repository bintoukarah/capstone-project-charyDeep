import "../style/index.scss";
// import logo from "../assets/img/CharyDeep_logo.png"

export default function AddEvents() {
  return (
    <div className="events-container">
      <div className="events-header">{/* <img src={logo} alt="Logo" /> */}</div>
      <div className="event-form-container">
        <h1>Créer votre évènement</h1>
        <form>
          <input type="img"></input>
          <input type="text"></input>
          <input type="text"></input>
          <button
            className="form-btn"
            type="submit"
            form="nameform"
            value="Submit"
          >
            Créer
          </button>
        </form>
      </div>
    </div>
  );
}
