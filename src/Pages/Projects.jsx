////////////////// imports ///////////////////
import React from "react";
import $ from 'jquery';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

// components
import ColesLogoWrapper from "../Components/ColesWrapper"
import Logo from "../Components/Logo"

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
                      <p id="invisible">git repository</p>
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
                  <Logo src={LogoPython} figHeight="10rem"/> 
                  <h2 id="python" className="skw-page__heading rainbow-text">
                    Python
                    {/* <span className="light-blue">P</span>
                    <span className="red">y</span>
                    <span className="orange">t</span>
                    <span className="green">h</span>
                    <span className="purple">o</span>
                    <span className="blue">n</span> */}
                  </h2>
                  <div style={{width: "30rem", height: "18rem", marginTop: "2rem", marginLeft: "-8rem"}}>
                  <svg width="100%" height="100%" fill="var(--python-black)">


                    <defs>
                      {/* <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" strokeWidth="0.5"/>
                      </pattern> */}
                      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <rect width="80" height="80" fill="url(#smallGrid)"/>
                        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--python-gray)" strokeWidth="2"/>
                      </pattern>
                     </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />

                    <line x1="0" y1="0" x2="100" y2="100" style={{ stroke: "red", strokeWidth: "2"}}/> 
                    <line x1="20" y1="20" x2="120" y2="20"
                      style={{ stroke: "red", fill: "none",
                      strokeWidth: "1.5px",
                      strokeDasharray: "3 3"}}  />


                    {/* <g fill="none" stroke="black" stroke-width="4">
                      <path stroke-dasharray="5,5" d="M5 20 l215 0" />
                      <path stroke-dasharray="10,10" d="M5 40 l215 0" />
                    </g> */}
                  </svg>
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
                    <h2 className="skw-page__heading fw-bold">{"{Django}"}</h2>

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
                      <a href="http://gofundshe.herokuapp.com"><FaExternalLinkAlt className="fa-icon fa-4x black" /></a>
                      <a href="https://github.com/viviannevilar/Django-project"><FaGithub className="fa-icon fa-4x black" /></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>

        {/* ********* Skewed-slides - Page 3 ********* */}
        {/*          *************************         */}
          <div className="skw-page skw-page-3">

            <div className="skw-page__half skw-page__half--left">
              <div className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                  <Logo src={LogoCrowd} /> 
                  <h2 id="crowd" className="skw-page__heading">Django REST + React</h2>
              
                </div>
              </div>
            </div>

          </div>

          {/* Page 4 */}
          <div className="skw-page skw-page-4">

            <div className="skw-page__half skw-page__half--left">
              <div className="skw-page__skewed">
                <div className="skw-page__content">
                    <div className="coles-header">
                      <Logo src={LogoGroup}/>
                      <h2 id="group-project" className="skw-page__heading">groupProject</h2>
                    </div>
                    <div className="icons">
                      <a href="http://comparalist.herokuapp.com"><FaExternalLinkAlt className="fa-icon fa-4x group-project-gray" /></a>
                      <a href="https://github.com/viviannevilar/group-react"><FaGithub className="fa-icon fa-4x group-project-gray" /></a>
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

          {/* Page 5 */}
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
                    <div className="icons">

                    </div>
                  </div>
                </div>
              </div>

              {/* overlay on top of overlay in order not to put a filter on top of icon */}
              <div className="skw-page__half skw-page__half--left overlay-top">
                <div className="skw-page__skewed">
                  <div className="skw-page__content">
                    <div className="icons">
                      {/* want to wrap this in coleswrapper, need to find out how to send the component as props */}
                      <a onClick={fileLink} href="#"><FaExternalLinkAlt className="fa-icon fa-4x coles-red" /></a>
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

          
        {/* ********* Django/SheCodes News - Page 6 ********* */}
        {/*          ******************         */}
        <div className="skw-page skw-page-6">

          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content django">
                  <Logo src={LogoSkewed}/> 
                  <h2 id="skewed"className="skw-page__heading fw-bold"> Portfolio </h2>

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
                    <a href="http://comparalist.herokuapp.com"><FaExternalLinkAlt className="fa-icon fa-4x skewed-white" /></a>
                    <a href="https://github.com/viviannevilar/Django-project"><FaGithub className="fa-icon fa-4x skewed-white" /></a>
                  </div>
                </div>
              </div>
            </div>

          </div>


          </div>








        </div>
      </div>

    </div>
  );
}


export default Projects