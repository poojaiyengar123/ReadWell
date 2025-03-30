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
            const response = await fetch("http://localhost:8000/upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();
            if (response.ok) {
                const imageUrl = `http://localhost:8000/image/${data.image_id}`;
                setUploadedImage(imageUrl);
            } else {
                alert("Upload failed: " + data.detail);
            }
          } catch (error) {
            console.error("Upload error:", error);
          }
    };

    return (
        <div className="file-upload">
            <input id="file-input" type="file" onChange={handleFileChange} style={{ display: "none" }}/>
            <label htmlFor="file-input" className="file-input-label">Choose File</label>
            <label>
                {selectedFile ? "File selected" : "No file selected"}
            </label>
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