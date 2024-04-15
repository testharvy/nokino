"use client"

import Link from 'next/link'
import React from 'react'
import {usePathname} from "next/navigation";
import {Button} from "antd";

type Props = {
    href: string,
    name: string
};

export default function ActiveLink ({href, name}:Props){
    const pathname = usePathname();
    const isActiveLink = pathname==href;

    return (
        <Link href={href}>
            <Button type={isActiveLink ? "primary": "default"}>
                {name}
            </Button>
        </Link>
    )
}