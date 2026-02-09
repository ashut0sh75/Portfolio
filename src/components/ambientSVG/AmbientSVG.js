import React from "react";
import "./AmbientSVG.scss";

export default function AmbientSVG() {
  return (
    <div className="ambient-svg-container">
      {/* Floating blob 1 */}
      <svg
        className="blob blob-1"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          d="M43.3,-69.8C57.4,-61.5,70.6,-47.8,76.6,-31.4C82.6,-15,81.4,4.7,76.7,22.1C72,39.5,63.9,54.4,52.4,65C40.9,75.6,26,81.9,10.1,82.4C-5.8,82.9,-23.1,77.6,-37.8,68.1C-52.5,58.6,-64.6,44.9,-70.2,29.1C-75.8,13.3,-74.9,-4.6,-69.1,-21.1C-63.3,-37.6,-52.6,-52.3,-39.2,-61.2C-25.8,-70.1,-9.7,-73.2,7.3,-72.6C24.3,-72,41.2,-78.1,43.3,-69.8Z"
        />
      </svg>

      {/* Floating blob 2 */}
      <svg
        className="blob blob-2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad2)"
          d="M48.5,-73.9C61.8,-66,71.8,-50.9,76.5,-33.8C81.2,-16.7,80.5,2.5,77.1,21C73.7,39.5,67.6,57.1,57.3,68.1C47,79.1,32.5,83.5,17.5,84.3C2.5,85.1,-12.9,82.2,-27.5,75.8C-42.1,69.4,-54.8,59.5,-62.4,46.1C-70,32.7,-72.5,15.9,-70.5,-1.3C-68.5,-18.5,-62.1,-36.2,-51.5,-49.2C-40.9,-62.2,-26.2,-70.5,-10.2,-72.8C5.8,-75.1,35.2,-81.8,48.5,-73.9Z"
        />
      </svg>

      {/* Floating blob 3 */}
      <svg
        className="blob blob-3"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#f43f5e", stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad3)"
          d="M50.5,-75.6C65.1,-68.1,76.6,-53.8,81.4,-37.3C86.2,-20.8,84.3,-2.2,79.5,15.3C74.7,32.8,67,49.1,54.8,61.1C42.6,73.1,25.9,80.8,7.8,81.1C-10.3,81.4,-30.8,74.3,-46.1,62.3C-61.4,50.3,-71.5,33.3,-73.2,15.5C-74.9,-2.3,-68.2,-21,-58,-36.8C-47.8,-52.6,-34.1,-65.5,-18.5,-72.9C-2.9,-80.3,14.1,-82.1,50.5,-75.6Z"
        />
      </svg>

      {/* Grid pattern overlay */}
      <svg
        className="grid-pattern"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(99, 102, 241, 0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
