import './Modal.css';
import LearnScotlandVideo from '../assets/videos/LearnScotland.mp4';
import Modal from '../components/Modal';


const LearnScotland = () => {

    return (
        <>
            <Modal 
                className="modal-body" 
                video={LearnScotlandVideo} 
                title="Learn Scotland" 
                subtitle="CodeClan Group Project"
                paragraph="Working within in a group of four, we planned, designed, and developed a Learn Scotland application aimed at young people. This included quizzes, interactive activities, and a leader board."
                githublink="https://github.com/dvdjms/Learn_Scotland"
                modalNumber={"3"}
                isVideo={true}
            />
         </>
    )
};



export default LearnScotland;

