import Link from "next/link";
import {Film} from "@/app/films/types";
import {getAllFilms} from "@/app/actions/getAllFilms";


export default async function FilmsList() {
    const films = await getAllFilms()

    return <div>
        <h2>Список:</h2>
        {films.map((item:Film)=>(<div key={item.id}>
                <Link href={`/films/${item.id}`}>{item.title}</Link>
            </div>
        ))}
    </div>
}