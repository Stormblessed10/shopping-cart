import GameListItem from "./GameListItem";
import styles from "./GameList.module.css";

export default function GameList({ games }) {

    return <ul className={styles.list}>
        {games.results.map(game => <GameListItem key={game.id} game={game}/>)}
    </ul>
}