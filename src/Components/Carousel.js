import React, { useState, useEffect } from "react";
import "./carousel.scss";
import ImageAustralia from "../assets/image(2).jpg";
import ImageIndonesia from "../assets/image(3).png";
import ImageHawaii from "../assets/image(4).webp";

function GalleryView({ style }) {
    const images = [ImageAustralia, ImageIndonesia, ImageHawaii];
    const bestCountries = ["Australia", "Indonesia", "Hawaii"];

    const [index, setIndex] = useState(0);
    const length = images.length;

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 5000);

        return () => clearInterval(timer);
    })

    return (
        <div style={style} className="images-container">
            <div className="carousel">
                <h1 className="country-title">{bestCountries[index]}</h1>
                <img className="beach-image" src={images[index]} alt={'image of best beach'} />
            </div>
            {/* <div className="images-gallery">
                {images.map((image, i) => (
                    <section className="image-card" key={i}>
                        <h1 className="country-title">{bestCountries[i]}</h1>
                        <img className="beach-image" src={image} alt={`image of ${bestCountries[i]}`} />
                    </section>
                ))
                }
            </div> */}
        </div>
    )
}

export default GalleryView;