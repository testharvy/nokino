import { Flex } from 'antd';
import ActiveLink from "@/components/ActiveLink/ActiveLink";

const LINKS = [
    {id: 1, href:"/", name:"Главная"},
    {id: 2, href:"/films", name:"Фильмы"},
    {id: 3, href:"/actors", name:"Актеры"},
]

export default function MyHeader (){
    return (
        <Flex gap="middle" justify="space-around" align="center">
            {LINKS.map((link) => <ActiveLink key={link.id} href={link.href} name={link.name}></ActiveLink>)}
        </Flex>
    );
}