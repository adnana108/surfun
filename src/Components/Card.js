import "./Card.scss";

const Card = ({ cardDetails }) => {
    return (
        <div className="display-card">
            {cardDetails.map(([key, value]) => (
                <p key={key}>
                    {key}:{value}
                </p>
            ))}
        </div>
    )
}

export default Card;