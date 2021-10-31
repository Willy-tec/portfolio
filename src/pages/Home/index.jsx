import './style.css';
import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';
import Portfolio from '../../component/Portfolio';
import UnderConstruction from '../../component/UnderConstruction';
import Contact from '../../component/Contact';
function Home() {
    return (
        <>
            <UnderConstruction />

            <NavBar />
            <UnderConstruction />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
