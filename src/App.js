import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import ReactMarkdown from "react-markdown";

import "font-awesome/css/font-awesome.min.css";

import { updateLocation, clearLocation } from "./location";
import "./App.css";
import "./tree.css";
import "./twemoji.css";
import treePath from "./tree.md";

// Navigation
// -----------------
const getLocationPage = (queryString) => {
  const rawValue = new URLSearchParams(queryString).get("page");
  console.log(rawValue);
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

const PageIcon = ({ id, onClick, icon }) => (
  <span title={id} onClick={onClick}>
    <i data-tip data-for={id} className={`twa ${icon} icon`}></i>
  </span>
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
const Essay = ({ updatePage }) => {
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
            <div className="link" onClick={() => updatePage("home")}>
              Home
            </div>
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

const Home = ({ updatePage }) => (
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
          {/* Apps */}
          <Icon id="Instant" url="https://instantdb.com" icon="twa-sparkles" />
          <Icon id="Books" url="https://zeneca.io/joe" icon="twa-books" />
          <Icon
            id="Daily Deal"
            url="https://dailydeal.email"
            icon="twa-martial-arts-uniform"
          />
          <Icon
            id="Senior Engineer Jobsearch Course"
            url="https://jobsearch.dev/"
            icon="twa-laptop"
          />

          {/* Manual breakpoint, hacky but works */}
          <br />

          {/* Blogs */}
          <Icon id="Vibes" url="https://joevibes.com" icon="twa-musical-note" />
          <Icon id="Travels" url="http://joetravels.com" icon="twa-airplane" />

          {/* Books/Courses */}
          <Icon
            id="How to Get Into a Programming Bootcamp"
            url="https://leanpub.com/programmingbootcamp"
            icon="twa-graduation-cap"
          />
          <PageIcon
            id="A Tale of Two Trees"
            onClick={() => updatePage("essay")}
            icon="twa-herb"
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
        <Tooltip id="Daily Deal" />
        <Tooltip id="Senior Engineer Jobsearch Course" />

        <Tooltip id="Travels" />
        <Tooltip id="Vibes" />
        <Tooltip id="How to Get Into a Programming Bootcamp" />
        <Tooltip id="A Tale of Two Trees" />

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
  const [page, setPage] = useState(getLocationPage(window.location.search));

  const updatePage = (page) => {
    page === "home" ? clearLocation() : updateLocation("page", page);
    setPage(page);
  };

  let Page;
  switch (page) {
    case "essay":
      Page = <Essay updatePage={updatePage} />;
      break;
    case "home":
    default:
      Page = <Home updatePage={updatePage} />;
  }

  return <div>{Page}</div>;
};

export default App;
