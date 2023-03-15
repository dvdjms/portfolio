import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Training from '../components/Training';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const PortfolioContainer = () => {


    return (
        <>
        <Header/>
        <About className="element"/>
        <Training className="element"/>
        <Skills className="element"/>
        <Experience className="element"/>
        <Portfolio className="element"/>
        <Contact className="element"/>
        </>
    )
}


export default PortfolioContainer;

