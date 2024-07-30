'use client'
import { useState } from 'react'
import styles from './styles/technology.module.scss'
import TechnologyContainer from '../components/Technology/page'
import firstVehicle from '@/public/assets/technology/image-launch-vehicle-portrait.jpg'
import secondVehicle from '@/public/assets/technology/image-space-capsule-portrait.jpg'
import thirdVehicle from '@/public/assets/technology/image-spaceport-portrait.jpg'

export default function Technology(){
    const [currentVehicle,setCurrentVehicle] = useState(0)
    const vehicles = [   
    <TechnologyContainer name='Launch vehicle' description='A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth´s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it´s quite an awe-inspiring sight on the launch pad!' src={firstVehicle.src} key={null}/>,
    <TechnologyContainer name='Space capsule ' description='A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you´ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.' src={secondVehicle.src} key={null}/>,   
    <TechnologyContainer name='Spaceport' description='A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.' src={thirdVehicle.src} key={null}/>   
    ]
    return(
        <main className={styles.main}>
            <p>03 Space launch 101</p>
            <article className={styles.list}>
                {currentVehicle===0 &&
                    <ul>
                        <li className={styles.active} onClick={()=>setCurrentVehicle(0)}>1</li>
                        <li onClick={()=>setCurrentVehicle(1)}>2</li>
                        <li onClick={()=>setCurrentVehicle(2)}>3</li>
                    </ul>
                }

                {currentVehicle===1 &&
                    <ul>
                        <li onClick={()=>setCurrentVehicle(0)}>1</li>
                        <li className={styles.active} onClick={()=>setCurrentVehicle(1)}>2</li>
                        <li onClick={()=>setCurrentVehicle(2)}>3</li>
                    </ul>
                }

                {currentVehicle===2 &&
                    <ul>
                        <li onClick={()=>setCurrentVehicle(0)}>1</li>
                        <li onClick={()=>setCurrentVehicle(1)}>2</li>
                        <li className={styles.active} onClick={()=>setCurrentVehicle(2)}>3</li>
                    </ul>
                }
            </article>
            {vehicles[currentVehicle]}
        </main>
    )
}