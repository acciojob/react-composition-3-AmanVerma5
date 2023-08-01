
import React from "react";
import './../styles/App.css';
import Tooltip from './ToolTip.js'


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tootip">
          <h2>Hover over me</h2>
        </Tooltip>
        <Tooltip text="This is another tooltip"><p>Hover over to see another tooltip</p></Tooltip>
    </div>
  )
}

export default App
