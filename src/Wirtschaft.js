import React, {Component} from 'react';


import "./App.css";


class Geschichte extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

	<div className="homeApp">
	<div className="contentHome">	
	
	<h2>Was sind die wirtschaftlichen und <br/>gesellschaftlichen Auswirkungen?</h2>
	  
		
		<div className="Ein">
			
		<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=w3L7vzPan7U" target="_blank" >
				Dr. Markus Krall	16.08.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=6lSJqjZ3vEI" target="_blank" >
				Andreas Popp	22.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=B9chRnuPMi4" target="_blank" >
				Stefan Magnet	09.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=bT34HsltH-E" target="_blank" >
				Ernst Wolff	10.09.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=8W_ZSvaLhWk" target="_blank" >
				Andreas Popp   23.09.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=5ahXjGq2nv0" target="_blank" >
				Gerald Grosz   23.09.2020
			</a>
		</div>

	</div>

</div>
	 
  );
};
};

export default Geschichte;
