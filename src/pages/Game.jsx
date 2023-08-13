import styles from "./Game.module.css";
import Carousel from "../components/Carousel";
import AddToCart from "../components/AddToCart";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import GameDetails from "../components/GameDetails";

export default function Game() {
    const { game, screenshots } = useLoaderData();
    const { state } = useLocation();

    if (game === null) return <PageNotFound/>;

    const price = +game.rating ? Math.round(game.rating) * 5 - 0.01 : 4.99;
    const backgroundImage = {
        id: "background",
        image: game.background_image,
    }


    return <section key={game.id} className={styles.game}>
        <header className={styles.wrapper}>
            <Link to={state?.previousPath || "/"} className={styles.back}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"></path>
                </svg>
            </Link>
            <h1>{game.name}</h1>
        </header>
        <div className={styles.wrapper}>
            <div className={styles["details-wrapper"]}>
               <AddToCart style={{ fontSize: "2.5rem", paddingLeft: "3rem" }} game={{...game, img: game.background_image, price}} />
                <GameDetails game={game} styles={styles} price={price}/>
            </div>
            <Carousel images={[backgroundImage, ...screenshots.results]}></Carousel>
        </div> 
       
        <div className={styles.descr}>
            <h2>About</h2>
            <p>{game.description_raw}</p>
        </div>
    </section>
}

const URL = "https://api.rawg.io/api/games";
const KEY = import.meta.env.VITE_KEY;

export async function loader({ params }) {
    try {
        const res = await Promise.allSettled([fetch(`${URL}/${params.id}?key=${KEY}`), fetch(`${URL}/${params.id}/screenshots?key=${KEY}`)]);
        const data1 = await res[0].value.json();
        const data2 = await res[1].value.json();
        
        if (!data1.name) throw new Error();

        return {game: data1, screenshots: data2};
    } catch {
        return {game: null, screenshots: null};
    }
}