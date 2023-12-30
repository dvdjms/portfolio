import styled from 'styled-components';


const Skills = () => {

    
    return (
        <>
        <Section id="skills">
            <SectionTitle>SKILLS</SectionTitle>

            <SkillsOuterContainer>
                <ContainerFrontend>
                    <H6>Frontend</H6>
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
                </ContainerFrontend>

                <ContainerBackend>
                <H6>Backend</H6>
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
                </ContainerBackend>

                <ContainerFrameworks>
                <H6>Frameworks and Libraries</H6>
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
                </ContainerFrameworks>

                <ContainerDatabases>
                <H6>Databases and Testing</H6>
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

                </ContainerDatabases>
     
            </SkillsOuterContainer>

        </Section>
    
        </>
    );
};

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
        height: 145vh;
    };
    @media (max-width: 320px) {
        height: 120vh;
    };
`;

const SkillsOuterContainer = styled.div`
    height: 70%;
    margin: auto;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: [start] 200px [end] 300px;
    gap: 7vh;
    @media (max-width: 876px) {
        gap: 3vh;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
        grid-template-rows: [start] 170px [middle] 170px [middle] 280px [end] 200px;
    };
    @media (max-width: 468px) {
        width: 90%;
    };
`;


const ContainerFrontend = styled.div`
    grid-column-start: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
    @media (max-width: 876px) {
        width: 100%;
        grid-column:  1 / 1;
        grid-row: 1 / 4;
    };
`;

const ContainerBackend = styled(ContainerFrontend)`
    grid-column: 2 / 2;
    grid-row: 1 / 2;
    @media (max-width: 876px) {
        grid-column:  1 / 1;
        grid-row: 2 / 4;
    };
`;

const ContainerFrameworks = styled(ContainerFrontend)`
    grid-column-start: 1 / 2;
    grid-row: 2 / 2;
    @media (max-width: 876px) {
        grid-column:  1 / 1;
        grid-row: 3 / 4;
    };
`;

const ContainerDatabases = styled(ContainerFrontend)`
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    @media (max-width: 876px) {
        grid-column:  1 / 1;
        grid-row: 4 / 4;
    };
`;

 const H6 = styled.h6`
    height: 30px;
 `;

const SkillContainer = styled.div`
    height: 27px;
    margin-bottom: 2vh;
    background: #e3e2e2;
    @media (max-width: 876px) {
        height: 23px;
    };
`;

const SkillTitle = styled.div`
    position: absolute;
    color: white;
    font-size: 10pt;
    font-weight: bold;
    background-color: #10c2c9;
    height: 27px;
    padding-top: .5vh;
    width: 90px;
    @media (max-width: 876px) {
        height: 23px;
        padding-top: .2vh;
    };
`;

const Span = styled.span`
    color: gray;
    position: relative;
    float: right;
    font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 9pt;
    height: 27px;
    padding-top: .4vh;
    margin-right: .5vw;
    width: 10%;
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

const HTMLPercentage = styled.div`
    background-color: #05A1A7;
    float: left;
    height: 27px;
    width: 80%;
    @media (max-width: 876px) {
        height: 23px;
    };
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


export default Skills;
