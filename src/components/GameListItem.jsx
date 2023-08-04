import styles from "./GameListItem.module.css";
import AddToCart from './AddToCart';
import {Link, useLocation} from "react-router-dom";
import PlatformsIcons from "./PlatformsIcons";

export default function GameListItem({ game }) {
    const { pathname } = useLocation();
    const price = +game.rating ? Math.round(game.rating) * 5 - 0.01 : 4.99;

    return <li className={styles["game-item"]}>
        <Link to={`game/${game.id}`} state={{ previousPath: pathname }}>
            <img src={game["background_image"]} alt={game.slug} />
        </Link>
        <div className={styles.wrapper}>
            <div className={styles["wrapper-cart"]}>
                <AddToCart game={{...game, price, img: game.background_image}} style={{fontSize: "1.6rem"}}/>
                <span>${price}</span>
            </div>
            <PlatformsIcons game={game}/>
            <Link to={`game/${game.id}`} state={{ previousPath: pathname }}>{game.name}</Link>
        </div>
    </li>
}