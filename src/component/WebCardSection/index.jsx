import './style.css';
import website from '../../data/website';
import Card from '../Card';

function Portfolio() {
    return (
        <section className="Portfolio">
            <h2 className="Portfolio_title">Mes créations</h2>
            <div className="Portfolio_box">
                {website &&
                    website.map((site, index) => (
                        <Card props={site} key={`card${index}`} />
                    ))}
            </div>
        </section>
    );
}

export default Portfolio;
