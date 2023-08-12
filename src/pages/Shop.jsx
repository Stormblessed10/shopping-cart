import { useLoaderData } from "react-router-dom";
import Aside from "../components/Aside";
import Content from "../components/Content";
import PageNotFound from "./PageNotFound";
import styles from "./Shop.module.css";
import { useState } from "react";


export default function Shop() {
    const [isClosed, setIsClosed] = useState(false);
    const games = useLoaderData();

    if (games === null) return <PageNotFound/>

    return <>
        <div className={`${!isClosed ? styles.closed : styles.opened}`}></div>
        <Aside className={!isClosed ? styles.hidden : styles.visible}/>
        <Content games={games}/>
        <button onClick={() => setIsClosed(!isClosed)} className={`${styles.btn}`}>
            {isClosed ? <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg> :
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg>
            }
        </button>
    </>
}

function dateAgo(days) {
    return new Date(new Date().setDate(new Date().getDate() - days)).toISOString().split("T")[0];
}

const URL = "https://api.rawg.io/api/games";
const KEY = import.meta.env.VITE_KEY;

export async function loader({ params }) {
    const {id, category, page} = params;

    try {
        let query = "";
        const today = new Date().toISOString().split("T")[0];
    
        switch(category+"/"+id) {
            case "releases/last-30-days":
                query = `${URL}?key=${KEY}&dates=${dateAgo(30)},${today}&page_size=21&page=${page}`;
                break;
            case "releases/this-week":
                query = `${URL}?key=${KEY}&dates=${dateAgo(7)},${today}&page_size=21&page=${page}`;
                break;
            case "releases/next-week":
                query = `${URL}?key=${KEY}&dates=${today},${dateAgo(-7)}&page_size=21&page=${page}`;
                break;
            case "top/all-time-top":
                query = `${URL}?key=${KEY}&ordering=-metacritic&page_size=21&page=${page}`;
                break;
            case "top/best-of-the-year":
                query = `${URL}?key=${KEY}&ordering=-metacritic&dates=${dateAgo(365)},${dateAgo(0)}&page_size=21&page=${page}`;
        }
    
        if (["platforms", "genres"].includes(category)) {
            query = `${URL}?key=${KEY}&${category + "=" + id}&page_size=21&page=${page}`;
        }
    
        const res = await fetch(query);
        const data = await res.json();
        if (!data?.count) return null;
        return data;
    } catch {
        return null;
    }
}