import Image from "next/image";

interface CrewProps{
 work:string,
 name: string,
 description:string,
 image:string
}

export default function Crew({description,work,image,name}:CrewProps){
    return(
        <section>
            <div>
                <h2>{work}</h2>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div>
                <Image
                width={600}
                height={600}
                alt="Crew member"
                src={image}
                />
            </div>
        </section>
    )
}