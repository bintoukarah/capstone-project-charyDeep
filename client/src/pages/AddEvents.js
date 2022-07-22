import "../style/index.scss";
import logo from "../assets/img/logo_color_charyDEEp.png";

export default function AddEvents() {
  return (
    <div className="events-container">
      <div className="events-header">
        <img className="img-logo" src={logo} alt="Logo" />
      </div>
      <div className="event-form-container">
        <h1>Créer votre évènement</h1>
        <form>
          <label className="form-container" for="mytitle">
          Le titre
          <input type="text"></input>
          </label>
          <label className="form-container" for="myfile">
            <p>Votre image</p>
            <input type="file" name="file" className="form-control-file" />
          </label>
          <button type="submit" className="img_btn">
           Enregistrer
          </button>
          <label className="form-container">
            La description 
          <input type="text"></input>
          </label>
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
