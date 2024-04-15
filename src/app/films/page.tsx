import Link from "next/link";
import {Film} from "@/app/films/types";
import {getAllFilms} from "@/actions/getAllFilms";
import {Metadata} from "next";
import { Col, Row } from 'antd';
import FilmCard from "@/components/FilmCard/FilmCard";


export default async function FilmsList() {
    const films = await getAllFilms()
    return <>
        <Row gutter={[24, 16]}>
            {films.map((film:Film)=>(<Col span={8} key={film.id}>
                    <Link href={`/films/${film.id}`}>
                        <FilmCard id={film.id} title={film.title} year={film.year} franchise={film.franchise}/>
                    </Link>
                </Col>
            ))}
        </Row>
    </>

}

export const metadata: Metadata = {
    title: 'NoKino список фильмов',
}