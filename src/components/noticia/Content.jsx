import React, { useEffect, useRef, useState } from 'react'
import Carrusel from '../elements/carrusel'
import styles from './styles.module.scss'

export default function ContentRef({ data }) {
    const contentRef = useRef()
    const [galeryImgs, setGaleryImgs] = useState([])

    if(galeryImgs.current){
        for (let index = 0; index < contentRef.current.children.length; index++) {
            const element = contentRef.current.children[index];
            if (element.tagName == "FIGURE") {
                if (element.children[0]) {
                    if (element.children[0].tagName == "IMG") {
                        let arry = galeryImgs
                        arry.push(element)
                        setGaleryImgs(arry)
                    } else {
                        for (let ifigure = 0; ifigure < element.children.length; ifigure++) {
                            let subfigure = element.children[ifigure];
                            let arry = galeryImgs
                            arry.push(subfigure)
                            setGaleryImgs(arry)
                        }
                    }
                }
            }
        }
        const imgs = [...galeryImgs];
        const result = imgs.filter((item, index) => {
            return imgs.indexOf(item) === index;
        })
        setGaleryImgs(result)
    }

    if(galeryImgs.length > 0){
        for (let index = 0; index < contentRef.current.children.length; index++) {
            const element = contentRef.current.children[index];
            if (element.tagName == "FIGURE") {
                contentRef.current.removeChild(element)
            }
        }
    }

    return (
        <>
            {galeryImgs.length > 0 && <Carrusel data={galeryImgs} />}

            <p className={styles.article} ref={contentRef} dangerouslySetInnerHTML={{ __html: data }} />
        </>
    )
}
