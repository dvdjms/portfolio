import styled from 'styled-components';
import Portrait from './images/Portrait2.png';


const About = () => {

    return (
        <>
            <Section id="about">
                <ContainerMain>
                    <ContainerDiv1>
                        <FirstName>David</FirstName><LastName>James</LastName>
                    </ContainerDiv1>
                    <ContainerDiv2>
                        <Location>Software Developer ∙ West End ∙ Edinburgh ∙ Scotland</Location> {/*<Emailaddress>dvdjms@hotmail.com</Emailaddress>*/}
                    </ContainerDiv2>
                    <Img src={Portrait}></Img>
                    <ContainerDiv3>
                        <Profile>I have recently completed the Professional Software Development course at CodeClan, Edinburgh. Dedicated to becoming a full stack developer, I have a passion and focus for customer satisfaction, UI/UX design, and clean understandable code. I'm also a tenacious problem solver. I bring with me over 10 years' accounts and administration experience from a variety of sectors and over 5 years Teaching English as a Foreign Language.</Profile>
                    </ContainerDiv3>
                </ContainerMain>
            </Section>
        </>
    )
};


const ContainerMain = styled.div`
    height: 90vh;
    margin: auto;
    margin-top: 8vw;
    width: 60vw;
`;

const FirstName = styled.h1`
    font-family: impact, Arial, Helvetica, sans-serif;
    font-size: 3.5rem;
    color: #1b242f;
    float: left;
    height: 4rem;
    text-align: right;
`;

const LastName = styled.h1`
    color: #252934;
    float: left;
    font-family: impact;
    font-size: 3.5rem;
    height: 4rem;
    padding-left: 20px;
    text-align: left;
`;

const Location = styled.p`
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
    color: #3a3a3a;
`;

const Emailaddress = styled.p`
    color: #474775;
    font-weight: 700;
    font-size: 1.5rem;
    padding-left: 5px;
`;

const Profile = styled.p`
    font-size: 1em;
    margin-left: 5vw;
    margin-top: 2vh;
    width: 100%;
    @media (max-width: 767px) {
        font-size: 2vw;;
    }
    @media (max-width: 600px) {
        font-size: 2.4vw;;
    }
`;

const ContainerDiv1 = styled.div`
    display: flex;
    height: 5rem;
    margin-top: 8%;
`;

const ContainerDiv2 = styled.div`
    display: flex;
    height: 7rem;
`;

const ContainerDiv3 = styled.div`
    display: flex;
    height: 16rem;
    text-align: left;
`;

const Section = styled.section`
    border-bottom: solid #e8e8ea;
    height: 100vh;
    padding-top: 10px;
    text-align: center;
    background-color: #F5f5f5;
`;

const SVG = styled.svg`
    float: left;
    margin-left: 2vw;
    display: flex;
    justify-content: left;
    width: 6vh;
`;

const Img = styled.img`
    float: left;
    margin-left: 2vw;
    margin-top: 1vh;
    width: 17vw;
    @media (max-width: 767px) {
        margin-top: 5vh;
    }
`;

const A = styled.a`
    color: #474775;
    &:hover {
        color: #E31A6D;
    }
`;

export default About;