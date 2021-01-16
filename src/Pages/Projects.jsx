////////////////// imports ///////////////////
import React from "react";
import { Helmet } from 'react-helmet'
import $ from 'jquery';
import { FaExternalLinkAlt, FaGithub, FaSpeakap } from 'react-icons/fa'

// components
import ColesLogoWrapper from "../Components/ColesWrapper"
import Logo from "../Components/Logo"
import SvgPythonGraph from "../Components/SvgPythonGraph"
// import IconStack from "../Components/IconStack"
// import SvgPythonPic from "../Components/SvgPythonPic.svg"
import { HalfPage } from "./ProjectPages/ProjectPage"

// images
import LogoGroup from "../images/MeGroup6.png"
import LogoDjango from "../images/MeDjango3.png"
import LogoPython from "../images/MePython2.png"
import LogoCrowd from "../images/MeCrowd2.png"
import LogoSkewed from "../images/MeSkewed2.png"

/////////////////////// main function ////////////////////
function Projects() {
  // const [ buttonClicked, setButtonClicked ] = useState("none")

  const TITLE = 'Vivianne Vilar'

  // Jquery
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };
  
  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  window.addEventListener("wheel", e => {
    if (scrolling) return;
    if (e.wheelDelta > 0 || e.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  window.addEventListener("keydown", e => {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

  function fileLink() {
    alert("Sorry, this button doesn't do anything! Ask me, I will be happy to show you!")
  }

  function alertButton() {
    alert("This button doesn't do anything, but have fun clicking away!")
  }
  // function fileLink(e) {
  //   e.preventDefault();

  //   const linkText = "file://///Users/viviannevilar/Projects/WebScraper/Coles/ColesFinalShort.scpt" 

  //   navigator.clipboard.writeText(linkText).then(function() {
  //      alert("URL copied to clipboard. Paste it in a new tab to open the file and see a live demo!")
  //   })
    
  //   alert("Share this collection with others - your collection URL was copied to your clipboard!")

//}

// function clickButton(buttonName) {
//   console.log("inside function", buttonClicked)
//   setButtonClicked(buttonName);  
// }

  return (
    <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

      <div className="App">

        {/* ********* Python - Page 1 ********* */}
        <div className="skw-pages">
          <div className="skw-page skw-page-1 active">

            {/* left - image - set in the .scss file */}
            <div className="overlay-container">

              <HalfPage side="left" className="bf-overlay" />

              <HalfPage side="left" className="overlay">
                <div className="icons">
                  <div>
                    <a href="https://github.com/viviannevilar/Python-project"><FaGithub className="fa-icon python-black" /></a>
                    <p className="invisible">git repository</p>
                  </div>
                </div>
              </HalfPage>
            
            </div>


            {/* right - logo and name of project */}
            <HalfPage side="right">
              <div className="title-wrapper">
                <Logo src={LogoPython} figHeight="6rem"/> 
                <h2 id="python" className="skw-page__heading rainbow-text">Python</h2>
              </div>

              <div  className="description python-overlay-container" >
                <div id="python-svg">
                  <SvgPythonGraph />
                </div>
                <div id="python-overlay">
                  <div>
                    <p>Welcome to my portfolio! Here you will see the projects which were part of my <span className="python-pink">SheCodes</span> journey.</p> 
                    
                    <p>This first page you are seeing now is dedicated to my <span className="python-pink">python</span> project. On the left you can see some of the graphs that I created as part of this project. The fake graph under this text was created using SVG code (which I am keen to play more with!).
                    </p>
                    {/* <p> If you hover the mouse over the left hand side panel, you will see a link to see the files in my git repository. You can also ask me to show you how they work (so no, the button on the left called "ask" doesn't do anything!). </p>   */}
                    
                    <p>When you are ready, you can use the trackpad to slide two fingers up and see the next page!</p>
                  </div>
                </div>     

              </div>
            </HalfPage>

          </div>

        {/* ********* Django/SheCodes News - Page 2 ********* */}
          <div className="skw-page skw-page-2">

          <HalfPage side="left" >
            <div className="title-wrapper">
              <Logo src={LogoDjango} figHeight="6rem"/> 
              <h2 id="django" className="skw-page__heading fw-bold">Django</h2>
            </div>

            <div className="description white">
              <p>This project is how I learned <span className="django-blue fw-bold">Django</span> and fell in love with it!</p>
              <p>The website consists of a newspaper style website which allows registered users to post stories, like and favourite stories and see them in their profile. Visitors can filter stories by category and also search stories for particular words and expressions.</p>
              <p>
                This project wasn't deployed during the SheCodes course. I have since deployed it but I am yet to add data to it, so unfortunately it looks empty for now.
              </p>
            </div>
          </HalfPage>

            <div className="overlay-container">

              <HalfPage side="right" className="bf-overlay" />

              <HalfPage side="right" className="overlay" >
                <div className="icons">
                  <div>
                    <a href="http://shecodes-news.herokuapp.com/news/"><FaExternalLinkAlt className="fa-icon black" /></a>
                    <p className="invisible">open website</p>
                  </div>
                  <div>
                    <a href="https://github.com/viviannevilar/Django-project"><FaGithub className="fa-icon black" /></a>
                    <p className="invisible">git repository</p>
                  </div>
                </div>
              </HalfPage>

            </div>

          </div>

        {/* ********* Crowdfunding - Page 3 ********* */}
          <div className="skw-page skw-page-3">

            <div className="overlay-container">
              <HalfPage side="left" className="bf-overlay" />
              
              <HalfPage side="left" className="overlay" >
                <div className="icons">
                  <div>
                    <a href="https://gofundshe.herokuapp.com/"><FaExternalLinkAlt className="fa-icon crowd-white" /></a>
                    <p className="invisible"> open website</p>
                  </div>  
                  <div>
                    <a href="https://github.com/viviannevilar/crowd-react"><FaGithub className="fa-icon crowd-white" /></a> 
                    <p className="invisible"> git repository</p>
                  </div>
                </div>           
              </HalfPage>
            </div> 

            <HalfPage side="right">
              <div className="title-wrapper">
                <Logo src={LogoCrowd} figHeight="6rem"/> 
                <h2 id="crowd" className="skw-page__heading">go fund she</h2>
              </div>
              <div className="description crowd-white">
                <p>This is a crowdfunding website built using <span>Django REST</span> for the back end and <span>React</span> for the front end.</p>
                <p>Registered users can post new projects, make pledge to other people's projects, see their profile and much more!</p>
                <p>This was my first time using both <span>React</span> and <span>Django REST</span>, and I think I didn't give <span>CSS</span> enough attention nor was I careful about bugs and problems. I did however learn a lot here, and this was all done 8 weeks!</p>
              </div>
            </HalfPage>

          </div>

          {/* Group Project - Page 4 */}
          <div className="skw-page skw-page-4">

            <HalfPage side="left" >
              <div className="title-wrapper">
                <Logo src={LogoGroup} figHeight="6rem"/>
                <h2 id="group-project" className="skw-page__heading">groupProject</h2>
              </div>

              <div className="description">
                <p>Like the previous project, this website was written with <span>Django REST</span> for the back end and <span>React</span> for the front end.</p>
                <p>I contributed a lot to the <span>Django</span> and <span>React</span> parts, but not much the <span>CSS</span>. In spite of that, it was here that I started making peace with <span>CSS</span>!</p>
                <p>Overall, this was the best part of the <span>SheCodes</span> program! It was great working in a team and having the chance to see how other people work, to learn from my group mates' codes and to deal with the different backgrounds, experiences, expectations and opinions.</p>
                <p><a href="https://ellenportfolio.herokuapp.com/">Ellen Marinko</a> was one of my group mates, check out her work, she is amazing!</p>
              </div>
            </HalfPage>

            <div className="overlay-container">
              <HalfPage side="right" className="bf-overlay" />

              <HalfPage side="right" className="overlay">
                <div className="icons">
                  <div>
                    <a href="http://comparalist.herokuapp.com"><FaExternalLinkAlt className="fa-icon  group-project-gray" /></a>
                    <p className="invisible"> open website</p>
                  </div>
                  <div>
                    <a href="https://github.com/viviannevilar/group-react"><FaGithub className="fa-icon  group-project-gray" /></a>
                    <p className="invisible"> git repository</p>
                  </div>
                </div>
              </HalfPage>
            </div>

          </div>

          {/* Page 5 - Webscraper - Coles */}
          <div className="skw-page skw-page-5">

            <div className="overlay-container">

              <HalfPage side="left" className="bf-overlay" />

              {/* overlay with the csv file */}
              <HalfPage side="left" className="overlay" />

              {/* overlay on top of overlay in order not to put a filter on top of icon */}
              <HalfPage side="left" className="overlay-top">
                <div className="icons">
                  <div>
                    <a onClick={fileLink} href="#"><FaSpeakap className="fa-icon  coles-red" /></a>
                    <p className="invisible black">ask me to give you a demo!</p>
                  </div>
                </div>
              </HalfPage>

            </div>

            <HalfPage side="right" >
              <ColesLogoWrapper logoID="logo-coles-img" className="coles-logo"/>     
              <h2 id="coles" className="skw-page__heading">collect data</h2>
              <div className="description">
                <p>For this <span className="white fw-bold">webscraping</span> project, I wrote an <span className="white fw-bold">AppleScript</span> program to get data from two large Australian retailers websites. Once you run the script, it opens Safari, directs Safari to the retailer website, types in the password (when needed), changes the location (to get price data from other capital cities), and records all data in a .csv file saved to desktop.</p>
              </div>
            </HalfPage>

          </div>

        {/* ********* Portfolio - sweked pages - Page 6 ********* */}
        <div className="skw-page skw-page-6">

          <HalfPage side="left">
            <div className="title-wrapper">
              <Logo src={LogoSkewed} figHeight="5rem"/> 
              <h2 id="skewed"className="skw-page__heading fw-bold"> Portfolio </h2>
            </div>
            <div className="description">
              <p className="skewed-green">This website was built using code by <span className="skewed-purple">Nikolay Talanov</span> (right side panel) as the base. His code is written in <span className="skewed-yellow">Sass</span> and <span className="skewed-yellow">Jquery</span>, two things I have little to no experience with. I wrapped <span className="skewed-purple">Nikolay</span>'s code in <span className="skewed-yellow">React</span> and modified and added as needed. </p>
              
              <p className="skewed-green">This project was the first time I really had fun with <span className="skewed-bright-white">CSS</span>! </p>

              <p className="skewed-green">My priorities for this project are making it mobile friendly and translating the Jquery into React. I also want to improve the code by using <span className="skewed-yellow">React</span> components and investigate styled-components (which I used for this project) a bit more to see if I want to adopt it into my style.</p>
            </div>
          </HalfPage>

          <div className="overlay-container">

            <HalfPage side="right" className="bf-overlay" />

            <HalfPage side="right" className="overlay">
              <div className="icons">
                <div>
                  <a href="https://codepen.io/suez/pen/gadLre"><FaExternalLinkAlt className="fa-icon skewed-white" /></a>
                  <p className="invisible">open codepen</p>
                </div>
                <div>
                  <a href="https://github.com/viviannevilar/portfolio-react"><FaGithub className="fa-icon skewed-white" /></a>
                  <p className="invisible"> git repository </p>
                </div>
              </div>
            </HalfPage>

            {/* filter not being used */}
            {/* <svg>
              <defs>
              <filter id="colorize" color-interpolation-filters="sRGB">
              <feColorMatrix type="matrix" values="0 0 0 0 .257
                                              0 0 0 0 .257
                                              0 0 0 0 .257
                                              0 0 0 1 0"/>
              </filter>
              </defs>
            </svg> */}

          </div>
          </div>

          {/* Page 7 -  Me */}
          <div className="skw-page skw-page-7">

          <HalfPage side="left" className="bf-overlay" />

          <HalfPage side="right">
            <h2 id="about-me" className="skw-page__heading">Vivianne Vilar</h2>
              <div className="description">
                <p>Full stack developer.</p>

                <div className="button-about-wrapper">
                  <button onClick={alertButton} className="button-about">Python</button>
                  <button onClick={alertButton}className="button-about">Django</button>
                  <button onClick={alertButton}className="button-about">Django REST</button>
                  <button onClick={alertButton}className="button-about">React</button>
                  <button onClick={alertButton}className="button-about">R</button>
                  <button onClick={alertButton}className="button-about">Applescript</button>
                  <button onClick={alertButton}className="button-about">HTML</button>
                  <button onClick={alertButton}className="button-about">CSS</button>
                  <button onClick={alertButton}className="button-about">JavaScript</button>
                  {/* <button onClick={clickButton("button6")} className={`"button-about" ${buttonClicked === "button6" ? "button-active" : ""}`}>{buttonClicked === "button6" ? "Not a real button!" : "Applescript"}</button> */}
                </div>
                
                <p>Thank you for looking through my portfolio!</p>
                <p>viviannevilar at gmail dot com</p>
              </div>
          </HalfPage>

          </div>

        </div>
      </div>

      <div className="mobile-version">
        <div className="logo-mobile">
          <Logo figHeight="8rem"/>
        </div>
        <h2>Vivianne Vilar</h2>
        <p>Thanks for stopping by! Unfortunately this website does not have a mobile version yet. Please open on a desktop computer! </p>
        <p>In the meantime, you can have a look at my github page:</p>
        <div className="logo-mobile">
          <a href="https://github.com/viviannevilar/"><FaGithub className="fa-icon fa-icon-mobile my-gray" /></a>
        </div>
        
      </div>

    </div>
  );
}

export default Projects