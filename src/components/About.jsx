import styled from 'styled-components';
import Portrait from '../assets/images/Portrait2.png';


const About = () => {


    return (
        <>
            <Section id="about">
                <ContainerMain>
                    <ContainerName>
                        <FirstName>David</FirstName><LastName>James</LastName>
                    </ContainerName>
                    <ContainerLocationLarge>
                        <Location1>Software Developer ∙ West End ∙ Edinburgh ∙ Scotland</Location1>
                    </ContainerLocationLarge>
                    <ContainerLocationSmall>
                        <Location2>West End ∙ Edinburgh ∙ Scotland</Location2>
                    </ContainerLocationSmall>
                    <ContainerImage>
                            <Img src={Portrait}></Img>
                    </ContainerImage>
                    <ContainerProfile>
                        <Profile>I have recently completed the Professional Software Development course at CodeClan, Edinburgh. Dedicated to becoming a full stack developer, I have a passion and focus for customer satisfaction, UI/UX design, and clean understandable code. I'm also a tenacious problem solver. I bring with me over 10 years' accounts and administration experience from a variety of sectors and over 5 years Teaching English as a Foreign Language.</Profile>
                    </ContainerProfile>
                </ContainerMain>
  
            </Section>
        </>
    );
};

const Section = styled.section`
    border-bottom: solid #e8e8ea;
    height: 120%;
    padding-top: 15px;
    background-color: #F5f5f5;
    width: 100%;
`;

const ContainerMain = styled.div`
    height: 100%;
    margin: auto;
    margin-top: 90px;
    margin-bottom: 20vh;
    width: 60%;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: .5vh;
    @media (max-width: 568px) {
            grid-template-columns: repeat(1, 1fr);
            margin-top: 30px;
            margin-bottom: 70px;
    };
`;

const FirstName = styled.h1`
    font-family: impact, Arial, Helvetica, sans-serif;
    font-size: 3.2rem;
    color: #1b242f;
    float: left;
    height: 3rem;
    text-align: right;
    @media (max-width: 768px) {
        font-size: 38px;
        height: 40px;
    };
    @media (max-width: 568px) {
        font-size: 30px;
        height: 40px;
    };
`;

const LastName = styled(FirstName)`
    padding-left: 20px;
    text-align: left;
    @media (max-width: 568px) {
        padding-left: 10px;
    };
`;

const Location1 = styled.p`
    text-align: left;
    font-size: 3.3vh;
    font-weight: 700;
    color: #3a3a3a;
    @media (max-width: 1020px) {
        font-size: 3vh;
    };
    @media (max-width: 767px) {
        font-size: 16px;
        height: 40px;
    };
    @media (max-width: 568px) {
        display: none;
    };
`;

const Location2 = styled(Location1)`
    display: none;
    @media (max-width: 568px) {
        display: block;
        font-size: 14px;
        text-align: center;
    };
`;

const ContainerName = styled.div`
    height: 75px;
    margin-top: 10px;
    margin-left: 50px;
    grid-row-start: span  1 / 2;
    grid-column-start: 2 span;
    @media (max-width: 767px) {
        font-size: 2vw;
        height: 60px;
    };
    @media (max-width: 568px) {
        font-size: 2.4vw;
        height: 50px;
        display: flex;
        justify-content: center;
        margin: auto;
        margin-top: 20px;
    };
`;

const ContainerLocationLarge = styled.div`
    margin-left: 50px;
    height: 10vh;
    grid-row-start: span  1 / 2;
    grid-column-start: 2 span;
    @media (max-width: 1020px) {
        height: 8vh;
    };
    @media (max-width: 767px) {
        height: 8vh;
    };
    @media (max-width: 568px) {
        display: none;
    };
`;

const ContainerLocationSmall = styled(ContainerLocationLarge)`
    display: none;
    @media (max-width: 568px) {
        grid-column: 1 / 1;
        display: block;
        margin: auto;
    };
`;

const ContainerProfile = styled.div`
    display: grid;
    text-align: left;
    min-width: 300px;
    grid-column: 2/2;
    margin-top: 45px;
    margin-bottom: 20px;
    @media (max-width: 1020px) {
        margin-right: 30px;
        margin-top: 70px;
    };
    @media (max-width: 767px) {
        margin: auto;
        margin-top: 20px;
        padding-left: 30px;
    };
    @media (max-width: 568px) {
        grid-column: 1/1;
        margin: auto;
        padding: 0px;
    };
`;

const ContainerImage = styled(ContainerProfile)`
        height: 230px;
        width: 230px;
        grid-column: 1/2;
`;

const Profile = styled.p`
    font-size: 15px;
    width: 100%;
    @media (max-width: 767px) {
        font-size: 14px;
    };
    @media (max-width: 568px) {
        font-size: 16px;
        width: 90%;
        margin: auto;
        padding-left: 5px;
    };
`;

const Img = styled.img`
    float: left;
    margin-left: 50px;
    height: 210px;
    width: 230px;
    grid-row-start: span 1;
    grid-column: 1/2;
    @media (max-width: 1220px) {
        margin-right: 30px;
        margin-bottom: 20px;
    };
    @media (max-width: 767px) {
        margin: auto;
        margin-top: 30px;
        height: 170px;
        width: 190px;
        margin-left: 20px;
    };
    @media (max-width: 568px) {
        margin: auto;
        margin-bottom: 50px;
    };
`;


export default About;
