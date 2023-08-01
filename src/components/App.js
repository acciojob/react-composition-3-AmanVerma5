
import React from "react";
import './../styles/App.css';
import Tooltip from './ToolTip.js'


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tootip">
          <h1>Hover over me</h1>
        </Tooltip>
        <Tooltip text="This is another tooltip">Hover over to see another tooltip</Tooltip>
    </div>
  )
}

export default App
