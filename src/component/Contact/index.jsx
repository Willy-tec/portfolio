import './style.css';
import FormSpree from '../../component/FormSpree';

function Contact() {
    return (
        <section className="Contact" id="contact">
            <svg
                preserveAspectRatio="none"
                width="100%"
                height="50"
                viewBox=" 0 0 100 100"
            >
                <path d="M0 0 L50 100 L 100 0 Z" stroke="white" fill="white" />
            </svg>
            <h1>CONTACT</h1>
            <p>
                Vous avez une question, ou vous souhaitez que l'on travaille
                ensemble ?
            </p>
            <FormSpree />
        </section>
    );
}

export default Contact;
