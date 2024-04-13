import {FilmActor} from "@/app/films/types";
import {Actor} from "@/app/actors/types";

export async function getFilmActors(id:string):Promise<Actor[]>{
    return fetch(`http://localhost:3001/relations?filmId=${id}&_embed=actor`)
        .then(res=>{
            return res.json();
        }).then(res=>{
            return res.map((item:FilmActor)=>(item.actor));
        })
}