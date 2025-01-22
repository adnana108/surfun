import "./home.scss";
import GalleryView from "../Components/Carousel";
import TrialButton from "../Components/TrialButton";

function HomePage() {

    return (
        <div className="home-page">
            <GalleryView />
            <section className="surf-intro-section">
                <p className="surf-quote">
                    Surf safe
                </p>
                <p className="surf-quote">
                    progress fast
                </p>
                <p className="surf-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <TrialButton />
            </section>
        </div>
    )
}

export default HomePage;