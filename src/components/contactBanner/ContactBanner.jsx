import { useState } from "react";
import "./contactBanner.scss";

export default function ContactBanner() {
  return (
    <div className="contactbanner" id="contact">
      <div className="centerDiv">
        <h2 className="bannerHead">Are you ready to start?</h2>

        <p className="subtext">I'm available for hiring.</p>

        {/* Hire me button */}
        <a href="https://drive.google.com/file/d/12SfXkITLgPM8Qlbj--v57a0-_DygBoJL/view?usp=sharing" className="hireBtn">
          Hire Me
        </a>
      </div>
    </div>
  );
}
