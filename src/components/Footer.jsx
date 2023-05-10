import styled from 'styled-components';


const Footer = () => {




    return (
        <>
        <Section id="contact">
            <RedBoxContainer>
                <a href="#about"><RedBox>&#x21ee;</RedBox></a>
            </RedBoxContainer>

            <ContainerIcon>
                <LinkedIn href="https://www.linkedin.com/in/david-james-2b949979/" target="_blank"><SVG className="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></SVG></LinkedIn>
                <GitHub href="https://github.com/dvdjms" target="_blank"><SVG className="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></SVG></GitHub>
            </ContainerIcon>

            <Copyright>David James 2023</Copyright>
        </Section>
    
        </>
    );

};


const Section = styled.section`
    height: 100%;
    text-align: center;
    background-color: #1b242f;
`;

const RedBoxContainer = styled.div`
    position: absolute;
    margin-top: -25px;
    height: 50px;
    width: 47px;
    left: 48%;
    @media (max-width: 1020px) {
        left: 47%;
    };
    @media (max-width: 568px) {
        left: 46%;
    };
    @media (max-width: 468px) {
        left: 45%;
    };
    @media (max-width: 368px) {
        left: 44%;
    };
`;

const RedBox = styled.div`
    align-items: center;
    color: #ffffffec;
    background-color: #E31A6D;
    border-radius: 3px;
    display: flex;
    font-size: 35pt;
    height: 50px;
    justify-content: center;
    padding-bottom: 7px;
    &:hover {
        background-color: #E31f5D;
    };
    @media (max-width: 368px) {
        height: 43px;
        width: 40px;
    };
`;

const ContainerIcon = styled.div`
    height: 7vh;
    padding-top: 8vh;
    margin: auto;
    width: 150px;
    @media (max-width: 368px) {
        padding-top: 11vh;
        width: 100px;
    };
`;

const LinkedIn = styled.a`
    float: left;
    color: #10c2c9;
    transition: .5s;
    &:hover {
        color: #E31A6D;
    };
`;

const GitHub = styled(LinkedIn)`
    float: right;
`;

const SVG = styled.svg`
    width: 6vh;
`;

const Copyright = styled.p`
    color: #4f4f4f;
    font-size: 10pt;
    margin-top: 12vh;
    margin-bottom: 0px;
    padding-bottom: 30px;
`;


export default Footer;
