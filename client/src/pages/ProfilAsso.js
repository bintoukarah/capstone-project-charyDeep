import "../style/index.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddBoxIcon from "@mui/icons-material/AddBox";
import UsersAvatar from "../components/UsersAvatar";
// import logo from "../assets/img/logo.png"

export default function ProfilAsso() {
  return (
    <div className="asso-contain">
      <div className="Navbar">
        <UsersAvatar />
        <div className="links">
          <FavoriteIcon sx={{ fontSize: 40 }} />
          <p>950 likes</p>
        </div>
        <div className="links">
          <ShareIcon sx={{ fontSize: 40 }} />
          <p>Partager</p>
        </div>
        <div className="links">
          <AddBoxIcon sx={{ fontSize: 40 }} />
          <p>Evènement</p>
        </div>
      </div>
      <div className="events-container">
        <div className="title">
          <h3>Nos événements</h3>
        </div>
        <div className="events-contain">
          <div className="events-element"></div>
          <div className="events-element"></div>
          <div className="events-element"></div>
          <div className="events-element"></div>
        </div>
      </div>
      <div className="volunter-container">
        <div className="title">
          <h3>Nos Bénévols adhérents</h3>
        </div>
        <div className="volunter-element"></div>
      </div>
    </div>
  );
}
