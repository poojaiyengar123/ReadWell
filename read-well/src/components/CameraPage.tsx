import React from 'react';
// import { useNavigate } from 'react-router-dom';
import FileUpload from "./FileUpload";
import './styles.css';

const CameraPage: React.FC = () => {
    // const goGallery = () => {
    //     navigate('/gallery');
    // };

    // const goCamera = () => {
    //     navigate('/camera');
    // };

    return (
        <div className="homepage">
            <FileUpload />
        </div>
    );
};

export default CameraPage;