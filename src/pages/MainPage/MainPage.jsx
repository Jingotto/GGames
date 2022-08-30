import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGamesThunk } from "../../redux/games/gamesOperation";
import { LINKS } from "../../Router";
import styles from "./MainPage.module.scss";

let isLoading = false;

function MainPaigeComponent() {
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
    <div className={styles.mainWrapper}>
      <section className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>Lorem ipsum dolor sit amet.</h2>
        <p className={styles.aboutPara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          maiores nobis fugiat repellendus? Eligendi in quod, enim nemo amet
          voluptates facilis repellendus ipsum. Iusto consequuntur aspernatur
          nesciunt doloribus qui, voluptatum aliquam laboriosam esse earum
          optio? Accusantium, ratione. Labore deserunt omnis, earum hic dolor
          recusandae quam saepe voluptate mollitia porro laudantium eveniet
          suscipit tempora aspernatur assumenda fuga sed ea repellat accusamus?
          Animi laudantium perferendis error voluptatum accusamus obcaecati, ea
          tempora porro pariatur minus quis est tempore. Deleniti hic aliquam
          nobis vitae, sit perspiciatis sunt illo cum placeat dolore
          consequuntur omnis, voluptatum quisquam laboriosam iure voluptatibus
          inventore natus voluptates facere numquam asperiores. Ea deleniti,
          aperiam ullam a necessitatibus nobis? Aliquid, fugit nisi atque dolore
          doloremque accusantium libero inventore ratione vel! Sapiente nemo
          quasi quas ea expedita magni neque impedit, aperiam ipsum quia nam
          sit, nobis architecto odit harum vitae voluptatum doloremque ad? Qui
          tempora quibusdam vitae asperiores libero praesentium fugit,
          repellendus aut!
        </p>
      </section>

      <ul className={styles.favoriteGamesList}>
        {games.map((game) => (
          <li key={game.id} className={styles.favoriteGamesListItem}>
            <Link className={styles.gameImage} to={LINKS.GAME_PAGE(game.id)}>
              <div className={styles.gameImgWrapper}>
                <img className="img-fluid" src={game.gameIcon} alt="" />
              </div>
              <p className={styles.favoriteGamesName}>{game.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPaigeComponent;
