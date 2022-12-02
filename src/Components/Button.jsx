import React from "react";

function Button(classes,text,icon) {
  return( <>
   <button className={`btn btn-${classes}`}>
    {icon}
    {!text ? "Button" : text}
   </button>

   
  </>
  );
  
}

export default Button;
