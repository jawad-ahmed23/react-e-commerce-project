import React from "react";
import "./HomePage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="directory-menu__item">
        <div className="content">
          <h1 className="content__title">Hats</h1>
          <span className="content__subtitle">Shop Now</span>
        </div>
      </div>

      <div className="directory-menu__item">
        <div className="content">
          <h1 className="content__title">Jackets</h1>
          <span className="content__subtitle">Shop Now</span>
        </div>
      </div>

      <div className="directory-menu__item">
        <div className="content">
          <h1 className="content__title">Sneakers</h1>
          <span className="content__subtitle">Shop Now</span>
        </div>
      </div>

      <div className="directory-menu__item">
        <div className="content">
          <h1 className="content__title">Womens</h1>
          <span className="content__subtitle">Shop Now</span>
        </div>
      </div>

      <div className="directory-menu__item">
        <div className="content">
          <h1 className="content__title">Mens</h1>
          <span className="content__subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
