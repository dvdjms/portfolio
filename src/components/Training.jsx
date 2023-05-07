import styled from 'styled-components';
import codeclan from './images/CodeClan-Logo-Blue.png';
import csLogo from './images/CS50.png';


const Training = () => {

    return (
        <>
        <Section id="training">

            <SectionTitle>TRAINING</SectionTitle>
            <TrainingContainer>
                <CodeClanContainer>
                    <ImageContainer>
                        <a href="https://codeclan.com/" rel="noreferrer" target="_blank"><CodeClan alt="CodeClan Logo" src={codeclan}></CodeClan></a>
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
                <a href="https://cs50.harvard.edu/x/2023/" rel="noreferrer" target="_blank"><CS50 alt="CS50 Logo" src={csLogo}></CS50></a>
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
    )

}

const SectionTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vw;
    font-weight: 600;
    color: #161639;
`;

const Section = styled.section`
    height: 110vh;
    border-bottom: solid #e8e8ea;
    text-align: center;
    padding-top: 80px;
    @media (max-width: 676px) {
        height: 200vh;
    }
`;

const TrainingContainer = styled.div`
    margin: auto;
    margin-top: 55px;
    min-width: 750px;
    width: 60%;
    @media (max-width: 676px) {
        flex-direction: column;
        width: 90vh;
    }
`;

const ImageContainer = styled.div`
    height: 6vh;
`;

const CodeClan = styled.img`
    float: center;
    height: 100%;
    padding-top: 1.2vh;
`;

const CS50 = styled.img`
    float: center;
    height: 100%;
`;

const TextBlock = styled.div`
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 11pt;
    height: 65px;
    margin-top: 7vh;
    text-align: left;
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

const CodeClanContainer = styled.div`
    float: left;
    min-width: 250px;
    width: 45%;
`;

const CS50Container = styled.div`
    float: right;
    min-width: 250px;
    width: 45%;
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