import React, { Component, useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';


import './Assets/css/default.min.css';
import Header from './Components/HeaderComponent/header';
import Footer from './Components/FooterComponent/footer';
import PageRoutes from './Components/Pages/PageRoutes';




class App extends Component {
	render() {
		return(
			
	 <Router> 
		<div className="App">
			<Header />		
			
				<PageRoutes />
			
			<Footer />
   
		 </div>
	  </Router> 
	
		);	
	}
}

export default App;