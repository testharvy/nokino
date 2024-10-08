import {Card, Rate} from 'antd';
import {FilmCardProps} from "@/app/films/types";

export default function FilmCard ({title, year, rate, img}:FilmCardProps){
    return (
        <Card
            hoverable
            title={title}
            cover={<img alt="example" src={img? img: '/placeholder.jpg'} />}
        >
            <Rate allowHalf  disabled defaultValue={rate} />
            <p>{year}</p>
        </Card>
    )
}
