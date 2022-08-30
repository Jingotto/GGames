import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LINKS } from "../../Router";
import { getGamesWithQueryThunk } from "../../redux/games/gamesOperation";
import styles from "./SearchResultPage.module.scss";

function SearchResultPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { gamesWithQuery } = useSelector((state) => state.gamesReducer);

  const articles = gamesWithQuery.map((game) => game.articles);

  useEffect(() => {
    dispatch(getGamesWithQueryThunk(state.searchQuery));
  }, [state.searchQuery]);

  return (
    <div>
      {!gamesWithQuery.length ? (
        <div className={styles.resultEmptyMessage}>Совпадений не найдено</div>
      ) : (
        <div>
          <h2>Игры:</h2>
          <ul className={styles.gamesList}>
            {gamesWithQuery.map((game) => (
              <li className={styles.gamesListItem} key={game.id}>
                <Link
                  className={styles.gamesListItemLink}
                  to={LINKS.GAME_PAGE(game.id)}
                >
                  {game.name}
                </Link>
              </li>
            ))}
          </ul>

          <h3>Статьи:</h3>
          <ul>
            {articles.map((article) =>
              article.map((art) => (
                <ul className={styles.gamesList}>
                  <li className={styles.gamesListItem} key={art.id}>
                    <Link
                      className={styles.gamesListItemLink}
                      to={LINKS.GAME_PAGE(art.id)}
                    >
                      {art.articleHeader}
                    </Link>
                  </li>
                </ul>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchResultPage;

{
  /* */
}

{
  /* <ul className={styles.gamesList}>
{gamesWithQuery.map((game) => (
  <li className={styles.gamesListItem} key={game.id}>
    <Link
      className={styles.gamesListItemLink}
      to={LINKS.GAME_PAGE(game.id)}
    >
      {game.name}
    </Link>
  </li>
))}
</ul>  */
}
