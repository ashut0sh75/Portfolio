import React, {useContext, useEffect, useRef, useState} from "react";
import {Fade} from "react-reveal";
import "./Stats.scss";
import {statsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

/* Counts a number up from 0 -> target once the card scrolls into view. */
function CountUp({value, suffix}) {
  const isFloat = !Number.isInteger(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const runAnimation = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1600;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic for a snappy, decelerating feel
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      {threshold: 0.4}
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const shown = isFloat ? display.toFixed(2) : Math.round(display);

  return (
    <span className="stat-number" ref={ref}>
      {shown}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const {isDark} = useContext(StyleContext);

  if (!statsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="30px">
      <div className="stats-main" id="stats">
        <div className="stats-header">
          <h1 className={isDark ? "dark-mode stats-heading" : "stats-heading"}>
            {statsSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode stats-subtitle" : "subTitle stats-subtitle"
            }
          >
            {statsSection.subtitle}
          </p>
        </div>

        <div className="stats-grid">
          {statsSection.stats.map((stat, index) => (
            <div
              key={index}
              className={isDark ? "dark-mode stat-card" : "stat-card"}
              style={{animationDelay: `${index * 0.08}s`}}
            >
              <span className="stat-icon" aria-hidden="true">
                {stat.icon}
              </span>
              <CountUp value={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
