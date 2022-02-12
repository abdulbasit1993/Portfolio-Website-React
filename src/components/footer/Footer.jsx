import React from "react";
import "./footer.scss";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footerMain">
      <div>
        <p className="footerText">Follow Me on Social</p>
      </div>

      <div className="socialIconsDiv">
        <a href="https://www.facebook.com/ABM93.Official/" target={"_blank"}>
          <p className="socialIcon">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </p>
        </a>

        <a href="https://twitter.com/abasitm1993" target={"_blank"}>
          <p className="socialIcon">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </p>
        </a>

        <a
          href="https://www.instagram.com/abdulbasitmehtab93/"
          target={"_blank"}
        >
          <p className="socialIcon">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </p>
        </a>

        <a href="https://www.linkedin.com/in/abdulbasit1993/" target={"_blank"}>
          <p className="socialIcon">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </p>
        </a>

        <a href="https://github.com/abdulbasit1993" target={"_blank"}>
          <p className="socialIcon">
            <i className="fa fa-github" aria-hidden="true"></i>
          </p>
        </a>
      </div>

      <div>
        <p className="footerText">
          Designed with
          <i className="fa fa-heart heart" aria-hidden="true"></i>
          by{" "}
          <a href="https://github.com/abdulbasit1993" className="footerLink">
            abdulbasit1993
          </a>
        </p>
      </div>

      <p className="footerText">
        Copyright &copy; {currentYear} Abdul Basit Mehtab
      </p>
    </div>
  );
};

export default Footer;
