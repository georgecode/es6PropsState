var React = require('react');

//es6 class
class Header extends React.Component {
  render(){
    return (
      <h1 className="header">This is a header</h1>
      )
  }
}

class NavBar extends React.Component {
  render() {
    var pages = ['home', 'blog', 'pics', 'about', 'contact'];
    
    // OLD SKOOL map function
    // var navLinks = pages.map(function(page, i){
    //   return (
    //     <a href={'/' + page} key={i}>
    //       {page+' | '}
    //     </a>
    //   );
    // });//end oldSkool navLinks

    // ES6 arrow function
    var navLinks = pages.map((page, i) =>{ 
    	return(
	    	<a href={'/' + page} key={i}>
	    		{page+' | '}
	    	</a>
    	)

    });//end es6 way

    return <nav>{navLinks}</nav>;
  }
}



//props
class PropsDisplayer extends React.Component {
  render(){
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2> Name: {this.props.name}</h2>
        <h2>Age: {this.props.age} </h2>
        <h2>State: {this.props.state} </h2>
      </div>
      )
  }
}



// nameless module export class es6
module.exports = class extends React.Component{
  render() {
    return (
      // <h1>Hello React</h1>
      <div className="helloContainer">
      	<Header />
      	<NavBar />
      {/*props are the attributes below*/}
        <PropsDisplayer name="george" age="29" state="CA" />
          <h1 className="hello">Hello React</h1>
          <h2>TWO plus TWO equals {2+2}</h2>
      </div>
    )
  }
}
