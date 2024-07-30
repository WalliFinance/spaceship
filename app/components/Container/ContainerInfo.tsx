'use client'

import Image from "next/image"

interface ContainerProps{
src:string,
title:string,
text:string,
distance:string,
timeTravel:string
}


export default function ContainerInfo({src,title,text,distance,timeTravel}:ContainerProps){
    return(
        <section>
            <article>
                <div>
                    <Image
                    width={600}
                    height={600}
                    alt="Planet name"
                    src={src}
                    />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <div></div>
                    <div>
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