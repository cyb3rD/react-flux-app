var $ = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

// self-invpked function with window as an argument
(function(win) {
  "use strict";
  var App = React.createClass({
    render: function() {
      var Child;
      // sample basic routing for small apps
      switch(this.props.route) {
        case 'about': Child = About; break;
        default: Child = Home;
      }

      return (
        <div>
          <Child/>
        </div>
      );
    }
  });

  function render() {
    var route = win.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener('hashchange', render);
  render();

})(window);

