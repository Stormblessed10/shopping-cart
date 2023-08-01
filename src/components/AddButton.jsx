import { useState } from "react";
import { useGames } from "../context/GamesContext";
import styles from "./AddButton.module.css";

export default function AddButton({ fz, game, price }) {
    const [added, setAdded] = useState(false);
    const { setCart } =  useGames();
    
    function handleAddToCart() {
        setCart(cart => [...cart, {name: game.name, img: game.background_image, price, id: game.id}]);
        setAdded(true);
    }

    function handleRemoveFromCart() {
        setCart(cart => cart.filter(({ id }) => id !== game.id));
        setAdded(false);
    }

    if (added) return <button style={{fontSize: fz}} onClick={handleRemoveFromCart} className={styles.button}>-Remove from cart</button>;

    return <button style={{fontSize: fz}} onClick={handleAddToCart} className={styles.button}>+Add to cart</button>;

}