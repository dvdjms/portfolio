import './Modal.css';
import WeatherOne from '../assets/images/Weather_2.png';
import WeatherTwo from '../assets/images/Weather_3.png';
import WeatherThree from '../assets/images/Weather_4.png';
import Modal from '../components/Modal';


const ModalWeather = () => {


    return (
        <>
            <Modal 
                className="modal-body" 
                imageOne={WeatherOne} 
                imageTwo={WeatherTwo}
                imageThree={WeatherThree}
                title="WeatherWise" 
                subtitle="CS50W Web Programming with Python and JavaScript from HarvardX"
                paragraph="Fully responsive Weather app for a user to search 45,000 cities and get 24 hour and 10 day weather forecasts. Includes a My Locations dashboard with local timezones."
                githublink="https://github.com/dvdjms/CS50w_Capstone"
                myModal={"1"}
                />
         </>
    )
};


export default ModalWeather;