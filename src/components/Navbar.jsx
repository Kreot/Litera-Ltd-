import React, { useState } from "react";
import "../styles/navbar.css";
import "../styles/adaptation/NavbarAdaption.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  let [burger, setBurger] = useState(false);
  console.log(burger);
  return (
    <>
      <div className="navbar">
        <img
          className="navbar__logo"
          src="http://www.litera-translation.com/images/-d12ce64d36a2e2c043d02f3308a6603bdb48b81e074d8b93aa-pimgpsh_fullsize_distr.png?crc=330878227"
          alt=""
          onClick={() => navigate("/")}
        />
        <div className="navbar__navigation">
          <ul className="navbar__links">
            <li
              onClick={() => navigate("/")}
              className="navbar__link"
              href="#about"
            >
              <a href="#about"> Кто мы?</a>
            </li>
            <li onClick={() => navigate("/")} className="navbar__link">
              <a href="#skils"> Чем мы занимаемся?</a>
            </li>
            <li onClick={() => navigate("/")} className="navbar__link">
              <a href="#answer"> Почему именно мы?</a>
            </li>
            <li
              onClick={() => navigate("/address")}
              className="navbar__link"
              href="#"
            >
              Адреса
            </li>
            <li
              onClick={() => navigate("/contacts")}
              className="navbar__link"
              href="#"
            >
              Контакты
            </li>
          </ul>
        </div>
        <div className="burger_menu_triger" onClick={() => setBurger(true)}>
          <MenuIcon />
        </div>
        {burger ? (
          <div className="burger_menu">
            <div className="burger_menu_logo">
              <div className="burger_menu_triger">
                <CloseIcon onClick={() => setBurger(false)} />
              </div>
              <img
                className="navbar__logo"
                src="http://www.litera-translation.com/images/-d12ce64d36a2e2c043d02f3308a6603bdb48b81e074d8b93aa-pimgpsh_fullsize_distr.png?crc=330878227"
                alt=""
                onClick={() => {
                  navigate("/");
                  setBurger(false);
                }}
              />
            </div>
            <ul className="sidebar__links">
              <li
                onClick={() => {
                  navigate("/");
                  setBurger(false);
                }}
                className="navbar__link"
                href="#about"
              >
                <a href="#about"> Кто мы?</a>
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  setBurger(false);
                }}
                className="navbar__link"
              >
                <a href="#skils"> Чем мы занимаемся?</a>
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  setBurger(false);
                }}
                className="navbar__link"
              >
                <a href="#answer"> Почему именно мы?</a>
              </li>
              <li
                onClick={() => {
                  navigate("/address");
                  setBurger(false);
                }}
                className="navbar__link"
                href="#"
              >
                Адреса
              </li>
              <li
                onClick={() => {
                  navigate("/contacts");
                  setBurger(false);
                }}
                className="navbar__link"
                href="#"
              >
                Контакты
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navbar;
