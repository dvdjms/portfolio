// portfolio images
import ArtGhettodMain from '../assets/images/ArtGhettoMain.png';
import ChaterioMain from '../assets/images/Chaterio_1.png';
import LearnScotlandMain from '../assets/images/LearnScotland.jpg';
import RecipeAIMain from '../assets/images/RecipeAI.png';
import WeatherMain from '../assets/images/WeatherwiseMain.png';
import WatchlistMain from '../assets/images/watchlist.jpg';
// carousel images
import ArtGhettoOne from '../assets/images/ArtGhetto_2.png';
import ArtGhettoTwo from '../assets/images/ArtGhetto_3.png';
import ArtGhettoThree from '../assets/images/ArtGhetto_4.png';
import ChaterioOne from '../assets/images/imagescomingsoon.png';
import ChaterioTwo from '../assets/images/imagescomingsoon.png';
import ChaterioThree from '../assets/images/imagescomingsoon.png';
import WatchlistOne from '../assets/images/watchlistmovies.png';
import WatchlistTwo from '../assets/images/watchlistmovie.png';
import WatchlistThree from '../assets/images/watchlistdirector.png';
import WeatherOne from '../assets/images/WeatherwiseWeather.png';
import WeatherTwo from '../assets/images/WeatherwiseSearch.png';
import WeatherThree from '../assets/images/WeatherwiseFavs.png';
// carousel videos
import LearnScotlandVideo from '../assets/videos/LearnScotland.mp4';
import RecipeAIVideo from '../assets/videos/RecipeAI.mp4';
// technology icons
import ASPnet from '../assets/techImages/aspnet.png';
import Bootstrap from '../assets/techImages/bootstrap.png';
import CSharp from '../assets/techImages/csharp.png';
import CSS from '../assets/techImages/css.png';
import Django from '../assets/techImages/django.png';
import Flask from '../assets/techImages/flask.png';
import Git from '../assets/techImages/git.png';
import GitHub from '../assets/techImages/github.png';
import HTML from '../assets/techImages/html.png';
import Java from '../assets/techImages/java.png';
import JavaScript from '../assets/techImages/javascript.png';
import Mongo from '../assets/techImages/mongodb.png';
import Nodejs from '../assets/techImages/nodejs.png';
import NPM from '../assets/techImages/npm.png';
import PostgreSQL from '../assets/techImages/postgresql.png';
import Python from '../assets/techImages/python.png';
import Reactjs from '../assets/techImages/reactjs.png';
import SpringBoot from '../assets/techImages/springboot.png';
import StyledComponents from '../assets/techImages/styledcomponents.png';
import Threejs from '../assets/techImages/threejs.svg';
import TypeScript from '../assets/techImages/typescript.png';


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
    "I have recently completed the intensive 16-week Professional Software Development course at CodeClan, Edinburgh. Dedicated to becoming a full stack developer, I have a passion for problem solving, clean understandable code, UI/UX design, and customer satisfaction. I bring with me over 10 years' accounts and administration experience from a variety of sectors and over 5 years Teaching English as a Foreign Language."
]

const experiences = [
    {
        title: 'Accounts and Administration',
        description: "Over 10 years' working within accounting departments in a variety of sectors.",
        skills: [
            "Attention to detail",
            "Problem solving & Analysis",
            "Teamwork & independent work",
            "Streamlining workflows",
            "Strong Excel & reporting",
        ]
    },
    {
        title: 'English Language Instructor',
        description: "Over 5 years Teaching English as Second Language in South Korea, Vietnam, and Online.",
        skills: [
            "Interpersonal communication",
            "Powerpoint presentations",
            "Planning & organising",
            "Leadership",
            "Relationship building",
        ]
    },
    // {
    //     title: 'Contact Tracer',
    //     description: "During the pandemic I helped drive the infection rate down while contact tracing for the NHS.",
    //     skills: [
    //         "Advising and Supporting",
    //         "Communication",
    //         "Relationship building",
    //         "Handling difficult calls",
    //         "Training new starters",
    //     ]
    // },
    {
        title: 'Software Developer',
        description: "Volunteering with the Scottish Tech Army. Automatated map locations and project updates.",
        skills: [
            "JavaScript, HTML, CSS",
            "Google Maps, Google Sheets",
            "Jira, Zapier, Notion, SquareSpace",
            "Teamwork & pair-programming",
            "Agile working environment",
        ]
    },
]

const skills = [
    {
        name: "HTML 5",
        icon: HTML
    },
    {
        name: "CSS 3",
        icon: CSS
    },
    {
        name: "JavaScript",
        icon: JavaScript
    },
    {
        name: "TypeScript",
        icon: TypeScript
    },
    {
        name: "React JS",
        icon: Reactjs
    },
    {
        name: "Node JS",
        icon: Nodejs
    },
    {
        name: "Python",
        icon: Python
    },
    {
        name: "Java",
        icon: Java
    },
    {
        name: "C#",
        icon: CSharp
    },
    {
        name: "Django",
        icon: Django
    },
    {
        name: "Flask",
        icon: Flask
    },
    {
        name: "Spring Boot",
        icon: SpringBoot
    },
    {
        name: "ASP.net",
        icon: ASPnet
    },
    {
        name: "Threejs",
        icon: Threejs
    },
    {
        name: "PostgreSQL",
        icon: PostgreSQL
    },
    {
        name: "MongoDB",
        icon: Mongo
    },
    {
        name: "Styled-Components",
        icon: StyledComponents
    },
    {
        name: "Bootstrap",
        icon: Bootstrap
    },
    {
        name: "npm",
        icon: NPM
    },
    {
        name: "Git",
        icon: Git
    },
    {
        name: "GitHub",
        icon: GitHub
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
        subtitle: "Angular, C#, and ChatGPT Practice Project",
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


const training = {
    codeclan: [
        "Python with Flask", "JavaScript", "Java with Spring Boot", "RESTful APIs", "PostreSQL & MongoDB",
        "Test Driven Development", "Agile Methodologies", "Pair-Programming", "SQA Accredited"
    ],
    cs50: [
        "C Programming", "Python with Django", "JavaScript", "Bootstrap",
        "SQL", "Database design", "Scalability", "Security", "Certificate"
    ],
};

export { navlinks, about, experiences, skills, projects, training};