"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Navbar logo */}
          <div className="navbar-header">
            <Link to="app" className="navbar-brand">
              <img className="header-logo" alt="Brand logo" src="img/react-logo.png"/>
            </Link>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="app">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="authors">Authors</Link></li>
            </ul>
          </div>{/* /.navbar-collapse */}

        </div>{/* /.container-fluid */}
      </nav>
    );
  }
});

module.exports = Header;