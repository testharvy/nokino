import Link from "next/link";
import { Col, Row } from 'antd';
import {Metadata} from "next";

import {Film} from "@/app/films/types";
import {getAllFilms} from "@/actions/getAllFilms";
import FilmCard from "@/components/FilmCard/FilmCard";


export default async function FilmsList() {
    const films = await getAllFilms()
    return <>
        <Row gutter={[24, 16]}>
            {films.map((film:Film)=>(<Col span={8} key={film.id}>
                    <Link href={`/films/${film.id}`}>
                        <FilmCard title={film.title} year={film.year} rate={film.rate}/>
                    </Link>
                </Col>
            ))}
        </Row>
    </>

}

export const metadata: Metadata = {
    title: 'NoKino список фильмов',
}