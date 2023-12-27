import styled from 'styled-components';
import codeclan from '../assets/images/CodeClan-Logo-Blue.png';
import csLogo from '../assets/images/CS50.png';


const Training = () => {

    return (
        <>
        <Section id="training">

            <SectionTitle>TRAINING</SectionTitle>
            <TrainingContainer>
                <CodeClanContainer>
                    <ImageContainer>
                        <a href="https://codeclan.com/" rel="noreferrer" target="_blank"><Logo alt="CodeClan Logo" src={codeclan}></Logo></a>
                        <LineBreak></LineBreak>
                    </ImageContainer>
                 
                    <TextBlock><strong>Professional Software Development. </strong> 16-week intensive programming bootcamp.</TextBlock>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Python</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>RESTful APIs</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>TDD</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Agile Methodologies</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Peer Programming</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>SQA Accredited</td>
                            <td>&#9989;</td>
                        </tr>
                        </tbody>
                    </Table>
                </CodeClanContainer>
                <CS50Container>
                <ImageContainer>
                    <a href="https://cs50.harvard.edu/x/2023/" rel="noreferrer" target="_blank"><Logo alt="CS50 Logo" src={csLogo}></Logo></a>
                    <LineBreak></LineBreak>
                </ImageContainer>
                <TextBlock><strong>Computer Science for Web Programming.</strong> Online learning at its best from HarvardX.</TextBlock>
                <Table>
                        <tbody>
                        <tr>
                            <td>C Programming</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Django</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>SQL</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Software Engineering</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Web Development</td>
                            <td>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Certificate</td>
                            <td>&#9989;</td>
                        </tr>
                        </tbody>
                    </Table>
                </CS50Container>
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
    width: 60%;
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
    width: 100%;
    grid-template-columns: 1/2;
    @media (max-width: 578px) {
        width: 90%;
    };
`;

const CS50Container = styled(CodeClanContainer)`
    grid-template-columns: 2/2;
    float: right;
`;

const SectionTitle = styled.h1`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vw;
    font-weight: 600;
    color: #161639;
    @media (max-width: 768px) {
        font-size: 20px;
    };
    @media (max-width: 568px) {
        font-size: 16px;
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
    font-size: 11pt;
    height: 65px;
    margin-top: 60px;
    text-align: left;
    min-width: 250px;
    width: 97%;
    @media (max-width: 1020px) {
        font-size: 14px;
    };
`;

const Table = styled.table`
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