import React, { useState } from "react";
import "./home.scss";
import SearchBar from "../Components/Search";
import GalleryView from "../Components/Carousel";
import ResultPage from "../ResultPage/ResultPage";
import getWeather from "../assets/api/apiService";


function HomePage() {

    const [isGalleryVisible, setIsGalleryVisible] = useState(true);
    const [conditions, setConditions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSearch = () => {
        setIsGalleryVisible(false);
        const weatherData = ["monday", "joi"]
        setConditions(weatherData);
        setIsLoaded(true);
    }

    return (
        <div className="home-page">
            <SearchBar onSearch={handleSearch} />
            <GalleryView style={{ display: isGalleryVisible ? "block" : "none" }} />
            {isLoaded &&
                <ResultPage conditions={conditions} />
            }
        </div>
    )
}

export default HomePage;