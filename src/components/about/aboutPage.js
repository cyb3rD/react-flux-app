"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
        <div className="container">
          <h1 className="well">About</h1>
          <p>
            This application uses the following technologies:
            <ul>
              <li>React</li>
              <li>React router</li>
              <li>Flux</li>
              <li>Node</li>
              <li>Gulp</li>
              <li>Browserify</li>
              <li>Bootstrap</li>
            </ul>
          </p>
        </div>
    );
  }
});

module.exports = About;