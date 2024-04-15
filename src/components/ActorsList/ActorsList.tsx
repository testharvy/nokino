"use client"

import {List} from "antd";
import React from "react";
import Link from "next/link";
import {Actor} from "@/app/actors/types";
import Item from "antd/es/list/Item";

type Props = {
    actors:Actor[]
}

export default function ActorsList ({actors}:Props){
    return (
        <List
            dataSource={actors}
            renderItem={(actor) => (
                <Item><Link href={`/actors/${actor.id}`}>{actor.name}</Link></Item>
            )}
        />
    );
}