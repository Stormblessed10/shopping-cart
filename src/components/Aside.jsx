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
    SvgPopular,
    SvgBest,
    SvgNextWeek,
    SvgThisWeek 
} from "./Svgs.jsx";

export default function Aside() {
    return <aside className={styles.aside}>
        <nav>
            <ul className={styles.list}>
                <li><h2>New Releases</h2></li>
                <li><NavLink to="/last-30-days"><span><SvgStar/></span>Last 30 days</NavLink></li>
                <li><NavLink to="/this-week"><span><SvgThisWeek/></span>This week</NavLink></li>
                <li><NavLink to="/next-week"><span><SvgNextWeek/></span>Next week</NavLink></li>
            </ul>
            <ul className={styles.list}>
                <li><h2>Top</h2></li>
                <li><NavLink to="/all-time-top"><span><SvgTop/></span>All time top</NavLink></li>
                <li><NavLink to="/all-time-top"><span><SvgBest/></span>Best of the year</NavLink></li>
                <li><NavLink to="/popular"><span><SvgPopular/></span>Popular in 2023</NavLink></li>
            </ul>
            <ul className={styles.list}>
                <li><h2>Platforms</h2></li>
                <li><NavLink to="/shop/parent_platforms/1"><span><SvgWindows/></span>PC</NavLink></li>
                <li><NavLink to="/shop/parent_platforms/2"><span><SvgPlaystation/></span>PlayStation</NavLink></li>
                <li><NavLink to="/shop/parent_platforms/3"><span><SvgXbox/></span>Xbox</NavLink></li>
                <li><NavLink to="/shop/parent_platforms/3"><span><SvgSwitch/></span>Nintendo</NavLink></li>
                <li><NavLink to="/shop/parent_platforms/3"><span><SvgIOS/></span>IOS</NavLink></li>
                <li><NavLink to="/shop/parent_platforms/3"><span><SvgAndroid/></span>Android</NavLink></li>
            </ul>
            <ul className={styles.list}>
                <li><h2>Genres</h2></li>
                <li><NavLink to="/shop/genres/action"><img src="/icons/action.png" alt="action" />Action</NavLink></li>
                <li><NavLink to="/shop/genres/role-playing-games-rpg"><img src="/icons/rpg.png" alt="rpg" />RPG</NavLink></li>
                <li><NavLink to="/shop/genres/strategy"><img src="/icons/strategy.png" alt="strategy" />Strategy</NavLink></li>
                <li><NavLink to="/shop/genres/shooter"><img src="/icons/shooter.png" alt="shooter" />Shooter</NavLink></li>
                <li><NavLink to="/shop/genres/adventure"><img src="/icons/adventure.png" alt="adventure" />Adventure</NavLink></li>
                <li><NavLink to="/shop/genres/puzzle"><img src="/icons/puzzle.png" alt="puzzle" />Puzzle</NavLink></li>
                <li><NavLink to="/shop/genres/indie"><img src="/icons/indie.ico" alt="indie" />Indie</NavLink></li>
                <li><NavLink to="/shop/genres/sports"><img src="/icons/sports.png" alt="sports" />Sports</NavLink></li>
            </ul>
        </nav>
    </aside>
}