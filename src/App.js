import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';


import './Assets/css/default.min.css';
import Header from './Components/HeaderComponent/header';
import Footer from './Components/FooterComponent/footer';
import PageRoutes from './Components/Pages/PageRoutes';
import HomePage from './Components/Pages/homePage';

// this dynamically loads all page routes in advance 


class App extends Component {

	render() {

		return(
			
			 <Router> 
				<div className="App">
					<Header />		
						<Route exact path="/" component={HomePage}  />
					    
						<PageRoutes />

					<Footer />

				 </div>
			  </Router> 
	
		);	
		
	}
}


export default App;