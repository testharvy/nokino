import {ActorFilm} from "@/app/actors/types";
import {Film} from "@/app/films/types";

export async function getActorFilms(id:string):Promise<Film[]>{
    return fetch(`http://localhost:3001/relations?actorId=${id}&_embed=film`)
        .then(res=>{
            return res.json();
        }).then(res=>{
            return res.map((item:ActorFilm)=>(item.film));
        })
}