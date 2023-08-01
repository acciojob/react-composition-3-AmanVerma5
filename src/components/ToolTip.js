import React, { useState } from "react";

const Tooltip=({text,children})=>{
    let [ishover,setIsHover]=useState(false);

    return(
        <div>
            {ishover && <div className="tooltiptext">{text}</div>}
            <div className="tooltip" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>{children}</div>
        </div>
    )


}

export default Tooltip