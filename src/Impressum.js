import React, {Component} from 'react';


import "./App.css"

class Impressum extends Component {
	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {
  return (
  
	  <div className="impressumApp">
		<h1>Impressum</h1>
		<p className="content4">
			Konrad Ober<br/>
			Neue Straße 23<br/>
			02748 Bernstadt a. d. Eigen<br/>
			<br/>
			
			<br/>Mail: was-wenn-dann@gmx.de



		</p>

	
	  </div>

  );
};
};


export default Impressum;
