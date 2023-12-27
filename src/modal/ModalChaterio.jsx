import './Modal.css';
import ChaterioOne from '../assets/images/imagescomingsoon.png';
import ChaterioTwo from '../assets/images/imagescomingsoon.png';
import ChaterioThree from '../assets/images/imagescomingsoon.png';
import Modal from '../components/Modal';


const ModalChaterio = () => {


    return (
        <>
            <Modal 
                className="modal-body" 
                imageOne={ChaterioOne} 
                imageTwo={ChaterioTwo}
                imageThree={ChaterioThree}
                title="Cherio" 
                subtitle="CodeClan Capstone Project"
                paragraph="For the final project at CodeClan, I worked independently to explore WebSocket technologies for a video chat application. Ambitious to say the least!"
                githublink="https://github.com/dvdjms/Capstone"
                modalNumber={"4"}
                isVideo={false}
            />
         </>
    )
};


export default ModalChaterio;