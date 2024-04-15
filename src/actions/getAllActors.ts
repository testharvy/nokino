import { ActorsResponse } from "@/app/actors/types";

export async function getAllActors():Promise<ActorsResponse> {
    return fetch("http://localhost:3001/actors").then(res=>res.json())
}