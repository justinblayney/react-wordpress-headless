import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


// fetches  Page data from JSON (Located in public directory)


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
        const found = json.find(({id}) => (id === pageId));
        setFoundItem(found);
      });
  }, [pageId]);

  if (!foundItem) return <div />;
  return (
    <>
      <h1 key={foundItem.id}>
        {foundItem.title && foundItem.title.rendered ? foundItem.title.rendered: ''}
      </h1>
	  
	  
    </>
  );
}


// catches pageId which is a state sent from Nav
// sends pageId to FetchContent to grab the content for the page

function Page() {
const location = useLocation();
const [pageId, setPageId] = useState(null);
useEffect(()=> {
  if(location.state){
    setPageId(parseInt(location.state.pageId, 10));
  }
}, [location]);
  return (
    <div className="container-fluid">
      <FetchContent pageId={pageId} />
    </div>
  );
}

export default Page;
