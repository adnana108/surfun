import React from "react";
import "./home.scss";
import SearchBar from "../Components/Search";
import GalleryView from "../Components/Carousel";


function HomePage() {
    return (
        <div class="home-page">
            <SearchBar />
            <GalleryView />
        </div>
    )
}

export default HomePage;