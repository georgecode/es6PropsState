var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var State = require('./components/State');
var ParentChild = require('./components/ParentChild');

ReactDOM.render(
<div>	
  {/*<App />*/}
  {/*<State />*/}
  <ParentChild />
 </div>,
  document.getElementById('app')
  );