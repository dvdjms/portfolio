import { useRef } from 'react';
import styled from 'styled-components';
import './Modal.css'
import { ModalBody } from 'react-bootstrap';
import Arrow from '../assets/images/arrow_right.png';
import { projects } from '../constants';

const Modal = () => {
    const videoRef = useRef(null);

    return (
        <> 
        {projects.map((project, index) => (

        <div className="container" key={index}>
            {/* Modal */}
            <div className="modal fade" id={`myModal${project.modalNumber}`} role="dialog">
                <ModalSizePosition className="modal-dialog">
                    {/* Modal content */}
                    <div className="modal-content">

                    {project.isVideo ? 
                    (
                    <ModalBody as={Modal_Body} className="modal-body">
                        {/* <div className="carousel-inner">
                            <div className="carousel-item active"> */}
                                <Video controls ref={videoRef}>
                                    <source src={project.video} type="video/mp4" className="d-block w-100" />
                                </Video>
                            {/* </div>
                        </div> */}
                    </ModalBody>
                    )
                    :
                    (
                    <ModalBody as={Modal_Body} className="modal-body">
                    {/* Carousel */} 
                    <div id={`carouselCaptions${project.modalNumber}`} className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={project.imageOne} className="d-block w-100" alt={`${project.title} application 1`} />
                            </div>
                            <div className="carousel-item">
                                <img src={project.imageTwo} className="d-block w-100" alt={`${project.title} application 2`} />
                            </div>
                            <div className="carousel-item">
                                <img src={project.imageThree} className="d-block w-100" alt={`${project.title} application 3`} />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href={`#carouselCaptions${project.modalNumber}`} role="button" data-slide="prev">
                            <ArrowLeftImage src={Arrow} />
                        </a>
                        <a className="carousel-control-next" href={`#carouselCaptions${project.modalNumber}`} role="button" data-slide="next">
                            <ArrowRightImage src={Arrow} />
                        </a>
                    </div>
                    </ModalBody>
                    )}

                <ModalTitle>{project.title}</ModalTitle>
                <ModalSubTitle>{project.subtitle}</ModalSubTitle>
                <Paragraph>{project.paragraph}</Paragraph>

                <Footer>
                    <a href={project.githublink} target="_blank" rel="noreferrer"><GitButton>Github Repository</GitButton></a>
                    <CloseButton type="button" className="btn btn-default" data-dismiss="modal" onClick={() => {if (videoRef.current) {videoRef.current.pause();}}}>Close</CloseButton>
                </Footer>
                </div>
                </ModalSizePosition>
            </div>
        </div>
        ))}
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
    @media (max-width: 568px) {
        min-height: 15vh;
        margin-top: 10px;
        margin-bottom: fit;
        padding: 5px;
    };
    @media (max-width: 468px) {
        min-height: 17vh;
    };


`;

const ModalSizePosition = styled.div`
    margin-top: 1vw;
    @media (max-width: 468px) {
        margin: 0;
    };
`;

const Modal_Body = styled.div`
    background-color: #F5f5f5;
    border-bottom-color: #ffecec;
    border-bottom-style: solid;
    border-bottom-width: .15vw;
    margin-bottom: 3vh;
`;

const Footer = styled.p`
    margin: 1vw 1vw 0 1.6vw;
    height: 7.7vh;
    float: left;
    @media (max-width: 468px) {
        margin-top: 7vh;
    };
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

const Video = styled.video`
    height: auto;
    width: 100%;
	// background-size: cover;
	// overflow: hidden;
`;

export default Modal;