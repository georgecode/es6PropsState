var React = require('react');

//Useing extends means Sibling is a subclass of React.Component
class Sibling extends React.Component{
	render(){
		var name=this.props.name
		return(
			<div>
				<h1>Hey, my name is {name}!!!</h1>
			</div>
			)
	}
}


class Child extends React.Component{
	handleChange(e){
		var name = e.target.value;
		this.props.onChange(name);
	}

	render(){
		return (
		<div>
			{/*below for es6 i added the . bind*/}
			<select id="great-names" onChange={this.handleChange.bind(this)}>
				<option value="Frarthur">Frarthur</option>
				<option value="Gromulus">Gromulus</option>
				<option value="Thinkpiece">Thinkpiece</option>
			</select>
		</div>
		)
	}
}


//Useing extends means Parent is a subclass of React.Component
class Parent extends React.Component{
	constructor(props,context){
		//The word super means this class will need to refer to the class it 
		//extends to. In this case super is refering to React.Component
		//props and context are the parameters we are passing to the 
		//React.Component class. 
		//https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes 
		super(props, context);

		this.state = {
			name:'Frarthur'
		};
		//Had to also add this .bind to work in es6
		this.changeName = this.changeName.bind(this);
	}//END ES6 way

	changeName(newName){
		this.setState({name:newName})

	}

	render(){
		return(
			<div>
				{/*onChange is an html event listener*/}
				<Child onChange={this.changeName}/>
				<Sibling name={this.state.name}/>
			</div>
			)
	}

}//end Parent class


module.exports = class extends React.Component{
  render() {
    return (
    	<div>
    	<h1>HELLLLOOOOOOOO</h1>
    	<Parent />
    	</div>
    )
  }
}