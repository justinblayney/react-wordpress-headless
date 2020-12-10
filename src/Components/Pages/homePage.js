import React, { Component } from 'react';
import FetchContent from './Page.js';

class HomePage extends Component {
	render() {
		return (
		   <div className="container-fluid">
				<FetchContent pageId={'home'} />
			</div>
	  );	
			
	}
}




export default HomePage;
