import Link from "next/link";
import {Col, Row, Space} from "antd";

import {Film} from "@/app/films/types";
import {getActor} from "@/actions/getActor";
import {getActorFilms} from "@/actions/getActorFilms";
import {getAllActors} from "@/actions/getAllActors";
import MyImg from "@/components/MyImg/MyImg";


type Props = {
    params: {
        id: string;
    };
};

export default async function Page({params:{id}}: Props ) {
    const actor = await getActor(id)
    const films = await getActorFilms(id)

    return (
        <Row>
            <Col span={10}>
                <MyImg text={actor.name}/>
            </Col>
            <Col span={12} offset={1}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <h2>{actor.name}</h2>
                    <h3>Список фильмов:</h3>
                    {films.map((item:Film)=>(<div key={item.id}>
                            <Link href={`/films/${item.id}`}>{item.title}</Link>
                        </div>
                    ))}
                </Space>
            </Col>
        </Row>
    )
}

export async function generateStaticParams() {
    const actors = await getAllActors()

    return actors.map((actor) => ({
        id: actor.id,
    }))
}

export async function generateMetadata({params:{id}}: Props) {
    const actor = await getActor(id)
    return {
        title: `NoKino ${actor.name}`,
    }
}