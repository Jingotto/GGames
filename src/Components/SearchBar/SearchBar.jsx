import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { LINKS } from "../../Router";

function SearchBar() {
  let navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };

  const handleClick = () => {
    routeChange();
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    routeChange();
  };

  const routeChange = () => {
    if (!searchQuery) return;
    const path = LINKS.SEARCH_RESULT(searchQuery);
    navigate(path, { state: { searchQuery } });
    setSearchQuery("");
  };

  return (
    <div className={styles.searcherContainer}>
      <div className={styles.searchWrapper}>
        <button
          onClick={handleClick}
          className={styles.searchButton}
          type="submit"
        >
          <SearchIcon />
        </button>

        <input
          name="searchQuery"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className={styles.searchText}
          type="text"
          placeholder="Найти..."
          value={searchQuery}
        />
      </div>
    </div>
  );
}

export default SearchBar;
