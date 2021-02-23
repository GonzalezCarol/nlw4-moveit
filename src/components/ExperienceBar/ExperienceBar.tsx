import React from "react";

export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 px</span>
      <div>
        <div style={{ width: "48%" }} />
        <span className="current-experience" style={{ left: "48%" }}>
          300 xp
        </span>
      </div>
      <span>600 px</span>
    </header>
  );
}
