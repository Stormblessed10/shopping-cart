import Header from "../components/Header";
import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";

export default function AppLayout() {

    return <>
        <Header></Header>
        <main className={styles.main}>
            <Outlet/>
        </main>
    </>
}