import React from 'react';
import agent from '../../agent';

const Banner = ({ category, appName, onClickCategory, onDetailUnLoad }) => {

  if (!category) {
    return null;
  }
  return (
    <div className="menu-swiper swiper-container">
      <nav className="menu-moor swiper=wrapper">
        {
          category.category.map((category, index) => {
            const handleClick = ev => {
              ev.preventDefault();
              onClickCategory('', '', agent.Articles.byCategory(20, category));
              onDetailUnLoad();
              window.category = category;
              window.number = 1;
            };
            return (
              <a
                href="/#"
                className="btn-nav swiper-slide"
                onClick={handleClick}
                key={index}
              >{category}
              </a>
            )
          })
        }
      </nav>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Banner;
