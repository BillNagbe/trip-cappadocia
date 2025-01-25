import React from "react";

const headerContainerStyle = {
    width: "50%",
    height: "fit-content",
    padding: "2rem 4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dotted red",
    margin: "5vh auto",
}

const titleStyle = {
    color: "hsl(360, 90%, 56%)",
    fontStyle: "italic",
    letterSpacing: "0.25rem",
    textAlign: "center",
    fontSize: "3rem"
}

function Header(props) {

    return (
        <div 
        style={headerContainerStyle}>
        <h1 style={titleStyle}>Welcome to {props.name}</h1>
        </div>
    )
};





export default Header;