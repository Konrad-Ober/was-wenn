import React, {Component} from 'react';
import "./App.css";
import Recht1 from "./Bilder/grundrechte.JPG"
import Recht2 from "./Bilder/grundrechte2.JPG"

class Geschehen extends Component {


	UNSAFE_componentWillMount(){
		window.scrollTo(0,0);
	}

render() {	
  return (	

	<div className="homeApp">
	<img src={Recht1} className="R11" alt="Grundrechte" />
	<div className="contentHome" >	

	<div className="Recht">
	<h2>Bürgerrechte sind eingeschränkt,<br/>zurecht?</h2>
	  
		
		<div className="Ein">
		<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=b5NsnjyWhqo"  target="_blank">
				RA Fuellmich Sammelklage	01.10.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=1vf4wsYkhJ0" target="_blank" >
				Doc Ulli tv Rechtsanwälte	25.08.2020
			</a>
			<a className="videoText"  rel="nooopener" href="https://www.youtube.com/watch?v=JkUU7fk0CSo&t=1674s" target="_blank" >
				5 Ideen	Rechtsanwälte 27.07.2020
			</a>
			<a className="videoText" rel="nooopener"  href="https://www.youtube.com/watch?v=x46OM6qPlcA&t=90s" target="_blank" >
				RA Pankalla	22.09.2020
			</a>

		</div>
	</div>
</div>

<img src={Recht1} className="R12" alt="Grundrechte" />
<img src={Recht2} className="R2" alt="Grundrechtd" />

</div>

  );
};
};

export default Geschehen;
