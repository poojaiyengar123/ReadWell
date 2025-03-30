import React, { useState } from "react";

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("http://localhost:5001/upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();
            if (response.ok) {
              setUploadedImage(`http://localhost:5001${data.filePath}`);
            } else {
              alert("Upload failed: " + data.error);
            }
          } catch (error) {
            console.error("Upload error:", error);
          }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!selectedFile}>
            Upload File
            </button>

            {uploadedImage && (
                <div>
                    <p>Uploaded Image:</p>
                    <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: "300px", marginTop: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default FileUpload;