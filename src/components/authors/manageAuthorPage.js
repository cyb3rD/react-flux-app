"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-md-3 col-sm4">
          <h1>Manage Author</h1>
          <AuthorForm />
        </div>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;