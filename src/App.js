import React from "react";
import ReactTooltip from "react-tooltip";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const Icon = ({ id, url, icon }) => (
  <a title={id} href={url}>
    <i data-tip data-for={id} className={`twa ${icon} icon`}></i>
  </a>
);

const SocialIcon = ({ id, url, icon }) => (
  <a title={id} href={url}>
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

const App = () => (
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
          <a class="consistent" href="https://consistent.fit">
            Be consistent
          </a>
        </li>
      </div>
      <div className="about">This is some stuff I've created on the web</div>
      <div className="icons-container">
        {/* Blogs */}
        <Icon id="Travels" url="http://joetravels.com" icon="twa-airplane" />
        <Icon id="Vibes" url="https://joevibes.com" icon="twa-musical-note" />
        <Icon
          id="Moves"
          url="https://joemoves.com"
          icon="twa twa-man-cartwheeling"
        />

        {/* Apps */}
        <Icon id="Foods" url="http://joelogs.com" icon="twa-bento-box" />
        <Icon id="Books" url="https://zeneca.io/joe" icon="twa-books" />

        {/* Manual breakpoint, hacky but works */}
        <br />

        <Icon
          id="Daily Deal"
          url="https://dailydeal.email"
          icon="twa-martial-arts-uniform"
        />

        {/* Books/Courses */}
        <Icon
          id="Senior Engineer Jobsearch Course"
          url="https://jobsearch.dev/"
          icon="twa-laptop"
        />
        <Icon
          id="How to Get Into a Programming Bootcamp"
          url="https://leanpub.com/programmingbootcamp"
          icon="twa-graduation-cap"
        />
        <Icon
          id="Growing Pains"
          url="https://growingpainsbook.com"
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
      <Tooltip id="Travels" />
      <Tooltip id="Vibes" />
      <Tooltip id="Moves" />

      <Tooltip id="Foods" />
      <Tooltip id="Books" />
      <Tooltip id="Daily Deal" />

      <Tooltip id="Senior Engineer Jobsearch Course" />
      <Tooltip id="How to Get Into a Programming Bootcamp" />
      <Tooltip id="Growing Pains" />

      <Tooltip id="Github" />
      <Tooltip id="Instagram" />
      <Tooltip id="Twitter" />
      <Tooltip id="Youtube" />
      <Tooltip id="LinkedIn" />
    </div>
  </div>
);

export default App;
