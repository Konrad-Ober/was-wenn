import React, {Component} from 'react';
import Fake from "./Bilder/fake.jpg";

import Informationen from "./Bilder/Info.JPG";

import "./App.css";

class Geschehen extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

	<div className="homeApp" className="homeAktiv">
	<div className="contentHome"   className="Aktiv" >	
		<div className="Kopf">
		<br/>
			<h2>Flyer und Prospekte,<br/>
				als Info und Argumentationshilfe<br/>
				und zum Verteilen</h2>		
			<p  className="Einleit" >                   
    			Auf Telegram gibt es die Gruppe <br/><br/>
				<a  className="videoText" href="https://www.freiheitsboten.de/" target="_blank" >
				Freiheitsboten
			</a>  <br/><br/>
				Beitreten und viele Flyer herunterladen. <br/><br/>
				<strong>Wichtig!</strong> <br/>
				Wenn Ihr auf dem Laufenden bleiben wollt <br/> 
				<strong>Alles Ausser Mainstreim</strong> <br/>
				auf Telegram beitreten.    
   			</p>
		</div>
	<div className="Organisationen">
	<h3>Auch diese Organisationen gibt es schon.<br/>Kleine Auswahl</h3>
		
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
		<img src={Informationen} className="Informationen" alt="Informationen" />
	</div>
	</div>

</div>

  );
};
};

export default Geschehen;
