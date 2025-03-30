import React, { useEffect, useState } from "react";

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/images")
      .then((response) => response.json())
      .then((json) => {
          console.log("API Response:", json);
        if (Array.isArray(json)) {
          setImages(json);
        } else {
          setError("Error: Expected an array of images");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching images");
        setLoading(false);
        console.error("Error fetching images:", error);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1 className="gallery-name">Image Gallery</h1>
      <div className="gallery">
        <div className="gallery-area">
          <div className="gallery_cards">
            {images.length > 0 ? (
              images.map((filename, index) => {
                const imageUrl = `http://localhost:8000/image/${filename}`;
                return (
                  <a
                    key={index}
                    href={imageUrl}
                    download={filename} // Enables downloading
                    className="download-link"
                  >
                    <img
                      src={imageUrl}
                      alt={`Image ${index}`}
                      className="images"
                    />
                  </a>
                );
              })
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
