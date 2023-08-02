import { useGames } from "../context/GamesContext";
import styles from "./AddToCart.module.css";

export default function ToggleButton({ style, game }) {
    const { cart, setCart} = useGames()

    function isAdded(game) {
        return cart.find(({ id }) => id === game.id);
    }

    function handleAddToCart({name, img, price, id}) {
        setCart(cart => [...cart, {name, img, price, id}]);
    }

    function handleRemoveFromCart(game) {
        setCart(cart => cart.filter(({ id }) => id !== game.id));
    }

    if (isAdded(game)) {
    return <button style={style} onClick={() => handleRemoveFromCart(game)} className={styles.button}>- Remove from cart</button>;
}
    return <button style={style} onClick={() => handleAddToCart(game)} className={styles.button}>+ Add to cart</button>;
}