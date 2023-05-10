import styled from 'styled-components';


const Experience = () => {

    return (
        <>
        <Section id="experience">
            <SectionTitle>EXPERIENCE</SectionTitle>

            <ExperienceOuterContainer>
                <ExperienceInnerContainer>
                    <H6>Accounts and Administration</H6>
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
                    <H6>English Language Instructor</H6>
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
                    <H6>Contact Tracer</H6>
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


const SkillTitle = styled.div`
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

const SectionTitle = styled.h1`
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
