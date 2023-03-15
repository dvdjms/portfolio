import styled, { keyframes } from 'styled-components';
import './Modal.css';
import React from 'react';
import ScrollSpy from 'react-scrollspy-navigation';


const Header = () => {

    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= window.innerHeight){
            document.querySelector('#one').style.color = "#E31A6D";
            document.querySelector('#two').style.color = "white";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 1.6){
            document.querySelector('#one').style.color = "white";
            document.querySelector('#two').style.color = "#E31A6D";
            document.querySelector('#three').style.color = "white";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 2.6){
            document.querySelector('#two').style.color = "white";
            document.querySelector('#three').style.color = "#E31A6D";
            document.querySelector('#four').style.color = "white";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 3.8){
            document.querySelector('#three').style.color = "white";
            document.querySelector('#four').style.color = "#E31A6D";
            document.querySelector('#five').style.color = "white";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 4.8){
            document.querySelector('#four').style.color = "white";
            document.querySelector('#five').style.color = "#E31A6D";
            document.querySelector('#six').style.color = "white";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 6){
            document.querySelector('#five').style.color = "white";
            document.querySelector('#six').style.color = "#E31A6D";
        }
    }

    return (
        <>
        <HeaderOne>
            <H1>Software Developer</H1>
        </HeaderOne>

        <HeaderTwo>
            <UnorderedList>
            <ScrollSpy>
                <List><A id="one" href="#about">About</A></List>
                <List><A id="two" href="#training">Training</A></List>
                <List><A id="three" href="#skills">Skills</A></List>
                <List><A id="four" href="#experience">Experience</A></List>
                <List><A id="five" href="#portfolio">Portfolio</A></List>
                <List><A id="six" href="#contact">Contact</A></List>
            </ScrollSpy>
            </UnorderedList>
        </HeaderTwo>
        </>
    )

};


const H1 = styled.h1`
    margin-top: 0;
    color: #efefef;
    padding-top: 12px;
    text-align: center;
    font-size: 2rem;
    @media (max-width: 1000px) {
        font-size: 1.8rem;
        padding-top: 1%;
    }
    @media (max-width: 768px) {
        font-size: 1.6rem;
        padding-top: 2%;
    }
    @media (max-width: 667px) {
        font-size: 1.4rem;
        padding-top: 3.5%;
    }
`;


const HeaderOne = styled.div`
    height: 9vh;
    background: #252934;
`;

const HeaderTwo = styled.header`
    height: 80px;
    background-color: #1b242f;
    border-bottom: solid 3px #10c2c9;
    border-top: solid .5px #E31A6D;
    width: 100%;
    top: 0;
    height: 50px;
    position: sticky;
    z-index: 3;
`;

const UnorderedList = styled.ul`
    list-style: none;
    margin: auto;
    padding-top: 10px;
    width: 43%;
    display: flex;
`;

const FromBottom = keyframes`
    from {
        transform: translateY(100%);
    };
`;

const List = styled.li`
    font-size: 20px;
    float: left;
    margin-right: 20px;
    animation-name: ${FromBottom};
    animation-duration: 1.5s;
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 400;
    &:hover {
        color: #E31A6D;
        text-decoration: none;
    }
    &:active {
        color: #10c2c9;
    }
`;


export default Header;
