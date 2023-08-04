import Header from "../components/Header";
import styles from "./AppLayout.module.css";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner.jsx"; 

export default function AppLayout() {
    const { state } = useNavigation();

    console.log(state);

    return <>
        <Header></Header>
        <main className={styles.main}>
            {state !== "loading" ? <Outlet/> : <Spinner/>} 
        </main>
    </>
}