import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './App.css';


class Ich extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}


	
 render() {
  return (

		<div className="homeApp">
			<div className="contentHome">	
			<div>
			<h2>Reden wir mal<br/>über Messtechnik</h2>
        		<p>                  
            		Schon im März, als ich das erste Mal in den Nachrichten einen Bericht über die Infektionszahlen des RKI sah, 
					war mir klar, da läuft was falsch.<br/>
					Es wurd eine absolute Zahl als "Neuinfektionen" genannt, ohne Bezugsgröße.<br/>
					Damals dachte ich, die machen einen Fehler. Woher wollen Sie die Neuinfektionen wissen, bei einer begrenzten Zahl von Messungen? 
					Da keine Infektionsverteilung in Deutschland bekannt war, war eine Hochrechnung auf Deutschland 
					fragwürdig und sie konnten doch nur die positeven Tests meinen. 
					Die wirklichen Neuinfektionen sind doch viel höher als die gemessenen positiven Tests!<br/>
					Erst später habe ich kapiert, dass diese <strong>Falschetikettierung</strong> die geplante und geniale 
					<strong>Propagandalüge</strong> war!<br/>
					Nur so konnten man den Sommer über die ständig fallenden Infektionszahlen durch ständig steigenden Testzahlen ausgleichen.
					Selbst bei völlig fehlenden Infektionen kann man so mit Hilfe der Fehlerquote des Testes die 
					<strong>"nötigen Fallzahlen"</strong> schaffen.<br/>
					Seit Anfang Mai sind die positiven Tests unter der Fehlerquote des Tests, aber die offiziellen "Neuinfektionen" in absoluten Zahlen 
					(in wirklichkeit positiven Tests innerhalb der Fehlerquote) blieben hoch und konnten zur Panikmache benutzt werden.


        		</p>
				<p>
					Ich bin Konrad. Meine ersten Zweifel kamen schon beim ersten RKI-Bericht in den Nachrichten.<br/>
					Als sie von "Neuinfektionen" in Deutschland sprachen, war mir klar, da läuft was falsch.<br/>
					Dei Neunifektionen kann man nur wissen, wenn man alle testet oder eine Hochrechnung auf die Gesamtbevölkerung macht.
					Es wurde aber eine absolute Zahl genannt ohne Bezugsgröße (wie viel Testungen oder positiv pro 1000).
					Die Zahl der Neuinfizierten musste viel höher liegen.<br/>
					Genau das war aber der Trick!
					Wenn man nicht so hoch anfängt, kann man später durch mehr Testungen einen Anstieg vortäuschen.
					Selbt wenn die positiven Testungen, wie seit Anfang Mai der Fall, im Fehlerbereich des Testes liegen und somit seriös Null sind, da die Fehlerquote abgezogen werden muss.


				</p>
        </div>

		

	

			</div>
		
		</div>
  );
};
}

export default Home;
