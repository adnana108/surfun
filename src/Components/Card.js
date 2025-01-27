import "./Card.scss";

const Card = ({ hour, airTemp }) => {
    return (
        <div className="display-card">
            {hour}
            {airTemp}
        </div>
    )
}

export default Card;