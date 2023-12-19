// Import statements
import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  certificateSection
} from "../../portfolio";

// Header component

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewCertifications = certificateSection.display;

  return (
    <Headroom>
      <header className={`header ${isDark ? "dark-menu" : ""}`}>
        <a href="#" className="logo">
          <span className={`logo-name ${isDark ? "dark-text" : ""}`}>{"<Ashutosh Gupta />"}</span>
        </a>
        <ul className={`menu ${isDark ? "dark-menu" : ""}`}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewCertifications && (
            <li>
              <a href="#certificate">Certifications</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Articles</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li className="toggle-switch"> 
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
