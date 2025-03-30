import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const goGallery = () => {
        navigate('/gallery');
    };

    const goCamera = () => {
        navigate('/camera');
    };

    return (
        <div className="homepage">
            <div className="title">
                <h1>ReadWell</h1>
            </div>
            <div className="description">
                <p>ReadWell is an accessibility-focused app that converts images of text into a dyslexia-friendly format with customizable fonts. It also features text-to-speech to improve reading ease and comprehension.</p>
            </div>
            <div className="buttons">
                <div className="button">
                    <button onClick={goCamera} className="camera-button">Transcribe Image</button>
                </div>
                <div className="button">
                    <button onClick={goGallery} className="gallery-button">View Image Gallery</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;