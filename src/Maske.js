import React, {Component} from 'react';
import "./App.css";
import Lachen from "./Bilder/lachen.JPG"
import Zweifel from "./Bilder/zweifel1.JPG"

class Geschichte extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

	<div className="homeApp">

	
	<img src={Lachen} className="M11" alt="Lachen" />	
	
	<div className="contentHome" className="Maske">	
	
	<h2>Schützen Masken<br/>oder sind sie schädlich?</h2>
	  
	
		
		<div className="Ein">
			
			<a className="videoText" rel="nooopener"  href="https://www.frei3.de/article/930f8ade-5e27-46b5-b33d-ee078e9330d3" target="_blank" >
				Neurologin Margareta Griesz Brisson
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=0FD1tsUTL-o" target="_blank" >
				RPP Eugen Janzen
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=uDUaXBMHTFg" target="_blank" >
				Dr. Bonelli 	13.07.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=OsnD342EwqU&t=1456s" target="_blank" >
				Gunnar Kaiser 	15.08.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=IqLparCuWBA" target="_blank" >
				RPP Institut	10.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.frei3.de/article/505e6eb8-4d31-4150-a0e0-df5468542f34" target="_blank" >
				Klartext	13.09.2020
			</a>
			
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=EvTwBhSREYw" target="_blank" >
				Lutz Männel	06.07.2020
			</a>
		</div>

	</div>
	
	<img src={Lachen} className="M12" alt="Lachen" />		
	
	
	<img src={Zweifel} className="M2" alt="Zweifel" />	
	

</div>
	 
  );
};
};

export default Geschichte;
