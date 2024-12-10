import { useState } from "react";
import Button from "./Button";
import "./search.scss";
import GetWeather from "../assets/api/apiService";

function SearchBar({ handleVisibility, setConditions }) {

    const [inputValue, setInputValue] = useState('');

    const conditions = ["ploaie", "vant", "soare"];

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setConditions(conditions);
        // GetWeather();
        handleVisibility();
    }
    return (
        <form className="form-container">
            <input
                className="search-input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search beaches..."
            />
            {inputValue && (
                <Button onClick={handleSubmit} />
            )}
        </form>
    )
}

export default SearchBar;