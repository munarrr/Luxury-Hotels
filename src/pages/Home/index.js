import React from "react";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">
        All our room types are including complementary breakfast
      </h1>
      <div className="home__content">
        <div className="home__exlope">
          <h3 className="home__suptitle">Luxury redefined</h3>
          <p className="home__description">
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
          </p>
          <button className="home__btn">EXLOPE</button>
        </div>
        <div className="home__left">
          <img
            src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg"
            alt="rooms"
            className="home__img"
          ></img>
        </div>
      </div>
      <div className="home__content">
        <div className="home__exlope">
          <h3 className="home__suptitle">Luxury redefined</h3>
          <p className="home__description">
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
          </p>
          <button className="home__btn">EXLOPE</button>
        </div>
        <div className="home__left">
          <img
            src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg"
            alt="rooms"
            className="home__img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
