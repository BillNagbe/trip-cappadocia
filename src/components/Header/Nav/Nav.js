import React from "react";

const NavElement = ["Home", "History of Cappadocia", "Travel", "Shop"];

const navStyle = {
    width: "100%",
    height: "fit-content",
    border: "1px solid",
    display: "flex",
    alignItems: "flex-end",
    padding: "0.25rem"
}

const ulStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-conten",
    border: "1px solid red",
    borderRadius: "5px"
}

const liStyle = {
    padding: "0.75rem",
    listStyle: "none"
}


function Nav() {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
               {
                NavElement.map((e) => {
                  return  <li style={liStyle}>
                        <a href={e}>{e}</a>
                    </li>
                })
               }
            </ul>
        </nav>
    )
};



export default Nav;