import { ActorsResponse } from "@/app/actors/types";

export function getAllActors():Promise<ActorsResponse> {
    return fetch("http://localhost:3001/actors").then(res=>res.json())
}