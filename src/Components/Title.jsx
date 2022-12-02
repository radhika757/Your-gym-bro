import React from "react";
import handsIcon from "../assests/goodbye.png";
import "./Title.css";


function Title(props) {
    return(
        <div>
            {/* <span><img src={handsIcon} alt="hello" /></span> */}
        
        <h2 className="display-1 fw-bold">{props.title}</h2>
        </div>
    );
}

export default Title;