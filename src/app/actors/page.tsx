
import Link from "next/link";
import {Actor} from "@/app/actors/types";
import {getAllActors} from "@/app/actions/getAllActors";

export default async function Actors() {
    const actors = await getAllActors()

    return (
        <>
            <h2>Список:</h2>
            {actors.map((item:Actor)=>(<div key={item.id}>
                    <Link href={`/actors/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </>
    )
}