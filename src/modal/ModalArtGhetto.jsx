import './Modal.css';
import ArtGhettoOne from '../assets/images/ArtGhetto_3.png';
import ArtGhettoTwo from '../assets/images/ArtGhetto_2.png';
import ArtGhettoThree from '../assets/images/ArtGhetto_4.png';
import Modal from '../components/Modal';

const ModalArtGhetto = () => {

    return (
        <>
            <Modal 
                className="modal-body" 
                imageOne={ArtGhettoOne} 
                imageTwo={ArtGhettoTwo}
                imageThree={ArtGhettoThree}
                title="Art Ghetto" 
                subtitle="CS50x Final Project"
                paragraph="Working independently I developed a flask application that allows a user to mimic buying art. A user can register, a user can buy art, a user can view transaction history."
                githublink="https://github.com/dvdjms/Art-Ghetto"
                myModal={"5"}
            />
        </>
    )
};


export default ModalArtGhetto;