
// import React from 'react';
var React = require('react');
var Styles = require('./Style');


var blogContainerStyle = {
  background: Styles.blue,
  height:     '100%' 
};

class BlogContainer extends React.Component{
	render(){
		return(
			<div style={blogContainerStyle}>
			<h1>YO YO YO HELLO</h1>
			</div>
			)
	}
}

module.exports = class extends React.Component{
	render(){
		return(
			<div>
				<BlogContainer/>
			</div>
			)
	}
}