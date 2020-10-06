import React, {Component} from 'react';


import "./App.css";


class Geschichte extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

     <div className="geschichteApp">
		<h1 className='kopfGesch1'>"Zur Eiche"</h1>
	   	<div className="kopfGeschBild">
			<div className='kopfGeschichte'>
			
				<p className='kopfGesch2'>Gasthof in Kemnitz, Oberlausitz<br/>			
					Familienbetrieb seit 1900</p>
	
	    	</div>
		


	  </div>	

			<div className='sonderText2'>

				<p>
					Seit 120 Jahren schon, heißen hier die Wirtsleute im Gasthof <strong>Zur Eiche</strong> Ulbrich.
				</p>
				<p>
					Gustav Ulbrich,der Urgroßvater der heutigen Wirtin, kaufte das Haus im Jahre 1900.
				</p>
				<p>
					Rudi Ulbrich, die nächste Generation, begann 1928 mit den Bauarbeiten eines Anbaus, dem Tanzsaal. 
					Damals richtete er sich, als gelernter Fleischermeister, auch eine Fleischerei ein.
				</p>
				<p>
					Die dritte Generation, Rudi's Sohn Werner und seine Ehefrau Sieglinde sorgten hier drei Jahrzehnte 
					lang für gesellige Stunden. Sieglinde rundete mit ihrer traditionellen Küche ihre Liebe und Verbundenheit zur 
					Gaststätte ab.
				</p>
				<p>
					2019 übernahm die Tochter Mandy Ulbrich den Betrieb.<br/>
				</p>
				<p className="rot">
					Bleiben Sie uns treu.<br/>
					Wir freuen uns auf Ihren Besuch.
				</p>
				.
			</div>
	</div>
	
	 
  );
};
};

export default Geschichte;
