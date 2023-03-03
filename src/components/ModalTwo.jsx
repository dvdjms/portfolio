import styled from 'styled-components';
import './Modal.css';

import LearnScotlandOne from './images/LearnScotland_1.png';
import LearnScotlandTwo from './images/LearnScotland_2.png';
import LearnScotlandThree from './images/LearnScotland_3.png';
import Arrow from './images/arrow_right.png';


const ModalTwo = () => {


    return (
        <>

        {/* Modal One Container */}
        <div className="container">
            {/* Modal */}
            <div className="modal fade" id="myModal2" role="dialog">
                <ModalSizePosition className="modal-dialog">
                
                    {/* Modal content */}
                    <div className="modal-content">
                        
                        <ModalBody className="modal-body">
                            {/* Carousel */} 
                            <div id="carouselExampleCaptions2" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <ImageSize src={LearnScotlandOne} className="d-block w-100" alt="..."></ImageSize>
                                        <div className="carousel-caption d-none d-md-block">
                                         {/* eslint-disable-next-line  */}
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <ImageSize src={LearnScotlandTwo} className="d-block w-100" alt="..."></ImageSize>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* eslint-disable-next-line  */}
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <ImageSize src={LearnScotlandThree} className="d-block w-100" alt="..."></ImageSize>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* eslint-disable-next-line  */}
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                
                                <a className="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev">
                                <ArrowLeftImage src={Arrow}></ArrowLeftImage>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next">
                                <ArrowRightImage src={Arrow}></ArrowRightImage>
                                </a>
                            </div>
                        </ModalBody>

                        <ModalTitle>Learn Scotland</ModalTitle>
                        <ModalSubTitle>CodeClan Group Project</ModalSubTitle>
                        <Paragraph>Working within in a group of four, we planned, designed, and developed a Learn Scotland application aimed at young people. This included quizzes, interactive activities, and a leader board.</Paragraph>
                        <Footer>
                            <a href="https://github.com/pmo234/Learn_Scotland" target="_blank" rel="noreferrer"><GitButton>Github Repository</GitButton></a>
                            <CloseButton type="button" className="btn btn-default" data-dismiss="modal">Close</CloseButton>
                        </Footer>
                    </div>
                </ModalSizePosition>
            </div>
         </div>

         </>
    )
};


const ModalTitle = styled.h4`
    color: #000000da;
    font-weight: bold;
    margin-top: 0.6vw;
    padding-left: 1.6vw;
    text-align: left;
`;

const ModalSubTitle = styled.h6`
    color: #a0a0a0;
    font-weight: bold;
    padding-bottom: 1.3vw;
    text-align: left;
    margin: 0 1.6vw 0 1.6vw;
    border-bottom: solid lightgray;
`;

const Paragraph = styled.p`
    font-size: 13.8px;
    height: 8vh;
    margin: 1.3vw 2vw 0 1.6vw;
    text-align: left;
`;

const ModalSizePosition = styled.div`
    margin-top: 1vw;
`;

const ModalBody = styled.div`
    background-color: #F5f5f5;
    border-bottom-color:  #474775;
    border-bottom-style: solid;
    border-bottom-width: .15vw;
    margin-bottom: 3vh;
`;

const ImageSize = styled.img`
	height: 400px;
    max-width: 100%;
	background-size: cover;
	overflow: hidden;
`;

// class="modal-footer"
const Footer = styled.p`
    margin: 1vw 1vw 0 1.6vw;
    height: 7.7vh;
    float: left;
`;

const GitButton = styled.button`
    color: white;
    background-color: #E31A6D;
    border: none;
    float: left;
    height: 40px;
    padding: 0 1vw 0 1vw;
    &:hover {
        background-color: transparent;
        border: none;
        color: #E31A6D;
    };
    &:focus {
        outline: none;
    };
`;

const CloseButton = styled.button`
    float: right;
`;

const ArrowRightImage = styled.img`
    margin-left: 6vh;
    width: 45px;

`;

const ArrowLeftImage = styled.img`
    float: left;
    margin-right: 6vh;
    transform:rotate(180deg);
    width: 45px;
`;


export default ModalTwo;

