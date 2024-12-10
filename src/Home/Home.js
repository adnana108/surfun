import React, { useState } from "react";
import "./home.scss";
import SearchBar from "../Components/Search";
import GalleryView from "../Components/Carousel";
import ResultPage from "../ResultPage/ResultPage";


function HomePage() {

    const [isVisible, setIsVisible] = useState(true);
    const [conditions, setConditions] = useState([]);

    const handleVisibility = () => setIsVisible(false);

    return (
        <div className="home-page">
            <SearchBar setConditions={setConditions} handleVisibility={handleVisibility} />
            <GalleryView style={{ display: isVisible ? "block" : "none" }} />
            <ResultPage conditions={conditions} />
        </div>
    )
}

export default HomePage;