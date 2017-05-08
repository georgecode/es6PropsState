var React = require('react');

class Parent extends React.Component{

	constructor(props,context){
		super(props, context);

		this.state = {
			totalClicks: 0
		};

		this.handleClick = this.handleClick.bind(this);
	}//END ES6 way

	handleClick(){
		var total = this.state.totalClicks;
		this.setState({ totalClicks: total + 1 });

	}

	render(){
		return(
		<div>
			<h1>{this.state.totalClicks}</h1>
			<Child onClick={this.handleClick}/>
			<h1>zzzWazzz up</h1>
		</div>
		)
	}
}




class Child extends React.Component{
	render(){
		return(
			<button onClick={this.props.onClick}>
        		Click Me!
      		</button>
		)
	}
}


module.exports = class extends React.Component{
  render() {
    return (
    	<div>
    	<Parent />
    	<h1>HELLLLOOOOOOOO</h1>
    	</div>
    )
  }
}