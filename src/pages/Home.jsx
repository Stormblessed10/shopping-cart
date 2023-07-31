import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return <div className={styles.home}>
        <div className={styles.info}>
            <div>
                <h1>Game Store</h1>
                <p>Application imitating a game store made with React, Redux and React Router with use of  Rawg API</p>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/Stormblessed10/shopping-cart">GitHub</a>
                <a href="https://rawg.io/">RAWG API</a>
            </div>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li><h2>Quick Navigation</h2></li>
                <li><Link to="shop">All time top</Link></li>
                <li><Link to="shop">PC</Link></li>
                <li><Link to="shop">RPG</Link></li>
            </ul>
        </nav>
    </div>
}