import './Modal.css';
import WatchlistOne from '../assets/images/watchlistmovies.png';
import WatchlistTwo from '../assets/images/watchlistmovie.png';
import WatchlistThree from '../assets/images/watchlistdirector.png';
import Modal from '../components/Modal';


const ModalMovie = () => {

    return (
        <>
            <Modal 
                className="modal-body" 
                imageOne={WatchlistOne} 
                imageTwo={WatchlistTwo}
                imageThree={WatchlistThree}
                title="Movie Watchlist" 
                subtitle="CodeClan Individual Project"
                paragraph="After 4 weeks at CodeClan we undertook our first project. Working independently we were to create a flask application that allows a user to perform simple CRUD actions. I created a movie watchlist."
                githublink="https://github.com/dvdjms/watchlist"
                myModal={"2"}
            />
         </>
    );
};


export default ModalMovie;