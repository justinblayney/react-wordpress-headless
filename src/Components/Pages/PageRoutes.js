import React, { Component, useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Page from './Page';

// fetches my Page Routes from JSON (Located in public directory)
// dynamically generate them
// used in App

function PageRoutes() {
    
    const [myrt, setMyrt] = useState([]); 
  
	
    useEffect(() => {
        fetch("pages.json" ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
        .then(res => res.json())
    
        .then(json =>{
             setMyrt(json)}
              )
         }, [] );
        
    
    return (
		<>
			{myrt.map(myrt => (
			
			<Route exact path={`/${myrt.slug}`} component={Page}  key={myrt.id}  />
			))}	
		
  		</>
    );
}

export default PageRoutes;
