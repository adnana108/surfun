import "./button.scss";

function Button({onClick}) {
    return (
        <button class="btn"
            type="submit"
            onClick={onClick}>
            Search
        </button>
    )
}

export default Button;