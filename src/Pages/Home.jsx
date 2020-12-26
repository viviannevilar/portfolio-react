import React from "react"
import './Home.css'

// images
import LogoCrop from "../images/MeeCropSharp.png"

function Home() {


  return (
    <div className="page-wrapper">

      <div id="image">
        <img src={LogoCrop} alt="Icon-Large"></img>
      </div>
    
      <div id="my-info">
        <h1>
          Vivianne Vilar
        </h1>
        <p>
          Economist, accidental data scientist, wannabe web developer.
        </p>
        <div class="buttons">
          <button onclick="document.location='about-me.html'">About Me</button>
          <button onclick="document.location='contact.html'">Get in Touch</button>
        </div>
      </div>
    
    </div>
  )
}

export default Home