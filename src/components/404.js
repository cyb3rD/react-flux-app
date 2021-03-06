"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry there is nothing to see here.</p>
        <p><Link to="app">Back to home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;