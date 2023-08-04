import PlatformsIcons from "./PlatformsIcons";

export default function GameDetails({ game, price, styles }) {
    return <ul className={styles.details}>
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
        <h2>Developers</h2>
        <div>{game.developers.map(({name}) => <span key={name}>{name}</span>)}</div>
    </li>
    <li>
        <h2>Publishers</h2>
        <div>{game.publishers.map(({name}) => <span key={name}>{name}</span>)}</div>
    </li>
    <li>
        <h2>Platforms</h2>
        <PlatformsIcons game={game}/>
    </li>
    <li>
        <h2>Metascore</h2>
        {!game.metacritic && "-"}
        {game.metacritic && <div className={styles["metacritic-" + (game.metacritic >= 75 ? "green" : game.metacritic >= 50 ? "yellow" : "red")]}>{game.metacritic}</div>}
    </li>
</ul>
}