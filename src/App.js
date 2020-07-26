import React from "react";
import ReactTooltip from "react-tooltip";
import ReactMarkdown from "react-markdown";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import books from "./books.js";

// Pages
const HOME_PAGE = "home";
const BOOKS_PAGE = "books";
const DEFAULT_PAGE = HOME_PAGE;

// Helpers
// ---------------------------------------------------------------------------
const getPage = (queryString) => {
  const rawValue = new URLSearchParams(queryString).get("page");
  return [HOME_PAGE, BOOKS_PAGE].find((x) => x === rawValue) || DEFAULT_PAGE;
};

// Functional Components
// ---------------------------------------------------------------------------
const Icon = ({ id, url, icon }) => (
  <a title={id} href={url} className="icon">
    <i data-tip data-for={id} className={`fa ${icon}`}></i>
  </a>
);

const PageIcon = ({ id, action, icon }) => (
  <div title={id} onClick={action} className="page-icon">
    <i data-tip data-for={id} className={`fa ${icon}`}></i>
  </div>
);

const Tooltip = ({ id }) => (
  <div>
    <ReactTooltip id={id} place="top" effect="solid">
      {id}
    </ReactTooltip>
  </div>
);

const BooksPage = ({ updatePage }) => (
  <div className="books">
    <div class="subtitle">This is where I list the books I've read</div>
    <ReactMarkdown source={books} />
    <div className="icons-container">
      <PageIcon id="Home" action={() => updatePage(HOME_PAGE)} icon="fa-home" />
      <Tooltip id="Home" />
    </div>
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
      <Icon id="Travels" url="http://joetravels.com" icon="fa-plane" />
      <Icon
        id="Food diary"
        url="http://joelogs.com"
        icon="fa-spoon"
      />
      <PageIcon
        id="Reading list"
        action={() => updatePage(BOOKS_PAGE)}
        icon="fa-book"
      />
      <Icon
        id="Vibes"
        url="https://twitter.com/JoeAverbukh"
        icon="fa-music"
      />
      <Icon
        id="Senior Engineer Jobsearch Course"
        url="https://jobsearch.dev/"
        icon="fa-laptop"
      />
      <Icon
        id="How to Get Into a Programming Bootcamp"
        url="https://leanpub.com/programmingbootcamp"
        icon="fa-pencil"
      />
      <Icon id="Github" url="https://github.com/nezaj" icon="fa-github" />
      <Icon
        id="LinkedIn"
        url="http://www.linkedin.com/in/joeaverbukh"
        icon="fa-linkedin-square"
      />

      <Tooltip id="Travels" />
      <Tooltip id="Food diary" />
      <Tooltip id="Reading list" />
      <Tooltip id="Vibes" />
      <Tooltip id="Senior Engineer Jobsearch Course" />
      <Tooltip id="How to Get Into a Programming Bootcamp" />
      <Tooltip id="Github" />
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
        {page === BOOKS_PAGE && <BooksPage updatePage={this.updatePage} />}
      </div>
    );
  }
}

export default App;
