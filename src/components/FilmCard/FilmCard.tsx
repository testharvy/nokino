import { Card } from 'antd';
import {Film} from "@/app/films/types";

export default function FilmCard ({title, year}:Film){
    return (
        <Card
            hoverable
            title={title}
            cover={<img alt="example" src="/placeholder.jpg" />}
        >
            <p>{year}</p>
        </Card>
    )
}
