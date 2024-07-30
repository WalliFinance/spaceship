import Image from 'next/image'
import styles from './styles/technology.module.scss'

interface VehicleProps{
name: string,
description: string,
src: string
}


export default function TechnologyContainer({name,description,src}:VehicleProps){
    return(
        <section className={styles.main}>
          
            <article className={styles.infos}>
                <h2>The terminology</h2>
                <h1>{name}</h1>
                <p>{description}</p>
            </article>
            <article className={styles.image}>
                <Image
                width={500}
                height={400}
                alt='Vehicle image'
                src={src}
                objectFit='cover'
                />
            </article>
        </section>
    )
}