'use client'
import { useState } from 'react'
import styles from './styles/crew.module.scss'

export default function Crew(){
    const [currentStep,setCurrentStep] = useState(0)
    const crew = [
        
    ]
    return(
        <main className={styles.main}>
            <p>02 Meet your crew</p>
            <section>
                <article>
                    <ul>
                        <li onClick={()=>setCurrentStep(0)}></li>
                        <li onClick={()=>setCurrentStep(1)}></li>
                        <li onClick={()=>setCurrentStep(2)}></li>
                        <li onClick={()=>setCurrentStep(3)}></li>
                    </ul>    
                </article>
            </section>
        </main>
    )
}