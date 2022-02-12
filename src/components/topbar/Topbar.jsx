import "./topbar.scss";
import { Phone, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            AbdulBasit.
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <a href="tel:+923212257780">+92 321 2257780</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:abasitm.1993@gmail.com">abasitm.1993@gmail.com</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
