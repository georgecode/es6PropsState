var React = require('react');


//setting a statless child class props with a parent class
class Parent extends React.Component{

	constructor(props,context){
		super(props, context);

		this.state = {
			totalClicks: 0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		var total = this.state.totalClicks;
		this.setState({ totalClicks: total + 1 });

	}

	render(){
		return(
		<div>
			<h1>{this.state.totalClicks}</h1>
			<Child onClick={this.handleClick}/>
			<h1>Wazzz up</h1>
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



