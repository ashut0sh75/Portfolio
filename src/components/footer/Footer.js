import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Ashutosh Gupta")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/ashut0sh75/Portfolio">
            Ashutosh Gupta
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <h6>
            Updated on May 27, 2024
          </h6>
        </p>
      </div>
    </Fade>
  );
}
