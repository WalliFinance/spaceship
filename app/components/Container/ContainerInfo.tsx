'use client'
import Image from "next/image"
import styles from './styles/container.module.scss'

interface ContainerProps{
src:string,
title:string,
text:string,
distance:string,
timeTravel:string
}


export default function ContainerInfo({src,title,text,distance,timeTravel}:ContainerProps){
    return(
        <section className={styles.main}>
            <article className={styles.container}>
                <div className={styles.firstSection}>
                    <Image
                    width={500}
                    height={500}
                    alt="Planet name"
                    src={src}
                    />
                </div>
                <div className={styles.secondSection}>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <div className={styles.separator}></div>
                    <div className={styles.distance}>
                       <div>
                        <span>Avg. distance</span>
                        <span>{distance}</span>
                       </div>
                       <div>
                        <span>Est. travel time</span>
                        <span>{timeTravel}</span>
                       </div>
                    </div>
                </div>
            </article>
        </section>
    )
}