import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGamesThunk } from "../../redux/games/gamesOperation";
import { LINKS } from "../../Router";
import styles from "./AllGamesPage.module.scss";

let isLoading = false;

function AllGamesPage() {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.gamesReducer);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getAllGamesThunk());
      isLoading = true;
    }

    return;
  }, [dispatch, games]);

  return (
    <div className={styles.container}>
      <ul className={styles.gamesList}>
        {games.map((game) => (
          <li key={game.id} className={styles.gameListItem}>
            <Link className={styles.navMenuLink} to={LINKS.GAME_PAGE(game.id)}>
              <img className="img-fluid" src={game.gameIcon} alt="" />

              <p className={styles.gameName}>{game.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllGamesPage;
