import { useLoaderData } from "react-router-dom";
import Aside from "../components/Aside";
import Content from "../components/Content";
import PageNotFound from "./PageNotFound";


export default function Shop() {
    const games = useLoaderData();

    if (games === null) return <PageNotFound/>

    return <>
        <Aside/>
        <Content games={games}/>
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