import Link from "next/link";
import React from "react";

export default function Header (){
    return (
        <header className={'header'}>
            <div className={'wrapper'}>
                <ul className={'header-menu'}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/films">Кино</Link>
                    </li>
                    <li>
                        <Link href="/actors">Актеры</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}