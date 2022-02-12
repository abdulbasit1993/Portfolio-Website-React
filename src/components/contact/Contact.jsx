import "./contact.scss";
import { PhoneAndroid, Mail } from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="head1">Let's Get in Touch!</h1>
      <div className="line"></div>
      <h2 className="head2">
        Need a Web / Mobile App Developer? Ready to Work!
      </h2>

      <div className="contactDiv">
        <div className="iconDiv">
          <PhoneAndroid className="icon" />
          <a href="tel:+923212257780" className="phoneNo">
            +92 321 2257780
          </a>
        </div>

        <div className="iconDiv">
          <Mail className="icon" />
          <a href="mailto:abasitm.1993@gmail.com" className="phoneNo">
            abasitm.1993@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
