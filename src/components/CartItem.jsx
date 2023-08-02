import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import AddToCart from "./AddToCart";

export default function CartItem({ game }) {

    return <div className={styles["cart-item"]}>
        <Link to={"/game/" + game.id}>
            <img src={game.img} alt={game.name}/>
            <div>
                <p>{game.name}</p>
                <p className={styles.price}>${game.price}</p>
            </div>
        </Link>
        <AddToCart game={game} style={{ fontSize: "1.6rem" }}/>
    </div>
}