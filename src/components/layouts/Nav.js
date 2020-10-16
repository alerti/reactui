import React, { useState } from "react";
//import { DivMode } from 'react-particles-js';
import tw from "twin.macro";
//import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

//import { Container } from "./layoutDiv";
import logo from "../../assets/images/epsa.svg";
import { LoginButton, SignupButton } from "./mainLayout";

const MainDiv = tw.div``;
const UlElements = tw.ul` list-none p-1 flex `;
const LI = tw.li`mr-16 p-2 items-center flex font-bold text-gray-600 text-xl hover:text-gray-900 cursor-pointer`;
const Logo = tw.img`object-contain h-4`;

const Navbar = (props) => {
  const [change, setChange] = useState(false);
  const changePosition = 100;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: "100ms ease",
    fontFamily: "Poppins",
    width: "100%",
  };
  return (
    <React.Fragment>
      <Burger />
      <div>
        <div className="MainDiv__here">
          <div className="nav__navbar" style={{ position: "fixed" }}>
            <MainDiv style={style} className="Navbar__items-div">
            <UlElements>
            <LI><Logo src={props.logo} alt="EPESA"></Logo></LI>
              
              
                <LI>{props.about}</LI>
                <LI>{props.service}</LI>

                <LI>{props.plans}</LI>
             
              <LI>
              <NavLink
                to="/login"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
             
                <LoginButton>login</LoginButton>
              </NavLink>
              </LI>
              <LI>
              <NavLink
                to="/signup"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <SignupButton>Register</SignupButton>
              </NavLink>
              </LI>
              </UlElements>
            </MainDiv>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

///additional code
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#fff" : "#444")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 1s linear;
    box-shadow:0 0 5px 5px lightgray;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const Wrapper = tw.div`h-16 w-screen flex z-50  shadow-lg fixed box-border flex-row items-center  justify-center  p-4 `;
  const Phonediv = styled.div`
  width:100%;
  display: none;
  @media (max-width: 768px) {
     background:white;
    display: flex;
  `;
  const [change, setChange] = useState(false);
  const changePosition = 100;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: "3s ease",
    fontFamily: "Poppins",
    width: "100%",
   
  };
  return (
  
      <Phonediv>
        <Wrapper style={style}>
          <Logo src={logo} alt="EPESA"></Logo>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <RightNav open={open} />
        </Wrapper>
      </Phonediv>
  
  );
};



const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  align-items: center;
  width:100%;

  li {
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #f2f2f2f2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 3s ease-in-out;
    display: flex;
    justify-items:center;
    align-items:center;
    border-top-left-radius:200px;
    border-bottom-left-radius:200px;
    padding-top:150px;
    border-left:0.5px solid lightgray;

    

    li {
      color: #aaaa;
      font-weight:bolder;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
   
                <li></li>
                <li>About us</li>
                <li>How it works</li>

                <li>Plans</li>
          
              <NavLink
                to="/login"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                {" "}
                <LoginButton>login</LoginButton>
              </NavLink>
              
              <NavLink
                to="/signup"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <SignupButton>Register</SignupButton>
              </NavLink>
             
    </Ul>
  );
};
