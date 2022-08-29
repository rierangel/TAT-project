import React, { useEffect, useRef, useState } from 'react'
import Carrusel from './Carrusel'
import styles from './styles.module.scss'

export default function ContentRef({ data }) {
    const contentRef = useRef()
    const [galeryImgs, setGaleryImgs] = useState([])

    useEffect(() => {
        for (let index = 0; index < contentRef.current.children.length; index++) {
            const element = contentRef.current.children[index];
            if (element.tagName == "FIGURE") {
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
        const data = [...galeryImgs];
        const result = data.filter((item, index) => {
            return data.indexOf(item) === index;
        })
        setGaleryImgs(result)

        setTimeout(() => {
            for (let index = 0; index < contentRef.current.children.length; index++) {
                const element = contentRef.current.children[index];
                if (element.tagName == "FIGURE") {
                    contentRef.current.removeChild(element)
                }
            }
        }, 100);

        // for (let index = 0; index < contentRef.current.children.length; index++) {
        //     const element = contentRef.current.children[index];
        //     if(element.tagName == "FIGURE"){
        //         contentRef.current.removeChild(element)            
        //     }
        // }
    }, [contentRef])




    return (
        <>
            <Carrusel data={galeryImgs} />

            <p className={styles.article} ref={contentRef} dangerouslySetInnerHTML={{ __html: data }} />
        </>
    )
}
