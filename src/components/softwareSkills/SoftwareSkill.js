import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, index) => (
            <li key={index} className="software-skill-inline" name={skill.skillName}>
              {skill.iconSrc && (
                <img src={skill.iconSrc} alt={`${skill.skillName} Icon`} />
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
