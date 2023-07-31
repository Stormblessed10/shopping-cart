import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return <div className={styles.home}>
        <div className={styles.info}>
            <div>
                <h1>Game Store</h1>
                <p>Application imitating a game store made with React and React Router with use of Rawg API</p>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/Stormblessed10/shopping-cart"><img src="/icons/github.svg" alt="star"/> GitHub</a>
                <a href="https://rawg.io/">RAWG API</a>
            </div>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li><h2>Quick Navigation</h2></li>
                <li><Link to="shop"><img src="/icons/star.svg" alt="star"/> Last 30 days</Link></li>
                <li><Link to="shop"><img src="/icons/top.svg" alt="star"/> All time top</Link></li>
                <li><Link to="shop"><img src="/icons/playstation.svg" alt="star"/> PlayStation</Link></li>
                <li><Link to="shop"><img src="/icons/rpg.svg" alt="star"/> RPG</Link></li>
            </ul>
        </nav>
    </div>
}