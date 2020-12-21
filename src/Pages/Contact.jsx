import React from 'react';
import Nav from '../Components/Nav'
import echo from '../Components/ConsoleLog'
import ContactForm from '../contact/index'


function Contact() {

  console.log(
    "%cAltering the text experience",
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
    "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
    "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
  );

  console.warn("Test")
  echo.warn("test")
  console.error("test")
  echo.error("test")

  echo.group( echo.asWarning( "Arnold Schwarzenegger Movies" ) );
  echo.log( "The Running Man" );
  echo.log( "Terminator 2", echo.asAlert( "Amazing!" ), echo.asWarning( "TOP 100" ) );
  echo.log( "Predator" );
  echo.log( "Twins", echo.asWarning( "TOP 50" ) );
  echo.groupEnd();


   return (
    <div className="App">
      <header className="App-header">
        <ContactForm />

      </header>
    </div>
   )
}

export default Contact