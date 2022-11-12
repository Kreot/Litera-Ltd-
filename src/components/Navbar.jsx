import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
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
      </div>
    </>
  );
};

export default Navbar;
