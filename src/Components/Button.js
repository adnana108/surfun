import "./button.scss";

function Button({onClick}) {
    return (
        <button className="btn"
            type="submit"
            onClick={onClick}>
            Search
        </button>
    )
}

export default Button;