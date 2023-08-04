import styles from "./Content.module.css";
import GameList from "./GameList";
import { NavLink, useLocation } from "react-router-dom";

export default function Content({ games }) {
    const { pathname } =  useLocation();
    const slicedUrl = pathname.split("/").slice(0, -1).join("/");
    const paginationItems = Array.from({length: Math.ceil(Math.min(games.count, 63) / 21)});

    return <section className={styles.content}>
        <h1>Games</h1>
        <GameList games={games}/>
        <footer>
            <ul className={styles.pages}>
                {paginationItems.map((_, i) => <li key={i}><NavLink className={({isActive}) => isActive ? styles.active : ""} to={slicedUrl + "/" + (i + 1)}>{i + 1}</NavLink></li>)}
            </ul>
        </footer>
    </section>
}