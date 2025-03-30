import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const GalleryPage: React.FC = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="gallery">
            <div className="gallery-area">
                <div className="cards">
                    <p>Cards</p>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;