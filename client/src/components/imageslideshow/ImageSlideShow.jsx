import React from 'react'
import './ImageSlideShow.css'
import { useState, useEffect } from 'react';
const ImageSlideShow = () => {
    const images = [
        '../../../assets/Images/clinic_photo1.png',
        '../../../assets/Images/clinic_photo2.png',
        '../../../assets/Images/clinic_photo3.png',
        '../../../assets/Images/clinic_photo4.png',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = images.length;
    // Logic to change the image index automatically every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);  // Move one step at a time
        }, 3000); // Change image every 3 seconds
        // Cleanup the interval on unmount
        return () => clearInterval(interval);
    }, [totalImages]);
    // Get the current 3 images to show
    const imagesToShow = [
        images[(currentImageIndex) % totalImages],
        images[(currentImageIndex + 1) % totalImages],
        images[(currentImageIndex + 2) % totalImages],
    ];
    // Handle dot click to change the set of images
    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {imagesToShow.map((image, index) => (
                    <div key={index} className="carousel-image-container">
                        <img src={image} alt={`Image ${index}`} className="carousel-image" />
                    </div>
                ))}
            </div>
            {/* Dots */}
            <div className="dots-overlay">
                {images.map((_, dotIndex) => (
                    <span
                        key={dotIndex}
                        className={`dot ${dotIndex === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(dotIndex)}
                    ></span>
                ))}
            </div>
        </div>
    )
}
export default ImageSlideShow