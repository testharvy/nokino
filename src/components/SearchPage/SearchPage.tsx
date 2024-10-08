'use client';

import Link from "next/link";
import {Button, Checkbox, Col, Divider, Form, Radio, Row, Slider, Typography} from 'antd';
import {Film} from "@/app/films/types";
import FilmCard from "@/components/FilmCard/FilmCard";
import {useState} from "react";
import {formValues, initalFilters, options, years} from "@/components/SearchPage/options";
import {SearchOutlined} from "@ant-design/icons";
import {contains} from "@/utils/contains";
import Title from "antd/es/typography/Title";

type Props = {
    films: Film[],
};

export default function SearchPage({films}:Props) {
    const [sorting, setSorting] = useState('byYear')
    const [filters, setFilters] = useState(initalFilters)

    const sortedList = [...films].filter((film)=> {
        const containsGenres  = contains(film.tags, filters.genres)
        return (film.year>=filters.years[0]  &&  film.year<=filters.years[1] && containsGenres)
    })

    if(sorting=='byRating'){
        sortedList.sort((a,b) => {
            return  b.rate - a.rate});
    }
    if(sorting=='byYear'){
        sortedList.sort((a,b) => {
            return a.year - b.year});
    }

    const onChangeSorting = (event: any) =>{
        setSorting(event.target.value)
    }
    const onFinish = (values:formValues) => {
        setFilters(values)
    };


    return <>
        <Row>
            <Col span={4} offset={1}>
                <Typography>
                    <Title level={2}>Сортировка</Title>
                </Typography>
                <Radio.Group onChange={onChangeSorting} defaultValue="byRating">
                    <Radio.Button value="byRating">По рейтингу</Radio.Button>
                    <Radio.Button value="byYear">По годам</Radio.Button>
                </Radio.Group>
                <Divider/>
                <Typography>
                    <Title level={2}>Фильтры</Title>
                </Typography>
                <Form
                    initialValues={initalFilters}
                    onFinish={onFinish}
                    // onChange={onFinish}
                >
                    <Form.Item label="Жанры" name="genres">
                        <Checkbox.Group options={options}  />
                    </Form.Item>
                    <Form.Item label="Годы" name="years">
                        <Slider  min={years[0]} max={years[1]} range />
                    </Form.Item>
                    <Button  htmlType="submit" icon={<SearchOutlined />}>
                        Применить
                    </Button>
                </Form>
            </Col>
            <Col span={16} offset={1}>
                <Row gutter={[24, 16]}>
                    {sortedList.map((film:Film)=>(<Col span={8} key={film.id}>
                            <Link href={`/films/${film.id}`}>
                                <FilmCard title={film.title} year={film.year} rate={film.rate} img={film.img}/>
                            </Link>
                        </Col>
                    ))}

                    {sortedList.length==0 && <Typography>
                            <Title level={2}>Ничего не найдено</Title>
                        </Typography>
                    }
                </Row>
            </Col>
        </Row>
    </>
}
