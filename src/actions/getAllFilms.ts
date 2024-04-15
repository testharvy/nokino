import {Film} from "@/app/films/types";

export async function getAllFilms():Promise<Film[]> {
    // const sleep = await new Promise(resolve => setTimeout(resolve, 1000))
    return fetch("http://localhost:3001/films").then(res=>res.json())
}