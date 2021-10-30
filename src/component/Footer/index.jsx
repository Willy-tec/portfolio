import './style.css';
import contact from '../../data/contact';
import ContactLink from '../ContactLink';

function Footer() {
    return (
        <footer className="Footer">
            <section className="Footer_icon">
                {contact &&
                    contact.map((item, index) => (
                        <ContactLink
                            props={item}
                            key={'link' + index}
                        ></ContactLink>
                    ))}
            </section>
            <p>
                WASTIAUX William <span>2021</span>
            </p>
        </footer>
    );
}

export default Footer;
