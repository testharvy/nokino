import {Film} from "@/app/films/types";
import Link from "next/link";
import {getActor} from "@/app/actions/getActor";
import {getActorFilms} from "@/app/actions/getActorFilms";
import {getAllFilms} from "@/app/actions/getAllFilms";
import {getAllActors} from "@/app/actions/getAllActors";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({params:{id}}: Props ) {
    const actor = await getActor(id)
    const films = await getActorFilms(id)

    return <div>
        <h2>{actor.name}</h2>
        <br/>
        <div>Список фильмов:</div>
        {films.map((item:Film)=>(<div key={item.id}>
                <Link href={`/films/${item.id}`}>{item.title}</Link>
            </div>
        ))}
    </div>
}

export async function generateStaticParams() {
    const actors = await getAllActors()

    return actors.map((actor) => ({
        id: actor.id,
    }))
}