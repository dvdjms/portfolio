import styled from 'styled-components';
import Portrait from '../assets/images/Portrait2.png';
import Tilt from 'react-parallax-tilt';
import { about } from '../constants';
import { motion } from "framer-motion";
import Resume from '../assets/Resume.pdf';

const About = () => {


    return (
        <>
            <Section id="about">
                <ContainerMain>
         
                    <ContainerLine>
                        <Circle />
                        <Line />
                    </ContainerLine>

                    <ContainerName>
                        <Name>David James</Name>
                    </ContainerName>

                    <ContainerLocation>
                        <Location>Software Developer ∙ Edinburgh ∙ Scotland</Location>
                    </ContainerLocation>
                    <Tilt scale="1.1">
                        <ContainerImage>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}  
                                animate={{
                                    delay: 2,
                                    scale: [0, 1.2, 1.2, 1, 1],
                                    rotate: [360, 0],
                                    duration: 2,
                                }}
                                transition={{type: "spring", stiffness: 30, delay: 0.3,}}
                                viewport={{ once: true }}
                            >
                                <Img src={Portrait}></Img>
                            </motion.div>
                        </ContainerImage>
                    </Tilt>
                    <ContainerProfile>     
                        <Profile>{about}&nbsp; 
                        <span>
                            <ResumeLink href = {Resume} target = "_blank">View resume!</ResumeLink>
                        </span>
                        </Profile>
                    </ContainerProfile>

                </ContainerMain>
  
            </Section>
        </>
    );
};


const ResumeLink = styled.a`
    color: #E31A6D;
    &:hover {
        color: #10c2c9;
        text-decoration: none;
    }

`;


const Section = styled.section`
    border-bottom: solid #e8e8ea;
    height: 108vh;
    padding-top: 15px;
    background-color: #F5f5f5;
    width: 100%;
`;

const ContainerMain = styled.div`
    height: 60%;
    margin: auto;
    margin-top: 90px;
    margin-bottom: 20vh;
    width: 60vw;
    display: grid;
    grid-template-rows: 0.3fr 0.05fr auto;
    grid-template-areas:
        'ContainerLine ContainerName ContainerName'
        'ContainerLine ContainerLocation ContainerLocation'
        'ContainerLine ContainerImage ContainerProfile';
    @media (max-width: 968px) {
        width: 80%;
    };
    @media (max-width: 768px) {
        width: 90%;
    };
    @media (max-width: 568px) {
        grid-template-areas:
        'ContainerName'
        'ContainerLocation'
        'ContainerImage'
        'ContainerProfile';
        margin-top: 60px;
        width: 90%;
    };
`;


const ContainerLine = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-area: ContainerLine;
    padding-top: 12px;
    width: 100px;
    @media (max-width: 568px) {
        display: none;
    };
`;

const Line = styled.div`
    background: linear-gradient(#E31A6D 30%, transparent 90%);
    height: 100%;
    width: 5px;
`;

const Circle = styled.div`
    background-color: #E31A6D;
    border-radius: 50%;
    height 20px;
    width: 20px;
`;

const ContainerName = styled.div`
    grid-area: ContainerName;
    padding-top: 5px;
    margin-left: 20px;
    @media (max-width: 767px) {
        font-size: 2vw;
        height: 60px;
    };
    @media (max-width: 568px) {
        font-size: 2.4vw;
        margin-left: 0;
        margin-top: 20px;
        display: flex;
        justify-items: center;
    };
`;

const Name = styled.h1`
    font-family: impact, Arial, Helvetica, sans-serif;
    font-size: 3rem;
    color: #1b242f;
    width: 100%;
    @media (max-width: 768px) {
        font-size: 38px;
        height: 40px;
    };
    @media (max-width: 568px) {
        font-size: 30px;
        height: 40px;
        text-align: center;
    };
`;

const ContainerLocation = styled.div`
    grid-area: ContainerLocation;
    margin-left: 20px;
    @media (max-width: 568px) {
        display: none;
    };
`;

const Location = styled.p`
    text-align: left;
    font-size: 3vh;
    font-weight: 700;
    color: #3a3a3a;
    @media (max-width: 1020px) {
        font-size: 3vh;
    };
    @media (max-width: 767px) {
        font-size: 16px;
    };
    @media (max-width: 468px) {
        display: none;
    };
`;


const ContainerProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: ContainerProfile;
    padding-left: 50px;
    @media (max-width: 568px) {
        margin: auto;
        padding: 0px;
    };
`;

const Profile = styled.p`
    font-size: 15px;
    width: 90%;
    @media (max-width: 767px) {
        font-size: 14px;
        padding-top: 30px;
    };
    @media (max-width: 568px) {
        font-size: 16px;
        width: 90%;
        margin: auto;
        padding-left: 5px;
    };
`;

const ContainerImage = styled.div`
    grid-area: ContainerImage;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: auto;
    padding-left: 20px;
    width: 100%;
    @media (max-width: 568px) {
        padding-left: 0px;
    };
`;

const Img = styled.img`
    float: left;
    height: 25vh;
    max-height: 140px
    width: 25vw;
    @media (max-width: 768px) {
        float: none;
    };
    @media (max-width: 468px) {
        margin: auto;
        margin-top: 10px;
    };
`;


export default About;
