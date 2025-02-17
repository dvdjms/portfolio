import styled from 'styled-components';
import { skills } from '../constants';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';

const Skills = () => {


    return (
        
        <Section id="skills">
        <SectionTitle value="SKILLS" titleDirection={-400} lineDirection={400} />
            <IconContainer >
                {skills.map((skill, index) => (
                    <div key={index}>
                    <motion.div
                        initial={{opacity: 0, x: -100}}   
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.07 }}
                        viewport={{ once: true }}
                        whileInView={{opacity: 1, x: 0}}
                    >
                    <Tilt scale="1.3" tiltMaxAngleX="40" tiltMaxAngleY="40">
                        <Icon src={skill.icon} alt={skill.name} />
                        <IconName>{skill.name}</IconName>
                    </Tilt>
                    </motion.div>
                    </div>
                ))}
            </IconContainer>

        </Section>
        
    );
};


const IconContainer = styled.div`
    width: 60vw;
    margin: auto;
    margin-top: 50px;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 578px) {
        width: 95vw;
    };
    @media (max-width: 368px) {
        width: 100vw;
    };
`;

const IconName = styled.p`
    margin: 0px;
    font-size: 12px;
    color: #10c2c9;
`;

const Icon = styled.img`
    margin: 25px 25px 10px 25px;
    height: 70px;
    width: 70px;
    float: left;
    @media (max-width: 578px) {
        margin: 10px;
    };
`;


const Section = styled.section`
    height: 120vh;
    border-bottom: solid #e8e8ea;
    text-align: center;
    padding-top: 80px;
    background-color: #F5f5f5;
    height: fit-content;
    padding-bottom: 20vh;
`;


export default Skills;
