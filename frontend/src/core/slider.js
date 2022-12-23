import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'https://img.freepik.com/premium-photo/global-business-network-businessman-touching-global-network-data-exchanges-big-data_34200-433.jpg?w=1060', alt: 'Image 1', caption: 'Sell courses' },
    { src: 'https://img.freepik.com/premium-photo/wireless-network-connection-city_64030-302.jpg?w=1060', alt: 'Image 2', caption: 'Sell courses' },
    { src: 'https://img.freepik.com/premium-photo/businessman-using-mobile-smartphone-global-network-connection-investor-customer_34200-485.jpg?w=1060', alt: 'Image 3', caption: 'Sell courses' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  function handlePrevClick() {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div id="slider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {images.map((image, index) => (
          <li
            key={index}
            data-target="#slider"
            data-slide-to={index}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image.src} alt={image.alt} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h1>{image.caption}</h1>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#slider"
        role="button"
        data-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#slider"
        role="button"
        data-slide="next"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ImageSlider;
