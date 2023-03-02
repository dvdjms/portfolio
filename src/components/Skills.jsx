import styled from 'styled-components';


const Skills = () => {

    
    return (
        <>
        <Section id="skills">
            <SectionTitle>SKILLS</SectionTitle>
                <SkillsOuterContainer>
                <SkillsInnerContainer>
                <h6>Frontend</h6>
                    <SkillContainer>
                        <HTMLPercentage>
                            <SkillTitle>HTML</SkillTitle>
                        </HTMLPercentage>
                        <Span>80%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <CSSPercentage>
                            <SkillTitle>CSS</SkillTitle>
                        </CSSPercentage>
                        <Span>70%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <JSPercentage>
                            <SkillTitle>JavaScript</SkillTitle>
                        </JSPercentage>
                        <Span>55%</Span>
                    </SkillContainer>
                </SkillsInnerContainer>

                <SkillsInnerContainer>
                <h6>Backend</h6>
                    <SkillContainer>
                        <PythonPercentage>
                            <SkillTitle>Python</SkillTitle>
                        </PythonPercentage>
                        <Span>60%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <JavaPercentage>
                            <SkillTitle>Java</SkillTitle>
                        </JavaPercentage>
                        <Span>30%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <CPercentage>
                            <SkillTitle>C</SkillTitle>
                        </CPercentage>
                        <Span>45%</Span>
                    </SkillContainer>

                </SkillsInnerContainer>

            </SkillsOuterContainer>
            <SkillsOuterContainer>
                <SkillsInnerContainer>
                <h6>Frameworks and Libraries</h6>
                    <SkillContainer>
                        <FlaskPercentage>
                            <SkillTitle>Flask</SkillTitle>
                        </FlaskPercentage>
                        <Span>65%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <DjangoPercentage>
                            <SkillTitle>Django</SkillTitle>
                        </DjangoPercentage>
                        <Span>50%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <ReactPercentage>
                            <SkillTitle>React</SkillTitle>
                        </ReactPercentage>
                        <Span>60%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <ExpressPercentage>
                            <SkillTitle>Express.js</SkillTitle>
                        </ExpressPercentage>
                        <Span>60%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <SpringPercentage>
                            <SkillTitle>Spring</SkillTitle>
                        </SpringPercentage>
                        <Span>35%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <BootstrapPercentage>
                            <SkillTitle>Bootstrap</SkillTitle>
                        </BootstrapPercentage>
                        <Span>70%</Span>
                    </SkillContainer>
                </SkillsInnerContainer>

                <SkillsInnerContainer>
                <h6>Databases and Testing</h6>
                    <SkillContainer>
                        <SQLitePercentage>
                            <SkillTitle>SQLite3</SkillTitle>
                        </SQLitePercentage>
                        <Span>65%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <PostgresqlPercentage>
                            <SkillTitle>PostgreSQL</SkillTitle>
                        </PostgresqlPercentage>
                        <Span>65%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <MongoPercentage>
                            <SkillTitle>MongoDB</SkillTitle>
                        </MongoPercentage>
                        <Span>30%</Span>
                    </SkillContainer>
                    <SkillContainer>
                        <InsomniaPercentage>
                            <SkillTitle>Insomnia</SkillTitle>
                        </InsomniaPercentage>
                        <Span>50%</Span>
                    </SkillContainer>

                </SkillsInnerContainer>

            </SkillsOuterContainer>

        </Section>
    
        </>
    )

}

const Section = styled.section`
    height: 110vh;
    border-bottom: solid #e8e8ea;
    text-align: center;
    padding-top: 80px;
    background-color: #F5f5f5;

    /* added flex here */
    @media (max-width: 676px) {
        flex-direction: column;
        height: 140vh;
    }
`;

const SkillsOuterContainer = styled.div`
    height: 25vh;
    margin: auto;
    width: 60%;

    /* added flex here */
    display: flex;
    flex: wrap;
    @media (max-width: 676px) {
        flex-direction: column;
        width: 80%;
        height: 40vh;
    }
`;

const SkillsInnerContainer = styled.div`
    float: left;
    margin-left: 4%;
    height: 25vh;
    width: 45%;

      /* added flex here */
    @media (max-width: 676px) {
        flex-direction: column;
        width: 80%;
        height: 40vh;
    }
`;

const SkillContainer = styled.div`
    height: 3.5vh;
    margin-bottom: 2vh;
    background: #e3e2e2;

`;

const HTMLPercentage = styled.div`
    background-color: #05A1A7;
    float: left;
    height: 3.5vh;
    width: 80%;
`;

const CSSPercentage = styled(HTMLPercentage)`
    width: 70%;
`;

const JSPercentage = styled(HTMLPercentage)`
    width: 55%;
`;

const PythonPercentage = styled(HTMLPercentage)`
    width: 60%;
`;

const JavaPercentage = styled(HTMLPercentage)`
    width: 30%;
`;

const CPercentage = styled(HTMLPercentage)`
    width: 45%;
`;

const FlaskPercentage = styled(HTMLPercentage)`
    width: 65%;
`;

const DjangoPercentage = styled(HTMLPercentage)`
    width: 50%;
`;

const ExpressPercentage = styled(HTMLPercentage)`
    width: 60%;
`;

const SpringPercentage = styled(HTMLPercentage)`
    width: 35%;
`;

const BootstrapPercentage = styled(HTMLPercentage)`
    width: 70%;
`;

const ReactPercentage = styled(HTMLPercentage)`
    width: 60%;
`;

const SQLitePercentage = styled(HTMLPercentage)`
    width: 65%;
`;

const PostgresqlPercentage = styled(HTMLPercentage)`
    width: 65%;
`;

const MongoPercentage = styled(HTMLPercentage)`
    width: 30%;
`;

const InsomniaPercentage = styled(HTMLPercentage)`
    width: 50%;
`;



const SkillTitle = styled.div`
    position: absolute;
    color: white;
    font-size: 10pt;
    font-weight: bold;
    background-color: #10c2c9;
    height: 3.5vh;
    padding-top: .4vh;
    width: 90px;
`;

const Span = styled.span`
    color: gray;
    position: relative;
    float: right;
    font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 10pt;
    height: 3.5vh;
    padding-top: .4vh;
    margin-right: .5vw;
    width: 10%;
`;



const SectionTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vw;
    font-weight: 600;
    color: #161639;
    margin-bottom: 3.5%;
`;



export default Skills;