import React from "react";
import "./TechMarquee.scss";
import {skillsSection} from "../../portfolio";

export default function TechMarquee() {
  const skills = skillsSection.softwareSkills || [];
  if (skills.length === 0) {
    return null;
  }

  // Duplicate the list so the horizontal scroll loops seamlessly.
  const loop = [...skills, ...skills];

  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee-track">
        {loop.map((skill, index) => (
          <div className="tech-marquee-item" key={index} title={skill.skillName}>
            <img
              src={skill.iconSrc}
              alt={skill.skillName}
              loading="lazy"
              draggable="false"
            />
            <span>{skill.skillName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
