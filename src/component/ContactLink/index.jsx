import './style.css';
function ContactLink({ props: { name, link, imgLink } }) {
    return (
        <div className="ContactLink" aria-label={name}>
            <a className="ContactLink_link" href={link}>
                <img
                    className="ContactLink_link_img"
                    src={imgLink}
                    alt={name}
                />
            </a>
        </div>
    );
}

export default ContactLink;
