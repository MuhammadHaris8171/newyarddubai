import React, { useState, useEffect } from 'react';
import './Hero.css'; // Make sure you create a Hero.css file for styling

const images = [
  { src: 'alicja-ziajowska-WcbEQ0eDj_o-unsplash.jpg', text: 'Random Text 1' },
  { src: 'ammar-el-attar-RCotcyH_2gw-unsplash.jpg', text: 'Random Text 2' },
  { src: 'axp-photography-madPGwSpcPA-unsplash.jpg', text: 'Random Text 3' },
  { src: 'di-2BanBS4oAIU-unsplash.jpg', text: 'Random Text 4' },
  { src: 'jeshoots-com-DpLibjAV2R8-unsplash.jpg', text: 'Random Text 5' },
  { src: 'michael-starkie-YTObvkcE38I-unsplash.jpg', text: 'Random Text 6' }
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic slider change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hero-container">
      <div className="slider">
        <img
          className="slider-image"
          src={images[currentImageIndex].src}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        <div className="text-overlay">{images[currentImageIndex].text}</div>
      </div>
    </div>
  );
}

export default Hero;
