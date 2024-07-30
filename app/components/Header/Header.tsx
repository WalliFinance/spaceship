'use client'

import Link from "next/link";
import styles from './styles/header.module.scss'
import Image from "next/image";
import companyLogo from '@/public/assets/shared/logo.svg'
import { useEffect,useRef,useState} from "react";

export default function Header(){
    const firstLink = useRef<HTMLAnchorElement>(null)
    const secondLink = useRef<HTMLAnchorElement>(null)
    const thirdLink = useRef<HTMLAnchorElement>(null)
    const fourthLink = useRef<HTMLAnchorElement>(null)
    const refUl = useRef<HTMLUListElement>(null)
    const [currentPath, setCurrentPath] = useState<string>('')

    const handlePathChange = (newPath:string) =>{
        if(refUl.current){
          const allA = refUl.current.querySelectorAll('a')
          const allDividers = refUl.current.querySelectorAll('span')
          allDividers.forEach(divider=>{
            divider.style.display = 'none'
          })
    
          allA.forEach(anchors=>{
            anchors.style.color= '#ffffff'
          })
        if(newPath === '/'){
           const firstLi = refUl.current.querySelector('div')
           const firstA = firstLi?.querySelector('a')
             const firstDivider = firstLi?.querySelector('span')
             if(firstDivider && firstA){
               firstDivider.style.display = 'block'
               firstA.style.color = '#FFFFFF'
             }  
         }else if(newPath === '/destination'){
             const firstLi = refUl.current.querySelector('div:nth-child(2)')
             const firstA = firstLi?.querySelector('a')
             const firstDivider = firstLi?.querySelector('span')
             if(firstDivider && firstA){
               firstDivider.style.display = 'block'
               firstA.style.color = '#FFFFFF'
             } 
          }else if(newPath === '/crew'){
             const firstLi = refUl.current.querySelector('div:nth-child(3)')
             const firstA = firstLi?.querySelector('a')
             const firstDivider = firstLi?.querySelector('span')
             if(firstDivider && firstA){
               firstDivider.style.display = 'block'
               firstA.style.color = '#FFFFFF'
             } 
         }else{
            const firstLi = refUl.current.querySelector('div:nth-child(4)')
            const firstA = firstLi?.querySelector('a')
            const firstDivider = firstLi?.querySelector('span')
            if(firstDivider && firstA){
              firstDivider.style.display = 'block'
              firstA.style.color = '#FFFFFF'
            } 
         }
        }
      }
    
      useEffect(()=>{
        const handleClick = (ev: MouseEvent)=> {
          const targetClick = ev.target as HTMLAnchorElement
    
          if(targetClick.tagName === 'A' && targetClick.href){
            const newPath = new URL(targetClick.href).pathname
            setCurrentPath(newPath)
            handlePathChange(newPath)
          }
        }
    
        window.addEventListener('click', handleClick)
    
        handlePathChange(window.location.pathname)
    
        return ()=>{
          window.removeEventListener('click', handleClick)
        }
      },[])


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
                <ul ref={refUl}>
                        <div>
                            <Link href={'/'} ref={firstLink}>00 Home</Link>
                            <span className={styles.divisor}></span>
                        </div>

                        <div>
                            <Link href={'/destination'} ref={secondLink}>01 Destination</Link>
                            <span className={styles.divisor}></span>
                        </div>

                        <div>
                            <Link href={'/crew'} ref={thirdLink}>02 Crew</Link>
                            <span className={styles.divisor}></span>
                        </div>

                        <div>
                            <Link href={'/technology'} ref={fourthLink}>03 Technology</Link>
                            <span className={styles.divisor}></span>
                        </div>

                </ul>
            </nav>
        </header>
        </>
    )
}