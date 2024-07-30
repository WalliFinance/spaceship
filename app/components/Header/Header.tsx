'use client'

import Link from "next/link";
import styles from './styles/header.module.scss'
import Image from "next/image";
import companyLogo from '@/public/assets/shared/logo.svg'


export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                width={32}
                height={32}
                alt="Company logo"
                src={companyLogo}
                />
            </div>
            <nav>
                <div className={styles.bg}></div>
                <ul>
                        <Link href={'/'}>00 Home</Link>
                        <Link href={'/destination'}>01 Destination</Link>
                        <Link href={'/crew'}>02 Crew</Link>
                        <Link href={'/technology'}>03 Technology</Link>
                </ul>
            </nav>
        </header>
        </>
    )
}