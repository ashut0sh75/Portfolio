import React from "react";

export const CodeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const ArrowIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const StarIcon = ({ size = 24, color = "currentColor", filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : "none"}
    stroke={color}
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.74 20.64 25 12 19.52 3.36 25 6.45 16.74 0 10.26 8.91 10.26 12 2"></polygon>
  </svg>
);

export const CircleIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    opacity="0.1"
  >
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

export const SkillBadgeSVG = ({ name, color = "#6366f1" }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id={`grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.1 }} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill={`url(#grad-${name})`} stroke={color} strokeWidth="2" />
    <text
      x="50"
      y="50"
      textAnchor="middle"
      dy=".3em"
      fontSize="12"
      fill={color}
      fontWeight="600"
      fontFamily="Inter, sans-serif"
    >
      {name}
    </text>
  </svg>
);

export const Timeline = ({ items = [] }) => (
  <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }} />
      </linearGradient>
    </defs>
    {/* Main timeline line */}
    <line x1="200" y1="0" x2="200" y2="600" stroke="url(#timelineGrad)" strokeWidth="3" />
    {/* Timeline dots - example for 3 items */}
    {[100, 250, 400].map((y, i) => (
      <React.Fragment key={i}>
        <circle cx="200" cy={y} r="10" fill="#6366f1" />
        <circle cx="200" cy={y} r="6" fill="#0f172a" />
      </React.Fragment>
    ))}
  </svg>
);

export default {
  CodeIcon,
  ArrowIcon,
  StarIcon,
  CircleIcon,
  SkillBadgeSVG,
  Timeline,
};
