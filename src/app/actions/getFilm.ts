import {Film} from "@/app/films/types";

export async function getFilm(id:string):Promise<Film>{
    return fetch(`http://localhost:3001/films/${id}`).then(res=>res.json())
}