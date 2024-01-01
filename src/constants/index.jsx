import LearnScotlandVideo from '../assets/videos/LearnScotland.mp4';
import RecipeAIVideo from '../assets/videos/RecipeAI.mp4';
import WeatherOne from '../assets/images/WeatherwiseWeather.png';
import WeatherTwo from '../assets/images/WeatherwiseSearch.png';
import WeatherThree from '../assets/images/WeatherwiseFavs.png';
import ChaterioOne from '../assets/images/imagescomingsoon.png';
import ChaterioTwo from '../assets/images/imagescomingsoon.png';
import ChaterioThree from '../assets/images/imagescomingsoon.png';
import WatchlistOne from '../assets/images/watchlistmovies.png';
import WatchlistTwo from '../assets/images/watchlistmovie.png';
import WatchlistThree from '../assets/images/watchlistdirector.png';
import ArtGhettoOne from '../assets/images/ArtGhetto_3.png';
import ArtGhettoTwo from '../assets/images/ArtGhetto_2.png';
import ArtGhettoThree from '../assets/images/ArtGhetto_4.png';
import WatchlistMain from '../assets/images/watchlist.jpg';
import ChaterioMain from '../assets/images/Chaterio_1.png';
import LearnScotlandMain from '../assets/images/LearnScotland.jpg';
import ArtGhettodMain from '../assets/images/Art_Ghetto.jpg';
import WeatherMain from '../assets/images/WeatherwiseMain.png';
import RecipeAIMain from '../assets/images/RecipeAI.png';



const navlinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "training",
        title: "Training",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "contact",
        title: "Contact",
    },
]


const about = [
    "I have recently completed the Professional Software Development course at CodeClan, Edinburgh. Dedicated to becoming a full stack developer, I have a passion and focus for customer satisfaction, UI/UX design, and clean understandable code. I'm also a tenacious problem solver. I bring with me over 10 years' accounts and administration experience from a variety of sectors and over 5 years Teaching English as a Foreign Language."
]

const experiences = [
    {
        title: 'Accounts and Administration',
        description: "Over 10 years' working within accounting departments in a variety of sectors.",
        skills: [
            "Attention to detail",
            "Problem Solving & Analysis",
            "Teamwork & Independent work",
            "Streamlining workflows",
            "Strong Excel & Reporting",
        ]
    },
    {
        title: 'English Language Instructor',
        description: "Over 5 years Teaching English as Second Language in South Korea, Vietnam, and Online.",
        skills: [
            "Interpersonal Communication",
            "Powerpoint Presentations",
            "Planning and organising",
            "Leadership",
            "Relationship building",
        ]
    },
    {
        title: 'Contact Tracer',
        description: "During the pandemic I helped drive the infection rate down while contact tracing for the NHS.",
        skills: [
            "Advising and Supporting",
            "Communication",
            "Relationship building",
            "Handling difficult calls",
            "Training new starters",
        ]
    },
]

const skills = [
    {
        name: "HTML 5"
    },
    {
        name: "CSS 3"
    },
    {
        name: "JavaScript"
    },
    {
        name: "TypeScript"
    },
    {
        name: "React JS"
    },
    {
        name: "Node JS"
    },
    {
        name: "JavaScript"
    },
    {
        name: "Python"
    },
    {
        name: "Flask"
    },
    {
        name: "Django"
    },
    {
        name: "Git & GitHub"
    },

]


const projects = [
    {
        title: "WeatherWise",
        subtitle: "CS50W Web Programming with Python and JavaScript from HarvardX",
        paragraph: "Fully responsive Weather app for a user to search 45,000 cities and get 24 hour and 10 day weather forecasts. Includes a My Locations dashboard with local timezones.",
        technologies: "Python / Django / React / Sqlite3",
        githublink: "https://github.com/dvdjms/CS50w_Capstone",
        modalNumber: 1,
        isVideo: false,
        imageMain: WeatherMain,
        imageOne: WeatherOne, 
        imageTwo: WeatherTwo,
        imageThree: WeatherThree,
    },
    {
        title: "Learn Scotland",
        subtitle: "CodeClan Group Project",
        paragraph: "Working within in a group of four, we planned, designed, and developed a Learn Scotland application aimed at young people. This included quizzes, interactive activities, and a leader board.",
        technologies: "React / ExpressJS / MongoDB",
        githublink: "https://github.com/dvdjms/Learn_Scotland",
        modalNumber: 2,
        isVideo: true,
        video: LearnScotlandVideo,
        imageMain: LearnScotlandMain,
    },
    {
        title: "Recipe AI",
        subtitle: "ChatGPT Practice project",
        paragraph: "Intrigued by the rapid evolution of Artificial Intelligence, I couldn't resist the urge to dive into the ChatGPT API. To channel my focus, I embarked on building a recipe generator.",
        technologies: "Angular / ASP.NET",
        githublink: "https://github.com/dvdjms/Recipe-AI",
        modalNumber: 3,
        isVideo: true,
        video: RecipeAIVideo,
        imageMain: RecipeAIMain,
    },
    {
        title: "Movie Watchlist",
        subtitle: "CodeClan Individual Project",
        paragraph: "After 4 weeks at CodeClan we undertook our first project. Working independently we were to create a flask application that allows a user to perform simple CRUD actions. I created a movie watchlist.",
        technologies: "Python / Flask / Postgresql",
        githublink: "https://github.com/dvdjms/watchlist",
        modalNumber: 4,
        isVideo: false,
        imageOne: WatchlistOne,
        imageTwo: WatchlistTwo,
        imageThree: WatchlistThree,
        imageMain: WatchlistMain,
    },
    {
        title: "Art Ghetto",
        subtitle: "CS50x Final Project",
        paragraph: "Working independently I developed a flask application that allows a user to mimic buying art. A user can register, a user can buy art, a user can view transaction history.",
        technologies: "Python / Flask / JavaScript / Sqlite3",
        githublink: "https://github.com/dvdjms/Art-Ghetto",
        modalNumber: 5,
        isVideo: false,
        imageOne: ArtGhettoOne,
        imageTwo: ArtGhettoTwo,
        imageThree: ArtGhettoThree,
        imageMain: ArtGhettodMain,
    },
    {
        title: "Chaterio",
        subtitle: "CodeClan Capstone Project",
        paragraph: "For the final project at CodeClan, I worked independently to explore WebSocket technologies for a video chat application. Ambitious to say the least!",
        technologies: "React / ExpressJS / WebSockets",
        githublink: "https://github.com/dvdjms/Capstone",
        modalNumber: 6,
        isVideo: false,
        imageOne: ChaterioOne,
        imageTwo: ChaterioTwo,
        imageThree: ChaterioThree,
        imageMain: ChaterioMain,
    },
];

export { navlinks, about, experiences, skills, projects};