import {Film} from "@/app/films/types";

export function getAllFilms():Promise<Film[]> {
    return fetch("http://localhost:3001/films").then(res=>res.json())
}