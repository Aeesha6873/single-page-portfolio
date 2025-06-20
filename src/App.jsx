import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Profile />
        <Skills />
        <Project />
        <Contact />
        <Header />
      </div>
    </div>
  );
}
