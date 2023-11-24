import React, {useContext} from "react";
import "./certificate.scss";
import CertificateCard from "../../components/certificateCard/certificateCard";
import { certificateSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Certificate() {
  const {isDark} = useContext(StyleContext);
  if (!certificateSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="certificate">
        <div className="certificate-main-div">
          <div className="certificate-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {certificateSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {certificateSection.subtitle}
            </p>
          </div>
          <div className="certificate-cards-div">
            {certificateSection.certificateCards.map((card, i) => {
              return (
                <CertificateCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
