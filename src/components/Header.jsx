import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    
    return <header className={styles.header}>
        <Link className={styles.logo} to="">Shadowed Sanctum</Link>
        <div className={styles.search}>
            <input type="text" placeholder="Search..."/>
            <button><img src="/icons/search.svg" alt="search" /></button>
        </div>
        <button className={styles.cart}><img src="/icons/cart.svg" alt="cart" /><span></span></button>
    </header>
}