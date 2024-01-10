import React from "react";
import style from "./Nav.module.css";
import { IoMenu, IoSearch } from "react-icons/io5";
const Nav = ({ setCity, getData }) => {
  const handleKeyPress = () => {
    getData();
    setCity = "";
  };
  return (
    <>
      <nav>
        <div className={style.menu}>
          <IoMenu />
        </div>
        <div className={style.searchBar}>
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            name="search"
            placeholder="Search here..."
          />
        </div>
        <div onClick={handleKeyPress} className={style.search}>
          <IoSearch />
        </div>
      </nav>
    </>
  );
};

export default Nav;
