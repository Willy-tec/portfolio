import './style.css';
function Card({ props: { img, title, description } }) {
    return (
        <div className="Card">
            <img src={img} alt={title} className="Card_img" />
            <p className="Card_title">{title}</p>
            <p className="Card_description">{description}</p>
        </div>
    );
}

export default Card;
