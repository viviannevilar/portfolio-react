////////////////// imports ///////////////////
import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom";
//-----> external packages 
import { Helmet } from 'react-helmet'
//-----> components
import ContactForm from '../Components/ContactForm'
//-----> styles
import './Home.scss'
//-----> images
import LogoCrop from "../images/MeeCropSharp.png"
//import echo from "../Components/ConsoleLog";
import Pdf from '../images/CV_VivianneVilar.pdf';

////////////////// main function ///////////////////
function Home() {
  const history = useHistory()
  const location = useLocation()

  const [contactActive, setContactActive] = useState(false)




  useEffect(() => {
    if (location.pathname === "/contact/") {
      setContactActive(true)
    }
    console.log("contact active? ", contactActive)

  },[location])

  function handleClick(name) {
    if (name === "contact") {
      setContactActive(true)
    } else {
      history.push(`/${name}/`);
    }

  }


  // useEffect(() => {
  //   console.log(contactActive)
  // }, [contactActive]);



  console.log("-----------contactActive : ", contactActive)


  return (
    <div id="home" className="page-wrapper">
        <Helmet>
          <title>Vivianne Vilar - Home </title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>

      <div id="image">
        <img id="main-img" src={LogoCrop} alt="Icon-Large"></img>
      </div>
    
      <div id="my-info" className={`${contactActive ? "inactive" : "active"}`}>
        <h1>
          Vivianne Vilar
        </h1>
        <p>
          Economist, accidental data scientist, wannabe web developer.
        </p>
        <div class="buttons">
          <button onClick={() => handleClick("projects")}>Projects</button>
          <a className="button" href = {Pdf} target = "_blank">CV</a>
          {/* <button onClick="document.location='about'">CV</button> */}
          <button onClick={() => handleClick("contact")}>Contact</button>

        </div>
      </div>

      <div id="contact-form" className={`${contactActive ? "active" : "inactive"}`}>
        <ContactForm passContactActive={setContactActive} />
      </div>

    
    </div>
  )
}
export default Home