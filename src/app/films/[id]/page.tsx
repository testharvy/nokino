import Link from "next/link";
import {Col, Row, Space, Typography, Tag, Rate} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import {Film} from "@/app/films/types";
import {getFilm} from "@/actions/getFilm";
import {getFilmActors} from "@/actions/getFilmActors";
import {getAllFilms} from "@/actions/getAllFilms";
import {getFranchiseFilms} from "@/actions/getFranchiseFilms";
import ActorsList from "@/components/ActorsList/ActorsList";
import MyImg from "@/components/MyImg/MyImg";
import LoremIpsumText from "@/app/utils/LoremIpsumText";
import FilmCard from "@/components/FilmCard/FilmCard";


type Props = {
    params: {
        id: string;
    };
};

export default async function FilmPage ({params:{id}}: Props ) {
    const film = await getFilm(id)
    const actors = await getFilmActors(id)
    let franchiseFilms;
    if(film?.franchise){
        franchiseFilms = await getFranchiseFilms(film.franchise, id)
    }

    // @ts-ignore
    const description = LoremIpsumText(id)


    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row>
                <Col span={10}>
                    <MyImg text={film.title}/>
                </Col>
                <Col span={12} offset={1}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Title level={2}>{film.title} </Title>
                        <Rate allowHalf  disabled defaultValue={film.rate} />
                        <Title level={4}>Год: {film.year}</Title>
                        <Title level={4}>Жанры: {film.tags.map((tag)=><Tag key={tag}>{tag}</Tag>)  }</Title>
                        <Title level={4}>Актерский состав:</Title>
                        <ActorsList actors={actors}></ActorsList>
                    </Space>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Typography>
                        <Title level={4}>Описание:</Title>
                        <Paragraph>{description}</Paragraph>
                    </Typography>
                </Col>

            </Row>
            {franchiseFilms &&
                <Row>
                    <Col span={24} >
                        <Title level={4}>Другие фильмы серии:</Title>
                        <Row gutter={[24, 16]}>
                            {franchiseFilms.map((film:Film)=>(<Col span={6} key={film.id}>
                                    <Link href={`/films/${film.id}`}>
                                        <FilmCard title={film.title} year={film.year} rate={film.rate}/>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            }
            </Space>
        </>
    );
}

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.map((film) => ({
        id: film.id,
    }))
}

export async function generateMetadata({params:{id}}: Props) {
    const film = await getFilm(id)
    return {
        title: `NoKino ${film.title}`,
    }
}
