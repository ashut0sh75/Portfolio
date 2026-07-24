import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import Hello from "../../assets/lottie/Hello";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

/* Typewriter that types a phrase, pauses, deletes, then moves to the next. */
function useTypewriter(words, typing = 70, deleting = 40, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (!words || words.length === 0) return;
    const current = words[index % words.length];
    let timer;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typing);
      } else {
        timer = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deleting);
      } else {
        setPhase("typing");
        setIndex(i => i + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, index, words, typing, deleting, pause]);

  return text;
}

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const typedRole = useTypewriter(greeting.roles || []);

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
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            {greeting.roles && greeting.roles.length > 0 && (
              <h2 className="greeting-typed" aria-live="polite">
                <span className="greeting-typed-text">{typedRole}</span>
                <span className="greeting-cursor">|</span>
              </h2>
            )}

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
