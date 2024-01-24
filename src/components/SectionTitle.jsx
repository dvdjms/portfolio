import React  from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";


export const SectionTitle = ({value, titleDirection, lineDirection}) => {

    let title_direction = 0;
    let line_direction = 0;

    if (window.innerWidth < 500) {
        title_direction = titleDirection / 2;
        line_direction = lineDirection / 2;
    }
    else {
        title_direction = titleDirection;
        line_direction = lineDirection;
    };

    return (
        <>
        <TitleContainer>
            <motion.div
                initial={{opacity: 0, x: title_direction}}   
                transition={{ type: "spring", stiffness: 30, delay: 0.1 }}
                viewport={{ once: true }}
                whileInView={{opacity: 1, y: 0, x: 0}}>
                <Title>{value}</Title>
            </motion.div>
        </TitleContainer>
        <LineContainer>
            <motion.div
                initial={{opacity: 0, x: line_direction}}   
                transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
                viewport={{ once: true }}
                whileInView={{opacity: 1, x: 0}}>
                <Underline></Underline>
            </motion.div>
        </LineContainer>
        </>
    );
};

const TitleContainer = styled.div`
    position: relative;
    height: 50px;
    width: 100%;
    @media (max-width: 568px) {
        height: 40px;
    };
`;

const LineContainer = styled.div`
    position: relative;
    height: 5px;
    width: 100%;
`;

const Underline = styled.div`
    border: #1d242e solid 2px;
    left: 50%;
    margin-left: -35px;
    position: absolute;
    width: 70px;
    @media (max-width: 568px) {
        width: 50px;
        margin-left: -25px;
    };
`;

const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2vw;
    font-weight: 600;
    color: #1d242e;
    left: 50%;
    margin-left: -125px;
    position: absolute;
    top: 0;
    width: 250px;
    @media (max-width: 768px) {
        font-size: 18px;
    };
`;


export default SectionTitle;