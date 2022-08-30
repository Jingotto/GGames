import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { ReactComponent as SiteLogo } from "../../assets/icons/site_logo.svg";
import { LINKS } from "../../Router";

function Header() {
  const activeStyle = {
    textDecoration: "underline",
    color: "yellow",
  };

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <Link className={styles.siteLogo} to={LINKS.MAIN_PAGE}>
          <SiteLogo />
        </Link>

        <ul className={styles.navMenu}>
          <li className={styles.navMenuItem}>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className={styles.navMenuLink}
              to={LINKS.NEWS_PAGE}
            >
              Новости
            </NavLink>
          </li>

          <li className={styles.navMenuItem}>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className={styles.navMenuLink}
              to={LINKS.ALL_GAMES_PAGE}
            >
              Игры
            </NavLink>
          </li>

          <li className={styles.navMenuItem}>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className={styles.navMenuLink}
              to={LINKS.FORUM}
            >
              Форум
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.logInForm}>
        <a href="#">PROFILE</a>
      </div>

      <SearchBar />
    </header>
  );
}

export default Header;
