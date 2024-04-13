import {Film} from "@/app/films/types";

export interface Actor {
    id: string
    name: string
}

export type ActorsResponse = Actor[]

export interface ActorFilm {
    id: string
    filmId: string
    actorId: string
    film: Film[]
}