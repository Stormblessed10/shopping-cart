import styles from "./Game.module.css";
import Carousel from "../components/Carousel";
import Cart from "../components/Cart";
import AddButton from "../components/AddButton";
import { Link, useLoaderData, useLocation } from "react-router-dom";

export default function Game() {
    const { game, screenshots } = useLoaderData();
    const { state } = useLocation();

    const price = +game.rating ? Math.round(game.rating) * 5 - 0.01 : 4.99;
    const backgroundImage = {
        id: "background",
        image: game.background_image,
    }

    return <section className={styles.game}>
        <Cart></Cart>
        <header className={styles.wrapper}>
            <Link to={state?.previousPath || "/"} className={styles.back}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"></path>
                </svg>
            </Link>
            <h1>{game.name}</h1>
        </header>
        <div className={styles.wrapper}>
            <div>
               <AddButton game={game} fz={"2.5rem"} price={price}/>
                <ul className={styles.details}>
                    <li>
                        <h2>Price</h2>
                        <div>${price}</div>
                    </li>
                    <li>
                        <h2>Released</h2>
                        <div>{game.released.replaceAll("-", "/")}</div>
                    </li>
                    <li>
                        <h2>Genres</h2>
                        <div>{game.genres.map(({name}) => <span key={name}>{name}</span>)}</div>
                    </li>
                    <li>
                        <h2>Platforms</h2>
                        <div>{game.platforms.map(({platform}) => <span key={platform.name}>{platform.name}</span>)}</div>
                    </li>
                    <li>
                        <h2>Developers</h2>
                        <div>{game.developers.map(({name}) => <span key={name}>{name}</span>)}</div>
                    </li>
                    <li>
                        <h2>Publishers</h2>
                        <div>{game.publishers.map(({name}) => <span key={name}>{name}</span>)}</div>
                    </li>
                    <li>
                        <h2>Metascore</h2>
                        {!game.metacritic && "-"}
                        {game.metacritic && <div className={styles["metacritic-" + (game.metacritic >= 75 ? "green" : game.metacritic >= 50 ? "yellow" : "red")]}>{game.metacritic}</div>}
                    </li>
                </ul>
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
    const res = await Promise.allSettled([fetch(`${URL}/${params.id}?key=${KEY}`), fetch(`${URL}/${params.id}/screenshots?key=${KEY}`)]);
    // const heh = await fetch(`https://api.rawg.io/api/stores?key=${KEY}`);
    // const heehe = await heh.json();
    // console.log(heehe)
    const data1 = await res[0].value.json();
    const data2 = await res[1].value.json();
    return {game: data1, screenshots: data2};
}