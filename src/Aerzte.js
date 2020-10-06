import React, {Component} from 'react';
import "./App.css";
import Kinder1 from "./Bilder/kinder1.JPG"
import Kinder2 from "./Bilder/kinder2.JPG"

class Geschichte extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

	<div className="homeApp">

		<img src={Kinder1} className="K11" alt="Kinder1" />	
	
	<div className="contentHome" className="Aerzte">	

		<h2>Lassen wir jetzt die Mediziner<br/>sprechen</h2>
		<p className="Einleitung">                   
    		Nur eine kleine Auswahl als Anregung zum Weiterstöbern.       
    	</p>
		
		<div className="Ein">
			<a className="videoText" href="https://www.youtube.com/watch?v=QQgV__3eL0w" target="_blank" >
				Prof. Dr. Bhakdi - ServusTV	03.05.2020
			</a>
			<a className="videoText" rel="nooopener" href="https://www.youtube.com/watch?v=JvTauloRsPE" target="_blank" >
				Dr. Bodo Schiffmann 104	17.07.2020
			</a>
			<a className="videoText" rel="nooopener"  href="hhttps://www.youtube.com/watch?v=exX0XKo_r1Q" target="_blank" >
				Prof. Dr. Michael Klundt - Bundestagsanhörung
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=LiwggeV_apE" target="_blank" >
			Oberarzt und Intensivmediziner Herr Zehentner - bayerisch
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.bitchute.com/video/EhlCwJLHB24r/" target="_blank" >
				Dr. Bodo Schiffmann 139	14.09.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.frei3.de/article/930f8ade-5e27-46b5-b33d-ee078e9330d3" target="_blank" >
				Neurologin Margareta Griesz Brisson
			</a>

			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=JteYXEodL6Q" target="_blank" >
				Heiko Schöning	09.08.2020
			</a>

			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=Tbb0kr8ANJk"  target="_blank">
				Prof. Reis Prof. Bhakdi - 1. Teil	11.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=1yxtLmw1Zik" target="_blank" >
				Prof. Reis Prof. Bhakdi - 2. Teil	11.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=CVkdG40Rl2Y&t=157s" target="_blank" >
				Dr. Krämer Doc Ulli 	31.05.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=0JcVglSdQ-c" target="_blank" >
				Dr. Claus Köhnlein  18.09.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=PnNBqGyh6Tc&pbjreload=101" target="_blank" >
				Dr. Bonelli  13.06.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=PnNBqGyh6Tc&pbjreload=101" target="_blank" >
				Prof. Dr. Dr. Martin Haditsch  15.09.2020
			</a>
			
		</div>
	</div>

	
	<img src={Kinder1} className="K12" alt="Kinder1" />	
	
	
	<img src={Kinder2} className="K2" alt="Kinder2" />	
	

</div>
	
	 
  );
};
};

export default Geschichte;
