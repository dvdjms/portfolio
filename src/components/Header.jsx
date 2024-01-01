import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import '../modal/Modal.css';
import { navlinks } from '../constants';


const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);
    const refs = useRef(navlinks.map(() => React.createRef()));

    const measurements = [1, 1.6, 2.6, 3.8, 4.8, 6].map((multiplier) => window.innerHeight * multiplier);
  
    const handleScroll = () => {
      for (let index = 0; index < measurements.length; index++) {
        const targetMeasurement = measurements[index];
        const nextMeasurement = measurements[index + 1] || Infinity;
        const isElementInView = window.innerHeight + window.scrollY >= targetMeasurement &&
          window.scrollY < nextMeasurement;
  
        if (isElementInView) {
          setActiveIndex(index);
        };
      };
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },);

    const handleHamburger = () => {
        setHamburger(!hamburger);
    };

    return (
        <>
        <HeaderOne>
            <H1>Software Developer</H1>
        </HeaderOne>

        <HeaderTwo>
            <UnorderedList>
                {navlinks.map((link, index) => (
                    <List key={link.id} value={`link-${link.id}`} ref={refs}>
                        <A 
                            href={`#${link.id}`} id={`link-${link.id}`}
                            ref={refs.current[index]}
                            style={{ color: activeIndex === index ? '#E31A6D' : '' }}
                            >{link.title}
                        </A>
                    </List>
                ))}
            </UnorderedList>

            <UnorderedList1 hamburger={!hamburger} onClick={handleHamburger}>
                {navlinks.map((link) => (
                   <List key={link.id}>
                        <A href={`#${link.id}`}>{link.title}</A>
                   </List>
                ))}
            </UnorderedList1>

            <HamburgerContainer onClick={handleHamburger}>
                <Hamburger></Hamburger>
                <Hamburger></Hamburger>
                <Hamburger></Hamburger>
            </HamburgerContainer>
        </HeaderTwo>
        </>
    );
};


const HamburgerContainer = styled.div`
    /* float: right; */
    display: flex;
    flex-flow: column nowrap;
    height: 2rem;
    justify-content: space-around;
    margin-top: 1vh;
    margin-left: 20px;
    padding-top: 3px;
    width: 2rem;
    z-index: 10;
    &:hover {
        cursor: pointer;
    };
    @media (max-width: 668px) {
        height: 1.5rem;
        margin-top: 1.8vh;
    };
`;

const Hamburger = styled.div`
    background-color: #efefefec;
    border-radius: 10px;
    display: none;
    height: 3px; 
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 30px;
    @media (max-width: 568px) {
        display: block;
    };
    @media (max-width: 368px) {
        width: 24px;
    };
`;

const H1 = styled.h1`
    margin-top: 0;
    color: #efefef;
    text-align: center;
    font-size: 30px;
    padding-top: 1vh;
    @media (max-width: 768px) {
        font-size: 28px;
    };
    @media (max-width: 568px) {
        font-size: 24px;
        padding-top: 1.8vh;
    };
`;

const HeaderOne = styled.div`
    height: 50px;
    background: #252934;
    display: inline-block;
    justify-content: center;
    width: 100%;
`;

const HeaderTwo = styled.header`
    background-color: #1b242f;
    border-bottom: solid 3px #10c2c9;
    border-top: solid .5px #E31A6D;
    width: 100%;
    top: 0;
    height: 50px;
    position: sticky;
    z-index: 3;
    ::-webkit-scrollbar {
        display: none;
    };
`;

const UnorderedList = styled.ul`
    list-style: none;
    margin: auto;
    padding-top: 10px;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    @media (max-width: 568px) {
        display: none;
    };
`;

const FromTop = keyframes`
    from {
        transform: translatex(-100%);
    };
`;

const FromBottom = keyframes`
    from {
        transform: translateY(100%);
    };
`;

const UnorderedList1 = styled.ul`
    display: none;
    @media (max-width: 568px) {
        animation-name: ${FromTop};
        animation-duration: 1s;
        display: ${props => props.hamburger ? 'block' : 'none'};
        list-style: none;
        margin: auto;
        margin-top: 49px;
        height: 235px;
        float: right;
        background-color: #1b242f;
        border-radius: 0 0 10px 0px;
        padding: 10px 0 10px 10px;
        width: 150px;
        position: absolute;
        border-right: .7px solid #E31A6D;
        border-bottom: .7px solid #E31A6D;
    };
`;

const List = styled.li`
    font-size: 18px;
    float: left;
    margin-right: 20px;
    animation-name: ${FromBottom};
    animation-duration: 1.5s;
    @media (max-width: 568px) {
        float: none;
        text-align: right;
        animation: none;
        padding-top: 7px;
    };
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 400;
    &:hover {
        color: #E31A6D;
        text-decoration: none;
    };
    &:active {
        color: #10c2c9;
    };
`;


export default Header;
