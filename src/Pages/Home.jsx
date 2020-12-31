////////////////// imports ///////////////////
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
//-----> external packages 
import { Helmet } from 'react-helmet'
//-----> components
import ContactForm from '../Components/ContactForm'
//-----> styles
import './Home.scss'
//-----> images
import LogoCrop from "../images/MeeCropSharp.png"
//import echo from "../Components/ConsoleLog";


////////////////// main function ///////////////////
function Home() {
  const history = useHistory()

  const [contactActive, setContactActive] = useState(false)

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
          <button onClick="document.location='about'">About Me</button>
          <button onClick={() => handleClick("contact")}>Get in Touch</button>

        </div>
      </div>

      <div id="contact-form" className={`${contactActive ? "active" : "inactive"}`}>
        <ContactForm passContactActive={setContactActive} />
      </div>

    
    </div>
  )
}
export default Home