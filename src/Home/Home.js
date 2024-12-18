import React, { useState } from "react";
import "./home.scss";
import GalleryView from "../Components/Carousel";
import TrialButton from "../Components/TrialButton";
// import SearchBar from "../Components/Search";
// import ResultPage from "../ResultPage/ResultPage";
// import getWeather from "../assets/api/apiService";

function HomePage() {

    return (
        <div className="home-page">
            <GalleryView />
            <p className="surf-quote">
                Surf safe
            </p>
            <p className="surf-quote">
                progress fast
            </p>
            <p className="surf-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <TrialButton />
        </div>
    )
}

export default HomePage;