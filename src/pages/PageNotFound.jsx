import styles from "./PageNotFound.module.css";

export default function PageNotFound() {

    return <div className={styles.page}>
        <h1>404</h1>
        <p>Whoops!</p>
        <p>We couldn&apos;t find that page.</p>
    </div>
}