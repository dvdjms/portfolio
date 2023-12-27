import './Modal.css';
import RecipeAIVideo from '../assets/videos/RecipeAI.mp4';
import Modal from '../components/Modal';

const ModalRecipeAI = () => {

    return (
        <>
            <Modal 
                className="modal-body" 
                video={RecipeAIVideo} 
                title="Recipe AI" 
                subtitle="ChatGPT Practice project"
                paragraph="Intrigued by the rapid evolution of Artificial Intelligence, I couldn't resist the urge to dive into the ChatGPT API. To channel my focus, I embarked on building a recipe generator."
                githublink="https://github.com/dvdjms/Recipe-AI"
                modalNumber={"6"}
                isVideo={true}
            />
         </>
    )
};


export default ModalRecipeAI;