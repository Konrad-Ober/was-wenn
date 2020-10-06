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

	<h2>Diese Organisationen gibt es schon.<br/>Die können helfen</h2>
	<p className="Einleitung">                   
    	Nur eine kleine Auswahl als Anregung und zum Weiterstöbern.       
    </p>
		
		<div className="Ein">
			<a className="videoText" rel="nooopener"  rel="nooopener" href="https://querdenken-711.de" target="_blank" >
				Qerdenken 711
			</a>
			<a className="videoText" rel="nooopener"  rel="nooopener" href="https://www.corona-ausschuss.de" target="_blank" >
				Untersuchungsausschuss Corona-Ausschuss
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.acu2020.org" target="_blank" >
				Ärzte für Aufklärung
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.afa.zone"  target="_blank">				
				Anwälte für Aufklärung
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.schlussjetzt.org"  target="_blank">
				"Schlussjetzt" Rechtsanwältin Viviane Fischer
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.elternstehenauf.de" target="_blank" >
				"Eltern stehen auf" Bürgerinitiative
			</a>
			<a className="videoText" rel="nooopener"  rel="nooopener" href="https://klagepaten.eu" target="_blank" >
				KlagePaten
			</a>
		</div>






	</div>

</div>
	
	 
  );
};
};

export default Geschichte;
