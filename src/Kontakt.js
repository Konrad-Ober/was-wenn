import React, {Component}  from 'react';

import "./App.css"


class Kontakt extends Component {
	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}



render() {
  return (
  
	  <div className="kontaktApp">
		<h1>"Zur Eiche"</h1>
		<p className="content2">

			Gasthof "Zur Eiche"<br/>
			Hauptstraße 8<br/>
			02748 Bernstadt OT Kemnitz<br/>
			<br/>	
			Tel.: 035874/25376
			<br/>zur-eiche-kemnitz@gmx.de

		</p>	
		<div className ="anfahrt">

				<a className="anfahrtA"
				href="https://www.google.com/maps/place/Gaststätte+Zur+Eiche/@51.0765712,14.7270499,
				12z/data=!4m5!3m4!1s0x47091e3c62b5b65d:0x3c43cccaa9e4ee9e!8m2!3d51.06944!4d14.77931" >Anfahrt<br/>mit<br/>Google Map</a> 
				

		</div>
	  </div>

  );
};
}

export default Kontakt;
