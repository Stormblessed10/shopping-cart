import { useEffect } from "react";
import { useGames } from "../context/GamesContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart() {
    const { cart, setIsCartOpen, setCart } = useGames();

    useEffect(() => {
        document.body.classList.add("hide-scroll");

        return function() {
            document.body.classList.remove("hide-scroll");
        }
    }, [])

    return <>
        <div onClick={() => setIsCartOpen(false)} className={styles.overlay}></div>
        <div className={styles.cart}>
            <header>
                <h2>{cart.length} Games</h2>
                <button onClick={() => setCart([])}>Clear</button>
            </header>

            {cart.map(game => <CartItem key={game.id} game={game}/>)}

            <footer>Total: $ {Math.round(cart.reduce((acc, cur) => acc + cur.price, 0))}</footer>
        </div>
    </>
}