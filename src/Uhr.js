
import React,{Component} from 'react';
import './App.css';


class Uhr extends Component {
	constructor(props){
		super(props)

		this.state = {date: new Date()}	

}


	ticker = setInterval(() => this.tick(), 1000);	

componentWillUnmount = () => {

	clearInterval(this.ticker)
}
	

			
		
	
	tick = () => {
		
		this.setState({date: new Date()})
	};	
	

 render() {

let Zeit = this.state.date;

let Jahr = Zeit.getFullYear();
	Jahr = Jahr.toString();

const Woche = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
let Wochentag = Zeit.getDay();
Wochentag = Woche[Wochentag];



const Mona = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "Novembe", "Dezember"]

let Monat = Zeit.getMonth();
Monat = Mona[Monat]


let Stunden = Zeit.getHours()
if (Stunden  < 10) {Stunden   = "0"+Stunden}
Stunden = Stunden.toString();

let Minuten = Zeit.getMinutes()
if (Minuten < 10) {Minuten = "0"+Minuten}
Minuten = Minuten.toString();

let Sekunden = Zeit.getSeconds()
if (Sekunden < 10) {Sekunden = "0"+Sekunden}
Sekunden = Sekunden.toString();



return (
	<p className="uhr">Aktuelle Uhrzeit:<br/>{Wochentag}, 
   				{Zeit.getDate().toString()}. {Monat} {Jahr}
   				<br/>{Stunden}:{Minuten}:{Sekunden} Uhr </p>
);

}

}

export default Uhr;

