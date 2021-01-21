import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";
import header from "../../assets/img/header.png";
import "./header.scss";

const Header = () => {
  const alt = "bacgraund-image";
  return (
    <div className="header">
      <div className="header__content flexbet">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logotip"></img>
        </div>
        <div className="header__nav">
          <nav className="header__nav">
            <ul className="header__item flex">
              <li className="header__list">
                <Link className="header__link" to="/">
                  Home
                </Link>
              </li>
              <li className="header__list">
                <Link className="header__link" to="/fasilites">
                  Facllties
                </Link>
              </li>
              <li className="header__list">
                <Link className="header__link" to="/rooms">
                  Rooms
                </Link>
              </li>
              <li className="header__list">
                <Link className="header__link" to="/contact">
                  contact-us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__info">
        <h3 className="header__titlel">WELCOME TO</h3>
        <h1 className="header__title">LUXURY</h1>
        <h4 className="header__p">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </h4>
      </div>
      <div className="flexx">
      <button className="header__btn">
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8333 0.333313H22.1667V3.83331H19.8333V0.333313H15.1667V3.83331H12.8333V0.333313H8.16667V3.83331H5.83333V0.333313H1.16667C0.857247 0.333313 0.560501 0.456229 0.341709 0.675022C0.122916 0.893814 0 1.19056 0 1.49998L0 22.5C0 22.8094 0.122916 23.1061 0.341709 23.3249C0.560501 23.5437 0.857247 23.6666 1.16667 23.6666H26.8333C27.1427 23.6666 27.4395 23.5437 27.6583 23.3249C27.8771 23.1061 28 22.8094 28 22.5V1.49998C28 1.19056 27.8771 0.893814 27.6583 0.675022C27.4395 0.456229 27.1427 0.333313 26.8333 0.333313ZM21.4887 15.2827L19.8333 14.1V19C19.8333 19.3094 19.7104 19.6061 19.4916 19.8249C19.2728 20.0437 18.9761 20.1666 18.6667 20.1666H15.75V15.5C15.75 15.1906 15.6271 14.8938 15.4083 14.675C15.1895 14.4562 14.8927 14.3333 14.5833 14.3333H13.4167C13.1072 14.3333 12.8105 14.4562 12.5917 14.675C12.3729 14.8938 12.25 15.1906 12.25 15.5V20.1666H9.33333C9.02391 20.1666 8.72717 20.0437 8.50837 19.8249C8.28958 19.6061 8.16667 19.3094 8.16667 19V14.1L6.51146 15.2827L5.15521 13.3839L13.3219 7.5506C13.5206 7.4113 13.7573 7.33657 14 7.33657C14.2427 7.33657 14.4794 7.4113 14.6781 7.5506L22.8448 13.3839L21.4887 15.2827Z"
            fill="white"
          />
        </svg>
        BOOK NOW
      </button>
      <span className="header__scroll">
        scroll
      </span>
      <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.662 61C23.6269 60.9939 16.8101 58.5566 11.366 54.1008C5.92184 49.6451 2.18493 43.4447 0.78804 36.5497C-0.608846 29.6547 0.420145 22.4888 3.70077 16.2655C6.98139 10.0421 12.312 5.14381 18.79 2.40002C26.218 -0.616 34.5347 -0.58696 41.9415 2.48086C49.3483 5.54868 55.2499 11.4087 58.37 18.7936C61.49 26.1786 61.5778 34.4949 58.6144 41.944C55.6509 49.3932 49.8744 55.3765 42.534 58.6C38.7784 60.1907 34.7405 61.007 30.662 61ZM18.439 20.755L13.422 25.655L30.262 42.1L47.103 25.65L42.086 20.75L30.262 32.3L18.439 20.755Z"
            fill="white"
          />
        </svg>
        </div>
    </div>
  );
};

export default Header;
