import styled from 'styled-components';


const Experience = () => {

    return (
        <>
        <Section id="experience">
            <SectionTitle>EXPERIENCE</SectionTitle>

            <ExperienceOuterContainer>
                <ExperienceInnerContainer>
                    <h6>Accounts and Administration</h6>
                    <LineBreak></LineBreak>
    
                    <Paragraph>Over 10 years' working within accounting departments in a variety of sectors.</Paragraph>
                    <Transferable>Transferable skills...</Transferable>
                    <SkillTitle>Attention to detail</SkillTitle>
                    <SkillTitle>Problem Solving & Analysis</SkillTitle>
                    <SkillTitle>Teamwork & Independent work</SkillTitle>
                    <SkillTitle>Streamlining workflows</SkillTitle>
                    <SkillTitle>Strong Excel & Reporting</SkillTitle>
                </ExperienceInnerContainer>

                <ExperienceInnerContainer>
                    <h6>English Language Instructor</h6>
                    <LineBreak></LineBreak>

                    <Paragraph>Over 5 years Teaching English as Second Language in South Korea, Vietnam, and Online.</Paragraph>
                    <Transferable>Transferable skills...</Transferable>
                    <SkillTitle>Interpersonal Communication</SkillTitle>
                    <SkillTitle>Powerpoint Presentations</SkillTitle>
                    <SkillTitle>Planning and organising</SkillTitle>
                    <SkillTitle>Leadership</SkillTitle>
                    <SkillTitle>Relationship building</SkillTitle>
                </ExperienceInnerContainer>

                <ExperienceInnerContainer>
                    <h6>Contact Tracer</h6>
                    <LineBreak></LineBreak>

                    <Paragraph>During the pandemic I helped drive the infection rate down while contact tracing for the NHS.</Paragraph>
                    <Transferable>Transferable skills...</Transferable>
                    <SkillTitle>Advising and Supporting</SkillTitle>
                    <SkillTitle>Communication</SkillTitle>
                    <SkillTitle>Relationship building</SkillTitle>
                    <SkillTitle>Handling difficult calls</SkillTitle>
                    <SkillTitle>Training new starters</SkillTitle>

                </ExperienceInnerContainer>

            </ExperienceOuterContainer>
        </Section>
    
        </>
    )

}

const ExperienceOuterContainer = styled.div`
    margin: auto;
    margin-top: 10vh;
    height: 60vh;
    width: 70%;
    display: flex;
    flex: wrap;
    @media (max-width: 676px) {
        flex-direction: column;
        width: 80%;
        height: 40vh;
    }
`;

const ExperienceInnerContainer = styled.div`
    margin-left: 2%;
    height: 60vh;
    width: 100%;
    border: solid #05A1A7 3px;;
    border-radius: 5px;
    padding-top: 1vw;

      /* added flex here */
    @media (max-width: 676px) {
        flex-direction: column;
        width: 80%;
        height: 60vh;
    }
`;


const SkillTitle = styled.div`
    margin-bottom: 1vh;
    
`;

const Paragraph = styled.p`
    margin-left: .5vw;
    margin-right: .5vw;
    margin-top: 2vh;
    text-align: left;
    padding: 1vh;

`;


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
    font-size: 2.3vh;
    padding-top: 5px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 3vh;
    height: 5vh;
    width: 180px;
`;


export default Experience;