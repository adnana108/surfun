import React, { useState } from "react";
import getWeather from "../../assets/api/apiService";
import SearchBar from "../../Components/Search";
import ResultPage from "../../ResultPage/ResultPage";

const SearchPage = () => {

    const [conditions, setConditions] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [location, setLocation] = useState("");

    const handleSearch = async (locationName) => {
        const weatherData = await getWeather(locationName);
        setConditions(weatherData);
        setLocation(locationName);
        setIsLoaded(true);

    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {isLoaded &&
                <div>
                    <p>results for:{location}</p>
                    <ResultPage conditions={conditions} />
                </div>
            }
        </>
    )
}

export default SearchPage;