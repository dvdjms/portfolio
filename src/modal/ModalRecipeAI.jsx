import styled from 'styled-components';
import './Modal.css';
import RecipeAIVideo from '../assets/videos/RecipeAI.mp4';


const ModalRecipeAI = () => {

    return (
        <>
        {/* Modal One Container */}
        <div className="container">
            {/* Modal */}
            <div className="modal fade" id="myModal6" role="dialog">
                <ModalSizePosition className="modal-dialog">
                
                    {/* Modal content */}
                    <div className="modal-content">
                        
                        <ModalBody className="modal-body">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Video controls>
                                        <source src={RecipeAIVideo} type="video/mp4" className="d-block w-100" />
                                    </Video>
                                </div>
                            </div>
                        </ModalBody>

                        <ModalTitle>Recipe AI</ModalTitle>
                        <ModalSubTitle>ChatGPT Practice project</ModalSubTitle>
                        <Paragraph>Intrigued by the rapid evolution of Artificial Intelligence, I couldn't resist the urge to dive into the ChatGPT API. To channel my focus, I embarked on building a recipe generator.</Paragraph>
                        <Footer>
                            <a href="https://github.com/dvdjms/Recipe-AI" target="_blank" rel="noreferrer"><GitButton>Github Repository</GitButton></a>
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
    border-bottom-color:  #ffecec;
    border-bottom-style: solid;
    border-bottom-width: .15vw;
    margin-bottom: 3vh;
`;


const Video = styled.video`
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



export default ModalRecipeAI;

