import Link from "next/link";
import {getFilm} from "@/app/actions/getFilm";
import {getFilmActors} from "@/app/actions/getFilmActors";
import {getAllFilms} from "@/app/actions/getAllFilms";
import {getFranchiseFilms} from "@/app/actions/getFranchiseFilms";

type Props = {
    params: {
        id: string;
    };
};

export default async function Film ({params:{id}}: Props ) {
    const film = await getFilm(id)
    const actors = await getFilmActors(id)
    let franchiseFilms;
    if(film?.franchise){
        franchiseFilms = await getFranchiseFilms(film.franchise, id)
    }

    return (
        <>
            <h2>{film.title}</h2>
            <br/>
            <h3>Актеры</h3>
            {actors.map((item)=>(<div key={item.id}>
                    <Link href={`/actors/${item.id}`}>{item.name}</Link>
                </div>
            ))}
            <br/>
            {franchiseFilms &&
                <>
                    <h3>Другие фильмы серии:</h3>
                    {franchiseFilms.map((item:Film)=>(<div key={item.id}>
                        <Link href={`/films/${item.id}`}>{item.title}</Link>
                        </div>))
                    }
                </>
            }
        </>

    );
}

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.map((film) => ({
        id: film.id,
    }))
}