/*eslint-disable strict */ // Disabling check. Need global vars

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = Jquery = require('jquery');

var App = React.createClass({
    render: function() {
      return (
        <div>
          <Header/>
          <div className="container-fluid">
            <RouteHandler/>
          </div>
        </div>
      );
    }
});

module.exports = App;
