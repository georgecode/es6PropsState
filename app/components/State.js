var React = require('react');


//getInitialState es6 uses the ugly as fuck constructor instead
class XInitalState extends React.Component{

	// OLD school way
	// getInitialState: function () {
	// return { title: 'Title intial state' };
	// },

	//Es6 way
	constructor(props,context){
		super(props, context);

		this.state = {
			title:'THIS is inital state'
		};
	}//END ES6 way

	render(){
		return(
		 <div>
		 <h1>{this.props.title}</h1>
			<h1>

			{this.state.title}
			</h1>
		 </div>
		)
	}
}



//How to setState (change state) es6 style 

//toggleName function is setting new state

//Be aware that binding a function creates a new function. 
//You can either bind it directly in render, which means a 
//new function will be created every time the component renders, 
//or bind it in your constructor, which will only fire once.
class XsetState extends React.Component{

	constructor(props,context){
		super(props, context);

		this.state = {
			name:'BOB BOB'
		};
		//Adding bind to a constructor will make it
		//so the function will only fire once

		this.toggleName = this.toggleName.bind(this);
	}

	toggleName(){
		var newName = this.state.name == 'BOB BOB' ? 'George' : 'BOB BOB';
		this.setState({name: newName})
	}

	render(){
		return(
		  <div>
		  <h1>XXXXXYYYYYYZZZZZZ</h1>
		  <h1 onClick={this.toggleName}>{this.state.name}</h1>

		{/*Doing it like this will create a new function every time */}
		{/*h1 onClick={this.toggleName.bind(this)}>{this.state.name}</h1>*/}
		  </div>
		)
	}
}


module.exports = class extends React.Component{
  render() {
    return (
    	<div>
    	<XInitalState title='some other shit'/>
    	<h1>HELLLLOOOOOOOO</h1>
    	<XsetState />
    	</div>
    )
  }
}





