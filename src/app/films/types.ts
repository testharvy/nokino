import {Actor} from "@/app/actors/types";

export interface Film {
    id: string
    title: string
    year: number
    franchise: string|null,
    tags: string[],
    rate: number
}

export type FilmCardProps = Omit<Film, "id" | "franchise" | "tags" >;

export interface FilmActor {
    id: string
    filmId: string
    actorId: string
    actor: Actor[]
}