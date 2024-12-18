import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSlides = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: "LQOf5br0D961rs7ktQXWFU_eVbknFAlw_bQresVoXLU", 
            per_page: 20,
          },
        });
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Handle next and previous button clicks
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      {images.length > 0 && (
        <div className="image-slider">
          <button className="prev-btn" onClick={prevImage}>
            &#10094;
          </button>
          <img
            src={images[currentIndex].urls.regular}
            alt="Slide"
            className="slider-image"
          />
          <button className="next-btn" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSlides;
