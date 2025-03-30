import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CameraPage from './components/CameraPage';
import GalleryPage from './components/GalleryPage';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/camera" element={<CameraPage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
