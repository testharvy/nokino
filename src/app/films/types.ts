import {Actor} from "@/app/actors/types";

export interface Film {
    id: string
    title: string
    year: number
    franchise: string|null
}

export interface FilmActor {
    id: string
    filmId: string
    actorId: string
    actor: Actor[]
}