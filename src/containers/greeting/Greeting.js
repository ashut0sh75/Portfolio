import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import Hello from "../../assets/lottie/Hello";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">

          {/* LEFT SECTION */}
          <div className="greeting-text-div">
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <ul
              className={
                isDark
                  ? "dark-mode greeting-text-p greeting-bullets"
                  : "greeting-text-p subTitle greeting-bullets"
              }
            >
              {greeting.subTitle.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <SocialMedia />

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={Hello} />
            ) : (
              <img
                alt="Developer illustration"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
