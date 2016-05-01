"use strict";

var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

// React component
var Home = React.createClass({
  render: function() {
    return (
        <div className="jumbotron text-center">
          <h1>Course administration</h1>
          <p>React, React Router and flux for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-md btn-info">Lear more</Link>
        </div>
      );
  }
});

module.exports = Home;