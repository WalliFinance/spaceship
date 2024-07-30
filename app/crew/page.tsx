'use client'
import { useState } from 'react'
import styles from './styles/crew.module.scss'
import enginner from '@/public/assets/crew/image-anousheh-ansari.png'
import specialist from '@/public/assets/crew/image-mark-shuttleworth.png'
import commander from '@/public/assets/crew/image-douglas-hurley.png'
import pilot from '@/public/assets/crew/image-victor-glover.png'
import CrewMember from '../components/Crew/CrewMember'

export default function Crew(){
    const [currentCrew,setCurrentCrew] = useState(0)
    const crew = [
    <CrewMember description='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.' image={pilot.src} name='Victor Glover' work='Pilot' width={600} height={700} key={null}/>,
    <CrewMember description=' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.' image={commander.src} name='Douglas Hurley' work='Commander' key={null} width={500} height={700}/>,
    <CrewMember description='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.' image={specialist.src} name='Mark Shuttleworth' work='Mission Specialist' key={null} width={500} height={700}/>,
    <CrewMember description='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.' image={enginner.src} name='Anousheh Ansari' work='Flight Engineer' key={null} width={600} height={700}/>
    ]
    return(
        <main className={styles.main}>
            <p>02 Meet your crew</p>
            <section className={styles.container}>
                {crew[currentCrew]}
                <article className={styles.list}>
                 
                        {currentCrew===0 && 
                        <ul>
                             <li className={styles.active} onClick={()=>setCurrentCrew(0)}></li>
                             <li onClick={()=>setCurrentCrew(1)}></li>
                             <li onClick={()=>setCurrentCrew(2)}></li>
                             <li onClick={()=>setCurrentCrew(3)}></li>
                        </ul>
                        }

                        {currentCrew===1 && 
                        <ul>
                             <li onClick={()=>setCurrentCrew(0)}></li>
                             <li className={styles.active} onClick={()=>setCurrentCrew(1)}></li>
                             <li onClick={()=>setCurrentCrew(2)}></li>
                             <li onClick={()=>setCurrentCrew(3)}></li>
                        </ul>
                        }

                        {currentCrew===2 && 
                        <ul>
                             <li onClick={()=>setCurrentCrew(0)}></li>
                             <li onClick={()=>setCurrentCrew(1)}></li>
                             <li className={styles.active}  onClick={()=>setCurrentCrew(2)}></li>
                             <li onClick={()=>setCurrentCrew(3)}></li>
                        </ul>
                        }

                        {currentCrew===3 && 
                        <ul>
                             <li onClick={()=>setCurrentCrew(0)}></li>
                             <li onClick={()=>setCurrentCrew(1)}></li>
                             <li onClick={()=>setCurrentCrew(2)}></li>
                             <li className={styles.active} onClick={()=>setCurrentCrew(3)}></li>
                        </ul>
                        }
                           
                </article>
            </section>
        </main>
    )
}