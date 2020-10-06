import React from "react";

import {NavLink} from "react-router-dom";



function Nav() {
	return (

		<nav className="Nav">
			<ul className="nav-links">
				<li >
			  		<NavLink   className="links" exact to="/" 
					  activeStyle={{
						color: '#c84220',
						boxShadow: 'none',
						borderColor:'#c84220'
						}}>Einstieg

			  		</NavLink>
			  </li> 
			  <li >
			  	<NavLink className ="links" to="/Aerzte" style={{ textDecoration: 'none'}} 
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none'
						
					  }}>Ärzte
			  	</NavLink> 
			  </li>  
			  <li >
			  	<NavLink className ="links" to="/Maske" style={{ textDecoration: 'none'}} 
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none'
						
					  }}>Maske
			  	</NavLink> 
			  </li> 
			  <li >
			  	<NavLink className ="links" to="/Impfung" style={{ textDecoration: 'none'}} 
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none'
						
					  }}>Impfung
			  	</NavLink> 
			  </li> 
			  <li >
			  	<NavLink className ="links" to="/Wirtschaft" style={{ textDecoration: 'none'}} 
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none'
					  }}>Wirtschaft
				</NavLink>
			  </li> 
			 
			  <li >

			  	<NavLink className ="links" to="/Recht" style={{ textDecoration: 'none'}} 
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none'
						
					  }}>Recht
			  	</NavLink>
			  </li>  

			 

			  <li>
			  	<NavLink className ="links" to="/Lustiges"style={{ textDecoration: 'none'}} 
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none'					
					  }}>Lustiges
			  	</NavLink>	
			  </li>	
			  <li>
				  <NavLink className ="links" to="/Flyer"
				  style={{  textDecoration: 'none',
				  backgroundColor: 'lightgreen',
				  color: "darkgreen"}} 
			  		 activeStyle={{
						color: '#c84220',
											
					  }}>aktiv werden
			  	</NavLink>	
			  </li>	

			  <li>
			  	<NavLink className ="links" id="linksImp" to="/Impressum" style={{ textDecoration: 'none'}}
			  		 activeStyle={{
						color: '#c84220',
						boxShadow: 'none',	
										
					  }}>Impressum
			  	</NavLink>
			  	
			 </li>

			</ul>
		</nav>

	
		
	);
	}
	
	export default Nav;