import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { 
    SvgTop,
    SvgStar,
    SvgBest,
    SvgNextWeek,
    SvgThisWeek 
} from "../components/Svgs.jsx";

export default function Home() {
    return <section className={styles.home}>
        <div className={styles.info}>
            <div className={`${styles.wrap}`}>
                <h1>Welcome to Shadowed Sanctum</h1>
                <p>This application is designed to emulate a game store where you can browse and explore a vast collection of games. You can&apos;t purchase games from this platform. <br/>
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
                <li><Link to="/shop/top/all-time-top/1"><span><SvgTop/></span>All time top</Link></li>
                <li><Link to="/shop/top/best-of-the-year/1"><span><SvgBest/></span>Best of the year</Link></li>
                <li><Link to="/shop/releases/last-30-days/1"><span><SvgStar/></span>Last 30 days</Link></li>
                <li><Link to="/shop/releases/next-week/1"><span><SvgNextWeek/></span>Next week</Link></li>
                <li><Link to="/shop/releases/this-week/1"><span><SvgThisWeek/></span>This week</Link></li>
            </ul>
        </nav>
        <video className={styles.video} autoPlay muted loop src="/bg.mp4"></video>
    </section>
}
