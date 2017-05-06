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
		 <h1>Fuck yo face</h1>
			<h1>

			{this.state.title}
			</h1>
		 </div>
		)
	}
}



module.exports = class extends React.Component{
  render() {
    return (
    	<div>
    	<XInitalState title="eat a dick"/>
    	<h1>HELLLLOOOOOOOO</h1>
    	</div>
    )
  }
}