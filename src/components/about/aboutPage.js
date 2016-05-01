"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm('Are you sure you want to read ABOUT?')) {
        transition.about();
      } else {
        callback();
      }
    },

    willTransitionFrom: function(transition, component) {
      if (!confirm('Are you sure you want to LEAVE ABOUT page?')) {
        transition.about();
      }
    }
  },

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