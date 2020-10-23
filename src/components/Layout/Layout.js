import React from "react";

let layout = (props) => {
  return(
    <div> 
      <div> Header </div>
      <div>         
        { props.children }
      </div>   
    </div>
  )
}

export default layout;