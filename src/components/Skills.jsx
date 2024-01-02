import styled from 'styled-components';
import { skills } from '../constants';
import Tilt from 'react-parallax-tilt';


const Skills = () => {

    
    return (
        <>
        <Section id="skills">
            <SectionTitle>SKILLS</SectionTitle>
  
            <IconContainer>
                {skills.map((skill, index) => (
                    <div key={index}>
                    <Tilt>
                        <Icon src={skill.icon} alt={skill.name} />
                    </Tilt>
      
                    </div>
                ))}
            </IconContainer>
          
        </Section>
    
        </>
    );
};

const IconContainer = styled.div`
    width: 54vw;
    margin: auto;
    @media (max-width: 578px) {
        width: 95vw;
    };
    @media (max-width: 368px) {
        width: 100vw;
    };
`;
// display flex !!!!!

const Icon = styled.img`
    margin: 25px;
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
    @media (max-width: 876px) {
        height: 160vh;
    };
    @media (max-width: 468px) {
        height: 180vh;
    };
    @media (max-width: 320px) {
        height: 120vh;
    };
`;


const SectionTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vw;
    font-weight: 600;
    color: #161639;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        font-size: 20px;
    };
    @media (max-width: 568px) {
        font-size: 16px;
    };
`;


export default Skills;
