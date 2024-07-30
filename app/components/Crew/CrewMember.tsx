import Image from "next/image";
import styles from './styles/crew.module.scss'

interface CrewProps{
 work:string,
 name: string,
 description:string,
 image:string,
 width:number,
 height:number
}

export default function CrewMember({description,work,image,name,width,height}:CrewProps){
    return(
        <section className={styles.container}>
            <div className={styles.infos}>
                <h2>{work}</h2>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className={styles.image}>
                <Image
                width={width}
                height={height}
                alt="Crew member"
                src={image}
                />
            </div>
        </section>
    )
}