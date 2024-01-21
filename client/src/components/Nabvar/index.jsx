import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BasketItemContext } from "../../context/BasketItemContext";

const Navbar = () => {
  const { basketItem } = useContext(BasketItemContext);
  return (
    <header className="bck">
      <div className="fix">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link className="tasdybtn" to={"/"}>
                Tasty
              </Link>
            </div>
            <div className="col-8">
              <ul>
                <li>
                  <Link className="home" to={"/Home"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="home" to={"/addItem"}>
                    Add
                  </Link>
                </li>
                <li>Menu</li>
                <li>Specialties</li>
                <li>Blog</li>
                <li>About</li>
                <li>
                  <Link to="/wishlist">
                  Whislit
                  </Link>
                </li>
                <li>
                  <Link to="/basket">
                    Basket <span>{basketItem.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <div className="text-center">
          <h1>Tasty Delicious Food</h1>
          <a>Book a table</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
