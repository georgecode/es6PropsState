var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var State = require('./components/State');
var ParentChild = require('./components/ParentChild');
var ParentChildSibling = require('./components/ParentChildSibling');
var ToBeStyled = require('./components/ToBeStyled');

ReactDOM.render(
<div>	
  {/*<App />*/}
  {/*<State />*/}
  {/*<ParentChild />*/}
  {/*<ParentChildSibling />*/}
  <ToBeStyled />
 </div>,
  document.getElementById('app')
  );