import styled from 'styled-components';
import './Modal.css';
import WatchlistOne from '../assets/images/Weather_2.png';
import WatchlistTwo from '../assets/images/Weather_3.png';
import WatchlistThree from '../assets/images/Weather_4.png';
import Arrow from '../assets/images/arrow_right.png';


const ModalOne = () => {


    return (
        <>

        {/* Modal One Container */}
        <div className="container">
            {/* Modal */}
            <div className="modal fade" id="myModal1" role="dialog">
                <ModalSizePosition className="modal-dialog">
                
                    {/* Modal content */}
                    <div className="modal-content">

                        <ModalBody className="modal-body">
                            {/* Carousel */} 
                            <div id="carouselExampleCaptions1" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <ImageSize src={WatchlistOne} className="d-block w-100" alt="..."></ImageSize>
                                        <div className="carousel-caption d-none d-md-block">
                                         {/* eslint-disable-next-line  */}
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <ImageSize src={WatchlistTwo} className="d-block w-100" alt="..."></ImageSize>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* eslint-disable-next-line  */}
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <ImageSize src={WatchlistThree} className="d-block w-100" alt="..."></ImageSize>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* eslint-disable-next-line  */}
                                            <h5></h5>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                
                                <a className="carousel-control-prev" href="#carouselExampleCaptions1" role="button" data-slide="prev">
                                <ArrowLeftImage src={Arrow}></ArrowLeftImage>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions1" role="button" data-slide="next">
                                <ArrowRightImage src={Arrow}></ArrowRightImage>
                                </a>
                            </div>
                        </ModalBody>

                        <ModalTitle>WeatherWise</ModalTitle>
                        <ModalSubTitle>CS50W Web Programming with Python and JavaScript from HarvardX</ModalSubTitle>
                        <Paragraph>Fully responsive Weather app for a user to search 45,000 cities and get 24 hour and 10 day weather forecasts. Includes a My Locations dashboard with local timezones.</Paragraph>
                        <Footer>
                            <a href="https://github.com/dvdjms/CS50w_Capstone" target="_blank" rel="noreferrer"><GitButton>Github Repository</GitButton></a>
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
    @media (max-width: 468px) {
        margin-bottom: 20px;
        padding-left: 13px;
    };
    @media (max-width: 368px) {
        margin-bottom: 15px;
        padding-left: 13px;
    };
`;

const ModalSubTitle = styled.h6`
    color: #a0a0a0;
    font-weight: bold;
    padding-bottom: 1.3vw;
    text-align: left;
    margin: 0 1.6vw 0 1.6vw;
    border-bottom: solid lightgray;
    @media (max-width: 468px) {
        padding-bottom: 20px;
        padding-left: 7px;
    };
    @media (max-width: 368px) {
        padding-bottom: 10px;
        padding-left: 7px;
    };
`;

const Paragraph = styled.p`
    font-size: 13.8px;
    height: 8vh;
    margin: 1.3vw 2vw 0 1.6vw;
    text-align: left;
    @media (max-width: 468px) {
        height: 15vh;
        margin-top: 10px;
        padding: 5px;
    };
    @media (max-width: 368px) {
        height: 140px;
    };
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
    @media (max-width: 468px) {
        height: 200px;
    };
    @media (max-width: 368px) {
        height: 160px;
    };
`;

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
    @media (max-width: 468px) {
        font-size: 14px;
        margin: 0px 0px 0px 5px;
        width: 135px;
    };
    @media (max-width: 368px) {
        margin: -5px 0 0 5px;
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


export default ModalOne;

