import styles from "./GameItem.module.css";
import {Link, useLocation} from "react-router-dom";

export default function GameItem({ game }) {
    const { pathname } = useLocation();
    const price = +game.rating ? Math.round(game.rating) * 5 - 0.01 : 4.99;

    return <li className={styles.game}>
        <Link to={`game/${game.id}`} state={{ previousPath: pathname }}>
            <img src={game["background_image"]} alt={game.slug} />
        </Link>
        <div className={styles.wrapper}>
            <div className={styles["wrapper-cart"]}>
                <button>Add to cart</button>
                <span>${price}</span>
            </div>
            <div>Icons</div>
            <Link to={`game/${game.id}`} state={{ previousPath: pathname }}>{game.name}</Link>
        </div>
    </li>
}