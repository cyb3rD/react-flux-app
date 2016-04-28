"use strict";

var React = require("react");

// React component
var Home = React.createClass({
  render: function() {
    return (
        <div className="jumbotron text-center">
          <h1>Course administration</h1>
          <p>React, React Router and flux for ultra-responsive web apps.</p>
        </div>
      );
  }
});

module.exports = Home;