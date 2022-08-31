import React, { useEffect, useRef, useState } from 'react'
import Carrusel from '../elements/carrusel'
import styles from './styles.module.scss'

export default function ContentRef({ data }) {
    const contentRef = useRef()
    const [galeryImgs, setGaleryImgs] = useState([])

    const [content, setContent] = useState(null)

    useEffect(() => {
        setContent(null)
        setGaleryImgs([])

        setContent(<p className={styles.article} ref={contentRef} dangerouslySetInnerHTML={{ __html: data }} />)
    }, [data])

    useEffect(() => {
        if (content) {
            if (content.ref.current) {
                for (let index = 0; index < content.ref.current.children.length; index++) {
                    const element = content.ref.current.children[index];
                    if (element.children[0]) {
                        if (element.children[0].tagName == "IMG") {
                            const newArry = galeryImgs
                            newArry.push(element)
                            setGaleryImgs(newArry)
                        } else if (element.children[0].tagName == "FIGURE") { // esto es una galeria                        
                            for (let ifigure = 0; ifigure < element.children.length; ifigure++) {
                                const subfigure = element.children[ifigure];
                                const newArry = galeryImgs
                                newArry.push(subfigure)
                                setGaleryImgs(newArry)
                            }
                        }
                    }
                }
                console.log(galeryImgs)
                // for (let index = 0; index < content.ref.current.children.length; index++) {
                //     const element = content.ref.current.children[index];
                //     if (element.tagName == "FIGURE") {
                //         console.log("asda")
                //         content.ref.current.removeChild(element)
                //     }
                // }

            }

        }
    }, [content])


    return (
        <>
            {false && galeryImgs.length > 0 && <Carrusel data={galeryImgs} />}

            <button onClick={()=>setGaleryImgs([])}>recet</button>
            {content}
        </>
    )
}
