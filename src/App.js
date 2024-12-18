import './App.css';
import HomePage from './Home/Home';
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [isGalleryVisible, setIsGalleryVisible] = useState(true);
  // const [conditions, setConditions] = useState({});
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [location, setLocation] = useState("");

  // const handleSearch = async (locationName) => {
  //     const weatherData = await getWeather(locationName);
  //     setConditions(weatherData);
  //     setLocation(locationName);
  //     setIsGalleryVisible(false);
  //     setIsLoaded(true);
  // }

  // <div className="home-page">
  //     {console.log(conditions.hours)}
  //     <SearchBar onSearch={handleSearch} />
  //     <GalleryView style={{ display: isGalleryVisible ? "block" : "none" }} />
  //     {isLoaded &&
  //         <div>
  //             <p>Results for: {location}</p>
  //             <ResultPage conditions={conditions} />
  //         </div>
  //     }
  // </div>

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
