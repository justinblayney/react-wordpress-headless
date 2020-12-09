import React, { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";

function find (arr, key, val) { 
// Find array element which has a key value of val 
  for (var ai, i = arr.length; i--;)
    if ((ai = arr[i]) && ai[key] == val)
      return ai;
  return null;
};

function FetchContent( { pageId } ) {
	
const [page, setPage] = useState([]); 

	 useEffect(() => {
      fetch("pages.json" ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
		
        .then(res => res.json())
        
		.then(json =>{
             setPage(find (json, 'id', {pageId}))}
              )
         });
	
	
	return (
		<>
		{page.map(page => ( 
		 	<h1 key={page.id}>{page.title.rendered}</h1>
		))}

		</>
	);
}


function Page() {
  const { state:  { pageId }  } = useLocation();
	

  return (
    <div className="container-fluid">
	  
	  <FetchContent  pageId={pageId} />
	  
	 </div>
  );
}
 
export default Page;
