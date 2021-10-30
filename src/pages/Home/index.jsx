import './style.css';
import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';
import Portfolio from '../../component/WebCardSection';
import UnderConstruction from '../../component/UnderConstruction';
function Home() {
    return (
        <>
            <NavBar />
            <UnderConstruction />
            <Portfolio id="portfolio" />
            <Footer />
        </>
    );
}

export default Home;
