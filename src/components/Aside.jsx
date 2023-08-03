import styles from "./Aside.module.css";
import { NavLink } from "react-router-dom";
import { 
    SvgTop,
    SvgStar,
    SvgAndroid,
    SvgIOS,
    SvgSwitch,
    SvgXbox,
    SvgPlaystation,
    SvgWindows,
    SvgBest,
    SvgNextWeek,
    SvgThisWeek 
} from "./Svgs.jsx";

export default function Aside() {
    return <aside className={styles.aside}>
        <nav>
            <ul className={styles.list}>
                <li><h2>Top</h2></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/top/all-time-top/1"><span><SvgTop/></span>All time top</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/top/best-of-the-year/1"><span><SvgBest/></span>Best of the year</NavLink></li>
            </ul>
            <ul className={styles.list}>
                <li><h2>New Releases</h2></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/releases/last-30-days/1"><span><SvgStar/></span>Last 30 days</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/releases/this-week/1"><span><SvgThisWeek/></span>This week</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/releases/next-week/1"><span><SvgNextWeek/></span>Next week</NavLink></li>
            </ul>
            <ul className={styles.list}>
                <li><h2>Platforms</h2></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/platforms/4/1"><span><SvgWindows/></span>PC</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/platforms/187/1"><span><SvgPlaystation/></span>PlayStation</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/platforms/1/1"><span><SvgXbox/></span>Xbox</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/platforms/7/1"><span><SvgSwitch/></span>Nintendo</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/platforms/3/1"><span><SvgIOS/></span>IOS</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/platforms/21/1"><span><SvgAndroid/></span>Android</NavLink></li>
            </ul>
            <ul className={styles.list}>
                <li><h2>Genres</h2></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/action/1"><img src="/icons/action.png" alt="action" />Action</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/role-playing-games-rpg/1"><img src="/icons/rpg.png" alt="rpg" />RPG</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/strategy/1"><img src="/icons/strategy.png" alt="strategy" />Strategy</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/shooter/1"><img src="/icons/shooter.png" alt="shooter" />Shooter</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/adventure/1"><img src="/icons/adventure.png" alt="adventure" />Adventure</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/puzzle/1"><img src="/icons/puzzle.png" alt="puzzle" />Puzzle</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/indie/1"><img src="/icons/indie.ico" alt="indie" />Indie</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : ""} to="/shop/genres/sports/1"><img src="/icons/sports.png" alt="sports" />Sports</NavLink></li>
            </ul>
        </nav>
    </aside>
}