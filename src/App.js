import React from "react";
import ReactTooltip from "react-tooltip";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const Tooltip = ({id}) => (
  <div>
  <ReactTooltip id={id} place="top" effect="solid">
    {id}
  </ReactTooltip>
  </div>
);

const Icon = ({id, url, icon}) => (
  <a title={id} href={url} className="icon">
    <i data-tip data-for={id} className={`fa ${icon}`}></i>
  </a>
)

const App = () => {
  return (
    <div className="container">
      <div className="avatar"></div>
      <div className="title">Heya, I'm Joe!</div>
      <div className="subtitle">Three things I tell myself everyday:</div>
      <div className="principles">
        <li>Be present</li>
        <li>Be honest</li>
        <li>Be consistent</li>
      </div>
      <div className="about">
        This is where all my stuff lives on the web
      </div>
      <div className="icons-container">
        <Icon id="Travels" url="http://joetravels.com" icon="fa-plane" />
        <Icon id="Food diary" url="https://nezaj.github.io/web-bitelog/" icon="fa-spoon" />
        <Icon id="Senior Engineer Jobsearch Course" url="https://jobsearch.dev/" icon="fa-laptop" />
        <Icon id="How to Get Into a Programming Bootcamp" url="https://leanpub.com/programmingbootcamp" icon="fa-pencil" />
        <Icon id="Github" url="https://github.com/nezaj" icon="fa-github" />
        <Icon id="LinkedIn" url="http://www.linkedin.com/in/joeaverbukh" icon="fa-linkedin-square" />

        <Tooltip id="Travels" />
        <Tooltip id="Food diary" />
        <Tooltip id="Senior Engineer Jobsearch Course" />
        <Tooltip id="How to Get Into a Programming Bootcamp" />
        <Tooltip id="Github" />
        <Tooltip id="LinkedIn" />
      </div>
    </div>
  );
};

export default App;
