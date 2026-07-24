import React, {useContext, useEffect, useRef} from "react";
import "./certificate.scss";
import CertificateCard from "../../components/certificateCard/certificateCard";
import {certificateSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Certificate() {
  const {isDark} = useContext(StyleContext);
  const scrollRef = useRef(null);
  const paused = useRef(false);
  const frame = useRef(null);
  const drag = useRef({active: false, startX: 0, startScroll: 0, moved: false});

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Keep the scroll position within the first of the two duplicated sets
    // so the slide (auto or manual) loops seamlessly in both directions.
    const normalize = () => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft <= 0) el.scrollLeft += half;
    };

    const step = () => {
      if (!paused.current && !drag.current.active) {
        el.scrollLeft += 0.5;
        normalize();
      }
      frame.current = requestAnimationFrame(step);
    };

    if (!reduced) {
      frame.current = requestAnimationFrame(step);
    }

    const pause = () => (paused.current = true);
    const resume = () => (paused.current = false);

    // Drag-to-scroll (pointer events cover mouse + touch)
    const onDown = e => {
      drag.current = {
        active: true,
        startX: e.clientX,
        startScroll: el.scrollLeft,
        moved: false
      };
      el.classList.add("is-dragging");
    };
    const onMove = e => {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.startX;
      if (Math.abs(dx) > 3) drag.current.moved = true;
      el.scrollLeft = drag.current.startScroll - dx;
      normalize();
    };
    const onUp = () => {
      drag.current.active = false;
      el.classList.remove("is-dragging");
    };
    // Prevent a drag from also firing the card's click (opens a link)
    const onClickCapture = e => {
      if (drag.current.moved) {
        e.stopPropagation();
        e.preventDefault();
        drag.current.moved = false;
      }
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      cancelAnimationFrame(frame.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  if (!certificateSection.display) {
    return null;
  }

  // Duplicate the cards for a seamless looping slide.
  const cards = [
    ...certificateSection.certificateCards,
    ...certificateSection.certificateCards
  ];

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
            <span className="certificate-hint">
              ⟵ drag or hover to browse ⟶
            </span>
          </div>
          <div className="certificate-cards-div" ref={scrollRef}>
            {cards.map((card, i) => {
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
