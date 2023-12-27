import styled, { keyframes } from 'styled-components';
import '../modal/Modal.css';
import React, { useState } from 'react';


const Header = () => {

    const [hamburger, setHamburger] = useState(true);

    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= window.innerHeight){
            document.querySelector('#one').style.color = "#E31A6D";
            document.querySelector('#two').style.color = "";
        };
        if (window.innerHeight + window.scrollY >= window.innerHeight * 1.6){
            document.querySelector('#one').style.color = "";
            document.querySelector('#two').style.color = "#E31A6D";
            document.querySelector('#three').style.color = "";
        };
        if (window.innerHeight + window.scrollY >= window.innerHeight * 2.6){
            document.querySelector('#two').style.color = "";
            document.querySelector('#three').style.color = "#E31A6D";
            document.querySelector('#four').style.color = "";
        };
        if (window.innerHeight + window.scrollY >= window.innerHeight * 3.8){
            document.querySelector('#three').style.color = "";
            document.querySelector('#four').style.color = "#E31A6D";
            document.querySelector('#five').style.color = "";
        };
        if (window.innerHeight + window.scrollY >= window.innerHeight * 4.8){
            document.querySelector('#four').style.color = "";
            document.querySelector('#five').style.color = "#E31A6D";
            document.querySelector('#six').style.color = "";
        };
        if (window.innerHeight + window.scrollY >= window.innerHeight * 6){
            document.querySelector('#five').style.color = "";
            document.querySelector('#six').style.color = "#E31A6D";
        };
    };

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
                    <List><A id="one" href="#about">About</A></List>
                    <List><A id="two" href="#training">Training</A></List>
                    <List><A id="three" href="#skills">Skills</A></List>
                    <List><A id="four" href="#experience">Experience</A></List>
                    <List><A id="five" href="#portfolio">Portfolio</A></List>
                    <List><A id="six" href="#contact">Contact</A></List>
            </UnorderedList>

            <UnorderedList1 hamburger={!hamburger} onClick={handleHamburger}>
                    <List><A id="one" href="#about">About</A></List>
                    <List><A id="two" href="#training">Training</A></List>
                    <List><A id="three" href="#skills">Skills</A></List>
                    <List><A id="four" href="#experience">Experience</A></List>
                    <List><A id="five" href="#portfolio">Portfolio</A></List>
                    <List><A id="six" href="#contact">Contact</A></List>
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
