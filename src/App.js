import React from "react";
import ReactTooltip from "react-tooltip";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

// Pages
const HOME_PAGE = "home";
const DEFAULT_PAGE = HOME_PAGE;

// Helpers
// ---------------------------------------------------------------------------
const getPage = (queryString) => {
  const rawValue = new URLSearchParams(queryString).get("page");
  return [HOME_PAGE].find((x) => x === rawValue) || DEFAULT_PAGE;
};

// Functional Components
// ---------------------------------------------------------------------------
const Icon = ({ id, url, icon }) => (
  <a title={id} href={url} className="icon">
    <i data-tip data-for={id} className={`fa ${icon}`}></i>
  </a>
);

const Tooltip = ({ id }) => (
  <div>
    <ReactTooltip id={id} place="top" effect="solid">
      {id}
    </ReactTooltip>
  </div>
);

const HomePage = ({ updatePage }) => (
  <div className="home">
    <div className="subtitle">Three things I tell myself everyday:</div>
    <div className="principles">
      <li>Be present</li>
      <li>Be honest</li>
      <li>Be consistent</li>
    </div>
    <div className="about">This is where all my stuff lives on the web</div>
    <div className="icons-container">
      {/* Blogs */}
      <Icon id="Travels" url="http://joetravels.com" icon="fa-plane" />
      <Icon id="Vibes" url="https://joevibes.com" icon="fa-music" />
      <Icon id="Moves" url="https://joemoves.com" icon="fa-superpowers" />

      {/* Apps */}
      <Icon id="Foods" url="http://joelogs.com" icon="fa-spoon" />
      <Icon id="Books" url="https://zeneca.io/joe" icon="fa-book" />

      {/* Books/Courses */}
      <Icon
        id="Senior Engineer Jobsearch Course"
        url="https://jobsearch.dev/"
        icon="fa-laptop"
      />
      <Icon
        id="How to Get Into a Programming Bootcamp"
        url="https://leanpub.com/programmingbootcamp"
        icon="fa-graduation-cap"
      />
      <Icon
        id="Growing Pains"
        url="https://growingpainsbook.com"
        icon="fa-pagelines"
      />

      {/* Social */}
      <Icon id="Github" url="https://github.com/nezaj" icon="fa-github" />
      <Icon
        id="Twitter"
        url="https://www.twitter.com/joeaverbukh"
        icon="fa-twitter"
      />
      <Icon
        id="LinkedIn"
        url="https://www.linkedin.com/in/joeaverbukh"
        icon="fa-linkedin-square"
      />

      <Tooltip id="Travels" />
      <Tooltip id="Vibes" />
      <Tooltip id="Moves" />

      <Tooltip id="Foods" />
      <Tooltip id="Books" />

      <Tooltip id="Senior Engineer Jobsearch Course" />
      <Tooltip id="How to Get Into a Programming Bootcamp" />
      <Tooltip id="Growing Pains" />

      <Tooltip id="Github" />
      <Tooltip id="Twitter" />
      <Tooltip id="LinkedIn" />
    </div>
  </div>
);

// Stateful Components
// ---------------------------------------------------------------------------
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: getPage(window.location.search),
    };
  }

  updatePage = (page) => {
    const currentPath = new URLSearchParams(window.location.search);
    currentPath.set("page", page);
    const newUrl = window.location.pathname + "?" + currentPath.toString();
    window.history.pushState(null, "", newUrl);
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    return (
      <div className="container">
        <div className="header">
          <div
            className="avatar"
            onClick={() => this.updatePage(HOME_PAGE)}
          ></div>
          <div className="title">Heya, I'm Joe!</div>
        </div>
        {page === HOME_PAGE && <HomePage updatePage={this.updatePage} />}
      </div>
    );
  }
}

export default App;
