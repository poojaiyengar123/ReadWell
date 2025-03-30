import React from 'react';
import FileUpload from "./FileUpload";
import './styles.css';

const CameraPage: React.FC = () => {
    return (
        <div className="homepage">
            <FileUpload />
        </div>
    );
};

export default CameraPage;