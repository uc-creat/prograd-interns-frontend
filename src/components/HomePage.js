import React from "react";
import "./images.css"
function mainpage(props){
return(
    <>
    <div className="grid-container">
    <img src= {props.src}/>
    </div>
    </>
)
   
}
export default mainpage;