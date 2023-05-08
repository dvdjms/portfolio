import styled, { keyframes } from 'styled-components';
import './Modal.css';
import React from 'react';
import ScrollSpy from 'react-scrollspy-navigation';


const Header = () => {

    window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= window.innerHeight){
            document.querySelector('#one').style.color = "#E31A6D";
            document.querySelector('#two').style.color = "";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 1.6){
            document.querySelector('#one').style.color = "";
            document.querySelector('#two').style.color = "#E31A6D";
            document.querySelector('#three').style.color = "";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 2.6){
            document.querySelector('#two').style.color = "";
            document.querySelector('#three').style.color = "#E31A6D";
            document.querySelector('#four').style.color = "";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 3.8){
            document.querySelector('#three').style.color = "";
            document.querySelector('#four').style.color = "#E31A6D";
            document.querySelector('#five').style.color = "";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 4.8){
            document.querySelector('#four').style.color = "";
            document.querySelector('#five').style.color = "#E31A6D";
            document.querySelector('#six').style.color = "";
        }
        if (window.innerHeight + window.scrollY >= window.innerHeight * 6){
            document.querySelector('#five').style.color = "";
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
    text-align: center;
    font-size: 30px;
    padding-top: 1vh;
    @media (max-width: 768px) {
        font-size: 28px;
    };
    @media (max-width: 568px) {
        font-size: 24;
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
    height: 80px;
    background-color: #1b242f;
    border-bottom: solid 3px #10c2c9;
    border-top: solid .5px #E31A6D;
    width: 100%;
    top: 0;
    height: 50px;
    position: sticky;
    z-index: 3;
    overflow-x: scroll;
        ::-webkit-scrollbar {
            display: none;
        };
`;

const UnorderedList = styled.ul`
    list-style: none;
    margin: auto;
    padding-top: 10px;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const FromBottom = keyframes`
    from {
        transform: translateY(100%);
    };
`;

const List = styled.li`
    font-size: 18px;
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
