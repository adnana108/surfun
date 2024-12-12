import "./button.scss";

function Button({onClick}) {
    return (
        <button className="default-btn"
            type="submit"
            onClick={onClick}>
            Search
        </button>
    )
}

export default Button;