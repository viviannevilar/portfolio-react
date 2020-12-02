////////////////// imports ///////////////////
import React from "react";
import { Helmet } from 'react-helmet'
import $ from 'jquery';
import { FaExternalLinkAlt, FaGithub, FaSpeakap } from 'react-icons/fa'




// components
import ColesLogoWrapper from "../Components/ColesWrapper"
import Logo from "../Components/Logo"
import SvgPythonGraph from "../Components/SvgPythonGraph"
//import IconStack from "../Components/IconStack"
// import SvgPythonPic from "../Components/SvgPythonPic.svg"

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
  
    $(document).on("mousewheel DOMMouseScroll ontouchstart ", function(e) {
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


  function fileLink() {
    alert("Sorry, this button doesn't do anything! Ask me, I will be happy to show you!")
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
                <div className="title-wrapper">
                  <Logo src={LogoPython} figHeight="6rem"/> 
                  <h2 id="python" className="skw-page__heading rainbow-text"> Python </h2>
                  </div>

                  <div  className="description python-overlay-container" >
                    <div id="python-svg">
                      <SvgPythonGraph />
                    </div>
                    <div id="python-overlay">
                      <div>
                      <p>Welcome to my portfolio! This page is dedicated to my SheCodes python project. </p>                        
                        <p>On the left you can see some of the graphs that I created as part of this project. </p>
                       <p> The fake graph under this paragraph was created using SVG.</p>
                       <p> If you hover the mouse over the left hand side panel, you will see a link to see the files in my git repository. You can also ask me to show you how they work (so no, the button on the left called "ask" doesn't do anything!). </p>  
                      
                      <p>When you are ready, you can use the trackpad to slide two fingers up and see the next page!</p>
                      </div>
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
                    <p>This project is how I learned <span className="white">Django</span> and fell in love with it!</p>
                    <p>The website consists of a newspaper style website which allows registered users to post stories, like and favourite stories and see them in their profile. Stories have categories, and visitors can filter stories by category and also search stories for particular words and expressions. </p>
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
                    <p>This is a crowdfunding website built using <span>Django REST Framework</span> for the back end and <span>React</span> for the front end. </p>
                    <p>This was my first React project, after having gone through <span>CSS</span>, <span>HTML</span>, <span>Python</span>, <span>Django</span> and <span>Django REST Framework</span>. I was getting a little tired to give up what I was enjoying to learn something completely new! I wanted to be able to savour what I had learned and get better at it instead of jumping to the next thing!</p>
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

                    <div className="description">
                      <p>Like the previous project, this website was done using <span>Django REST</span> for the back end and <span>React</span> for the front end.</p>
                      <p>I contributed a lot to the <span>Django</span> and <span>React</span> parts, but not much the <span>CSS</span>. In spite of that, it was here that I started making peace with <span>CSS!</span>.</p>
                      <p>Overall, this was the best part of the <span>SheCodes</span> program! It was great working in a team and having the chance to see how other people work, to learn from my group mates' codes and to deal with the different backgrounds, experiences, expectations and opinions. </p>
                    </div>
                    
                </div>
              </div>
            </div>



{/*  */}
{/*  */}
{/*  */}
{/*  */}



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
                          <a onClick={fileLink} href="#"><FaSpeakap className="fa-icon fa-4x coles-red" /></a>
 
                          {/* <IconStack>
                          <FaCircle className="fa-icon fa-4x black" size={'4rem'}/>
                          <FaSpeakap className="fa-icon fa-4x coles-red" size={'3rem'}/>
                        </IconStack> */}
                      
                      <p className="invisible black">ask me to give you a demo!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed coles-middle-wrap">
                <div className="skw-page__content coles-inner-wrap">
                  <ColesLogoWrapper logoID="logo-coles-img" className="coles-logo"/>     
                  <h2 id="coles" className="skw-page__heading">collect data</h2>
                  <div className="description">
                    <p>For this <span className="white fw-bold">webscraping</span> project, I wrote an <span className="white fw-bold">AppleScript</span> program to get data from two large Australian retailers websites. Once you run the script, it opens Safari, directs Safari to the retailer website, types in the password (when needed), changes the location (to get price data from other capital cities), and records all data in a .csv file saved to desktop.</p>
                  </div>

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
                      <p className="skewed-green">This website was built using the code by <span className="skewed-purple">Nikolay Talanov</span> (right side panel) as the base. His code is written in <span className="skewed-yellow">Sass</span> and <span className="skewed-yellow">Jquery</span>, two things I have little to no experience with. I wrapped <span className="skewed-purple">Nikolay</span>'s code in <span className="skewed-yellow">React</span> and modified and added as needed. 
                      
                      Here I focused more on <span className="skewed-bright-white">CSS</span> than on <span className="skewed-yellow">Javascript</span> </p>
                      <p className="skewed-green">This project was the first time I really had fun with <span className="skewed-bright-white">CSS</span>, and I am looking forward to many more hours spent this way!</p>
                      <p className="skewed-green">Next steps for this project are making it <span className="skewed-blue">mobile friendly</span>, adding a <span className="skewed-blue">hamburger menu</span>, including <span className="skewed-blue">more pages</span> and much more!</p>
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
                  {/* <Logo /> */}
                  <h2 id="about-me" className="skw-page__heading">Vivianne Vilar</h2>
                  <div className="description">
                    <p>Full stack developer.</p>

                    <div className="button-about-wrapper">
                      <button className="button-about">Python</button>
                      <button className="button-about">Django</button>
                      <button className="button-about">Django REST</button>
                      <button className="button-about">React</button>
                      <button className="button-about">R</button>
                      <button className="button-about">Applescript</button>
                      {/* <button onClick={clickButton("button6")} className={`"button-about" ${buttonClicked === "button6" ? "button-active" : ""}`}>{buttonClicked === "button6" ? "Not a real button!" : "Applescript"}</button> */}
                    </div>
                  
                    
                    <p>Thank you for looking through my portfolio!</p>

                  </div>
                </div>
              </div>
            </div>

          </div>




          {/* those are the end of the divs enclosing the pages. Need 3 divs after this comment */}

        </div>
      </div>


      <div className="mobile-version">
        <div className="logo-mobile">
          <Logo figHeight="8rem"/>
        </div>
        <h2>Vivianne Vilar</h2>
        <p>Thanks for stopping by! Unfortunately this website does not have a mobile version yet. Please open on a desktop computer! </p>
        <p>In the meantime, you can have a look at my github repository:</p>
        <div className="logo-mobile">
          <a href="https://github.com/viviannevilar/"><FaGithub className="fa-icon fa-icon-mobile my-gray" /></a>
        </div>

        
      </div>

    </div>
  );
}


export default Projects