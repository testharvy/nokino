import {Actor} from "@/app/actors/types";

export async function getActor(id:string):Promise<Actor>{
    return fetch(`http://localhost:3001/actors/${id}`).then(res=>res.json())
}