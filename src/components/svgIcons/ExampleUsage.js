import React from "react";
import { ArrowIcon, CodeIcon, StarIcon } from "../svgIcons/SVGIcons";
import "./ExampleUsage.scss";

/**
 * Example component demonstrating SVG icon usage and ambient design
 * You can adapt these patterns to your existing components
 */

export const ModernButton = ({ children, onClick }) => (
  <button className="modern-btn" onClick={onClick}>
    {children}
    <ArrowIcon size={18} color="currentColor" />
  </button>
);

export const SkillSection = ({ skills }) => (
  <div className="skills-grid">
    {skills.map((skill, i) => (
      <div key={i} className="skill-card">
        <CodeIcon size={32} color="#6366f1" />
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
        <StarIcon size={20} color="#fbbf24" filled={skill.featured} />
      </div>
    ))}
  </div>
);

export const TimelineItem = ({ date, title, description }) => (
  <div className="timeline-item">
    <div className="timeline-dot">
      <div className="timeline-inner"></div>
    </div>
    <div className="timeline-content">
      <span className="timeline-date">{date}</span>
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
);

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon size={40} color="#6366f1" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default {
  ModernButton,
  SkillSection,
  TimelineItem,
  FeatureCard,
};
