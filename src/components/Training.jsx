import styled from 'styled-components';
import codeclan from '../assets/images/CodeClan-Logo-Blue.png';
import csLogo from '../assets/images/CS50.png';
import { training } from '../constants';
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';

const Training = () => {

    return (
        <>
        <Section id="training">

        <SectionTitle value="TRAINING" titleDirection={400} lineDirection={-400} />
            <TrainingContainer>
                <motion.div
                    initial={{opacity: 0, x: -200}}   
                    transition={{ type: "spring", stiffness: 20 }}
                    viewport={{ once: true }}
                    whileInView={{opacity: 1, x: 0}}
                >
                <CodeClanContainer>
                    <ImageContainer>
                        <a href="https://codeclan.com/" rel="noreferrer" target="_blank"><Logo alt="CodeClan Logo" src={codeclan}></Logo></a>
                        <LineBreak></LineBreak>
                    </ImageContainer>
                 
                    <TextBlock><strong>Professional Software Development. </strong> 16-week intensive programming bootcamp.</TextBlock>
                    <Table>
                        <tbody>
                            {training.codeclan.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <td>&#9989;</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </CodeClanContainer>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 200}}   
                    transition={{ type: "spring", stiffness: 20 }}
                    viewport={{ once: true }}
                    whileInView={{opacity: 1, x: 0}}
                >
                <CS50Container>
                    <ImageContainer>
                        <a href="https://cs50.harvard.edu/x/2023/" rel="noreferrer" target="_blank"><Logo alt="CS50 Logo" src={csLogo}></Logo></a>
                        <LineBreak></LineBreak>
                    </ImageContainer>
                    <TextBlock><strong>Computer Science for Web Programming.</strong> Online learning at its best from HarvardX.</TextBlock>
                    <Table>
                        <tbody>
                            {training.cs50.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <td>&#9989;</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </CS50Container>
                </motion.div>
            </TrainingContainer>
        </Section>
        </>
    );
};


const Section = styled.section`
    height: 100%;
    border-bottom: solid #e8e8ea;
    text-align: center;
    padding-top: 80px;
    width: 100%;
`;

const TrainingContainer = styled.div`
    margin: auto;
    margin-top: 55px;
    margin-bottom: 20vh;
    height: 100%;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 7vh;
    @media (max-width: 876px) {
        grid-template-columns: repeat(1, 1fr);
        width: 60%;
    };
    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 10vh;
        width: 90%;
    };

`;

const CodeClanContainer = styled.div`
    float: left;
    margin: auto;
    width: 90%;
    grid-template-columns: 1/2;
    @media (max-width: 578px) {
        float: none;
        width: 90%;
    };
`;

const CS50Container = styled(CodeClanContainer)`
    grid-template-columns: 2/2;
    float: right;
    @media (max-width: 578px) {
        float: none;
        width: 90%;
    };
`;

const ImageContainer = styled.div`
    height: 6vh;
`;

const Logo = styled.img`
    float: center;
    height: 105%;
    padding-top: 1.3vh;
`;

const TextBlock = styled.div`
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 13px;
    height: 65px;
    margin-top: 60px;
    text-align: left;
    min-width: 250px;
    padding-right: 3px;
    width: 97%;
    @media (max-width: 1020px) {
        font-size: 12px;
    };
`;

const Table = styled.table`
    font-size: 14px;
    border-collapse: separate; 
    border-spacing: 0 .7em;
    font-family: Verdana, Tahoma, sans-serif;
    margin-top: 2vh;
    text-align: left;
    width: 100%;
    min-width: 250px;
`;

const LineBreak = styled.div`
    background: #E31A6D;
    height: 4px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 200px;
    width: 45%;
`;

export default Training;