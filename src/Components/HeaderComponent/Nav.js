import React, { useState, useEffect } from 'react';
import {
	Link
} from 'react-router-dom';

// Fetch Wordpress Menu from public folder

function MyNav() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("main-menu.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())

      .then((json) => {
        
        setMenus(json.items);
      });
  }, []);

	
// Dynamicaly build  Bootstrap Nav menu
	
	
// className={
//		item.child_items
// 		? "nav-item dropdown"
//		: "nav-item  "
//	 }	
// this conditional statement only works outside of quotes, needs improvment to wrap around all tags
	
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
	  
		<button 
		  className="navbar-toggler" 
		  type="button" 
		  data-toggle="collapse" 
		  data-target="#navbarNavDropdown" 
		  aria-controls="navbarNavDropdown" 
		  aria-expanded="false" 
		  aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
	  	</button>
	  
	  <div className="collapse navbar-collapse" id="navbarNavDropdown">  
      <ul className="navbar-nav">
        {menus &&
          menus.map((item) => (
     	    
	  			<li 
	  			className={
                    item.child_items
                      ? "nav-item dropdown"
                      : "nav-item  "
                  } 
				key={item.ID}>
      	       
	  			<Link
	  			
	  
	  			className={
                    item.child_items
                      ? "nav-link dropdown-toggle"
                      : "nav-link  "
                  } 
	  
	 			 id={
                    item.child_items
                      ? "navbarDropdownMenuLink"
                      : ""
                  } 
	  
	  			data-toggle={
                    item.child_items
                      ? "dropdown"
                      : ""
                  } 
	  
	  			aria-haspopup={
                    item.child_items
                      ? "true"
                      : ""
                  } 
	  
	  			aria-expanded={
                    item.child_items
                      ? "false"
                      : ""
                  } 
	  	     	 
	  				
	  				 to={{
					  pathname: item.slug
					}}
				  >
					{item.title}
				  </Link>
	  
	 
	  		<div 
	  
	  			className={
                    item.child_items
                      ? "dropdown-menu"
                      : ""
                  } 
	  
	  			aria-labelledby={
                    item.child_items
                      ? "navbarDropdownMenuLink"
                      : ""
                  } 
	  			>
	 
	  
              {item.child_items &&
                item.child_items.map((childItem) => (
                  
                  
                      <Link
	  					key={childItem.ID}
	  					className="dropdown-item"
                        to={{
                          pathname: childItem.slug
                        }}
                      >
                        {childItem.title}
                      </Link>
                    
                
  					))}

  				</div>
            </li>
          ))}
      </ul>
	 </div>
    </nav>
  );
}

export default MyNav;
