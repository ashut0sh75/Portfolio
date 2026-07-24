import React, {useContext, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [copied, setCopied] = useState("");

  const copyToClipboard = (value, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).then(() => {
        setCopied(key);
        setTimeout(() => setCopied(""), 1600);
      });
    }
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className={isDark ? "dark-mode contact-card" : "contact-card"}>
          <div className="contact-div-main">
            <div className="contact-header">
              {isHireable && (
                <span className="availability-badge">
                  <span className="availability-dot" />
                  Open to opportunities
                </span>
              )}
              <h1 className="heading contact-title">{contactInfo.title}</h1>
              <p
                className={
                  isDark
                    ? "dark-mode contact-subtitle"
                    : "subTitle contact-subtitle"
                }
              >
                {contactInfo.subtitle}
              </p>

              <div className="contact-chips">
                {contactInfo.number && (
                  <div className="contact-chip">
                    <a
                      className="contact-chip-link"
                      href={"tel:" + contactInfo.number}
                    >
                      <span className="contact-chip-icon">📞</span>
                      <span className="contact-chip-text">
                        {contactInfo.number}
                      </span>
                    </a>
                    <button
                      className="copy-btn"
                      aria-label="Copy phone number"
                      onClick={() =>
                        copyToClipboard(contactInfo.number, "phone")
                      }
                    >
                      {copied === "phone" ? "✓" : "⧉"}
                    </button>
                  </div>
                )}

                <div className="contact-chip">
                  <a
                    className="contact-chip-link"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    <span className="contact-chip-icon">✉️</span>
                    <span className="contact-chip-text">
                      {contactInfo.email_address}
                    </span>
                  </a>
                  <button
                    className="copy-btn"
                    aria-label="Copy email address"
                    onClick={() =>
                      copyToClipboard(contactInfo.email_address, "email")
                    }
                  >
                    {copied === "email" ? "✓" : "⧉"}
                  </button>
                </div>
              </div>

              {copied && (
                <span className="copied-toast">Copied to clipboard!</span>
              )}

              <div className="contact-social">
                <SocialMedia />
              </div>
            </div>

            <div className="contact-image-div">
              <div className="avatar-ring">
                <img
                  id="Profile-pic"
                  alt="Ashutosh Gupta"
                  src={require("../../assets/images/MyVR.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
