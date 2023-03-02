import styled, { keyframes } from 'styled-components';
import './Modal.css';
import React from 'react';
import ScrollSpy from 'react-scrollspy-navigation';


const Header = () => {

    return (
        <>
        <HeaderOne>
            <H1>Software Developer</H1>
        </HeaderOne>

        <HeaderTwo>
            <UnorderedList>
            <ScrollSpy>
                <List><A href="#about">About</A></List>
                <List><A href="#training">Training</A></List>
                <List><A href="#skills">Skills</A></List>
                <List><A href="#experience">Experience</A></List>
                <List><A href="#portfolio">Portfolio</A></List>
                <List><A href="#contact">Contact</A></List>
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
