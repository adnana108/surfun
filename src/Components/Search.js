import { useState } from "react";
import Button from "./Button";
import "./search.scss"

function SearchBar() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSearchClick = (event) => {
        event.preventDefault();
    }
    return (
        <form class="form-container">
            <input
                className="search-input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search beaches..."
            />
            {inputValue && (
                    <Button onClick={handleSearchClick} className="" />
                )}
        </form>
    )
}

export default SearchBar;