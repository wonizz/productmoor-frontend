import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="menu-swiper swiper-container">
        <nav className="menu-moor swiper=wrapper">
            <a href="#" className="btn-nav swiper-slide active">Furniture</a>
            <a href="#" className="btn-nav swiper-slide">Chairs</a>
            <a href="#" className="btn-nav swiper-slide">Stools</a>
            <a href="#" className="btn-nav swiper-slide">Tables</a>
            <a href="#" className="btn-nav swiper-slide">Sofas</a>
            <a href="#" className="btn-nav swiper-slide">Lighting</a>
            <a href="#" className="btn-nav swiper-slide">Accessories</a>
        </nav>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
    </div>
  );
};

export default Banner;
