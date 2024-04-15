import {Metadata} from "next";

import {getAllActors} from "@/actions/getAllActors";
import ActorsList from "@/components/ActorsList/ActorsList";

export default async function Actors() {
    const actors = await getAllActors();

    return (
        <>
            <ActorsList actors={actors}></ActorsList>
        </>
    )
}

export const metadata: Metadata = {
    title: 'NoKino список актеров',
}