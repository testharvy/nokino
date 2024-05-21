import {Metadata} from "next";
import {getAllFilms} from "@/actions/getAllFilms";
import SearchPage from "@/components/SearchPage/SearchPage";


export default async function Search() {
    const films = await getAllFilms()
    return <>
        <SearchPage films={films}/>
    </>
}

export const metadata: Metadata = {
    title: 'NoKino поиск фильмов',
}