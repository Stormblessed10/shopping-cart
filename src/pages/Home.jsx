import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return <div className={styles.home}>
        <div className={styles.info}>
            <div className={`${styles.wrap}`}>
                <h1>Welcome to Shadowed Sanctum</h1>
                <p>This application is designed to emulate a game store where you can browse and explore a vast collection of games. You can't purchase games from this platform. <br/>
               </p>
            </div>
            <div className={`${styles.wrap}`}>
                <p>App is built using React and React Router, and integrated the Rawg API to ensure that you have access to the latest and greatest games.</p>
                <div className={styles.links}>
                    <a href="https://github.com/Stormblessed10/shopping-cart"><img src="/icons/github.svg" alt="star"/> GitHub</a>
                    <a href="https://rawg.io/">RAWG API</a>
                </div>
            </div>
        </div>
        <nav className={`${styles.nav} ${styles.wrap}`}>
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