import React, { Component, useState, useEffect } from 'react';
import {
	Link
} from 'react-router-dom';
function Nav() {
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
        console.log(json);
        setMenus(json.items);
      });
  }, []);

  return (
    <nav>
      <ul style={{ display: "flex" }}>
        {menus &&
          menus.map((item) => (
            <li key={item.ID}>
              <Link
                to={{
                  pathname: item.slug,
                  state: {
                    pageId: item.object_id
                  }
                }}
              >
                {item.title}
              </Link>
              {item.child_items &&
                item.child_items.map((childItem) => (
                  <ul>
                    <li key={childItem.ID}>
                      <Link
                        to={{
                          pathname: childItem.slug,
                          state: {
                            pageId: childItem.object_id
                          }
                        }}
                      >
                        {childItem.title}
                      </Link>
                    </li>
                  </ul>
                ))}
            </li>
          ))}
      </ul>
    </nav>
  );
}





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
