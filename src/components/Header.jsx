import { useGames } from "../context/GamesContext";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Search from "./Search";

export default function Header() {
    const { cart, setIsCartOpen, isCartOpen } =  useGames();

    return <>
    <header className={styles.header}>
        <Link className={styles.logo} to="">Shadowed Sanctum</Link>
        <Search/>
        <button onClick={() => setIsCartOpen(true)} className={styles.cart}><img src="/icons/cart.svg" alt="cart" />
            {cart[0] && <span></span>}
        </button>
    </header>
    {isCartOpen && <Cart/>}
    </>
}