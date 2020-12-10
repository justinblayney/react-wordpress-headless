import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


// fetches  Page data from JSON (Located in public directory)
// PageId is a slug that comes from Page.js function

function FetchContent({ pageId }) {
const [foundItem, setFoundItem] = useState();
  useEffect(() => {
    fetch("pages.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        const found = json.find(({slug}) => (slug === pageId ));
        setFoundItem(found);
      });
  }, [pageId]);

	
	
  if (!foundItem) return <div className="404" />;
  return (
    <>
      <h1 key={foundItem.id}>
	  		{foundItem.title && foundItem.title.rendered ? foundItem.title.rendered: ''}
	  </h1>
	  
	  <div dangerouslySetInnerHTML={{__html: foundItem.content.rendered}}></div>
	  

	  
    </>
  );
}


// catches pageId which is a state sent from Nav
// sends pageId to FetchContent to grab the content for the page

function Page() {

const [pageId, setPageId] = useState();


	
useEffect(()=> {
  setPageId(window.location.pathname.slice(1));
  
});
	
	
	
  return (
    <div className="container-fluid">
      <FetchContent pageId={pageId} />
    </div>
  );
}

export default Page;
