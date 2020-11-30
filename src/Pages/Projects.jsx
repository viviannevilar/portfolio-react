////////////////// imports ///////////////////
import React from "react";
import $ from 'jquery';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

// components
import ColesLogoWrapper from "../Components/ColesWrapper"
import Logo from "../Components/Logo"
import SvgPythonGraph from "../Components/SvgPythonGraph"
// import SvgPythonPic from "../Components/SvgPythonPic.svg"

// images
import LogoGroup from "../images/MeGroup6.png"
import LogoDjango from "../images/MeDjango3.png"
import LogoPython from "../images/MePython2.png"
import LogoCrowd from "../images/MeCrowd2.png"
import LogoSkewed from "../images/MeSkewed2.png"


/////////////////////// main function ////////////////////
function Projects() {

  // Jquery
  $(document).ready(function() {
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
  
    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    });
  
    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  
  })


  function fileLink(e) {
    e.preventDefault();

    const linkText = "file://///Users/viviannevilar/Projects/WebScraper/Coles/ColesFinalShort.scpt" 

    navigator.clipboard.writeText(linkText).then(function() {
       alert("URL copied to clipboard. Paste it in a new tab to open the file and see a live demo!")
    })
    
  //   alert("Share this collection with others - your collection URL was copied to your clipboard!")

}

  return (
    <div>

      {/* Crooked projects page */}
      <div className="App">

        {/* ********* Python - Page 1 ********* */}
        {/*          ******************         */}
        <div className="skw-pages">
          <div className="skw-page skw-page-1 active">

            {/* left - image - set in the .scss file */}
            <div className="overlay-container">

              <div className="skw-page__half skw-page__half--left bf-overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content"></div>
                </div>
              </div>

              <div className="skw-page__half skw-page__half--left overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content">
                    <div className="icons">
                      <div className="icon-wrapper">
                        <a id="github-python" href="https://github.com/viviannevilar/Python-project"><FaGithub id="python" className="fa-icon fa-4x python-black" /></a>
                        <p className="invisible">git repository</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>


            {/* right - logo and name of project */}
            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                  <Logo src={LogoPython} figHeight="6rem"/> 
                  <h2 id="python" className="skw-page__heading rainbow-text">
                    Python
                    {/* <span className="light-blue">P</span>
                    <span className="red">y</span>
                    <span className="orange">t</span>
                    <span className="green">h</span>
                    <span className="purple">o</span>
                    <span className="blue">n</span> */}
                  </h2>

                  <div  className="description python-overlay-container" style={{width: "25.05rem", height: "15.8rem", marginTop: "2rem", marginLeft: "-4rem"}}>
                    <div id="python-svg">
                      <SvgPythonGraph />
                    </div>
                    <div id="python-overlay">
                      <p>Python blah blah blah</p>
                    </div>
                             

                  </div>

                  {/* <div className="icons">
                      <a id="fa-git-python" href="https://github.com/viviannevilar/Python-project"><FaGithub className="fa-icon fa-4x black" /></a>
                    </div> */}

                </div>
              </div>
            </div>

          </div>



        {/* ********* Django/SheCodes News - Page 2 ********* */}
        {/*          ******************         */}
          <div className="skw-page skw-page-2">

            <div className="skw-page__half skw-page__half--left">
              <div className="skw-page__skewed">
                <div className="skw-page__content django">
                    <Logo src={LogoDjango}/> 
                    <h2 id="django" className="skw-page__heading fw-bold">{"{SheCodes} News"}</h2>
                    <div className="description black">
                      <h3>Django</h3>
                    <p>My first <span className="white">Django</span> project, this news website allows registered users to post stories. Users can also like and favourite stories and see them in their profile. 
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div className="overlay-container">

              <div className="skw-page__half skw-page__half--right bf-overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content"></div>
                </div>
              </div>

              <div className="skw-page__half skw-page__half--right overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content">
                    <div className="icons">
                      <div>
                        <a href="http://localhost:8000/"><FaExternalLinkAlt className="fa-icon fa-4x black" /></a>
                        <p className="invisible">open website</p>
                      </div>
                      <div>
                        <a href="https://github.com/viviannevilar/Django-project"><FaGithub className="fa-icon fa-4x black" /></a>
                        <p className="invisible">git repository</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        {/* ********* Crowdfunding - Page 3 ********* */}
        {/*          *************************         */}
          <div className="skw-page skw-page-3">

          <div className="overlay-container">

            <div className="skw-page__half skw-page__half--left bf-overlay">
              <div className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--left overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content">
                    <div className="icons">
                      <div>
                        <a href="https://gofundshe.herokuapp.com/"><FaExternalLinkAlt className="fa-icon fa-4x crowd-white" /></a>
                        <p className="invisible"> open website</p>
                      </div>  
                      <div>
                        <a href="https://github.com/viviannevilar/crowd-react"><FaGithub className="fa-icon fa-4x crowd-white" /></a> 
                        <p className="invisible"> git repository</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>

            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                  <Logo src={LogoCrowd} /> 
                  <h2 id="crowd" className="skw-page__heading">go fund she</h2>
                  <div className="description crowd-white">
                    <p>This is a crowdfunding website built using <span className="crowd-pink">Django REST Framework</span> for the back end and <span className="crowd-pink">React</span> for the front end. </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Group Project - Page 4 */}
          <div className="skw-page skw-page-4">

            <div className="skw-page__half skw-page__half--left">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                    <div className="title-wrapper">
                      <Logo src={LogoGroup}/>
                      <h2 id="group-project" className="skw-page__heading">groupProject</h2>
                    </div>
                    <div className="icons">
                      <div>
                        <a href="http://comparalist.herokuapp.com"><FaExternalLinkAlt className="fa-icon fa-4x group-project-gray" /></a>
                        <p className="invisible"> open website</p>
                      </div>
                      <div>
                        <a href="https://github.com/viviannevilar/group-react"><FaGithub className="fa-icon fa-4x group-project-gray" /></a>
                        <p className="invisible"> git repository</p>
                      </div>
                    </div>
                    
                </div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

          </div>

          {/* Page 5 - Webscraper - Coles */}
          <div className="skw-page skw-page-5">

            <div className="overlay-container">

              <div className="skw-page__half skw-page__half--left bf-overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content"></div>
                </div>
              </div>

              {/* overlay with the csv file */}
              <div className="skw-page__half skw-page__half--left overlay">
                <div className="skw-page__skewed">
                  <div className="skw-page__content">
                  </div>
                </div>
              </div>

              {/* overlay on top of overlay in order not to put a filter on top of icon */}
              <div className="skw-page__half skw-page__half--left overlay-top">
                <div className="skw-page__skewed">
                  <div className="skw-page__content">
                    <div className="icons">
                      {/* want to wrap this in coleswrapper, need to find out how to send the component as props */}
                      <div>
                      <a onClick={fileLink} href="#"><FaExternalLinkAlt className="fa-icon fa-4x coles-red" /></a>
                      <p className="invisible black">open file, see demo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed coles-middle-wrap">
                <div className="skw-page__content coles-inner-wrap">
                  <ColesLogoWrapper logoID="logo-coles-img" />     
                  <h2 id="coles" className="skw-page__heading">collect data</h2>

                </div>
              </div>
            </div>

          </div>

          
        {/* ********* Portfolio - sweked pages - Page 6 ********* */}
        {/*          ******************         */}
        <div className="skw-page skw-page-6">

          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content django">
                <div className="title-wrapper">
                  <Logo src={LogoSkewed} figHeight="5rem"/> 
                  <h2 id="skewed"className="skw-page__heading fw-bold"> Portfolio </h2>
                </div>
                    <div className="description">
                      <p className="skewed-green">This website was built using the code by <span className="skewed-purple">Nikolay Talanov</span> (right side panel) as the base. His code is written in <span className="skewed-bright-white">Sass</span> and <span className="skewed-bright-white">Jquery</span>, two things I have little to no experience with. I included his base code and modified it as needed. 
                      
                      I wrapped <span className="skewed-purple">Nikolay's</span> code in <span className="skewed-bright-white">React</span> and modified and added as needed. 
                      
                      I focused more on <span className="skewed-yellow">CSS</span> than <span className="skewed-bright-white">Javascript</span> on this project.</p>
                      <p className="skewed-green">This project was the first time I really had fun with <span className="skewed-white">CSS</span>, and I am looking forward to many more hours spent this way!</p>
                      <p className="skewed-green">I completed this design in a week, so of course there are many problems and ideas yet to be implemented. When I have time I plan on making this website mobile friendly, including a hamburger menu, and much more!</p>
                    </div>
              </div>
            </div>
          </div>

          <div className="overlay-container">

            <div className="skw-page__half skw-page__half--right bf-overlay">
              <div className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right overlay">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                  <div className="icons">
                    <div>
                      <a href="https://codepen.io/suez/pen/gadLre"><FaExternalLinkAlt className="fa-icon fa-4x skewed-white" /></a>
                      <p className="invisible">open codepen</p>
                    </div>
                    <div>
                      <a href="https://github.com/viviannevilar/portfolio-react"><FaGithub className="fa-icon fa-4x skewed-white" /></a>
                      <p className="invisible"> git repository </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



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


          {/* Page 7 -  */}
          <div className="skw-page skw-page-7">

              <div className="skw-page__half skw-page__half--left">
                <div className="skw-page__skewed">
                  <div className="skw-page__content"></div>
                </div>
              </div>

            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                  <Logo />
                  <h2 id="about-me" className="skw-page__heading">Vivianne Vilar</h2>
                  <div className="description">
                    <p>Full Stack Developer. </p>

                    <p>Thank you for looking through my portfolio! </p>
                  </div>
                </div>
              </div>
            </div>

          </div>




          {/* those are the end of the divs enclosing the pages. Need 3 divs after this comment */}

        </div>
      </div>

    </div>
  );
}


export default Projects