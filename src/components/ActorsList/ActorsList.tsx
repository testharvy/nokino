"use client"

import Link from "next/link";
import {Actor} from "@/app/actors/types";
import {List} from "antd";
import Item from "antd/es/list/Item";

type Props = {
    actors:Actor[]
}

export default function ActorsList ({actors}:Props){
    return (
        <List
            dataSource={actors}
            renderItem={(actor) => (
                <Item><Link href={`/actors/${actor.id}`}>
                    <img style={{width:'30px',  height: '30px', border: '1px solid black', borderRadius: '50%', verticalAlign:'middle', marginRight: '10px'}} alt="foto" src="/person.png" />
                    <span style={{ verticalAlign:'middle'}}>{actor.name}</span>
                </Link></Item>
            )}
        />
    );
}