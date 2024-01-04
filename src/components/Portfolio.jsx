import React from 'react';
import styled, { keyframes }  from 'styled-components';
import Modal from '../modal/Modal';
import { projects } from '../constants';
import { motion } from "framer-motion";

const Portfolio = () => {

    return (
        <Section id="portfolio">

            <SectionTitle>PORTFOLIO</SectionTitle>
            <motion.div
                initial={{opacity: 0, y: 100, x:100}}   
                transition={{ type: "spring", stiffness: 20, delay: 0.1 }}
                viewport={{ once: true }}
                whileInView={{opacity: 1, y: 0, x: 0}}
            >
                <ScrollContainer >
                    {projects.map((project, index) => (
                        <ScrollElement key={index}>
                            <ImageContainer >
                                <Image className="webImage" alt={`${project.title}-homepage`} src={project.imageMain}></Image>
                                <TitleOfPortfolio>{project.title}</TitleOfPortfolio>
                                <TechnologiesHeader>{project.technologies}</TechnologiesHeader>
                                <LearnMoreButton type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target={`#myModal${project.modalNumber}`}>LEARN MORE</LearnMoreButton>
                            </ImageContainer>
                        </ScrollElement>
                    ))}
                </ScrollContainer>
                <Modal></Modal>
            </motion.div>
        </Section>
    );
};


const SectionTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vw;
    font-weight: 600;
    color: #161639;
    width: 35%;
    margin: auto;
    @media (max-width: 768px) {
        font-size: 20px;
    };
    @media (max-width: 568px) {
        font-size: 16px;
    };
`;

const Section = styled.section`
    height: 107vh;
    text-align: center;
    padding-top: 12vh;
    padding-bottom: 30vh;
    background-color: #F5f5f5;
    border-bottom: none;
    @media (max-width: 676px) {
        height: 250vh;
    };
    @media (max-width: 468px) {
        height: 85vh;
    };
    @media (max-width: 368px) {
        height: 95vh;
        width: 100%;
    };

`;

const ScrollElement = styled.div`
    border: solid #E31A6D;
    position: relative;
    padding: var(--_spacer);
    background: var(--surface-2);
    border-radius: 0px;
    grid-template-rows: min-content;
    gap: var(--_spacer);
    background-color: #F5f5f5;
    box-shadow: 5px;
    box-shadow: var(--shadow-4);
    margin-top: var(--_spacer);
    @media (max-width: 368px) {
        width: 100%;
    };
`;

const scrollAnimation = keyframes`
    0% { left: 10%; right: 10%; }
    100% { left: 0%; right: 0; }
`;

const ScrollContainer = styled.div`
    /* height: 47vh; */
    position: relative;
    --_spacer: 15px;
    background-color: #252934;
    display: grid;
    gap: var(--_spacer);
    grid-auto-flow: column;
    grid-auto-columns: 36%;
    padding: 0 var(--_spacer) var(--_spacer);
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    margin-top: 10vh;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: var(--_spacer, 7vh);
        ${ScrollElement} {
    scroll-snap-align: start;
    };
    animation-name: ${scrollAnimation};
    animation-duration: 1s;
    @media (max-width: 1020px) {
        /* --_spacer: 2vh; */
        grid-auto-columns: 50%;
    };
    @media (max-width: 768px) {
        --_spacer: 3vh;
        grid-auto-columns: 80%;
    };
    @media (max-width: 568px) {
        --_spacer: 2vh;
        grid-auto-columns: 98%;
    };
    @media (max-width: 368px) {
        --_spacer: 1vh;
    };
    
`;

const Image = styled.img`
    aspect-ratio: 16 / 9;
    border: solid #474775;
    border-radius: 3px;
    border-width: .5px;
    inline-size: 100%; 
    z-index: 2;
    transition-duration: .4s;
    transition-property: all;
`;

const TitleOfPortfolio = styled.h5`
    font-size: 18px;
    margin: auto;
    position: absolute;
    transition-duration: .4s;
    transition-property: all;
    @media (max-width: 768px) {
        font-size: 20px;
    };
    @media (max-width: 468px) {
        font-size: 18px;
    };
    @media (max-width: 368px) {
        font-size: 16px;
    };
`;

const TechnologiesHeader = styled.p`
    color: #E31A6D;
    font-size: 16px;
    margin: auto;
    padding-top: 5vh;
    position: absolute;
    transition-duration: .4s;
    transition-property: all;
    @media (max-width: 1020px) {
        font-size: 16px;
        padding-top: 5vh;
    };
    @media (max-width: 768px) {
        padding-top: 7vh;
    };
    @media (max-width: 468px) {
        padding-top: 6vh;
    };
    @media (max-width: 368px) {
        padding-top: 6vh;
    };
`;

const LearnMoreButton = styled.button`
    background: transparent;
    border: solid #E31A6D 2px;
    border-radius: 0;
    color: #212121;
    font-size: 1.2vw;
    height: 2.8vw;
    top: 75%;
    padding: 0;
    position: absolute;
    transition-duration: .4s;
    transition-property: all;
    width: 10vw;
    z-index: 2;
    &:hover {
        cursor: pointer;
        background-color: #E31A6D;
        border: #E31A6D;
        color: white;
    };
    &:focus {
        background-color: #E31A6D;
        border: #E31A6D;
        box-shadow: none;
    };
    @media (max-width: 885px) {
        font-size: 16px;
        height: 35px;
        width: 140px;
        top: 70%;
    };
    @media (max-width: 768px) {
        font-size: 16px;
        height: 35px;
        width: 140px;
    };
    @media (max-width: 468px) {
        font-size: 12px;
        height: 27px;
        width: 100px;
    };
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    ${TitleOfPortfolio} {
        opacity: 1;
    };
    ${TechnologiesHeader} {
        opacity: 1;
    };
    ${LearnMoreButton} {
        opacity: 0;
    };
    ${Image} {
        opacity: 1;
    };
    &:hover {
        z-index: 2;
        ${TitleOfPortfolio} {
            display: block;
            opacity: 1;
            transform: translateY(4vw);
        };
        ${TechnologiesHeader} {
            display: block;
            opacity: 1;
            transform: translateY(4vw);
        };
        ${LearnMoreButton} {
            display: block;
            opacity: 1;
            transform: translateY(-2vw);
        };
        ${Image} {
            opacity: 0;
        };
    };
`;


export default Portfolio;
