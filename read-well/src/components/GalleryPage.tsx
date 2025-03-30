import React, { useEffect, useState } from "react";

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/images") // Fetch from your backend
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-area">
        <div className="cards flex flex-wrap gap-4">
          {images.map((filename, index) => (
            <img
              key={index}
              src={`http://localhost:5001/uploads/${filename}`}
              alt={`Image ${index}`}
              className="w-[300px] h-auto rounded-[10px] snap-center py-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
