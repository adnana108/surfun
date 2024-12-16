import "./Card.scss";

const Card = ({ cardDetails }) => {
    return (
        <div className="display-card">
            {cardDetails}
        </div>
    )
}

export default Card;