import Link from "next/link";
import {Film} from "@/app/films/types";
import {getFilm} from "@/actions/getFilm";
import {getFilmActors} from "@/actions/getFilmActors";
import {getAllFilms} from "@/actions/getAllFilms";
import {getFranchiseFilms} from "@/actions/getFranchiseFilms";
import ActorsList from "@/components/ActorsList/ActorsList";
import {Col, Row, Space} from "antd";
import MyImg from "@/components/MyImg/MyImg";

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

    return (
        <Row>
            <Col span={10} offset={1}>
                <MyImg text={film.title}/>
            </Col>
            <Col span={12} offset={1}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h2>{film.title} ({film.year})</h2>

                    <h3>Актеры</h3>
                    <ActorsList actors={actors}></ActorsList>
                    <br/>
                    {franchiseFilms &&
                        <>
                            <h3>Другие фильмы серии:</h3>
                            {franchiseFilms.map((item:Film)=>(<div key={item.id}>
                                <Link href={`/films/${item.id}`}>{item.title}</Link>
                            </div>))
                            }
                        </>
                    }
                </Space>
            </Col>
        </Row>
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
