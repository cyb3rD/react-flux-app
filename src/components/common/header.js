"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Navbar logo */}
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img className="header-logo" alt="Brand logo" src="img/react-logo.png"/>
            </a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}

        </div>{/* /.container-fluid */}
      </nav>
    );
  }
});

module.exports = Header;