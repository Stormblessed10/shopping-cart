import Aside from "../components/Aside";
import Content from "../components/Content";

export default function Shop() {

    return <>
        <Aside/>
        <Content/>
    </>
}

const URL = "https://api.rawg.io/api/games";
const KEY = import.meta.env.VITE_KEY;

export async function loader({ params }) {
    const {id, category} = params;
    const query = `${URL}?key=${KEY}&${id ? category + "=" + id : ""}&page_size=21`;
    const res = await fetch(query);
    const data = await res.json();
    return data;
}