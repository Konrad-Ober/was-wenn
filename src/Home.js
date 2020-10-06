import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './App.css';
import Fake from "./Bilder/fake.jpg";

import Uhr from "./Uhr";

class Home extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}


	
 render() {
  return (

		<div className="homeApp" >
			<div className="contentHome" className="Home">	
				<div className="haupt">
				<h1>Was, wenn die Covidioten<br/>recht haben</h1>
			  
				<p className="Einleitung">                   
            		<strong>Gesunder Menschenverstand</strong> und <strong>echte Fakten</strong><br/>           	      
        		</p>
				<strong>WHO lobt Schweden</strong><br/>
				</div>
				<div className="Einl" >
					<p >
						Hallo, ich bin Konrad. <br/>						
						Da ich selber höchstens zur Messtechnik fundiert reden könnte, habe ich Links aus dem Internet zusammengestellt.
						<br/>Die Zugänge zu wichtigen Informationen werden leider oft versteckt oder gar gelöscht. 
						<br/>Soweit ist es schon gekommen.
						<br/>
						Sucht Euch das Thema aus, das Euch interessiert und Ihr werdet eine Auswahl von Videos finden.
						<br/><br/>
						Ich habe darauf verzichtet die Videos runterzuladen, damit Ihr bei YouTube, frei3 ... weiterstöbern könnt und Euch ein unabhängiges eigenes Bild macht.
						<br/><br/>
						Hier ein paar Links, die ich für den Einstieg empfehle:	<br/>
						Leider ist am Anfang oft Werbung.<br/>
						Nach jedem Video aktiv auf dieses Fenster zurückschalten <br/>
						oder eben weiterstöbern.				
					</p>

					<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=eDkiCvahzc4" target="_blank" >
						ARD	05.10.2020
					</a>

					<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=-9XTOg_rkOE" target="_blank" >
						Prof. Dr. Klaus Püschel	16.09.2020
					</a>

					
					<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=XnlT3rPNUp0" target="_blank" >
						Dr. Wodarg	17.03.2020
					</a>
					<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=Z3tYZD-R2iA&t=2s" target="_blank" >
						Ärzte stehen auf - Österreich	20.09.2020
					</a>
					<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=1pTNF4bXfho" target="_blank" >
						Dr. Raphael Bonelli	21.07.2020
					</a>
					<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=5kxbbvfthVw" target="_blank" >
						Dr. Raphael Bonelli	20.09.2020
					</a>
					<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=iZUPevF1JJo" target="_blank" >
						Lutz Männel	20.09.2020
					</a>
					<br/>
			    </div>
    
			</div>
			<img src={Fake} className="E" alt="Echt/Fake-Pandemie" />
		
		</div>
  );
};
}

export default Home;
