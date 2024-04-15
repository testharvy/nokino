import {getAllActors} from "@/actions/getAllActors";
import {Metadata} from "next";
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