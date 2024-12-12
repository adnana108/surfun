import { useState } from "react";
import Button from "./Button";
import "./search.scss";

function SearchBar({ onSearch }) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSearch) {
            onSearch(inputValue);
        }

    }
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search beaches..."
            />
            {inputValue && (
                <Button />
            )}
        </form>
    )
}

export default SearchBar;