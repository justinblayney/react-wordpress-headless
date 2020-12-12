import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './Components/HeaderComponent/header';
import Footer from './Components/FooterComponent/footer';
import PageRoutes from './Components/Pages/PageRoutes';
import Page from './Components/Pages/Page';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-10236570-1', { standardImplementation: true });
ReactGA.pageview(window.location.pathname + window.location.search);

// this dynamically loads all page routes in advance 


class App extends Component {

	
	
	render() {

		return(
			
			 <Router> 
				<div className="App">
					<Header />		
						<Route exact path="/" component={Page}  />
					    
						<PageRoutes />

					<Footer />

				 </div>
			  </Router> 
	
		);	
		
	}
}


export default App;