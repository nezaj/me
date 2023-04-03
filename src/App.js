import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import ReactMarkdown from "react-markdown";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import "./twemoji.css";
import treePath from "./tree.md";

// Navigation
// -----------------
const getLocationPage = (queryString) => {
  const rawValue = new URLSearchParams(queryString).get("page");
  return ["home", "essay"].find((x) => x === rawValue) || "home";
};

// Components
// -----------------
const Icon = ({ id, url, icon }) => (
  <a title={id} href={url} target="_blank" rel="noopener noreferrer">
    <i data-tip data-for={id} className={`twa ${icon} icon`}></i>
  </a>
);

const SocialIcon = ({ id, url, icon }) => (
  <a title={id} href={url} target="_blank" rel="noopener noreferrer">
    <i data-tip data-for={id} className={`fa ${icon} icon`}></i>
  </a>
);

const Tooltip = ({ id, place }) => (
  <div>
    <ReactTooltip id={id} place={place || "top"} effect="solid">
      {id}
    </ReactTooltip>
  </div>
);

// Pages
// -----------------
const Essay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [md, setMd] = useState("");
  useEffect(() => {
    fetch(treePath)
      .then((res) => res.text())
      .then((md) => {
        setMd(md);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="tree-essay">
      {isLoading ? (
        <div>...</div>
      ) : (
        <div>
          <ReactMarkdown source={md} />
          <div className="links">
            <a
              className="link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a
              className="link"
              href="https://growingpainsbook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Growing Pains Book
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => (
  <div className="wrapper">
    <div className="container">
      <div className="header">
        <div className="avatar"></div>
        <div className="title">Heya, I'm Joe!</div>
      </div>
      <div className="home">
        <div className="subtitle">Three things I tell myself everyday:</div>
        <div className="principles">
          <li>Be present</li>
          <li>Be honest</li>
          <li>
            <a
              className="consistent"
              href="https://consistent.fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Be consistent
            </a>
          </li>
        </div>
        <div className="about">This is some stuff I've created on the web</div>
        <div className="icons-container">
          <Icon id="Instant" url="https://instantdb.com" icon="twa-sparkles" />
          <Icon id="Books" url="https://zeneca.io/joe" icon="twa-books" />
          <Icon
            id="Senior Engineer Jobsearch Course"
            url="https://jobsearch.dev/"
            icon="twa-laptop"
          />
          <Icon id="A Tale of Two Trees" url="/?page=essay" icon="twa-herb" />

          {/* Manual breakpoint, hacky but works */}
          <br />

          <Icon
            id="Daily Deal"
            url="https://dailydeal.email"
            icon="twa-martial-arts-uniform"
          />
          <Icon id="Vibes" url="https://joevibes.com" icon="twa-musical-note" />
          <Icon id="Travels" url="http://joetravels.com" icon="twa-airplane" />
          <Icon
            id="How to Get Into a Programming Bootcamp"
            url="https://leanpub.com/programmingbootcamp"
            icon="twa-graduation-cap"
          />
        </div>
        <div className="about">And these are my socials</div>
        <div className="icons-container">
          {/* Social */}
          <SocialIcon
            id="Github"
            url="https://github.com/nezaj"
            icon="fa-github"
          />
          <SocialIcon
            id="Instagram"
            url="https://www.instagram.com/notafraidof138"
            icon="fa-instagram"
          />
          <SocialIcon
            id="Twitter"
            url="https://www.twitter.com/joeaverbukh"
            icon="fa-twitter"
          />
          <SocialIcon
            id="Youtube"
            url="https://www.youtube.com/channel/UC0QZuLiH9R_Ec9Xdc1jAf4Q"
            icon="fa-youtube-play"
          />
          <SocialIcon
            id="LinkedIn"
            url="https://www.linkedin.com/in/joeaverbukh"
            icon="fa-linkedin-square"
          />
        </div>
        <Tooltip id="Instant" />
        <Tooltip id="Books" />
        <Tooltip id="Senior Engineer Jobsearch Course" />
        <Tooltip id="A Tale of Two Trees" />

        <Tooltip id="Daily Deal" />
        <Tooltip id="Vibes" />
        <Tooltip id="Travels" />
        <Tooltip id="How to Get Into a Programming Bootcamp" />

        <Tooltip id="Github" />
        <Tooltip id="Instagram" />
        <Tooltip id="Twitter" />
        <Tooltip id="Youtube" />
        <Tooltip id="LinkedIn" />
      </div>
    </div>
  </div>
);

// App
// -----------------
const App = () => {
  const page = getLocationPage(window.location.search);

  let Page;
  switch (page) {
    case "essay":
      Page = <Essay />;
      break;
    case "home":
    default:
      Page = <Home />;
  }

  return <div>{Page}</div>;
};

export default App;
