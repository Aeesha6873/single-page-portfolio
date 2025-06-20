import React from "react";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <div className="skill" key={skill.name}>
          <h2>{skill.name}</h2>
          <p>{skill.experience} Experience</p>
        </div>
      ))}
    </div>
  );
}
