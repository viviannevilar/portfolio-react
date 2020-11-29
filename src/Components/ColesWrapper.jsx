import React from "react"
import Logo from "./Logo"
import LogoColes from "../images/MeColes.png"
import styled from 'styled-components'


function ColesLogoWrapper(props) {

  const { logoID } = props

  const figHeight = 10


  const DivMiddleRing = styled.div`
    background-color: white;
    height: ${figHeight}rem;
    width: ${figHeight}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${figHeight/2}rem;
    margin: 0 auto;
  `
  const DivInnerRing = styled.div`
    border: ${0.09*figHeight}rem solid var(--coles-red); 
    height: ${0.94*figHeight}rem;
    width: ${0.94*figHeight}rem;
    border-radius: ${0.47*figHeight}rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `



  return (
    <div id="logo-coles-wrap">
      <DivMiddleRing className="logo-coles">
        <DivInnerRing className="logo-coles-ring">
          <Logo className={`${logoID  ? logoID : null }` } src={LogoColes} figHeight={`${0.6*figHeight}rem`} /> 
        </DivInnerRing>
      </DivMiddleRing>
    </div>
  )
}

export default ColesLogoWrapper
