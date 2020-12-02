

import React from "react";


function SvgPythonGraph() {

  return(
    
      <svg width="100%" height="100%" fill="var(--python-black)">
        <defs>
          {/* <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5"/>
          </pattern> */}
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="url(#smallGrid)"/>
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--python-gray)" strokeWidth="3"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* blue line */}
        <line x1="0" y1="250" x2="100" y2="220" style={{ stroke: "var(--python-dark-blue)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 
        <line x1="100" y1="220" x2="200" y2="20" style={{ stroke: "var(--python-dark-blue)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 
        <line x1="200" y1="20" x2="250" y2="220" style={{ stroke: "var(--python-dark-blue)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 
        <line x1="250" y1="220" x2="400" y2="235" style={{ stroke: "var(--python-dark-blue)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 

        {/* red line */}
        <line x1="0" y1="250" x2="100" y2="150" style={{ stroke: "var(--python-red)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 
        <line x1="100" y1="150" x2="200" y2="180" style={{ stroke: "var(--python-red)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 
        <line x1="200" y1="180" x2="250" y2="230" style={{ stroke: "var(--python-red)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 
        <line x1="250" y1="230" x2="400" y2="100" style={{ stroke: "var(--python-red)", strokeWidth: "2", strokeDasharray: "3 3"}}/> 

          {/* lines I was experimenting with */}
        {/* <line x1="0" y1="0" x2="100" y2="100" style={{ stroke: "red", strokeWidth: "2"}}/> 
        <line x1="20" y1="20" x2="120" y2="20"
          style={{ stroke: "red", fill: "none",
          strokeWidth: "1.5px",
          strokeDasharray: "3 3"}}  /> */}

        {/* <g fill="none" stroke="black" stroke-width="4">
          <path stroke-dasharray="5,5" d="M5 20 l215 0" />
          <path stroke-dasharray="10,10" d="M5 40 l215 0" />
        </g> */}
      </svg>
    

  )
}


export default SvgPythonGraph