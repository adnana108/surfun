import './App.css';
import HomePage from './Home/Home';
import ResultPage from './ResultPage/ResultPage';
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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
