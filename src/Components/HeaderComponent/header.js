import React, { Component } from 'react';
import Nav from './Nav';



class Header extends Component {
		
render() {
	return (
		
    <header>
	  <div className="container-fluid">
	  	<div className="row">
			 <div className="col-12">
	  			<div className="logo">Logo</div>
				  <Nav />
					
					
			</div> 
		  </div>
		</div>
    </header>
  );
}}

export default Header;