'use client'

import styles from './styles/destination.module.scss'
import moonImage from '@/public/assets/destination/image-moon.png'
import marsImage from '@/public/assets/destination/image-mars.png'
import euroImage from '@/public/assets/destination/image-europa.png'
import titanImage from '@/public/assets/destination/image-titan.png'
import ContainerInfo from '../components/Container/ContainerInfo'
import { useState } from 'react'

export default function Destination(){
    const [currentStep,setCurrentStep] = useState(0)
    
    const planets = [
      <ContainerInfo distance='384,400 km' src={moonImage.src} text='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.' timeTravel='3 days' title='Moon' key={null}/>,  
      
      <ContainerInfo distance='225 mil. km' src={marsImage.src} text='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!' timeTravel='9 months' title='Mars' key={null}/>,
      
      <ContainerInfo distance='628 mil. km' src={euroImage.src} text='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.' timeTravel='3 years' title='Europa' key={null}/>,
      
      <ContainerInfo distance='1.6 bil. km' src={titanImage.src} text='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.' timeTravel='7 years' title='Titan' key={null}/>
    ]
    return(
        <main className={styles.main}>
            <p>01 Pick your destination</p>
            <section>
                <article>
                    <ul>
                        <li onClick={()=>setCurrentStep(0)}>Moon</li>
                        <li onClick={()=>setCurrentStep(1)}>Mars</li>
                        <li onClick={()=>setCurrentStep(2)}>Europa</li>
                        <li onClick={()=>setCurrentStep(3)}>Titan</li>
                    </ul>    
                {planets[currentStep]}
                </article>
            </section>
        </main>
    )
}