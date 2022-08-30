import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./GamePage.module.scss";

import menuImgFirst from "../../assets/gamesImage/game-card1.png";
import menuImgSecond from "../../assets/gamesImage/game-card2.png";
import menuImgThree from "../../assets/gamesImage/game-card3.png";
import menuImgFour from "../../assets/gamesImage/game-card4.png";
import menuImgFive from "../../assets/gamesImage/game-card5.png";
import menuImgSix from "../../assets/gamesImage/game-card6.png";

import { getGameById } from "../../redux/game/gameThunks";

function GamePage() {
  const dispatch = useDispatch();
  const params = useParams();
  const { game } = useSelector((state) => state.gameReducer);

  useEffect(() => {
    if (!params) return;
    dispatch(getGameById(params.id));
  }, [params, dispatch]);

  return (
    <section className={styles.gameSection}>
      <div className={styles.bgImageWrapper}>
        <img className="img-fluid" src={game.BgImgUrl} alt="" />
        <span className={styles.gameName}>{game.name}</span>
      </div>

      <ul className={styles.gameMenuList}>
        <li className={styles.gameMenuListItem}>
          <a href="#">
            <img className="img-fluid" src={menuImgFirst} alt="" />
          </a>
        </li>
        <li className={styles.gameMenuListItem}>
          <a href="#">
            <img className="img-fluid" src={menuImgSecond} alt="" />
          </a>
        </li>
        <li className={styles.gameMenuListItem}>
          <a href="#">
            <img className="img-fluid" src={menuImgThree} alt="" />
          </a>
        </li>
        <li className={styles.gameMenuListItem}>
          <a href="#">
            <img className="img-fluid" src={menuImgFour} alt="" />
          </a>
        </li>

        <li className={styles.gameMenuListItem}>
          <a href="#">
            <img className="img-fluid" src={menuImgFive} alt="" />
          </a>
        </li>

        <li className={styles.gameMenuListItem}>
          <a href="#">
            <img className="img-fluid" src={menuImgSix} alt="" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default GamePage;
