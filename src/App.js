import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import RawTooltip from "./components/Tooltip";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import "./twemoji.css";
import treePath from "./tree.md";

// Components
// -----------------
const Icon = ({ id, url, icon }) => (
  <RawTooltip text={id}>
    <a title={id} href={url} target="_blank" rel="noopener noreferrer">
      <i data-tip data-for={id} className={`twa ${icon} icon`}></i>
    </a>
  </RawTooltip>
);

const SocialIcon = ({ id, url, icon }) => (
  <RawTooltip text={id}>
    <a title={id} href={url} target="_blank" rel="noopener noreferrer">
      <i data-tip data-for={id} className={`fa ${icon} icon`}></i>
    </a>
  </RawTooltip>
);

// Pages
// -----------------
// (XXX): I moved this to jowords.com so may want to deprecate this
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
            <Link className="link" to="/">
              Home
            </Link>
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

const toolsData = [
  { name: "Parents 2025 Trip", url: "https://mom-gary-trip-2025.vercel.app", description: "Visualization of my parents travels!" },
  { name: "Weekly Review", url: "https://weekly-review-sable.vercel.app/", description: "Weekly review tool for 2026" },
];

const Tools = () => (
  <div className="tools-page">
    <h1>Tools</h1>
    <p>Additional tools I've made for myself</p>
    <ul>
      {toolsData.map((tool) => (
        <li key={tool.name}>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">{tool.name}</a> -- {tool.description}
        </li>
      ))}
    </ul>
    <p><Link to="/">Home</Link></p>
  </div>
);

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
          <Icon id="Zeneca" url="https://zeneca.io/joe" icon="twa-books" />
          <Icon id="Save Trippy" url="https://savetrippy.com" icon="twa-turkey" />
          <Icon
            id="Senior Engineer Jobsearch Course"
            url="https://jobsearch.dev/"
            icon="twa-laptop"
          />
          <Icon
            id="A Tale of Two Trees"
            url="https://www.joewords.com/posts/tale_of_two_trees"
            icon="twa-herb"
          />

          {/* Manual breakpoint, hacky but works */}
          <br />

          <Icon
            id="Daily Deal"
            url="https://dailydeal.email"
            icon="twa-martial-arts-uniform"
          />
          <Icon
            id="Art"
            url="https://joeshares.tumblr.com/"
            icon="twa-artist-palette"
          />
          <Icon id="Vibes" url="https://joevibes.com" icon="twa-musical-note" />
          <Icon id="Travels" url="http://joetravels.com" icon="twa-airplane" />
          <Icon
            id="How to Get Into a Programming Bootcamp"
            url="https://github.com/nezaj/code-camp-guide/tree/master"
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
      </div>
    </div>
  </div >
);

// App
// -----------------
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/t" component={Tools} />
      <Route path="/essay" component={Essay} />
    </Switch>
  </BrowserRouter>
);

export default App;
