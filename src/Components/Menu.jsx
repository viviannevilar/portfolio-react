import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import Logo from "../Components/Logo"


export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--my-green); 
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  border: 2px solid var(--my-gray);
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: 500px) {
    width: 100%;
  }

  a {
    font-family: Titan One;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: normal;
    letter-spacing: 0.5rem;
    color: var(--my-gray);
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 500px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--my-yellow);
      text-shadow: 0 0 6px var(--my-gray);
    }
  }
`;


const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="center">
        <a href="/">
          <span role="img" aria-label="home">
            <Logo figHeight="4rem"/>
          </span>
         
        </a>
      </div>  
      <a href="/about/">
        About Me
      </a>
      <a href="/projects/">
        Projects
        </a>
      <a href="/contact/">
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}


export default Menu;