
import React from "react";
import './../styles/App.css';
import Tooltip from './ToolTip.js'


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tootip">
          <h2 className="tooltip" ><div>Hover over me</div></h2>
        </Tooltip>
        <Tooltip text="This is another tooltip"><p className="tooltip" ><div>Hover over to see another tooltip</div></p></Tooltip>
    </div>
  )
}

export default App
