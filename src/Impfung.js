import React, {Component} from 'react';
import "./App.css";
import Impfen from "./Bilder/impfen1.JPG"
import Immun from "./Bilder/immun1.JPG"

class Geschichte extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

	<div className="homeApp">
		<img src={Impfen} className="I11" alt="Impfen" />	
	<div className="contentHome" className="Impfen">	

	<h2>Ist eine Corona-Impfung gefährlich?</h2>
	<p className="Einleitung">                   
    	Nur eine kleine Auswahl als Anregung zum Weiterstöbern.       
    </p>
		
		<div className="Ein">
		<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=vVQkMU86U0s" target="_blank" >
				Prof. Dr. Reiss - Prof. Dr. Bhakdi	03.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=vVQkMU86U0s" target="_blank" >
				Prof. Dr. Bhakdi	09.09.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=nwypeZBjAgI" target="_blank" >
				Dr. Krämer Doc Ulli 	22.08.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=lNmyT5_BTGA" target="_blank" >
				Dr. Bonelli	12.08.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=O-42QVqIXtY" target="_blank" >
				RPP Institut Paul Cullen 	08.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=Z1PU0YqtYPU" target="_blank" >
				Clemens Arvay 	10.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=Z1PU0YqtYPU" target="_blank" >
				Prof. Stephan Hockertz 	17.07.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=EvTwBhSREYw" target="_blank" >
				Lutz Männel	06.07.2020
			</a>
		</div>

	</div>
	<img src={Impfen} className="I12" alt="Impfen" />
	<img src={Immun} className="I2" alt="Immun" />
</div>
	 
  );
};
};

export default Geschichte;
