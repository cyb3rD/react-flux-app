"use strict";

var React = require('react');

var AuthorForm = React.createClass({

  render: function() {
    return (
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input type="text"
               name="firstName"
               className="form-control"
               placeholder="Author First Name here..."
               ref="firstName"
               value={this.props.author.firstName}
               onChange={this.props.onChange} />
        <br />

        <label htmlFor="lastName">Last Name: </label>
        <input type="text"
               name="lastName"
               className="form-control"
               placeholder="Author Last Name here..."
               ref="lastName"
               value={this.props.author.lastName}
               onChange={this.props.onChange} />
        <br />

        <input type="submit" value="Save" className="btn btn-default" />

      </form>
    );
  }
});

module.exports = AuthorForm;