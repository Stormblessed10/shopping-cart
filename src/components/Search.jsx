import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";

const URL = "https://api.rawg.io/api/games";
const KEY = import.meta.env.VITE_KEY;

export default function Search() {
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);
    const [games, setGames] = useState([]);
    const inputEl = useRef(null);

    function handleHide() {
        inputEl.current.blur();
    }

    useEffect(() => {
        const controller = new AbortController();
        async function getGames() {
            try {
                const res = await fetch(`${URL}?key=${KEY}&search=${input}&page_size=10`, {signal: controller.signal});
                const data = await res.json();
                setGames(data.results);
            } catch(err) {
                console.log(err)
            }
        }

        if (input.length >= 3) getGames();

        return function() {
            controller.abort();
            if (input.length) setGames([]);  
        }
    }, [input])

    return <div className={styles.search}>
        <div className={styles["search-bar"]}>
            <input ref={inputEl} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search..."/>
            <span><img src="/icons/search.svg" alt="search" /></span>
        </div>
        <ul onMouseDown={(e) => e.preventDefault()} className={`${styles.results} ${focus && games[0] && styles.visible}`}>
            {games.map(game => <li onClick={handleHide} key={game.id} className={styles["cart-item"]}>
            <Link to={"/game/" + game.id}>
                <img src={game.background_image} alt={game.name}/>
                <p>{game.name}</p>
            </Link>
            </li>)}
        </ul>
    </div>
}