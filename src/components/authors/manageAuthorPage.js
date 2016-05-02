"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

//* Top level component - Controller View */
var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: ''}
    };
  },
  //* Called for every keypress */
  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-3 col-sm4">
          <h1>Manage Author</h1>
          {/* Pass author state down to the child component*/}
          <AuthorForm
            author={this.state.author}
            onChange={this.setAuthorState} />
        </div>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;