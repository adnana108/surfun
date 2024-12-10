import './App.css';
import HomePage from './Home/Home';
import ResultPage from './ResultPage/ResultPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
