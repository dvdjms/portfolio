import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { experiences } from '../constants';
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';

const Experience = () => {

    return (
        <>
        <Section id="experience">
        <SectionTitle value="EXPERIENCE" titleDirection={400} lineDirection={-400} />
            <ExperienceOuterContainer>
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 100}}   
                        transition={{ type: "spring", stiffness: 20, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileInView={{opacity: 1, y: 0}}
                    >
                        <Tilt glareEnable={true}>
                            <ExperienceInnerContainer>
                                <H6>{experience.title}</H6>
                                <LineBreak></LineBreak>
                                <Paragraph>{experience.description}</Paragraph>
                                <Transferable>Transferable skills...</Transferable>
                                    {experience.skills.map((skill, index) => (
                                        <SkillTitle key={`skill-${index}`}>{skill}</SkillTitle>
                                    ))}
                            </ExperienceInnerContainer>
                        </Tilt>
                    </motion.div>
                    )
                )}
            </ExperienceOuterContainer>
        </Section>
        </>
    );
};


const H6 = styled.h6`
    height: 20px;
`;

const Section = styled.section`
    height: 100%;
    border-bottom: solid #e8e8ea;
    text-align: center;
    padding-top: 80px;
    @media (max-width: 676px) {
        height: 245vh;
    };
    @media (max-width: 468px) {
        height: 220vh;
    };
    @media (max-width: 320px) {
        height: 240vh;
    };
`;

const ExperienceOuterContainer = styled.div`
    margin: auto;
    margin-top: 10vh;
    margin-bottom: 20vh;
    height: 100%;
    width: 70%;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3vh;
    @media (max-width: 978px) {
        gap: 1vh;
        width: 80%;
    };
    @media (max-width: 878px) {
        width: 90%;
    };
    @media (max-width: 778px) {
        gap: 2vh;
        grid-template-columns: repeat(1, 1fr);
        width: 40%;
    };
    @media (max-width: 678px) {
        height: 88%;
        width: 50%;
    };
    @media (max-width: 578px) {
        width: 70%;
    };
    @media (max-width: 368px) {
        width: 85%;
    };
`;

const ExperienceInnerContainer = styled.div`
    height: 420px;
    width: 100%;
    border: solid #05A1A7 3px;
    border-radius: 5px;
    padding-top: 18px;
    @media (max-width: 976px) {
        height: 60vh;
        font-size: 12px;
    };
    @media (max-width: 578px) {
        width: 95%;
    };
    @media (max-width: 368px) {
        height: 380px;
        width: 100%;
    };
`;


const SkillTitle = styled.li`
    list-style: none;
    margin-bottom: 1vh;
`;

const Paragraph = styled.p`
    height: 90px;
    margin-left: .5vw;
    margin-right: .5vw;
    margin-top: 2vh;
    text-align: left;
    padding: 1vh;
`;

const LineBreak = styled.div`
    background: #E31A6D;
    height: 4px;
    margin: auto;
    margin-top: 20px;
    width: 45%;
`;

const Transferable = styled.div`
    background-color: #05A1A7;
    color: white;
    font-weight: 600;
    font-size: 2.2vh;
    padding-top: 3px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 3vh;
    height: 4vh;
    width: 180px;
`;


export default Experience;
