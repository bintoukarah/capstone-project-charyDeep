import "../style/index.scss";
import logo from "../assets/img/logo_color_charyDEEp.png";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

export default function AddEvents() {
  return (
    <div className="events-container">
      <div className="events-header">
        <img className="img-logo" src={logo} alt="Logo" />
      </div>
      <div className="event-form-container">
        
        <form>
        <h1>Créer votre évènement</h1>
          <label className="form-container" for="mytitle">
            Le titre
            <input type="text"></input>
          </label>
          <label className="form-container" for="myfile">
            <p>Votre image</p>
            <Stack direction="row" alignItems="center" spacing={2} >
              <IconButton 
                sx={{ color: "purple"}}
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera  fontSize="large"/>
              </IconButton >
            </Stack>
          </label>

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
